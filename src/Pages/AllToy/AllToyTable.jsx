
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AllToyTable = ({ toy, index }) => {
  const { user } = useContext(AuthContext);
  const { toy_name, category, seller_name, price, quantity } = toy || {};
  return (
    <tbody>
      {/* row 1 */}
      <tr className="font-bold uppercase">
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <h2 className="font-bold">{toy_name}</h2>
          </div>
        </td>
        <td>
          {seller_name}

        </td>
        <td>{category}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <button className="btn btn-primary text-white font-bold">details</button>
        </td>
      </tr>
    </tbody>
  );
};

export default AllToyTable;