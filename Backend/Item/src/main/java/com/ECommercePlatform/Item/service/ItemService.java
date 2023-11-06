package com.ECommercePlatform.Item.service;

import com.ECommercePlatform.Item.dto.ItemDTO;
import com.ECommercePlatform.Item.entity.Item;
import com.ECommercePlatform.Item.repo.ItemRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@Transactional
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private ModelMapper modelMapper;

    public ItemDTO save(ItemDTO itemDTO){
        itemRepository.save(modelMapper.map(itemDTO, Item.class));
        return itemDTO;
    }
    public List<ItemDTO> getAllItems(){
        List<Item>itemList=itemRepository.findAll();
        return modelMapper.map(itemList,new TypeToken<List<ItemDTO>>(){}.getType());
    }
    public ItemDTO update(ItemDTO itemDTO){
        itemRepository.save(modelMapper.map(itemDTO,Item.class));
        return itemDTO;
    }
    public boolean delete(ItemDTO itemDTO){
        itemRepository.delete(modelMapper.map(itemDTO,Item.class));
        return true;
    }

   /* public ItemDTO getItemByID(String ID){
        Item item=itemRepository.getItemByID(ID);
        return modelMapper.map(item,ItemDTO.class);
    }*/

    public Item processImageUpload(byte[] imageData) {
        try {
            Item item = new Item();
            item.setImage(imageData);

            itemRepository.save(item);

            return item;
        } catch (Exception e) {
            throw new RuntimeException("Failed to process and save the image: " + e.getMessage());
        }
    }
}
