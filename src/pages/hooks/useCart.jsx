import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

 const useCart = ()=>{
 const {user} = useContext(AuthContext)
 
}
export default useCart;