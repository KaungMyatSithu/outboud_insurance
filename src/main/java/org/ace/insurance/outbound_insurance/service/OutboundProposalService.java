package org.ace.insurance.outbound_insurance.service;

import org.ace.insurance.outbound_insurance.dto.OutboundProposalDTO;
import org.ace.insurance.outbound_insurance.entity.OutboundProposal;

public interface OutboundProposalService {
    OutboundProposal create(OutboundProposalDTO outboundProposalDTO);

    OutboundProposal searchEnquiry(String passportNo, String passportIssueCountry);
}
