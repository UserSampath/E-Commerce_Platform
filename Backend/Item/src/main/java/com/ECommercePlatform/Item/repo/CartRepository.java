package com.ECommercePlatform.Item.repo;

import com.ECommercePlatform.Item.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository<CartItem> extends JpaRepository<CartItem, Long> {
}
