package com.ECommercePlatform.Item.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.java.Log;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class ItemDTO {
    private long id;
    private String name;
    private double price;
    private int quantity;
    private String description;
    private byte[] image;
}
