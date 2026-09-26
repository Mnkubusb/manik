"use client"
import { allProjects, projects } from '@/data'
import { FaGithub, FaLocationArrow } from 'react-icons/fa'
import { PinContainer } from './ui/3dpin'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({ id , title , des , img , iconLists , link }) =>(
                <div key={id} className=' sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex justify-center items-center sm:w-[520px] w-[80vw]'>
                    <PinContainer title={"Visit"} href={link} >
                        <div className='relative flex items-center justify-center sm:w-[520px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10' >
                            <div className='relative w-full h-full rounded-3xl overflow-hidden bg-[#13162d] '>
                                <img src="./bg.png" alt="bgimg" />
                            </div>
                            <img src={img} alt={title} className='z-10 w-[95%] h-[95%] absolute bottom-0' />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light line-clamp-2 text-sm'>
                            {des}
                        </p>
                        <div className='flex justify-between items-center mt-7 mb-3 '>
                            <div className='flex items-center'>
                                {iconLists.map((icon , index)=>(
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 h-8 w-8 flex items-center justify-center'
                                        style={{
                                           transform: `translateX(${-5* index *2}px)`
                                        }}
                                    >
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                    Check Live Site
                                </p>
                                <FaLocationArrow className='ms-3' color='#cbacf9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>

        <h2 className='heading mt-20 !text-3xl md:!text-4xl'>
            All <span className='text-purple'>projects</span>
        </h2>
        <div className='grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3'>
            {allProjects.map(({ title , des , tags , github , live }) => (
                <div key={title} className='flex flex-col rounded-2xl border border-white/[0.1] bg-black-200 p-6 transition-colors hover:border-purple/50'>
                    <h3 className='font-bold text-lg'>
                        {title}
                    </h3>
                    <p className='mt-2 text-sm text-white-200 flex-1'>
                        {des}
                    </p>
                    <div className='flex flex-wrap gap-2 mt-4'>
                        {tags.map((tag) => (
                            <span key={tag} className='rounded-full border border-white/[0.15] px-3 py-1 text-xs text-white-100'>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className='flex gap-5 mt-5 text-sm text-purple'>
                        {github && (
                            <a href={github} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 hover:underline'>
                                <FaGithub /> Code
                            </a>
                        )}
                        {live && (
                            <a href={live} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 hover:underline'>
                                <FaLocationArrow /> Live
                            </a>
                        )}
                        {!github && !live && (
                            <span className='text-white-200'>Private project</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects