import { useContext } from "react";
import { AuthContext } from "../contexts/Authprovider/AuthProvider";

const useAuth = () =>{
    const auth = useContext(AuthContext);
    return auth;

}

export default useAuth;