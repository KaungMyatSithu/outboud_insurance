package org.ace.insurance.outbound_insurance.repository;

import org.ace.insurance.outbound_insurance.entity.Agent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.UUID;

public interface AgentRepository extends JpaRepository<Agent, UUID> {
//    @Query("select a.agentLicense,a.agentName FROM Agent a WHERE a.agentLicense =:inPutAgentLicense and a.agentDOB =: inPutAgentDOB")
//        Agent findAgentByAgentLicenseAndAgentDOB(@Param("inPutAgentLicense") String inputAgentLicenseNo,@Param("inPutAgentDOB") LocalDate inPutAgentDOB);
//
//    @Query("select a.agentLicense,a.agentName FROM Agent a WHERE a.agentLicense = : inPutAgentLicenseNo and a.agentPassword =: inPutAgentPassword")
//      Agent findAgentByAgentLicenseAndAgentPassword(@Param("inPutAgentLicense") String inputAgentLicenseNo,@Param("inPutAgentPassword") String inPutAgentPassword);
}
