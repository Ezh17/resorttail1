import React from 'react'
import {categories} from '../Data/Data'
function Category() {
  return (
    <div>
        <h1 className='font-bold justify-between text-black-500 '>@Ezhilarasan</h1>

        {/* <div>
           {categories.map((item,index)=>
           {
            <div key={index}>
                <h2>{item.name}</h2>
                <img src={item.image} alt={item.name} />
            </div>
           })}  
        </div> */}
    </div>
  )
}

export default Category