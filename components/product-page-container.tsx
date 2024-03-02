"use client";

import React,{useEffect, useState} from 'react'
import ProductCard from '@/components/global/product-card'
import axios from 'axios';


type  Props = {
    data: any
}
export default function ProductsPageContainer({data}: Props) {
    console.log('mydta',data)
    // const [data, setData] = useState<any>([]);
    // useEffect(() => {
    //     async function getData() {
    //       const res = await axios.get('http://localhost:5000/blog');
    //       console.log(res.data);
    //       setData(res.data);
         
    //     }
    //     getData();
    // }, []);
  return (
    <div className='container my-24'>
      <h1 className='text-3xl font-bold text-center my-10'>Products</h1>
      <div className='flex flex-wrap'>
       
        {/* <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
          <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
            <img
              className='w-full h-48 object-cover'
              src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='Product 1'
            />
            <div className='p-4'>
              <h2 className='text-xl font-bold mb-2'>Product 1</h2>
              <p className='text-gray-700'>Description of Product 1</p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
          <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
            <img
              className='w-full h-48 object-cover'
              src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='Product 1'
            />
            <div className='p-4'>
              <h2 className='text-xl font-bold mb-2'>Product 1</h2>
              <p className='text-gray-700'>Description of Product 1</p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
          <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
            <img
              className='w-full h-
            48 object-cover'
              src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='Product 1'
            />
            <div className='p-4'>
              <h2 className='text-xl font-bold mb-2'>Product 1</h2>
              <p className='text-gray-700'>Description of Product 1</p>
            </div>
          </div>
        </div> */}
        {data?.map((blog: any) => {
            return (
                <ProductCard key={blog._id} blog={blog} />
            )
        }
             
        )}
      </div>

    </div>
  )
}