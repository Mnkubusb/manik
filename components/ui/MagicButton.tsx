import React from 'react'

const MagicButton = ({
    title, icon , className , handleClick , position
}: {
    title?: string
    icon?: React.ReactNode
    className?: string
    handleClick?: () => void
    position?: string
}) => {
    return (
        <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none
         md:w-48 md:mt-10" 
            onClick={handleClick}
         >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl  " + className}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    )
}

export default MagicButton