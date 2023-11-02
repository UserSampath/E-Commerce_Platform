package com.ECommercePlatform.Item.controller;

import com.ECommercePlatform.Item.dto.ItemDTO;
import com.ECommercePlatform.Item.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/Item")
@CrossOrigin
public class ItemController {

    @Autowired
    public ItemService itemService;

    @GetMapping("/get")
    public List<ItemDTO> get()
    {
        return itemService.getAllItems();
    }

    @PostMapping("/save")
    public ItemDTO save(@RequestBody ItemDTO itemDTO)
    {
        return itemService.save(itemDTO);
    }
    @PutMapping("/update")
    public ItemDTO update(@RequestBody ItemDTO itemDTO)
    {
        return itemService.update(itemDTO);
    }

    @DeleteMapping("/delete")
    public boolean delete(@RequestBody ItemDTO itemDTO)
    {
        return itemService.delete(itemDTO);
    }

    @GetMapping("/get/{userID}")
    public ItemDTO getItemByID(@PathVariable String ID)
    {
        return itemService.getItemByID(ID);
    }
//add
}
