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


//    @GetMapping("/checkVerification")
//    public ResponseEntity<Map<String, LocalDate>> checkVerification(@RequestParam("inPutAgentLicense") String agentLicense,
//                                                                    @RequestParam("inPutAgentDOB") String agentDOBString) {
//        LocalDate agentDOB = LocalDate.parse(agentDOBString);
//
//        Agent agent = agentService.findAgentByAgentLicenseAndAgentDOB(agentLicense, agentDOB);
//        if (agent != null) {
//            Map<String,LocalDate> response = new HashMap<>();
//            response.put("agentLicenseNo", agent.getAgentLicense());
//            response.put("agentName", agent.getAgentName());
//            return ResponseEntity.ok(response);
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
//        }
//    }
//
//
//    @GetMapping("/checkAssociation")
//    public ResponseEntity <Map<String,String>> checkAssociation(@RequestParam("inPutAgentLicense") String agentLicense,
//                                                                @RequestParam("inPutAgentPassword") String agentPassword){
//        Agent agent = agentService.findAgentByAgentLicenseAndAgentPassword(agentLicense,agentPassword);
//        if (agent !=null){
//            Map<String,String> response = new HashMap<>();
//            response.put("agentLicenseNo",agent.getAgentLicense());
//            response.put("agentName",agent.getAgentName());
//            return ResponseEntity.ok(response);
//        }else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
//        }
//    }


}
