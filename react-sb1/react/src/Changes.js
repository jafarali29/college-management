import { useNavigate } from "react-router-dom";

function Changes() {
    const navigate = useNavigate();

    return (
        <div className="container py-3">

            {/* STUDENT CARD */}
            <div className="card shadow-lg mb-4 border-0" style={{ borderRadius: "12px" }}>
                <div className="text-center fs-4" style={{ borderRadius: "12px" }}>
                    STUDENT CHANGES
                </div>

                <div className="card-body" style={{ background: "linear-gradient(to bottom, #ffffff, #f2f2f2)" }}>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <button className="btn btn-success w-100" onClick={() => navigate("/addStudent")}>ADD-STUDENT</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-info text-light w-100" onClick={() => navigate("/editStudent")}>EDIT-STUDENT</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-danger w-100" onClick={() => navigate("/deleteStudent")}>DELETE-STUDENT</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-warning text-light w-100" onClick={() => navigate("/viewStudent")}>VIEW-STUDENTS</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* ADMIN CARD */}
            <div className="card shadow-lg mb-4 border-0" style={{ borderRadius: "12px" }}>
                <div className="text-center fs-4" style={{ borderRadius: "12px" }}>
                    ADMIN CHANGES
                </div>

                <div className="card-body" style={{ background: "linear-gradient(to bottom, #ffffff, #ececec)" }}>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <button className="btn btn-success w-100" onClick={() => navigate("/addAdmin")}>ADD-ADMIN</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-info text-light w-100" onClick={() => navigate("/editAdmin")}>EDIT-ADMIN</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-danger w-100" onClick={() => navigate("/deleteAdmin")}>DELETE-ADMIN</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-warning text-light w-100" onClick={() => navigate("/viewAdmin")}>VIEW-ADMIN</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* RESULTS CARD */}
            <div className="card shadow-lg mb-4 border-0" style={{ borderRadius: "12px" }}>
                <div className="text-center fs-4" style={{ borderRadius: "12px 12px 0 0" }}>
                    RESULTS CHANGES
                </div>

                <div className="card-body" style={{ background: "linear-gradient(to bottom, #ffffff, #e8e8e8)" }}>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <button className="btn btn-success w-100" onClick={() => navigate("/addResult")}>ADD-RESULT</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-info text-light w-100" onClick={() => navigate("/editResult")}>EDIT-RESULT</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-danger w-100" onClick={() => navigate("/deleteResult")}>DELETE-RESULT</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-warning text-light w-100" onClick={() => navigate("/viewResult")}>VIEW-RESULT</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Changes;
