package com.example.jwtBase.repository;

import com.example.jwtBase.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Role,Long> {
}
