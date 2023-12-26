import React from 'react'
// import receipt_bg from '../../assets/images/receipt_bg.jpg'
export const Team = () => {
  return (
    <div className='w-full flex flex-col items-center gap-[3rem] overflow-hidden py-[5rem]'>
        <div className='flex flex-col items-center mt-10 lg:mt-15 px-[2rem] md:px-[5rem]'>
            <h1 className='text-xl font-secondary text-secondary'>Meet our core team</h1>
            <h1 className='text-primary text-4xl md:text-5xl text-center lg:text-5xl font-secondary font-extrabold'>Our Team</h1>
        </div>
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-3'>

          <div className='flex flex-col items-center justify-center gap-5 p-5'>
            <div className='relative w-[15rem] h-[15rem] '>
              <div className='w-[15rem] h-[15rem] rounded-full overflow-hidden'>
                <img 
                  src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'} 
                  alt='Leadership Team' 
                  className='object-cover w-full h-full'/>
                <div className='absolute w-[3rem] h-[3rem] bg-primary z-[10] rounded-full top-[10.5rem] flex items-center justify-center'>
                  <h1 className='font-primary font-bold text-white text-xl'>R</h1>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='font-primary font-semibold text-xl text-primary'>Michelle Ann Smith</h1>
              <h1 className='font-secondary font-bold text-secondary'>Chief Executive Officer</h1>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-5 p-5'>
            <div className='relative w-[15rem] h-[15rem] '>
              <div className='w-[15rem] h-[15rem] rounded-full overflow-hidden'>
                <img 
                  src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'} 
                  alt='Leadership Team' 
                  className='object-cover w-full h-full'/>
                <div className='absolute w-[3rem] h-[3rem] bg-primary z-[10] rounded-full top-[10.5rem] flex items-center justify-center'>
                  <h1 className='font-primary font-bold text-white text-xl'>R</h1>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='font-primary font-semibold text-xl text-primary'>Michelle Ann Smith</h1>
              <h1 className='font-secondary font-bold text-secondary'>Chief Executive Officer</h1>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-5 p-5'>
            <div className='relative w-[15rem] h-[15rem] '>
              <div className='w-[15rem] h-[15rem] rounded-full overflow-hidden'>
                <img 
                  src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'} 
                  alt='Leadership Team' 
                  className='object-cover w-full h-full'/>
                <div className='absolute w-[3rem] h-[3rem] bg-primary z-[10] rounded-full top-[10.5rem] flex items-center justify-center'>
                  <h1 className='font-primary font-bold text-white text-xl'>R</h1>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='font-primary font-semibold text-xl text-primary'>Michelle Ann Smith</h1>
              <h1 className='font-secondary font-bold text-secondary'>Chief Executive Officer</h1>
            </div>
          </div>

        </div>
    </div>
  )
}
