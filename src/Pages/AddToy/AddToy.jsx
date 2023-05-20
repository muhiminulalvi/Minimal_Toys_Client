import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import PageTitle from "../../shared/PageTitle/PageTitle";


const AddToy = () => {
  const { user } = useContext(AuthContext);

  // console.log(user);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = {
      ...data,
      seller_name: user?.displayName || "",
      email: user?.email || "",
    };
    console.log(formData);
    fetch("https://b7a11-toy-marketplace-server-side-muhiminulalvi.vercel.app/addtoy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result){
          Swal.fire({
            title: "Success",
            text: "Toy added successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
        console.log(result);
      });
    // console.log(data)
  };
  return (
    <>
    <PageTitle title="Add Toy Page"/>
      <div
        className="hero min-h-[200px] rounded-md"
        style={{
          backgroundImage: `url("https://i.ibb.co/8bBM4kG/pexels-markus-spiske-168866.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-md bg-gradient-to-t from-red-600"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="text-5xl font-bold ">Add Toy</h2>
          </div>
        </div>
      </div>

      <div className="py-14 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 py-16 px-8 mx-5 rounded-md shadow-lg bg-primary">
            <h2 className="text-white font-bold text-3xl text-center">Please Add A Toy!</h2>
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="flex items-center justify-between gap-4 font-bold">
            
            <input
              className="input input-bordered w-1/2"
              {...register("toy_name", { required: true })}
              placeholder="Name of the Toy Car"
              defaultValue=""
            />
            <input
              className="input input-bordered w-1/2"
              {...register("image")}
              placeholder="image link"
              type="url"
              defaultValue=""
            />
          </div>
          <div className="flex items-center justify-between gap-4 font-bold">
            <input
              className="input input-bordered w-1/2"
              {...register("seller_name")}
              placeholder="Seller Name"
              type="text"
              defaultValue={user?.displayName}
              disabled
            />
            <input
              className="input input-bordered w-1/2"
              defaultValue={user?.email}
              {...register("email")}
              placeholder="Seller Email"
              type="email"
              disabled
              
            />
          </div>
          <div className="flex items-center gap-4 font-bold">
            <input
              className="input input-bordered w-1/4"
              {...register("quantity", { required: true })}
              placeholder="Quantity"
              type="number"
            />
            <input
              className="input input-bordered w-1/4"
              {...register("price", { required: true })}
              placeholder="Price"
              type="number"
            />
            <select
              className="input input-bordered w-1/4"
              {...register("category")}
            >
              <option value="racing">Racing Car</option>
              <option value="regular">Regular Car</option>
              <option value="trucks">Trucks</option>
            </select>
            <input
              className="input input-bordered w-1/4"
              {...register("ratings", { required: true })}
              placeholder="Ratings"
              type="number"
            />
          </div>

          <input
            className="input input-bordered w-full font-bold"
            {...register("description")}
            placeholder="Description"
          />
          <input type="submit" className="btn btn-warning font-bold w-full" value='Add Toy'/>
        </form>
        <div>
          <img
            src="https://i.ibb.co/bgHvnDD/ADD-Toy.png"
            alt=""
            className="w-full mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default AddToy;
