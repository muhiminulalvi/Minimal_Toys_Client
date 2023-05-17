
const Banner = () => {
  return (
    <div
      className="hero min-h-[600px] my-3"
      style={{
        backgroundImage: `url("../../../../src/assets/asset 21.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-40 rounded-sm"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">The Minimal Toys</h1>
          <p className="mb-5">
            Welcome to the best toy store in the country. View your desired toys for your children.
          </p>
          <button className="btn btn-primary font-bold">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
