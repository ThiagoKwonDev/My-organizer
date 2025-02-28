package com.backend.mo.api.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "tb0001_expanse")
public class Planner {

    @Id
    @Column(name = "tb0001_id")
    private Long id;

    @Column(name = "tb0001_name")
    private String name;

    @Column(name = "tb0001_value")
    private Long value;

    @Column(name = "tb0001_final_date")
    private Date finalDate;
}
