"use client";

import React from 'react'
import Link from 'next/link'
import { useCarteStore } from '@/lib/hooks/useCartStore'
import { any } from 'zod'
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';

type Props = {
    blog:{
        _id:string,
        image: string,
        title:string,
        description:string,
        likes: number,
}
}
export default function ProductCard({blog}: Props) {
  const {addProductToCart} = useCarteStore((state):any=>state)
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
    <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
        <Link target="_blank" href={`/blog/${blog._id}`}>
        
        <img
        className='w-full cursor-pointer h-48 object-cover'
        src={blog.image ? blog.image : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
        alt='Product 1'
      />
        </Link>
    
      <div className='p-4 flex flex-row space-x-3 items-center'>
        <h2 className='text-xl font-bold mb-2'>{blog.title}</h2>
        <p className='text-gray-700'>{blog.description}</p>
        <Button onClick={()=> addProductToCart(blog)}>Add to favorites</Button>
        <Heart className='w-6 h-6' />  
        <div className='flex flex-row items-center'>
          <p>{blog.likes}</p>
        </div>
        </div>
    </div>
  </div>
  )
}