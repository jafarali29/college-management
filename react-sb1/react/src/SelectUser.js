import { useNavigate } from "react-router-dom";
import styles from "./Mystyles.module.css"

function SelectUser(){
    const navigate=useNavigate();
    return(
        <div>
          {/* <video loop autoPlay muted playsInline className={styles.backgroundVideo}>
                <source src="/ananthvideo.mp4" type="video/mp4" />
            </video>
            */}
        <div>
            <center>
                <div className={`${styles.formBorder} w-50`}>
                <h4>SELECT THE LOGIN TYPE</h4>
                <button className="btn btn-success m-4 p-4" type="button" value="Student Login" onClick={()=>navigate("/stdSignIn")}>Student Login</button>
                <button className="btn btn-danger m-4 p-4" type="button" value="Admin Login" onClick={()=>navigate("/admSignIn")}>Admin Login</button>
                </div>
            </center>
        </div>
        </div>
    );
}

export default SelectUser;