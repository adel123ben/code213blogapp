import React from 'react'
import { useCarteStore } from '@/lib/hooks/useCartStore'
import { stat } from 'fs'
import { Button } from '../ui/button'
import Link from 'next/link'


type Props = {
    blog:{
        _id:string,
        image: string,
        title:string,
    }
}
function CartPageItem({blog}: Props) {
    const {image,title, _id}:any = blog

    const {removeProductFromCart} = useCarteStore((state): any=>state)
  return (
    <div className='p-2  shadow-2xl text-white'>
        <Link target="_blank" href={`/blog/${blog._id}`}>
        <img  src={image} alt="blogimg" />
        </Link>
    

    <p>{title}</p>
    <Button variant="destructive" onClick={(()=>removeProductFromCart(blog))}>Remove</Button>
    </div>
  )
}

export default CartPageItem