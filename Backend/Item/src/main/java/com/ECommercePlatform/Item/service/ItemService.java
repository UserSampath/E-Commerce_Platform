package com.ECommercePlatform.Item.service;

import com.ECommercePlatform.Item.entity.Item;
import com.ECommercePlatform.Item.repo.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public Optional<Item>  getItemById(long id ){
        return itemRepository.findById(id);
    }
    public Item create(Item item){
        return itemRepository.save(item);
    }
    public Optional<Item> update(long id,Item update){
        Optional<Item> itemData= itemRepository.findById(id);

        if(itemData.isPresent()){
            Item item= itemData.get();
            item.setName(update.getName());
            item.setPrice(update.getPrice());
            item.setQuantity(update.getQuantity());
            item.setDescription(update.getDescription());
            item.setImage(update.getImage());
            return Optional.of(itemRepository.save(item));
        }else{
            return Optional.empty();
        }

    }
    public void delete(long id){
        itemRepository.deleteById(id);
    }
   
}
