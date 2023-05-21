import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyDetails from "../MyToyDetails/MyToyDetails";
import Swal from "sweetalert2";
import PageTitle from "../../shared/PageTitle/PageTitle";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  const url = `https://b7a11-toy-marketplace-server-side-muhiminulalvi.vercel.app/myToys?email=${user?.email}&sort=${sortOrder}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url, control]);
  // delete toy function
  const deleteToy = (id) => {
    // confirmation
    const proceed = confirm("Want to delete?");
    if (proceed) {
      fetch(
        `https://b7a11-toy-marketplace-server-side-muhiminulalvi.vercel.app/myToys/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // sweet alert
            Swal.fire("Deleted!", "The toy has been deleted.", "success");
            const remaining = myToys.filter((myToy) => myToy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };
  // update a toy function
  const updateToy = (data) => {
    console.log(data);

    fetch(
      `https://b7a11-toy-marketplace-server-side-muhiminulalvi.vercel.app/myToys/${data?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setControl(!control);
          // sweet alert
          Swal.fire("Updated!", "The toy has been updated.", "success");
        }
        console.log(data);
      });
  };
  // sort by price in ascending order function default
  const sortByPriceAsc = () => {
    const url = `https://b7a11-toy-marketplace-server-side-muhiminulalvi.vercel.app/myToys?email=${user?.email}&sort=asc`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setSortOrder("asc");
        setControl(!control);
      });
  };
  // sort by price in descending order function default
  const sortByPriceDesc = () => {
    const url = `https://b7a11-toy-marketplace-server-side-muhiminulalvi.vercel.app/myToys?email=${user?.email}&sort=desc`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setSortOrder("desc");
        setControl(!control);
      });
  };
  return (
    <div>
      <PageTitle title="My Toy Page" />
      <div
        className="hero min-h-[200px] rounded-md"
        style={{
          backgroundImage: `url("https://i.ibb.co/8bBM4kG/pexels-markus-spiske-168866.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-md bg-gradient-to-t from-red-600"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="text-5xl font-bold ">My Toys</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-end gap-3 pt-6">
          <p className="font-bold text-2xl">Sort Price: </p>
          <button
            className="text-white btn btn-primary hover:underline focus:underline"
            onClick={sortByPriceAsc}
          >
            Ascending
          </button>

          <button
            className="text-white btn btn-primary hover:underline focus:underline"
            onClick={sortByPriceDesc}
          >
            Descending
          </button>
        </div>
      </div>
      <div className="pb-7 pt-3 my-8">
        <table className="table-normal mx-auto w-3/4 ">
          <thead className="text-white font-bold text-2xl bg-primary text-left">
            <tr>
              <th>Sl. No.</th>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          {myToys.map((singleToy, index) => (
            <MyToyDetails
              key={singleToy._id}
              singleToy={singleToy}
              deleteToy={deleteToy}
              updateToy={updateToy}
              index={index}
            ></MyToyDetails>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyToy;
