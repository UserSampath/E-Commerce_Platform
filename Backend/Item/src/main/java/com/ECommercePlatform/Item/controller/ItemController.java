package com.ECommercePlatform.Item.controller;

import com.ECommercePlatform.Item.dto.ItemDTO;
import com.ECommercePlatform.Item.entity.Item;
import com.ECommercePlatform.Item.repo.ItemRepository;
import com.ECommercePlatform.Item.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "api/Item")
@CrossOrigin
@Service
public class ItemController {

    @Autowired
    public ItemService itemService;
    public ItemRepository itemRepository;

    @GetMapping("/get/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable("id") long id){
        Optional<Item> itemData = itemRepository.findById((int) id);

        return itemData.map(item -> new ResponseEntity<>(item, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/save")
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        try {

            Item _item = itemRepository.save
                    (new Item (item.getId(), item.getName(), item.getPrice(), item.getQuantity(), item.getDescription(), item.getImage()));
            return new ResponseEntity<>(_item, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Item> update(@PathVariable("id") long id,@RequestBody Item item)
    {
        Optional<Item> itemdata = itemRepository.findById((int) id);

        if(itemdata.isPresent())
        {
            Item _item = itemdata.get();

            _item.setId(item.getId());
            _item.setName(item.getName());
            _item.setPrice(item.getPrice());
            _item.setQuantity(item.getQuantity());
            _item.setDescription(item.getDescription());
            _item.setImage(item.getImage());
        return new ResponseEntity<>(itemRepository.save(_item),HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete")
    public boolean delete(@RequestBody ItemDTO itemDTO)
    {
        return itemService.delete(itemDTO);
    }

    //adding image
    /*
    @GetMapping("/getImage")
    public List<ItemDTO> getImage(@RequestParam("file") MultipartFile file)
    {
        return itemService.getAllItems();
    }

    @PostMapping("/uploadImage")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            if (file.isEmpty()) {
                return ResponseEntity.badRequest().body("Please select a file to upload.");
            }

            byte[] imageData = file.getBytes();

            Item item = itemService.processImageUpload(imageData);

            return ResponseEntity.ok("Image uploaded and saved successfully.");
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Failed to upload image: " + e.getMessage());
        }
    }
    @PostMapping("/saveImage/{Id}")
    public ResponseEntity<String> saveImage(@PathVariable String Id, @RequestParam("file") MultipartFile file)
    {
        ItemDTO item = itemService.getItemByID(Id);

        if (item == null) {
            return ResponseEntity.badRequest().body("Item not found");
        }

        try {
            byte[] newImageData = file.getBytes();
            item.setImage(newImageData);
            itemService.update(item);

            return ResponseEntity.ok("Image updated successfully");
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Failed to update image: " + e.getMessage());
        }
    }

    @PutMapping("/updateImage")
    public ItemDTO updateImage(@RequestBody ItemDTO itemDTO)
    {
        return itemService.update(itemDTO);
    }

    @DeleteMapping("/deleteImage")
    public boolean deleteImage(@RequestBody ItemDTO itemDTO)
    {
        return itemService.delete(itemDTO);
    }
    */

}
