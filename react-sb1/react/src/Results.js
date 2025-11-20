import { useState } from "react";
import styles from "./Mystyles.module.css";
import axios from "axios";

function Results(){
    const [hallTicket,setHallTicket]=useState("");
    const [message,setMessage]=useState("");
    const [result,setResult]=useState(null);

    const [loading,setLoading]=useState(false);

    const submitHandler=async (e)=>{
        e.preventDefault();
        setLoading(true);
        if(hallTicket.length!==8){
            setMessage("HallTicket number should have 8 digits!");
            setLoading(false);
            return;
        }
        try{
        const response=await axios.post("http://localhost:8181/api/v1/results",{hallTicket});
        if(response.data){
            setResult(response.data);
            setMessage("");
        }else{
            setMessage("No result found for this hallTicket!");
            setResult(null);
        }}catch(error){
            console.error("Error fetching data:",error);
            setMessage("Something went wrong!");
        }
        finally{
            setLoading(false);
        }

    };

    const numberHandler=(e)=>{
        const hval=e.target.value;
        const val=hval.replace(/[^0-9]/g,"");
        setHallTicket(val);
    };

    return(
        <div>
            <h1>Results</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className={`${styles.formBorder} col-sm-8`}>
                        <form method="post" onSubmit={submitHandler}>
                            <div className="mt-1 text-center">
                            <label >HallTicket:</label>
                            <input type="text" onChange={numberHandler} value={hallTicket} placeholder="Hallticket" maxLength="8" required/>
                            <button className="btn btn-sucess" type="submit" disabled={loading}>{loading?"loading...":"submit"}</button>
                            </div>
                            {message && <p style={{color:"red"}}>{message}</p>}
                        </form>
                        {result &&(
                            <div>
                                <h4>Results</h4>
                                <h5>Student Name:{result.fullName}</h5>
                                <h5>HallTicket:{result.hallTicket}</h5>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(result.marks || []).map((element,index)=>(
                                            <tr key={index}>
                                                <td>{element.subjects}</td>
                                                <td>{element.marks}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                    <div className="col-sm-2">
                    </div>
                </div>

            </div>

        </div>

    );
}
export default Results;