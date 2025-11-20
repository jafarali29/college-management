import { useContext } from "react";
import { UserContext } from "./UserContext";

function AdminHome(){
    const {user}=useContext(UserContext);
    return(
        <div>
        <h1>
            AdminHome
        </h1>
        <h4>Hello,{user}</h4>
    </div>
    );
}

export default AdminHome;