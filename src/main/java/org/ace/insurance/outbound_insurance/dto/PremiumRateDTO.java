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
    private int coveragePlan;
    private int fromAge;
    private int toAge;
    private double rate;
<<<<<<< HEAD
    private int packages;
=======
    private double packages;
>>>>>>> ae4ad985c159792b65c85a294cf0ac47f941488b
    private UUID currencyID;
}
