package com.ECommercePlatform.Item.service;

import com.ECommercePlatform.Item.dto.ItemDTO;
import com.ECommercePlatform.Item.entity.Item;
import com.ECommercePlatform.Item.repo.ItemRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

    public ItemDTO getItemByID(String ID){
        Item item=itemRepository.getItemByID(ID);
        return modelMapper.map(item,ItemDTO.class);
    }
    public ItemDTO save(ItemDTO itemDTO, MultipartFile imageFile) throws IOException {
        byte[] imageBytes = imageFile.getBytes();

        Item item = modelMapper.map(itemDTO, Item.class);
        item.setImage(imageBytes);
        itemRepository.save(item);

        itemDTO.setId(item.getId());

        return itemDTO;
    }
}
