import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Mystyles.module.css"
import axios from "axios";
import { UserContext } from "./UserContext";
import { useContext } from "react";

function AdminSignIn(){
        const [fullName,SetFullName]=useState("");
        const [password,setPassword]=useState("");
        const navigate=useNavigate();
        const [message,setMessage]=useState("");
        const [load,setLoad]=useState(false);
        const {setUser}=useContext(UserContext);


        const submitHandler=async (e)=>{
            e.preventDefault();
            setLoad(true);
            const loginData={fullName:fullName.trim(),password:password.trim()};
            try{
            const response= await axios.post("http://localhost:8181/api/v1/adminLogin",loginData);
            if(response.data==="success"){
                setUser(fullName);
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("role","Admin");
                navigate("/home");
            }else{
                setMessage("wrong credentials!")
            }}
            catch(error){
                console.log("error:",error);
                setMessage("Something went wrong!")
            }finally{
                setLoad(false);
            }
        }
        const nameValidate=(e)=>{
           let fname=e.target.value;
            let valName=fname.replace(/[^a-zA-Z ]/g,"");
            if(valName.length >0 && /\d/.test(valName[0])){
                valName="";
            }
            SetFullName(valName);
        }
        const passValidate=(e)=>{
            let pass=e.target.value;
            const valPass=pass.replace(/[^a-zA-Z0-9@]/g,"");
            setPassword(valPass);
        }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-2">

                </div>
                <div className={`${styles.formBorder} col-sm-8`}>
                    <div className={styles.centering}>
                    <h2>ADMIN LOGIN</h2>
                    </div>
                    <form method="post" onSubmit={submitHandler} style={{margin:"10px"}}>
                        <label className={styles.fontsizing}>FullName:</label>
                        <div className="row">
                            <input type="text" onChange={nameValidate} placeholder="FullName" value={fullName} required />
                        </div>
                        <label className={styles.fontsizing}>Password:</label>
                        <div className="row">
                            <input type="password" onChange={passValidate} placeholder="password" value={password} required />
                        </div>
                        <div className={styles.centering}>
                            <button type="submit" className="btn btn-success mt-1" disabled={load}>
                                {load?"logging in...":"submit"}
                            </button>
                        </div>
                    </form>
                    <p style={{color:"red"}}>{message}</p>
                </div>
                <div className="col-sm-2">

                </div>
            </div>
        </div>
    );
}
export default AdminSignIn;