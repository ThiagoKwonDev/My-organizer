package com.backend.mo.api.controller;

import com.backend.mo.api.dto.Planner;
import com.backend.mo.api.repository.PlannerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/planner")
public class PlannerController {

    @Autowired
    PlannerRepository plannerRepository;

    @GetMapping("/all")
    public List<Planner> getAll() {
        return plannerRepository.findAll();
    }

    @PostMapping("/save")
    public Planner save(@RequestBody Planner planner) {
        return plannerRepository.save(planner);
    }
}
