import { useState } from "react";

function Brand({name,st}) {
  const handleClick = event => {
    // toggle isActive state on click
    setIsActive(current => !current);
    /*IMPLEMENT PAGE RENDER LOGIC
    *
    *
    * 
    * 
    * 
    */
  };
  const [isActive, setIsActive] = useState(false);
  if(st){
    return <button className={isActive? 'Brand chosen': 'Brand'} id={name} onClick={handleClick}>{name}</button>;
  }else{
    return <button className={isActive? 'Brand chosen': 'Brand danger'}id={name} onClick={handleClick}>{name} ⚠</button>;
  }
}
function Percent({val,st}) {
  if (st){//check percentage==100
    return <button className="Percent">{val}%</button>;
  }else{//if not warn(add danger class for css)
    return <button className="Percent danger">{val}%</button>;
  }
  
}

function Item({l,Products,Values}){
  const n=Products[l];
  const v=Values[l];
  const s= (v<100)? false: true;
  return (
    <div className={'Item'} >
      <Brand name={n} st={s}/>
      <Percent val={v} st={s}/>
    </div>
  );
}

export default function ProductList() {
  const products= ["Levi's","Wrangler","Pepe","M&S","Lee","ABC"]
  const values= [97,97,100,100,100,100]
  
  const numbers = [0,1,2,3,4,5];
  const updatedList = numbers.map((number)=>{
   return <Item l={number} Products={products} Values={values}/>
  });
  return(
    <div className="container">
      <div className="desc">List of Products</div>
      <ul>
      {updatedList}
      </ul>
    </div>
  );
}
