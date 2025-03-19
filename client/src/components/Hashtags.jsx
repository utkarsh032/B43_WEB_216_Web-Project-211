import React from 'react'
import { FaHashtag } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Hashtags() {
  return (
    <>

      <div className="flex justify-center  py-4 bg-[#a095d9]">
        <a href="#" className="flex items-center  rounded-full px-4 py-1">
          <span className='p-1 border-white border rounded-full'><FaHashtag className=' p-1 rounded-full bg-white text-2xl' /></span>
          <span className='h-2 w-4 border border-r-0 border-l-0 border-white'></span>
          <span className='border rounded-full px-2 py-1 text-white'>Intellit_trip</span>
        </a>
        <a href="#" className="flex items-center  rounded-full px-4 py-1">
          <span className='p-1 border-white border rounded-full'><FaHashtag className=' p-1 rounded-full bg-white text-2xl' /></span>
          <span className='h-2 w-4 border border-r-0 border-l-0 border-white'></span>
          <span className='border rounded-full px-2 py-1 text-white'>Intellit</span>
        </a>
        <a href="#" className="flex items-center  rounded-full px-4 py-1">
          <span className='p-1 border-white border rounded-full'><FaHashtag className=' p-1 rounded-full bg-white text-2xl' /></span>
          <span className='h-2 w-4 border border-r-0 border-l-0 border-white'></span>
          <span className='border rounded-full px-2 py-1 text-white'>Travel_int</span>
        </a>


        <div className="flex items-center space-x-4 ml-auto mr-6 text-white">
          <a href="#" className="rounded-full border border-white p-2">
            <FaInstagram />
          </a>
          <a href="#" className="rounded-full border border-white p-2">
            <FaTwitter />
          </a>
          <a href="#" className="rounded-full border border-white p-2">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white text-black px-6 py-12 font-mono">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">JOIN US,</h2>
            <h2 className="text-xl font-bold">SHARE GREAT PLACES,</h2>
            <h2 className="text-xl font-bold">EXPLORE THE WORLD TOGETHER.</h2>

            <div className="flex space-x-16 pt-8">
              <div>
                <div className="text-6xl font-bold">85K</div>
                <div className="text-sm">Users Joined</div>
              </div>
              <div>
                <div className="text-6xl font-bold">25K</div>
                <div className="text-sm">Teams Created</div>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="#" className="border border-black rounded-full px-6 py-2 text-sm">
                Try demo version
              </a>
              <a href="#" className="bg-black text-white rounded-full px-6 py-2 text-sm">
                TRY FREE
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Join The Teams</h2>

            <div className="flex items-start space-x-4">
              <div className="bg-[#f8f8f8] rounded-lg p-4 flex-1">
                <p className="text-sm">
                  In our application, you can involve your friends in a joint trip, or join an already created group
                  and together plan and improve your ideal holiday itinerary.
                </p>
                <p className="text-sm mt-4">Start your well-planned journey with a great team.</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="bg-[#f8f8f8] rounded-lg p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-sm">25,320 Teams</div>
                <div className="text-xs text-center ">
                  Join An Existing Team
                  <br />
                  Or Create Your Own
                </div>
                <div className="flex -space-x-2 mt-2">
                  <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white"></div>
                  <div className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="h-8 w-8 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">
                    25k+
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        <div className="h-2 w-2 bg-white rounded-full"></div>
        <div className="h-2 w-2 bg-white rounded-full opacity-50"></div>
        <div className="h-2 w-2 bg-white rounded-full opacity-50"></div>
        <div className="h-2 w-2 bg-white rounded-full opacity-50"></div>
      </div>

    </>
  )
}
