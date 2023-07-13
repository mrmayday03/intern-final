const LocateProducts = () => {
  const locatedProducts = [
    {
      id: 1,
      quantity: "01",
      location: "In trial room# 04",
    },
  ];


  return (
    <div className="bg-white w-90 h-full p-10 shadow-md rounded-3xl mt-10">
      <div className="mb-0">
        <div className="text-lg font-bold text-slate-500">Locate Products</div>
        <div className="text-slate-600 text-xs font-normal">
          Products Misplaced
        </div>
      </div>
      <div>
        <table className="table-auto mt-1 w-80 rounded border-separate border-spacing-y-[2px]">
          <thead className="text-normal">
            <tr className="bg-blue-100 text-slate-400 text-sm">
              <th className="py-2 px-4 rounded-l">QTY</th>
              <th className="py-2 px-4 rounded-r">Location</th>
            </tr>
          </thead>
          <tbody className="">
            {locatedProducts.map((product) => (
              <tr key={product.id} className="bg-blue-100 text-blue-800">
                <td className="py-2 px-4 rounded-l text-sm">
                  {product.quantity}
                </td>
                <td className="py-2 px-4 rounded-r text-sm">
                  {product.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="text-slate-600 text-xs font-light">
          Recommended Action
        </div>
        <button className="bg-blue-100 px-2 border-2 border-blue-600 text-blue-800 rounded-lg w-28 h-10">
          Assign
        </button>
      </div>
    </div>
  );
};

export default LocateProducts;
