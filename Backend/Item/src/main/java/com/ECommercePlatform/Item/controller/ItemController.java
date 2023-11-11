package com.ECommercePlatform.Item.controller;

import com.ECommercePlatform.Item.entity.Item;
import com.ECommercePlatform.Item.repo.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://127.0.0.1:5173/")
@Service
public class ItemController {

    @Autowired
    ItemRepository itemRepository;


    @GetMapping("/item")
    public ResponseEntity<List<Item>> getAllItem(@RequestParam(required = false) String name)
    {
        try{
            List<Item> items = new ArrayList<Item>();
            if(name ==null)
                itemRepository.findAll().forEach(items::add);
            else
                itemRepository.findByName(name).forEach(items::add);
            if(items.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(items,HttpStatus.OK);
        }catch (Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/item/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable("id") long id){
        Optional<Item> itemData = itemRepository.findById(id);

        return itemData.map(item -> new ResponseEntity<>(item, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/item")
    public ResponseEntity<Item> create(@RequestBody Item item) {
        try {

            Item _item = itemRepository
                    .save(item);
            return new ResponseEntity<>(_item, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/item/{id}")
    public ResponseEntity<Item> update(@PathVariable("id") long id, @RequestBody Item newItem) {
        Optional<Item> itemData = itemRepository.findById(id);

        if (itemData.isPresent()) {
            Item existingItem = itemData.get();

            // Update fields with the new values from the request body
            existingItem.setName(newItem.getName());
            existingItem.setPrice(newItem.getPrice());
            existingItem.setQuantity(newItem.getQuantity());
            existingItem.setDescription(newItem.getDescription());
            existingItem.setImage(newItem.getImage());

            // Save the updated item using the repository
            return new ResponseEntity<>(itemRepository.save(existingItem), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("/item/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable("id") long id) {
        try {
            itemRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
}
