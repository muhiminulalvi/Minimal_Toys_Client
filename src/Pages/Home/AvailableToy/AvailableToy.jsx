import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";

const AvailableToy = () => {
  const [toys, setToys] = useState([]);
  const [openTab, setOpenTab] = useState("regular");

  useEffect(() => {
    fetch(`http://localhost:5000/categoryToys/${openTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log(data);
      });
  }, [openTab]);


  const handleTabClick = (tabName) => {
    setOpenTab(tabName);
  };
  return (
    <div className="py-16">
      <div className="text-center space-y-3 py-4">
        <h2 className="text-5xl font-bold text-primary">Shop By Category</h2>
        <p className="text-xl font-medium">
          See Our Awesome Toy Cars & Purchase!
        </p>
      </div>
      <div className="tabs justify-center text-center font-bold py-4">
        <button
          onClick={() => handleTabClick("racing")}
          className={`tab racing ${
            openTab == "racing" ? "btn btn-primary rounded-sm text-xl text-white" : " btn btn-warning rounded-sm"
          }`}
        >
          Racing
        </button>
        <button
          onClick={() => handleTabClick("regular")}
          className={`tab regular ${
            openTab == "regular" ? "btn btn-primary rounded-sm text-xl text-white" : " btn btn-warning rounded-sm"
          }`}
        >
          Regular
        </button>
        <button
          onClick={() => handleTabClick("trucks")}
          className={`tab trucks ${
            openTab == "trucks" ? "btn btn-primary rounded-sm text-xl text-white" : " btn btn-warning rounded-sm"
          }`}
        >
          Trucks
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-y-6">
        {toys.map((toy) => (
          <ToyCard toy={toy} key={toy._id}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableToy;
