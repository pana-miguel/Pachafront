import { defineStore } from 'pinia'
import itemsShopCart from '@/data/itemsShopCart.json'

export const useItemsShopCartStore = defineStore('shopCart', {
    state: () => {
        return {
            shopCart: [],
        }
    }
    ,
    actions: {
        fill() {
            console.log(itemsShopCart)
            this.shopCart = itemsShopCart;
        }
    }
}
)
