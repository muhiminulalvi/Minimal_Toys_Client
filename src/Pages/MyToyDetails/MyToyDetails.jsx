import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const MyToyDetails = ({ singleToy, index, deleteToy, updateToy }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    toy_name,
    category,
    price,
    image,
    quantity,
    description,
    seller_name,
    email,
  } = singleToy || {};
  const modalId = `my-modal-${_id}`;
  // console.log(user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <tbody>
      {/* row 1 */}
      <tr className="font-bold">
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <img src={image} alt="" className=" w-full h-28 rounded-md" />
          </div>
        </td>
        <td>{toy_name}</td>
        <td>{category}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <label
            htmlFor={modalId}
            className="btn btn-primary text-white font-bold"
          >
            Edit
          </label>
          <input type="checkbox" id={modalId} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <form
                onSubmit={handleSubmit(updateToy)}
                className="space-y-10 py-16 px-8 mx-5 rounded-md shadow-lg bg-primary"
              >
                <h2 className="text-white font-bold text-3xl text-center">
                  Please Update Toy!
                </h2>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="flex items-center justify-between gap-4 font-bold">
                  <input
                    className="input input-bordered w-1/2"
                    {...register("toy_name")}
                    placeholder="Name of the Toy Car"
                    defaultValue={toy_name}
                  />
                  <input
                    className="input input-bordered w-1/2"
                    {...register("image")}
                    placeholder="image link"
                    type="url"
                    defaultValue={image}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 font-bold">
                  <input
                    className="input input-bordered w-1/2"
                    {...register("seller_name")}
                    placeholder="Seller Name"
                    type="text"
                    value={seller_name}
                    readOnly
                  />
                  <input
                    className="input input-bordered w-1/2"
                    value={email}
                    {...register("email")}
                    placeholder="Seller Email"
                    type="email"
                    readOnly
                  />
                </div>
                <input
                  className="text-input hidden"
                  {...register("_id")}
                  value={_id}
                />

                <div className="flex items-center gap-4 font-bold">
                  <input
                    className="input input-bordered w-1/2"
                    {...register("quantity")}
                    placeholder="Quantity"
                    defaultValue={quantity}
                    type="number"
                  />
                  <input
                    className="input input-bordered w-1/2"
                    {...register("price", { required: true })}
                    placeholder="Price"
                    defaultValue={price}
                    type="number"
                  />
                  <select
                    className="input input-bordered w-1/4"
                    value={category}
                    {...register("category")}
                  >
                    <option value="racing">Racing Car</option>
                    <option value="regular">Regular Car</option>
                    <option value="trucks">Trucks</option>
                  </select>
                </div>

                <input
                  className="input input-bordered w-full font-bold"
                  {...register("description")}
                  placeholder="Description"
                  defaultValue={description}
                />
                <input
                  type="submit"
                  className="btn btn-warning font-bold w-full"
                  value="Update Toy"
                />
              </form>

              <div className="modal-action">
                <label htmlFor={modalId} className="btn btn-primary">
                  Close
                </label>
              </div>
            </div>
          </div>
        </td>
        <th>
          <button
            onClick={() => deleteToy(_id)}
            className="btn btn-primary font-bold text-white"
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default MyToyDetails;
