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
<<<<<<< HEAD
import java.util.Optional;

@Service
=======

@Service
@Transactional
>>>>>>> main
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

<<<<<<< HEAD
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
   
=======
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
>>>>>>> main
}
