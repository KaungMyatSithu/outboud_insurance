package org.ace.insurance.outbound_insurance.controller;

import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.outbound_insurance.dto.AgentDTO;
import org.ace.insurance.outbound_insurance.entity.Agent;
import org.ace.insurance.outbound_insurance.service.AgentService;
import org.ace.insurance.outbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

import static org.ace.insurance.outbound_insurance.utility.HttpResponse.createResponse;

@RestController
@Slf4j
@RequestMapping("/agent")
public class AgentController {
    private final AgentService agentService;

    public AgentController(AgentService agentService) {
        this.agentService = agentService;
    }
    @PostMapping
    public ResponseEntity<HttpResponse<Agent>> Create(@RequestBody AgentDTO agentDTO){
        Agent agent= agentService.Create(agentDTO);
        return createResponse(agent,HttpStatus.CREATED);
    }

    @GetMapping("/checkVerification")
    public ResponseEntity<HttpResponse<Agent>> checkVerification(@RequestParam("inPutAgentLicense") String agentLicense,
                                                                 @RequestParam("inPutAgentDOB")  LocalDate agentDOB,
                                                                 @RequestParam("agentType")String agentType) {
        Agent agent = agentService.findAgentByAgentLicenseAndAgentDOB(agentLicense, agentDOB,agentType);

        return createResponse(agent,HttpStatus.OK);
    }

    @GetMapping("/checkAssociation")
    public ResponseEntity <HttpResponse<Agent>> checkAssociation(@RequestParam("inPutAgentLicense") String agentLicense,
                                                                 @RequestParam("inPutAgentPassword") String agentPassword,
                                                                 @RequestParam("agentType")String agentType) {
        Agent agent = agentService.findAgentByAgentLicenseAndAgentPassword(agentLicense, agentPassword,agentType);

        return createResponse(agent, HttpStatus.OK);
    }


}
