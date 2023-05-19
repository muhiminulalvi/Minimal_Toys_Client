import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user , spinner} = useContext(AuthContext)
    if(user?.email){
        return children
    }
    if(spinner){
       return <progress className="progress w-56"></progress>
    }
    return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoute;