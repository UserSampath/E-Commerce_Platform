package com.ECommercePlatform.Item.dto;

<<<<<<< HEAD
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.java.Log;
=======

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
>>>>>>> main

@NoArgsConstructor
@AllArgsConstructor
@Data
<<<<<<< HEAD

public class ItemDTO {
    private long id;
    private String name;
    private double price;
    private int quantity;
    private String description;
=======
public class ItemDTO {
    private int id;
    private String name;
    private double price;
    private int quantity;
>>>>>>> main
    private byte[] image;
}
