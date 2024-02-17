package com.HackUDC.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "posts")
@Data
public class postModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255, unique = true)
    private String title;

    @Column(length = 255, unique = true)
    private String description;

    @Column(unique = true)
    private String media;

    @ManyToOne
    @JoinColumn(nullable = true)
    private userModel user;
}
