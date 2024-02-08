package org.ace.insurance.outbound_insurance.service;

import org.ace.insurance.outbound_insurance.dto.PremiumRateDTO;
import org.ace.insurance.outbound_insurance.entity.PremiumRate;

import java.util.List;

public interface PremiumRateService {
    PremiumRate create(PremiumRateDTO premiumRateDTO);
    List<PremiumRate> findAll();
}
