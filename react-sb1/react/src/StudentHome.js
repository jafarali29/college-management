import { useContext } from "react";
import { UserContext } from "./UserContext";

function StudentHome(){
    const {user}=useContext(UserContext);
    return(
        <div>
        <h1>
            StudentHome
        </h1>
        <h4>Hello,{user}</h4>
    </div>
    );
}

export default StudentHome;