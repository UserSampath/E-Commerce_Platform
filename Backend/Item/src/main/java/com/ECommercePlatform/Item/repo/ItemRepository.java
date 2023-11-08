package com.ECommercePlatform.Item.repo;

import com.ECommercePlatform.Item.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    Optional<Item> findById(long id);
    List<Item> findByName(String name);

}
