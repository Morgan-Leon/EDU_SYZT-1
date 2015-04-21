package com.syzton.sunread.service.store;

import com.syzton.sunread.model.store.ExchangeHistory;
import com.syzton.sunread.model.store.Gift;
import com.syzton.sunread.model.store.GiftStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Created by jerry on 4/20/15.
 */

public interface StoreService {

    void addGift(Gift gift);

    void deleteGift(long giftId);

    void exchangeGift(long studentId,long giftId,int count);

    void changeExchangeStatus(long exchangeId,long userId,GiftStatus status);

    Page<Gift> getGifts(Pageable pageable);

    Page<ExchangeHistory> getExchangeHistory(Pageable pageable,long studentId);

}