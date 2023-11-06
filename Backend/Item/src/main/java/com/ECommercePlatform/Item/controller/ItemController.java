package com.ECommercePlatform.Item.controller;

import com.ECommercePlatform.Item.entity.Item;
import com.ECommercePlatform.Item.repo.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http;//localhost:4200")
@Service
public class ItemController {

    @Autowired
    ItemRepository itemRepository;


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
    public ResponseEntity<Item> update(@PathVariable("id") long id,@RequestBody Item item)
    {
        Optional<Item> itemData = itemRepository.findById(id);

        if(itemData.isPresent())
        {
            Item _item = itemData.get();

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