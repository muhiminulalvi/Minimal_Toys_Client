import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import AllToyTable from "./AllToyTable";

const AllToy = () => {
  const { user } = useContext(AuthContext);
  const [allToy, setAllToy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setAllToy(data));
  }, []);

  return (
    <div className="space-y-8">
      <div
        className="hero min-h-[200px] rounded-md w-3/4 mx-auto"
        style={{
          backgroundImage: `url("https://i.ibb.co/8bBM4kG/pexels-markus-spiske-168866.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-md bg-gradient-to-t from-red-600"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="text-5xl font-bold ">All Toys</h2>
          </div>
        </div>
      </div>
      <div className="py-7 my-8">
        <table className="table-normal mx-auto w-3/4 ">
          <thead className="text-white font-bold text-2xl bg-primary text-left">
            <tr>
              <th>Sl No.</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>

          {allToy.map((toy, index) => (
            <AllToyTable key={toy._id} toy={toy} index={index}></AllToyTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToy;
