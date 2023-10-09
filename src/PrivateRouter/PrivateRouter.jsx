import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {

    const {user, loading } = useContext(AuthContext)

    if(loading) {
        return <div className="text-center py-8"><span className="loading loading-spinner loading-lg "></span></div>
    }
    

    if(!user?.email){
        return<Navigate to="/login"></Navigate>
    }


    return children;
};

export default PrivateRouter;