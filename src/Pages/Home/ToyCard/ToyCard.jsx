const ToyCard = ({ toy }) => {
  const { image, toy_name, price, ratings } = toy || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="">
        <img
          src={image}
          alt="Shoes"
          className="rounded-b-none h-72 w-full"
        />
      </figure>
      <div className="card-body items-start space-y-1 font-bold ml-3">
        <h2 className="card-title text-2xl">{toy_name}</h2>
        <p>Price: ${price}</p>
        <p>Ratings: {ratings}</p>
        <div className="card-actions">
          <button className="btn text-white btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
