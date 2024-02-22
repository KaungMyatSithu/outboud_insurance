import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Field from "../pages/Field";
import "./agent.css";
import axios from "axios";

const Associative = ({ props, item, userclick }) => {
  const [password, setPassword] = useState("");
  const [agentlicense, setAgentLicense] = useState();
  const [error, setError] = useState();

  function messageback() {
    props(true);
  }
  function agentData() {
    axios
      .get(
        `http://localhost:8080/api/v1/agent/checkAsso?agentLicense=${agentlicense}&agentPassword=${password}&agentType=Association`
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
          <div className="agent_license">
            <label>
              Password <span className="red">*</span>
            </label>
            <input
              type="password"
              placeholder="00-0000"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {userclick.userclick && !data.password && <Field />}
          </div>
          {error && <div className="red">Wrong Password</div>}
        </div>
        <button className="agent_submit" onClick={agentData}>
          Check Agent
        </button>
      </div>
    </div>
  );
};

export default Associative;
