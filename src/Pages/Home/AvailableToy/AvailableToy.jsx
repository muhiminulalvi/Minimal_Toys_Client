import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";

const AvailableToy = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  return (
    <div className="py-16">
      <div className="text-center space-y-3 py-4">
        <h2 className="text-5xl font-bold text-primary">Shop By Category</h2>
        <p className="text-xl font-medium">
          See Our Awesome Toy Cars & Purchase!
        </p>
      </div>
      <div className="tabs justify-center text-center font-bold ">
        <button className="tab text-xl">Sport Cars</button>
        <button className="tab text-xl">Regular Cars</button>
        <button className="tab text-xl">Trucks</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-y-6">
        {toys.map((toy) => 
          <ToyCard toy={toy} key={toy._id}></ToyCard>
        )}
      </div>
    </div>
  );
};

export default AvailableToy;
