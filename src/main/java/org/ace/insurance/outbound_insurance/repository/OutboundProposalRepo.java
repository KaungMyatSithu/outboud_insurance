package org.ace.insurance.outbound_insurance.repository;

import org.ace.insurance.outbound_insurance.entity.OutboundProposal;
import org.ace.insurance.outbound_insurance.service.impl.OutboundProposalImpl;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;


public interface OutboundProposalRepo extends JpaRepository <OutboundProposal,UUID>{
    OutboundProposal findByInsuredPersonPassportNumberAndInsuredPersonPassportIssueCountry(String passportNo, String passportIssueCountry);

}
