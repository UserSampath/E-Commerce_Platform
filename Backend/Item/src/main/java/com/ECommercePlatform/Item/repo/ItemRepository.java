package com.ECommercePlatform.Item.repo;

import com.ECommercePlatform.Item.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< HEAD
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    Optional<Item> findById(long id);
    List<Item> findByName(String name);
    //Optional<Item> findById(long id);

    //void deleteById(long id);
=======
import org.springframework.data.jpa.repository.Query;

public interface ItemRepository extends JpaRepository<Item,Integer> {
    @Query(value = "SELECT * FROM ITEM WHERE ID = ?1",nativeQuery = true)
    Item getItemByID(String Id);

>>>>>>> main
}
