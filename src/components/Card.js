import React from 'react'
import { convertTime } from '../utils/utils'
import { Moon, Sun, Wind } from 'lucide-react';
const Card = ({ data }) => {
  return (
    <div className='border bg-gray-400 w-96 h-72 rounded-2xl opacity-90 my-40 flex flex-col gap-8 p-4'>
      <div className='flex justify-center'><span className='text-white'>{data?.name}&nbsp;["{data?.sys?.country}"]</span></div>
      <div className='flex justify-between '>
        <div className='flex flex-col'>
          <span className='text-white text-xl'>Temp: {data?.main?.temp} &deg;C</span>
          <span className='text-white text-lg'>Real feel: {data?.main?.feels_like} &deg;C</span>
          <span className='text-white text-md'>Humidity: {data?.main?.humidity}</span>
        </div>

        <div className='flex flex-col items-end'>
          <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`} alt={data?.weather?.[0].description} className='w-6 h-auto aspect-auto' />
          <span className='text-white text-lg'>{data?.weather?.[0]?.description}</span>
          <div className='flex flex-col items-center'>
            <span className='text-white text-sm flex gap-2'>Wind speed {data?.wind?.speed}</span>
            <Wind className='w-4 text-gray-500 motion-safe:animate-ping duration-1000 delay-[3000s] ' />
          </div>
        </div>
      </div>
      <div className='flex justify-between '>
        <div className='flex flex-col'>
          <span className='text-white text-sm flex gap-2'>Sunrise  <Sun className='w-4 text-yellow-500' /></span>
          <span className='text-white text-sm'>{convertTime(data?.sys?.sunrise)}</span>
        </div>

        <div className='flex flex-col'>
          <span className='text-white text-sm flex gap-2'>Sunset <Moon className='w-4 text-gray-500' /></span>
          <span className='text-white text-sm'>{convertTime(data?.sys?.sunset)}</span>
        </div>
      </div>

    </div>
  )
}

export default Card
