import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyDetails from "../MyToyDetails/MyToyDetails";


const MyToy = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setMyToys]= useState([])

    const url = `http://localhost:5000/myToys?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[url])

    const deleteToy = id => {
        const proceed = confirm("Want to delete?")
        if(proceed){
            fetch(`http://localhost:5000/myToys/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert("Deleted Successfully.")
                    const remaining = myToys.filter(myToy => myToy._id !== id)
                    setMyToys(remaining)
                }
            })
        }
      }
    return (
        <div>
            <div className="py-7 my-8">
        <table className="table-normal mx-auto w-3/4 ">
          <thead className="text-white font-bold text-2xl bg-primary text-left">
            <tr>
              <th></th>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
            {
                myToys.map(singleToy => <MyToyDetails key={singleToy._id} singleToy={singleToy} deleteToy={deleteToy}></MyToyDetails>)
            }
          
        </table>
      </div>
        </div>
    );
};

export default MyToy;