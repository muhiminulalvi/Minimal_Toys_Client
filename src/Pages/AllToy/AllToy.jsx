import AllToyTable from "./AllToyTable";
import PageTitle from "../../shared/PageTitle/PageTitle";
import { useEffect, useState } from "react";

const AllToy = () => {
  const [searchingToyName, set_SearchToy_Name] = useState("");
  const [allToy, setAllToy] = useState([]);
  // use the state for searching the toy name
  const [filteredToy, setFilteredToy] = useState([]);

  useEffect(() => {
    // limit up to 20 
    fetch(
      "https://b7a11-toy-marketplace-server-side-muhiminulalvi.vercel.app/toys?limit=20"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
        setFilteredToy(data);
      });
  }, []);

  // use for search function
  const handleSearch = () => {
    const searchedToy = allToy.filter((toy) =>
      toy.toy_name.toLowerCase().includes(searchingToyName.toLowerCase()));
    setFilteredToy(searchedToy);
  };

  return (
    <div className="space-y-8">
      <PageTitle title="All Toy" />
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
        <div className="search-box p-2 text-center">
          <input
            type="text"
            placeholder="Search Toy Name"
            value={searchingToyName}
            onChange={(e) => set_SearchToy_Name(e.target.value)}
            className="input input-bordered font-bold"
          />{" "}
          <button onClick={handleSearch} className="btn btn-primary text-white">
            Search
          </button>
        </div>
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

          {filteredToy.map((toy, index) => (
            <AllToyTable key={toy._id} toy={toy} index={index}></AllToyTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToy;
