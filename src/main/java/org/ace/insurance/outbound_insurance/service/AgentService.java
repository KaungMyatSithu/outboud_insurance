package org.ace.insurance.outbound_insurance.service;

import org.ace.insurance.outbound_insurance.dto.AgentDTO;
import org.ace.insurance.outbound_insurance.entity.Agent;

import java.time.LocalDate;

public interface AgentService {
    Agent Create(AgentDTO agentDTO);

//    Agent findAgentByAgentLicenseAndAgentDOB(String agentLicense, LocalDate agentDOB);
//    Agent findAgentByAgentLicenseAndAgentPassword(String agentLicense, String agentPassword);


}
