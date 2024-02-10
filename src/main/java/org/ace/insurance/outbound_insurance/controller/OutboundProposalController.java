package org.ace.insurance.outbound_insurance.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ace.insurance.outbound_insurance.dto.OutboundProposalDTO;
import org.ace.insurance.outbound_insurance.entity.OutboundProposal;
import org.ace.insurance.outbound_insurance.service.OutboundProposalService;
import org.ace.insurance.outbound_insurance.utility.HttpResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.ace.insurance.outbound_insurance.utility.HttpResponse.createResponse;

@RestController
@RequestMapping("/outboundProposal")
@Slf4j
@AllArgsConstructor
public class OutboundProposalController {
    private final OutboundProposalService outboundProposalService;

    @PostMapping
    public ResponseEntity<HttpResponse<OutboundProposal>>create(@RequestBody OutboundProposalDTO outboundProposalDTO){
        OutboundProposal outboundProposal = outboundProposalService.create(outboundProposalDTO);
        return createResponse(outboundProposal, HttpStatus.CREATED);
    }
}
