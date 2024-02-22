import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Field from "../pages/Field";
import "./agent.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Agent = ({ props, item, userclick }) => {
  const location = useLocation();
  const [agentname, setAgentName] = useState("");
  const [agentlicense, setAgentLicense] = useState("");
  const [agentBirthDate, setAgentBirthDate] = useState("");
  const [error, setError] = useState();

  const formatDate = (date) => {
    if (!date) return ""; // Return empty string if date is null

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  };
  function messageback() {
    props(true);
  }
  function agentData() {
    axios
      .get(
        `${
          location.pathname == "/form/mmk"
            ? `http://localhost:8080/api/v1/agent/checkMMKVar?agentDOB=${formatDate(
                agentBirthDate
              )}&agentLicense=${agentlicense}&agentType=Verification`
            : `http://localhost:8080/api/v1/agent/checkUSDVar?agentName=${agentname}&agentLicense=${agentlicense}&agentType=Verification`
        }`
      )
      .then((res) => {
        item(res.data);
        props(true);
        setError(false);
      })
      .catch((error) => {
        console.error("The error is " + error);
        setError(true);
      });
  }
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="overlay">
      <div className="agent_container">
        <div className="back">
          <p>Check Agent Infomation</p>
          <FontAwesomeIcon
            icon={faXmark}
            className="back_icon"
            onClick={messageback}
          />
        </div>
        <span className="line"></span>
        <div className="agent_info">
          <div className="agent_license">
            <label htmlFor="license">
              Agent License Number <span className="red">*</span>
            </label>
            <input
              type="text"
              placeholder="ENTER AGENT LICENSE NO."
              name="license"
              value={agentlicense}
              onChange={(e) => setAgentLicense(e.target.value)}
            />
            {userclick.userclick && !data.license && <Field />}
          </div>
          {location.pathname == "/form/mmk" && (
            <div className="agent_license">
              <label>
                Date Of Birth <span className="red">*</span>
              </label>
              <DatePicker
                className="agent_date"
                placeholderText="DD-MM-YYYY"
                selected={agentBirthDate}
                onChange={(date) => setAgentBirthDate(date)}
              />
              {userclick.userclick && !agentBirthDate && <Field />}
            </div>
          )}
          {location.pathname == "/form/usd" && (
            <div className="agent_license">
              <label>
                Agent Name <span className="red">*</span>
              </label>
              <input
                type="text"
                value={agentname}
                placeholder="Agent Name"
                onChange={(e) => setAgentName(e.target.value)}
              />
              {userclick.userclick && !agentname && <Field />}
            </div>
          )}
          {error && <div className="red">Wrong Password</div>}
        </div>
        <button className="agent_submit" onClick={agentData}>
          Check Agent
        </button>
      </div>
    </div>
  );
};

export default Agent;
