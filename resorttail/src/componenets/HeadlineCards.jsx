import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-5 py-7 grid md:grid-cols-3 gab-3'>
        { /* //cards */}
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Son's Out,BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurant</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/2271106/pexels-photo-2271106.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Ancient Resort</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>

  )
}

export default HeadlineCards