import React from 'react'
import { TrendData } from '../data/TrendData'
const TrendCard = () => {
  return (
    <div className='flex flex-col gap-[1rem] bg-[#ffffff9f] p-[1rem] pl-[2rem] rounded-md box-shadow '>
        <h3>Trends For You</h3>
        {TrendData?.map((trend) => {
            return (
                <div className='trend flex flex-col gap-[.5rem] items-start ' >
                    <p className='font-bold '>#{trend?.name}</p>
                    <p className='text-[13px] '>#{trend?.shares}k shares</p>

                </div>
            )
        })}
    </div>
  )
}

export default TrendCard