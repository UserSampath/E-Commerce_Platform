package com.ECommercePlatform.Item.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ItemDTO {
    private int id;
    private String name;
    private double price;
    private int quantity;
    private byte[] image;
}
