import { useState } from "react";
import styles from "./Mystyles.module.css";
import axios from "axios";

function Results() {
  const [hallTicket, setHallTicket] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (hallTicket.length !== 8) {
      setMessage("HallTicket must be 8 digits!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/getResults",
        { hallTicket }
      );

      if (response.data) {
        setResult(response.data);
        setMessage("");
      } else {
        setMessage("No results found for this HallTicket!");
        setResult(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const numberHandler = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setHallTicket(val);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Check Results</h2>
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <div className={`card shadow p-4 ${styles.formBorder}`}>
            <form method="post" onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label"><b>HallTicket Number</b></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter 8-digit HallTicket"
                  maxLength={8}
                  value={hallTicket}
                  onChange={numberHandler}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
                disabled={loading}
              >
                {loading ? "Loading..." : "Get Results"}
              </button>

              {message && (
                <div className="alert alert-danger mt-3">{message}</div>
              )}
            </form>
          </div>

          {result && (
            <div className="card shadow mt-4">
              <div className="card-header bg-dark text-white">
                <h5 className="m-0">Student Results</h5>
              </div>

              <div className="card-body">

                <p className="mb-1"><b>Name:</b> {result.fullName}</p>
                <p className="mb-3"><b>HallTicket:</b> {result.hallTicket}</p>

                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>Subject</th>
                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(result.marks || []).map((m, idx) => (
                      <tr key={idx}>
                        <td>{m.subjects}</td>
                        <td>{m.marks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}

export default Results;
