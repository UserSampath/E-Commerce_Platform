package com.ECommercePlatform.Item.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Item {
    @Id
    private int id;
    private String name;
    private double price;
    private int quantity;
    private byte[] image;

}
