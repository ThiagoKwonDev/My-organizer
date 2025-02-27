package com.organizer.my.api.repository;

import com.organizer.my.api.dto.PlannerDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlannerRepository extends JpaRepository<PlannerDto, Long> {
}
