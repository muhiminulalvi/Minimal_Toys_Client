const ToyCard = ({ toy }) => {
  const { picture, name, price, rating } = toy || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="">
        <img
          src={picture}
          alt="Shoes"
          className=" rounded-b-none"
        />
      </figure>
      <div className="card-body items-start space-y-1 font-bold ml-3">
        <h2 className="card-title text-2xl">{name}</h2>
        <p>{price}</p>
        <p>Ratings: {rating}</p>
        <div className="card-actions">
          <button className="btn text-white btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
