import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Mystyles.module.css";
function AdminSignUp() {
    const navigate=useNavigate();
    const [message,setMessage]=useState("");
    const [loading,setLoading]=useState(false);
    const res=useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        password: "",
        confirmPassword: "",
        phone: "",
        email: "",
        address: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        password: "",
        confirmPassword: "",
        phone: "",
        email: "",
        address: "",
    });

    const nameHandler = (e) => {
        const val = e.target.value.replace(/[^a-zA-Z ]/g, "");
        setFormData((prev) => ({ ...prev, fullName: val }));

        setErrors((prev) => ({
        ...prev,
        fullName: val.length < 3 ? "Name must be at least 3 characters." : "",
        }));
    };

    const passHandler = (e) => {
        const { name, value } = e.target;
        const val = value.replace(/[^a-zA-Z0-9@]/g, "");

        setFormData((prev) => ({ ...prev, [name]: val }));

        if (name === "password") {
        setErrors((prev) => ({
            ...prev,
            password:
            val.length < 6
                ? "Password must be at least 6 characters."
                : "",
            confirmPassword:
            formData.confirmPassword && val !== formData.confirmPassword
                ? "Passwords do not match."
                : "",
        }));
        }

        if (name === "confirmPassword") {
        setErrors((prev) => ({
            ...prev,
            confirmPassword:
            val !== formData.password ? "Passwords do not match." : "",
        }));
        }
    };

    const numberHandler = (e) => {
        let val = e.target.value.replace(/[^0-9]/g, "");
        if (val.length > 10) val = val.slice(0, 10);
        setFormData((prev) => ({ ...prev, phone: val }));

        setErrors((prev) => ({
        ...prev,
        phone: val.length === 10 ? "" : "Phone number must be 10 digits.",
        }));
    };

    const mailHandler = (e) => {
        const val = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, "");
        setFormData((prev) => ({ ...prev, email: val }));

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors((prev) => ({
        ...prev,
        email: pattern.test(val) ? "" : "Invalid email address.",
        }));
    };

    const addressHandler = (e) => {
        const val = e.target.value.replace(/[^a-zA-Z0-9\s,.-/]/g, "");
        setFormData((prev) => ({ ...prev, address: val }));

        setErrors((prev) => ({
        ...prev,
        address: val.length < 5 ? "Address too short." : "",
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const hasError = Object.values(errors).some((err) => err !== "");
        const emptyFields = Object.values(formData).some((val) => val === "");

        if (emptyFields) {
        alert("Please fill all fields.");
        setLoading(false);
        return;
        }

        if (hasError) {
        alert("Please fix errors before submitting.");
            setLoading(false);
        return;
        }

        try{
        const response=await axios.post("http://localhost:8181/api/v1/admRegister",formData);
        if(response.data==="success"){
            console.log("data sent successfully");
            navigate("/");
        }else{
            console.log("something went wrong!");
        }
        }catch(error){
            console.log("error:",error);
            setMessage("There is an error,Please try again!",error);

        }finally{
            setLoading(false);
        };
        


        console.log("Form submitted successfully:", formData);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                </div>
                <div className={`${styles.formBorder} col-8 m-3`}>

                    <form onSubmit={submitHandler} className="m-3">
                        <div className={styles.centering}>
                        <h3>SIGN UP</h3>
                        </div>
                        <div className="row">
                        <label className={styles.fontsizing}>Full Name:</label>
                        </div>
                        <div className="row">
                        <input
                            type="text"
                            value={formData.fullName}
                            onChange={nameHandler}
                            placeholder="Full Name"
                        />
                        </div>
                        <small style={{ color: "red" }}>{errors.fullName}</small>
                        <div className="row">
                        <label className={styles.fontsizing}>Password:</label>
                        </div>
                        <div className="row">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={passHandler}
                            placeholder="Password"
                        />
                        </div>
                        <small style={{ color: "red" }}>{errors.password}</small>
                        <div className="row">
                        <label className={styles.fontsizing}>Confirm Password:</label>
                        </div>
                        <div className="row">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={passHandler}
                            placeholder="Confirm Password"
                        />
                        </div>
                        <small style={{ color: "red" }}>{errors.confirmPassword}</small>
                        <div className="row">
                        <label className={styles.fontsizing}>Phone:</label>
                        </div>
                        <div className="row">
                        <input
                            type="text"
                            value={formData.phone}
                            onChange={numberHandler}
                            placeholder="Phone Number"
                        />
                        </div>
                        <small style={{ color: "red" }}>{errors.phone}</small>
                        <div className="row">
                        <label className={styles.fontsizing}>Email:</label>
                        </div>
                        <div className="row">
                        <input
                            type="text"
                            value={formData.email}
                            onChange={mailHandler}
                            placeholder="Email"
                        />
                        </div>
                        <small style={{ color: "red" }}>{errors.email}</small>
                        <div className="row">
                        <label className={styles.fontsizing}>Address:</label>
                        </div>
                        <div className="row">
                        <input
                            type="text"
                            value={formData.address}
                            onChange={addressHandler}
                            placeholder="Address"
                        />
                        </div>
                        <small style={{ color: "red" }}>{errors.address}</small>
                        <div className={styles.centering}>
                            <button type="submit" className="btn btn-success mt-2" disabled={loading}>{loading?"loading...":"submit"}</button>
                            {message && <p style={{color:"red"}}>{message}</p>}
                        </div>
                    </form>
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
    );
    }

export default AdminSignUp;