const MyToyDetails = ({ singleToy, deleteToy }) => {
  const {_id, toy_name, category, price, image, quantity } = singleToy || {};

  
  return (
    <tbody>
      {/* row 1 */}
      <tr className="font-bold">
        <th>
          <button onClick={()=> deleteToy(_id)} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
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
          <button className="btn btn-primary text-white font-bold">
            details
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default MyToyDetails;
