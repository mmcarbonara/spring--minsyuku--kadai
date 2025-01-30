package com.example.samurai__travel.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.samurai__travel.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    public Role findByName(String name);        
}