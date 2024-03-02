"use client";

import React from 'react'
import CartPageItem from './carte-page-item';
import { useCarteStore } from '@/lib/hooks/useCartStore';

function FavoritePage() {
    const {cart}:any = useCarteStore((state)=> state);
  return (
    <div>
        <h1>this is the faverite page</h1>
        {/* {favorites.map((item: any) => (
            <CartPageItem key={item.id} blog={item} />
        ))} */}
        {cart && cart.length > 0 ? (cart.map((item: any) => (<CartPageItem key={item.id} blog={item} />))) : <p>No favorites yet</p>}
    </div>
  )
}

export default FavoritePage;