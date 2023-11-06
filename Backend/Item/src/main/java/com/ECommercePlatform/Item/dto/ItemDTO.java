package com.ECommercePlatform.Item.dto;


import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.java.Log;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class ItemDTO {
    private int id;
    private String name;
    private double price;
    private int quantity;
    private String description;
    private byte[] image;
}
