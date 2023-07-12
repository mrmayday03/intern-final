import InventoryDetails from "./components/InventoryDetails";
import LocateProducts from "./components/LocateProducts";
//mock data for locatedProducts
const locatedProducts = [
  {
    id: 1,
    quantity: "01",
    location: "In trial room# 04",
  },
];

//mock data for InventoryDetails
const quantities = [
  {
    id: 1,
    quantity: "12",
  },
];

const App = () => {
  return (
    <div className="bg-blue-50 h-full w-full flex -[gap-7]">
      <LocateProducts locatedProducts={locatedProducts} />
      <InventoryDetails quantities={quantities} />
    </div>
  );
};

export default App;
