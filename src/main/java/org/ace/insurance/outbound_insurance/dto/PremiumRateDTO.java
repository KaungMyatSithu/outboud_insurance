package org.ace.insurance.outbound_insurance.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class PremiumRateDTO {
    private String coveragePlan;
    private int fromAge;
    private int toAge;
    private double rate;
    private String packages;
    private UUID currencyID;
}
