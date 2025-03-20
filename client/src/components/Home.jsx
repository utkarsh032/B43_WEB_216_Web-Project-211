import React from 'react'
import Hashtags from './Hashtags'
import Hero from '../assets/Hero.png'
import CurrencyConverter from '../pages/CurrencyConverter/CurrencyConverter'

function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 pt-8 pb-16">
        <div className="space-y-6">
          <h1 className="text-7xl text-white font-bold leading-tight">
            Travel & Discover
            <br />
            with <span className='text-yellow-700'>Fauget.</span>
          </h1>
          <p className="text-lg max-w-md text-white">
            Intellit is an application that allows you to connect people for a joint trip, share great locations, plan
            a joint trip in detail, and choose the most optimal routes.
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium flex items-center">
              GET STARTED
              <div className="ml-4 bg-[#8b7fdb] rounded-full p-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>

          <div className="flex space-x-4 mt-16">
            <a href="#" className="flex items-center space-x-2 bg-[#8b7fdb] rounded-full px-4 py-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L19 12L5 21V3Z" fill="white" />
              </svg>
              <span>Google Play</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-[#8b7fdb] rounded-full px-4 py-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="white"
                />
              </svg>
              <span>App Store</span>
            </a>
          </div>
        </div>

        <div className="relative ">
          <div className="absolute top-0 right-0 text-sm text-white">
            <p className="uppercase">START YOUR JOURNEY WITH</p>
            <p className="uppercase">A WELL-PLANNED ITINERARY</p>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs">
            <div className="relative h-32 w-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-4 w-4 bg-white rounded-full"></div>
              </div>
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase text-[8px]">
                  Explore
                </div>
                <div className="absolute top-1/2 right-0 transform translate-y-1/2 translate-x-1/2 uppercase text-[8px] rotate-90">
                  Trails
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 uppercase text-[8px] rotate-180">
                  Experience
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 uppercase text-[8px] -rotate-90">
                  Challenge
                </div>
              </div>
            </div>
          </div>

          <div className="h-full">
            <img
              src={Hero}
              alt="3D mountain scene with geometric shapes"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <Hashtags />
    </>
  )
}

export default Home