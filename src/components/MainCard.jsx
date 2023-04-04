import React from 'react'

const MainCard = () => {
    return ( 
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[800px] relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[600px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>Your <span className='text-orange-500'>Free</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Videogame</span> Website</h1>
                </div>
                <img className='w-full max-h-[600px] object-cover' src="https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg" alt="/" />
            </div>
        </div>
      )
}

export default MainCard