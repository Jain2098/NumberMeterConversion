import React from "react";
import { useState } from "react";

export default function Measurements() {
  const [num, setNum] = useState("1");
  const [input, setInput] = useState(false);
  const [error, setError] = useState("");

  const changeValue = (event) => {
    const inputValue = event.target.value;
    if (/^\d*\.?\d+$/.test(inputValue) && parseFloat(inputValue) > 0) {
      setInput(true);
      setError("VALID Entry");
    } else {
      setInput(false);
      setError("INVALID Entry");
    }
    setNum(inputValue);
  };
  const handleInputChange = (event) => {
    changeValue(event);
    // validation();
  };

  return (
    <>
      <h2 className="text-center my-3">Measurements Convertor</h2>
      <div className="container-lg d-flex">
        <div className="container">
          <div className="mb-3">
            <div className="input-group mb-2">
              <span className="input-group-text" id="basic-addon3">
                Enter Number:
              </span>

              <input
                type="text"
                className={`form-control ${input ? "is-valid" : "is-invalid"}`}
                id="validationServer01"
                value={num}
                onChange={handleInputChange}
                required
              />
              <div className="valid-feedback">Looks good!</div>

              <input
                type="text"
                className="form-control"
                id="typeInput"
                aria-describedby="basic-addon3 basic-addon4"
                placeholder="Positive Number Only..."
                value={num}
                onChange={handleInputChange}
              />
              <button className="btn btn-outline-secondary" type="button">
                Submit
              </button>
            </div>
            <div></div>
          </div>
          <p>{error}</p>
        </div>
        {/* <div className="container">
        </div> */}
      </div>

      <h4 className="mt-5" style={{ marginLeft: "10%" }}>
        Result:
      </h4>
      <div className="container"></div>
    </>
  );
}
