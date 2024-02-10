package org.ace.insurance.outbound_insurance.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "outbound_proposal")
public class OutboundProposal {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate submittedDate;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate policyStartDate;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate policyEndDate;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate estimateDepartureDate;
    private String journeyFrom;
    private String journeyTo;
    private int coveragePlan;
    private int packages;
    private double premiumRate;

    //relation
    @ManyToOne
    private InsuredPerson insuredPerson;
    @ManyToOne
    private Agent agent;


    //create,update,version
    private UUID createdUserID;
    private LocalDateTime createdDate;
    private UUID updatedUserID;
    private LocalDateTime updatedDate;
    @Version
    private Long version;
    @PrePersist
    protected void onCreate(){
        createdDate = LocalDateTime.now();
        version = 1L;
    }
    @PreUpdate
    protected void onUpdate(){
        updatedDate = LocalDateTime.now();
        version ++;
    }
}
