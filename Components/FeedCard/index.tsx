import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { FaMessage } from "react-icons/fa6";
  import { FaRetweet } from "react-icons/fa6";
  import { AiFillLike } from "react-icons/ai";
  import { AiOutlineUpload } from "react-icons/ai";
  import { FaHeart } from "react-icons/fa";

  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
   
const FeedCard = () => {
  return (

    <Card className='bg-black border-b border-gray-300 text-white flex gap-4 p-4 hover:bg-slate-900'>
        <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div className='flex flex-col align-baseline gap-4'>
    <CardTitle>Card Title</CardTitle>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam cum aperiam repellat sed cupiditate neque ducimus sint ad, hic impedit voluptatibus, iure, minus tenetur totam explicabo eveniet accusantium reiciendis ea?</p>
    <div className='flex justify-between mt-3'>
        <div className='text-2xl cursor-pointer'><FaMessage></FaMessage></div>
        <div className='text-2xl cursor-pointer'><FaRetweet></FaRetweet></div>
        <div className='text-2xl cursor-pointer'><FaHeart></FaHeart></div>
        <div className='text-2xl cursor-pointer'><AiOutlineUpload></AiOutlineUpload></div>
    </div>
    </div>
   
</Card>
  )
}

export default FeedCard
