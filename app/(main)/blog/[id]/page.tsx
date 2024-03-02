import React from 'react'


import axios from 'axios'

async function getData(id: string) {
  const res = await axios.get(`${process.env.API_URL}/blog/${id}`)
  return res.data
}
export default  async function page({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const id = params.id
    const data = await getData(id)
    console.log(data)
  return (
    <div>
      {/* make a blog details */}
      <h1>Blog details</h1>
      <p>{data?.data?.title}</p>
      <p>{data?.data?.description}</p>
      <img  src={data?.data?.image} className="h-40" alt="" />
    </div>
  )
}
