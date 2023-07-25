const express = require('express');
const { spawn } = require('child_process');
const { exec } = require('child_process');

const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors()); // Enable CORS

app.post('/api/execute-script', (req, res) => {
  const { command } = req.body;


  const sshCommand = `sshpass -p 'raspberry' ssh ubuntu@192.168.0.100 '${command}'`;

  const process = spawn(sshCommand, [], { shell: true });

  let output = '';

  process.stdout.on('data', (data) => {
    output += data.toString();
    console.log(`stdout: ${data}`);
  });

  process.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    if (code !== 0) {
      res.status(500).json({ message: 'Error executing command' });
      return;
    }

    res.status(200).json({ message: 'Command executed successfully', output });
  });

  // Execute the command here
  const isWindows = process.platform === 'win32';

  if (isWindows) {
    const process = spawn('cmd', ['/c', command], { shell: true });

    process.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    process.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    process.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      if (code !== 0) {
        res.status(500).json({ message: 'Error executing script' });
        return;
      }

      res.status(200).json({ message: 'Script executed successfully' });
    });
  } else {
    const process = exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.status(500).json({ message: 'Error executing script' });
        return;
      }

      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.status(200).json({ message: 'Script executed successfully' });
    });
  }

});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://rfidhttpfunc.azurewebsites.net/api/getjoindata');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from external API:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});