package com.organizer.my.api.controller;
import com.organizer.my.api.dto.PlannerDto;
import com.organizer.my.api.repository.PlannerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/planner")
public class PlannerController {

    @Autowired
    PlannerRepository plannerRepository;

    @PostMapping("/create-planner")
    public PlannerDto createPlanner(@RequestBody PlannerDto planner) {
        return plannerRepository.save(planner);
    }

    @GetMapping("/all")
    public List<PlannerDto> getAll() {
        return plannerRepository.findAll();
    }

    @GetMapping("/teste")
    public void teste() {
        System.out.println("Hello world");
    }

}
