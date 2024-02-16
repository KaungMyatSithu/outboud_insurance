import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Field from "../pages/Field";
import "./agent.css";

const Associative = ({ props, item , userclick }) => {
  const [agentBirthDate, setAgentBirthDate] = useState();
  const [data, setData] = useState({});
  const [message, setMessage] = useState();
  useEffect(() => {
    if (message) {
      props(message);
    }
  }, [message]);
  useEffect(() => {
    if (agentBirthDate) {
      setData({ ...data, date: agentBirthDate });
    }
  }, [agentBirthDate]);
  function agentData() {
    if (data) {
      item(data);
    }
  }
  useEffect(()=>{
    if(userclick){
      setData({...data,license: userclick.license, password: userclick.password})
    }
  },[userclick])
  return (
    <div className="overlay">
      <div className="agent_container">
        <div className="back">
          <p>Check Agent Infomation</p>
          <FontAwesomeIcon
            icon={faXmark}
            className="back_icon"
            onClick={() => setMessage(true)}
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
              value={data.license}
              onChange={(e) => setData({ ...data, license: e.target.value })}
            />
            {userclick.userclick && !data.license && <Field />}
          </div>
          <div className="agent_license">
            <label>
              Password <span className="red">*</span>
            </label>
            <input type="password" placeholder="00-0000" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}/>
            {userclick.userclick && !data.password && <Field />}
          </div>
        </div>
        <button className="agent_submit" onClick={agentData}>Check Agent</button>
      </div>
    </div>
  );
};

export default Associative;
