import React from 'react'
import { SlSocialTwitter } from "react-icons/sl";
import { IoHome } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import FeedCard from '@/Components/FeedCard';
import { FaMoneyBillWave } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

interface twittersidebutton{
  title:string,
  icon:React.ReactNode
}

const sidebarmenuItems:twittersidebutton[]=[
  {
    title:"Home",
    icon:<IoHome></IoHome>
  },{
    title:"Explore",
    icon:<FaHashtag></FaHashtag>
  },{
    title:"Notification",
    icon:<IoIosNotifications></IoIosNotifications>
  },{
    title:"Messages",
    icon:<FaMessage></FaMessage>
  },
  {
    title:"BookMarks",
    icon:<FaBookmark></FaBookmark>
  },
  {
    title:"Twitter Blue ",
    icon:<FaMoneyBillWave></FaMoneyBillWave>
  },
  {
    title:"Profile",
    icon:<FaRegUser></FaRegUser>
  },{
    title:"More",
    icon:<IoIosMore></IoIosMore>
  }
]
const page = () => {
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen px-56'>
        <div className="col-span-3  pt-8 ">
          <div className='text-4xl w-fit h-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all object-cover'>
            <SlSocialTwitter></SlSocialTwitter>     
          </div>
     <div className='mt-4 text-2xl font-bold px-4'>
      <ul>
          {
            sidebarmenuItems.map((e)=>{
return <li  
className='flex justify-start m-3 items-center gap-7 hover:bg-gray-800 p-4 rounded-2xl px-2 w-fit'
><span>{e.icon}</span><span>{e.title}</span></li>
            })
          }
      </ul>
      <button className='bg-[#2c7fbf] p-4 rounded-full w-full mt-4'>Tweet</button>
     </div>
        </div>
        <div className="col-span-6 border-r-2 border-l-2 border-gray-500 overflow-scroll">
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>
          <FeedCard></FeedCard>

        </div>
        <div className="col-span-3"></div>
        </div> 
    </div>
  )
}

export default page
