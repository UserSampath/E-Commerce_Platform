package com.ECommercePlatform.Item.repo;

import com.ECommercePlatform.Item.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ItemRepository extends JpaRepository<Item,Integer> {

    @Query(value = "SELECT * FROM USER WHERE ID = ?1",nativeQuery = true)
    Item getItemByID(String Id);


}
