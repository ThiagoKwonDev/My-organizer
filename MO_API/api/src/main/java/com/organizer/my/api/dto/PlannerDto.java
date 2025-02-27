package com.organizer.my.api.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Data
@Entity
@Table(name = "tb0001_expanse")
public class PlannerDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tb0001_title")
    private String title;

    @Column(name = "tb0001_expanse_value")
    private Long expanse_value;

    @Column(name = "tb0001_expire_date")
    private Date expire_date;
}
