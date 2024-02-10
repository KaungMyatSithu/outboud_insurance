package org.ace.insurance.outbound_insurance.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.outbound_insurance.dto.AgentDTO;
import org.ace.insurance.outbound_insurance.entity.Agent;
import org.ace.insurance.outbound_insurance.repository.AgentRepository;
import org.ace.insurance.outbound_insurance.service.AgentService;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@Slf4j
public class AgentServiceImpl implements AgentService {
    private final AgentRepository agentRepository;

    public AgentServiceImpl(AgentRepository agentRepository) {
        this.agentRepository = agentRepository;
    }

    @Override
    public Agent Create(AgentDTO agentDTO) {
        try{
            Agent agent = Agent.builder()
                    .agentName(agentDTO.getAgentName())
                    .agentPassword(agentDTO.getAgentPassword())
                    .agentLicense(agentDTO.getAgentLicense())
                    .agentDOB(agentDTO.getAgentDOB())
                    .agentType(agentDTO.getAgentType()).build();
            log.info("agent created : {}",agent);
            return agentRepository.save(agent);
        }catch (OptimisticLockingFailureException ex){
            throw new RuntimeException("Optimistic Locking conflict");
        }

    }

    @Override
    public Agent findAgentByAgentLicenseAndAgentDOB(String agentLicense, LocalDate agentDOB,String agentType) {
        return agentRepository.findAgentByAgentLicenseAndAgentDOBAndAgentType(agentLicense,agentDOB,agentType);
    }

    @Override
    public Agent findAgentByAgentLicenseAndAgentPassword(String agentLicense, String agentPassword,String agentType) {
        return agentRepository.findAgentByAgentLicenseAndAgentPasswordAndAgentType(agentLicense,agentPassword,agentType);
    }


}
