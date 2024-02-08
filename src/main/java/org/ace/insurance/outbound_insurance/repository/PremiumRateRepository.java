package org.ace.insurance.outbound_insurance.repository;

import org.ace.insurance.outbound_insurance.entity.PremiumRate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PremiumRateRepository extends JpaRepository<PremiumRate, UUID> {
}
