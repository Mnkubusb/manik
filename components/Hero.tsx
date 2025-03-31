"use client"
import React from 'react'
import { Spotlight } from './ui/spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import Link from 'next/link'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 min-h-screen'>
      <div>
        <Spotlight  className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight  className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        <Spotlight  className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:50px_50px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              Dynamic Web Magic with Next.JS
            </h2>

            <TextGenerateEffect
              className='text-center text-[40px] md:text-4xl lg:text-6xl'
              words='Transforming Concepts into Seamless User Experiences'
            />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              Hi, I'm Manik a Next js Developer From India
            </p>
            <Link href={'#about'}>
              <MagicButton
                title='Show my work'
                icon={<FaLocationArrow className='mt-1' />}
                position='right'
                className='gap-2 items-center'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero