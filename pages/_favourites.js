import React, {useMemo, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {loadStripe} from '@stripe/stripe-js';

import Wrapper from '@/components/Wrapper'
import FavoritesItem from '@/components/FavoritesItem';

const Favorites = () => {

  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <>
          {/* HEADING AND PARAGRAPH START */}
          <div className='max-w-[800px] mx-auto text-center mt-8 md:mt-0'>
              <div className='leading-tight text-[28px] mb-5 font-semibold md:text-[34px]'>
                Favorite 
              </div>
          </div>
          {/* HEADING AND PARAGRAPH END */}

          {/* CART CONTENT START */}
          <div className='flex flex-col lg:flex-row gap-12 py-10'>
              <div className='flex-[2]'>
                <div className='text-lg font-bold'>Sneakers</div>
                <FavoritesItem />
                <FavoritesItem />
                <FavoritesItem />
                <FavoritesItem />
                <FavoritesItem />
              </div>
          </div>
          {/* CART CONTENT END */}
        </>
      </Wrapper>
    </div>
  )
}

export default Favorites

