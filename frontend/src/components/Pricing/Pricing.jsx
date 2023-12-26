import React from 'react'

export const PricingEx = () => {
  return (
    <div className='relative w-full px-[2rem] md:px-[5rem] flex flex-col items-center gap-[3rem] py-[5rem]'>
    <div className='flex flex-col items-center mt-10 lg:mt-20'>
        <h1 className='text-xl font-secondary text-secondary'>Choose your plans</h1>
        <h1 className='text-primary text-4xl md:text-5xl text-center lg:text-5xl font-secondary font-extrabold'>Pricing</h1>
    </div>
    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div className='rows-col-1 p-5 border rounded-md hover:border-primary transition-all delay-50 ease-in-out'>
            <div className='w-full bg-gray-100 rounded-md flex flex-col items-center p-5 gap-3'>
                <h1 className='font-secondary text-secondary text-3xl font-medium'>BASIC</h1>
                <h1 className='font-bold text-4xl text-primary font-secondary'>Php 200.00<span className='text-sm font-light'>/mo</span></h1>
                <div className='flex items-center gap-2'>
                    <h1 className='line-through font-secondary text-gray-500'>Php 300.00</h1>
                    <h1 className='font-secondary bg-blue-300 rounded-full px-3 text-primary text-sm'>Save 33%</h1>
                </div>
                <h1 className='font-secondary text-primary text-center mt-5'>Good for starter and small business that want to use this for everyday.</h1>
                <button className='w-full bg-primary p-3 text-white font-secondary rounded-md mx-1 hover:bg-secondary
                transition-all delay-100 ease-in-out'>Choose this plan</button>
            </div>
                <div className='w-full border border-gray-300 mt-2'></div>
                <div className='p-3 flex flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>100 Receipt print credits / 0.01 Deduct credits per print</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Free 5 credits</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>1 User only</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-orange-300'></div>
                        <h1 className='font-secondary text-primary'>Generate sales report /mo.</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Customer service available</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>1GB Storage</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-orange-300'></div>
                        <h1 className='font-secondary text-primary'>Free seminar about tax</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-orange-300'></div>
                        <h1 className='font-secondary text-primary'>Free tax books</h1>
                    </div>
                </div>
        </div>
        <div className='rows-col-1 p-5 border rounded-md hover:border-primary transition-all delay-50 ease-in-out'>
            <div className='w-full bg-secondary rounded-md flex flex-col items-center p-5 gap-3'>
                <h1 className='font-secondary text-white text-3xl font-medium'>STANDARD</h1>
                <h1 className='font-bold text-4xl text-primary font-secondary'>Php 500.00<span className='text-sm font-light'>/mo</span></h1>
                <div className='flex items-center gap-2'>
                    <h1 className='line-through font-secondary text-red-700'>Php 1000.00</h1>
                    <h1 className='font-secondary bg-blue-300 rounded-full px-3 text-primary text-sm'>Save 50%</h1>
                </div>
                <h1 className='font-secondary text-white text-center mt-5'>Good for starter and small business to mid business that want to use this for everyday.</h1>
                <button className='w-full bg-primary p-3 text-white font-secondary rounded-md mt-1 hover:bg-white hover:text-primary
                transition-all delay-100 ease-in-out'>Choose this plan</button>
            </div>
                <div className='w-full border border-gray-300 mt-2'></div>
                <div className='p-3 flex flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>200 Receipt print credits / 0.01 Deduct credits per print</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Free 15 credits</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>1 User only</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Generate sales report /mo.</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Customer service available</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>2GB Storage</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-orange-300'></div>
                        <h1 className='font-secondary text-primary'>Free seminar about tax</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Free tax books</h1>
                    </div>
                </div>
        </div>
        <div className='rows-col-1 p-5 border rounded-md hover:border-primary transition-all delay-50 ease-in-out'>
            <div className='w-full bg-gray-100 rounded-md flex flex-col items-center p-5 gap-3'>
                <h1 className='font-secondary text-secondary text-3xl font-medium'>BUSINESS</h1>
                <h1 className='font-bold text-4xl text-primary font-secondary text-center'>Contact our customer service</h1>
                <h1 className='font-secondary font-semibold text-primary'>Note: <span className='text-gray-600 font-light'>message your inquiry</span></h1>
                <h1 className='font-secondary text-primary text-center mt-5'>Enterprise business that 24/7 will use this website.</h1>
                <button className='w-full bg-primary p-3 text-white font-secondary rounded-md mt-1 hover:bg-secondary
                transition-all delay-100 ease-in-out'>Choose this plan</button>
            </div>
            <div className='w-full border border-gray-300 mt-2'></div>
                <div className='p-3 flex flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Unlimited receipt print / 0.01 Deduct credits per print</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Free 15 credits</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>1-2 Users only</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Generate sales report /mo.</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Customer service available</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>5GB Storage</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Free seminar about tax</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Free coaching about tax with Emelino T. Maestro</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Free tax books</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full w-3 h-3 bg-secondary'></div>
                        <h1 className='font-secondary text-primary'>Get free tickets in future events</h1>
                    </div>
                </div>
        </div>

    </div>
</div>
  )
}
