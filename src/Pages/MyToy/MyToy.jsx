import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyDetails from "../MyToyDetails/MyToyDetails";


const MyToy = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setMyToys]= useState([])
    const [control, setControl] = useState(false)

    const url = `http://localhost:5000/myToys?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[url, control])

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

      const updateToy = data => {
        console.log(data);
    

            fetch(`http://localhost:5000/myToys/${data?._id}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setControl(!control);
                  }
                console.log(data);})
        //         if(data.modifiedCount > 0){
        //             alert("Modified Successfully")
        //             const remaining = myToys.filter(myToy => myToy._id !== id)
        //             const updatedToy = myToys.find(myToy => myToy._id === id)
        //             updateToy.status = 'update'
        //             const newToys = [updatedToy, ...remaining]

        //             setMyToys(newToys)
        //         }
        //     })
            

      }
    return (
        <div>
            <div className="py-7 my-8">
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
            {
                myToys.map((singleToy, index) => <MyToyDetails key={singleToy._id} singleToy={singleToy} deleteToy={deleteToy} updateToy={updateToy} index={index}></MyToyDetails>)
            }
          
        </table>
      </div>
        </div>
    );
};

export default MyToy;