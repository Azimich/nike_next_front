import React from 'react'
import { useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from "react-icons/ri"
import Image from "next/image";


const FavoritesItem = ({ data }) => {

  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          width={120}
          height={120}
          src={'/product-1.webp'}
          alt={'prod.name'}
        />
      </div>
      <div className='w-full flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan Why Not .5
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Men's Basketball Shoes
          </div>
          <div className="text-sm md:text-md font-bold text-black/[0.5]">
            MRP : $ 22295
          </div>
        </div>
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Men's Basketball Shoes
        </div>

        <div className='flex items-center justify-between mt-4'>
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <button 
              className="text-[12px] w-full py-[8px] px-[10px] rounded-full bg-black text-white transition-transform active:scale-95 hover:opacity-75"
            >
              Add to Cart
            </button>
            <div className='flex items-center gap-1'>
              <div className="font-semibold">Size:</div>
              <select className='hover:text-black'
                onChange={() => {}}
              >
                {/* {prod.size?.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.size}
                      disabled={!item.enabled ? true : false}
                      selected={data.selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  )
                })} */}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]'
          />
        </div>
      </div>
    </div>
  )
}

export default FavoritesItem