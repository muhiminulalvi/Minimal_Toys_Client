import { useLoaderData } from "react-router-dom";
import PageTitle from "../../shared/PageTitle/PageTitle";

const ToyDetails = () => {
  const detailData = useLoaderData();

  // destructuring
  const {
    seller_name,
    email,
    toy_name,
    image,
    quantity,
    price,
    category,
    description,
    ratings,
  } = detailData;
  return (
    <div>
      <PageTitle title="Toy Details Page" />
      <div
        className="hero min-h-[300px] rounded-md w-full mx-auto my-7"
        style={{
          backgroundImage: `url("https://i.ibb.co/8bBM4kG/pexels-markus-spiske-168866.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50 rounded-md bg-gradient-to-t from-red-600"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="text-5xl font-bold ">Toy Details</h2>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <img src={image} className="w-1/2 rounded-lg shadow-2xl" />
          <div className="space-y-4 py-8 px-6">
            <h1 className="text-4xl text-primary font-bold text-center ">
              {" "}
              {toy_name}
            </h1>
            <hr />

            <h1 className="text-xl font-bold">
              Seller Name:{" "}
              <span className="text-xl text-primary font-bold">
                {seller_name}
              </span>
            </h1>
            <h1 className="text-xl font-bold">
              Seller Email:{" "}
              <span className="text-xl text-primary font-bold">{email}</span>
            </h1>
            <hr />
            <h1 className="text-xl font-bold">
              Description:{" "}
              <span className="text-xl text-primary font-bold">
                {description}
              </span>
            </h1>
            <hr />
            <h1 className="text-xl font-bold">
              Category:{" "}
              <span className="text-xl text-primary capitalize font-bold">
                {category}
              </span>
            </h1>
            <h1 className="text-xl font-bold">
              Available Quantity:{" "}
              <span className="text-xl text-primary font-bold">{quantity}</span>
            </h1>
            <h1 className="text-xl font-bold">
              Ratings:{" "}
              <span className="text-xl text-primary font-bold">{ratings}</span>
            </h1>
            <hr />
            <h1 className="text-xl font-bold">
              Price: $
              <span className="text-xl text-primary font-bold">{price}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
