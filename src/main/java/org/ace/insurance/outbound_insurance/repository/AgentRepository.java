package org.ace.insurance.outbound_insurance.repository;

import org.ace.insurance.outbound_insurance.entity.Agent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.UUID;

public interface AgentRepository extends JpaRepository<Agent, UUID> {
    Agent findAgentByAgentLicenseAndAgentDOBAndAgentType( String inputAgentLicenseNo,LocalDate inPutAgentDOB,String agentType);

    Agent findAgentByAgentLicenseAndAgentPasswordAndAgentType( String inputAgentLicenseNo, String inPutAgentPassword,String agentType);


}
