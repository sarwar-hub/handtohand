import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BiSolidMapPin, BiDownArrowAlt, BiMapPin, BiDotsVerticalRounded } from "react-icons/bi";
import { FaHome } from 'react-icons/fa';
const Calculator = () => {
    return (
        <div className='md:flex'>
            <div className='md:w-[70%] md:mx-[100px] mx-2 py-5 pb-[200px]'>
                <Outlet></Outlet>
            </div>

            {/* sidebar */}
            <div className='bg-blue-200 md:w-[30%] hidden md:block p-10 sticky right-0 top-0'>
                {/* back to home link */}
                <Link to='/'><span className='text-blue-600 text-lg hover:underline mb-5 block'>← Back to HOME</span></Link>
                <h3 className='text-xl font-bold'>Your Delivery</h3>
                <h3 className='font-semibold text-blue-600'>Dresser (wood)</h3>
                <p className='text-sm text-gray-700'>140X40X40</p>
                <div className='flex items-center justify-between py-2'>
                    <p className='text-sm text-gray-700'>Base cost</p>
                    <span className='text-sm font-bold text-blue-600'>$100.0</span>
                </div>

                <div>
                    <div className='flex'>
                        <div className='text-blue-600 text-2xl mr-2'><span><BiMapPin /></span><span><BiDotsVerticalRounded /></span><span><BiDownArrowAlt /></span><span><BiDotsVerticalRounded /></span></div>
                        <div className='w-full'>
                            <h1 className='font-semibold'>Dhaka</h1>
                            {/* Extra costs */}
                            <div>
                                <div className='flex items-center justify-between '>
                                    <p className='text-sm text-gray-700'>2nd floor</p>
                                    <span className='text-sm font-bold text-blue-600'>$10.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='text-blue-600 text-2xl mr-2'><span><BiSolidMapPin /></span></div>
                        <div className='w-full'>
                            <h1 className='font-semibold'>Mymensingh</h1>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-sm text-gray-700'>5nd floor</p>
                                    <span className='text-sm font-bold text-blue-600'>$40.0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='border-2 border-blue-600 my-3' />

                    {/* Final Coast */}
                    <div className='flex justify-between'>
                        <h3 className='font-semibold text-blue-600'>Now 10% Discount</h3>

                        <div>
                            <h3 className='font-bold text-gray-500 line-through'>$100.0</h3>
                            <h3 className='text-2xl font-bold text-blue-600'>$90.0</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Calculator;