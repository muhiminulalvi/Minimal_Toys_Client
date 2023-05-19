import { useForm } from "react-hook-form";

const UpdateModal = ({updateToy , singleToy}) => {
    const { _id, toy_name, category, price, image, quantity, description } = singleToy || {};
    console.log(singleToy);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">

          <div>
          <form onSubmit={handleSubmit(updateToy)} className="space-y-10 py-16 px-8 mx-5 rounded-md shadow-lg bg-primary">
            <h2 className="text-white font-bold text-3xl text-center">Please Update Toy!</h2>
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
    
            
          </div>

          <input
            className="input input-bordered w-full font-bold"
            {...register("description")}
            placeholder="Description"
            defaultValue={description}
          />
          <input type="submit" className="btn btn-warning font-bold w-full" value='Add Toy'/>
        </form>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
