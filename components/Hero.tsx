"use client"
import Image from 'next/image'
import React, { unstable_SuspenseList } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Button from './Button'
import { brotliCompress, brotliCompressSync, Z_ASCII } from 'zlib'
import { BADFAMILY, BADFLAGS } from 'dns'
import { jsxDEV } from 'react/jsx-dev-runtime'
import { markAsUntransferable } from 'worker_threads'
import { validateHeaderValue } from 'http'
import { networkInterfaces } from 'os'
import { getJsPageSizeInKb, hasCustomGetInitialProps } from 'next/dist/build/utils'
import loadJsConfig, { parseJsonFile } from 'next/dist/build/load-jsconfig'
import { handleWebpackExternalForEdgeRuntime } from 'next/dist/build/webpack/plugins/middleware-plugin'
import { kStringMaxLength } from 'buffer'
import { taintUniqueValue } from 'next/dist/server/app-render/rsc/taint'
import { CACHE_ONE_YEAR, NEXT_QUERY_PARAM_PREFIX } from 'next/dist/lib/constants'
import { lightningCssTransformStyleAttribute } from 'next/dist/build/swc/generated-native'
import { fallbackModeToFallbackField } from 'next/dist/lib/fallback'
import { abortOnSynchronousPlatformIOAccess } from 'next/dist/server/app-render/dynamic-rendering'
import { warnOptionHasBeenMovedOutOfExperimental } from 'next/dist/server/config'

const Hero = () =>  {
  return (
    <section className='max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32
     md:gap-28 lg:py-20 lg:flex-row'>
      <span className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 
      rounded-full shadow-lg blur-[7rem] -z-10"></span>
       {/* Left   */}
       <div className="relative z-20 flex flex-1 flex-col pt-16">
        <h4 className='bold-20'>Hello,</h4>
        <h1 className='bold-48 lg:bold-64 relative'> I'm Fatima Mehmood Ali</h1>
        <h2 className='bold-28 lg:bold-32 text-[1.8rem] capitalize'>
          A {' '}
         <span>
           <Typewriter
            words={['Full-Stack-Developer', 'Programmer', 'UI/UX-Designer', 'Web-Developer']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           />
          </span>
        </h2>
        <p className='regular-16 max-w-[555px] my-4'></p>
        <div className='my-5 flex flex-wrap gap-5 '>
          <div className='flex items-center gap-2'>
            {
              Array(5).fill(1).map((_, index) => (
                <Image
                src="/star.svg"
                key={index}
                alt='star'
                height={24}
                width={24}
                />
              ))
            }
          </div>
          <p className='bold-18 lg:bold-20'>1100+ <span className='regular-16 lg:regular-20'>Excellent Reviews</span> </p>
        </div>
        <div className='flexStart gap-1 pt-6'>
          <Button
          type="button"
          title="Download CV"
          icon="/download.svg"
          variant="btn_dark_rounded"
          /> 
          <Button
          type="button"
          title="Contact_us"
          icon="/arrow-right.svg"
          variant="btn_white_rounded"
          /> 
        </div>
      </div>
       
     {/* RIGHT  */}
     <div className='flex flex-1 xl:flexEnd'>
        <Image src='/bgg.png.jpg' alt='bg' width={488} height={488} className='w-auto'/>
     </div>
    </section>
  )
}

export default Hero
