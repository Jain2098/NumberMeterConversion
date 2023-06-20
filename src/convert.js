import React from "react";
import { useState } from "react";

export default function Measurements() {
  const [num, setNum] = useState(1);
  const [input, setInput] = useState(true);
  const [numberCheck, setnumberCheck] = useState("Positive Number");
  const [valididity, setvalidity] = useState("is-valid");

  const changeValue = (event) => {
    const inputValue = event.target.value.replace(/\s/g, "");
    if (
      /^((\d+(\.\d+)?)|(\.\d+))$/.test(inputValue) &&
      parseFloat(inputValue) > 0
    ) {
      setInput(true);
      setNum(inputValue);
      calculations(inputValue);
      setnumberCheck("Positive Number");
      setvalidity("is-valid");
    } else if (inputValue === "" || inputValue === "0") {
      setnumberCheck("InValid Number");
      setvalidity("is-invalid");
    } else {
      setInput(false);
      setnumberCheck("Negative Number");
      setvalidity("is-invalid");
    }
    setNum(inputValue);
    calculations(inputValue);
  };

  const handleInputChange = (event) => {
    changeValue(event);
  };

  const [meterToDecimeter, setmeterToDecimeter] = useState("10");
  const [meterToCentimeter, setmeterToCentimeter] = useState("100");
  const [meterToMillimeter, setmeterToMillimeter] = useState("1000");
  const [meterToHectameter, setmeterToHectameter] = useState("0.01");
  const [meterTokilometer, setmeterTokilometer] = useState("0.001");

  const calculations = (inputValue) => {
    setmeterToDecimeter(inputValue * 10);
    setmeterToCentimeter(inputValue * 100);
    setmeterToMillimeter(inputValue * 1000);
    setmeterToHectameter(inputValue * 0.01);
    setmeterTokilometer(inputValue * 0.001);
  };

  return (
    <>
      <h2 className="text-center my-3">Meter Conversions:</h2>
      <div className="container-lg d-flex">
        <div className="container custom-width" style={{ maxWidth: "80%" }}>
          <div className="mb-3">
            <div className="input-group mb-2">
              <span className="input-group-text" id="basic-addon3">
                Enter Number:
              </span>

              <input
                type="number"
                className={`form-control ${valididity}`}
                id="validationServer01"
                value={num}
                onChange={handleInputChange}
                required
              />
              <div
                className={`${
                  input ? "valid-feedback" : "invalid-feedback"
                } text-end`}
              >
                {numberCheck}
                {/* {`${input ? "Positive Number" : "Negative Number"}`} */}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <h4 className="" style={{ marginLeft: "10%" }}>
        Results:
      </h4>
      <div
        className="d-flex justify-content-start container custom-width "
        style={{ maxWidth: "60%", marginLeft: "10%" }}
      >
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{num} meter </li>
          <li className="list-group-item">{num} meter</li>
          <li className="list-group-item">{num} meter</li>
          <li className="list-group-item">{num} meter</li>
          <li className="list-group-item">{num} meter</li>
        </ul>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{meterToDecimeter} dm [decimeter]</li>
          <li className="list-group-item">
            {meterToCentimeter} cm [centimeter]
          </li>
          <li className="list-group-item">
            {meterToMillimeter} mm [millimeter]
          </li>
          <li className="list-group-item">
            {meterToHectameter} mm [hectameter]
          </li>
          <li className="list-group-item">{meterTokilometer} km [kilometer]</li>
        </ul>
      </div>
    </>
  );
}
