import React from 'react';
import { FaAngleDown, FaInfoCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import ContinueButton from '../../components/ContinueButton';

const PickupTime = () => {
    return (
        <div>
            <div className='flex items-center gap-5'>
                <span className='font-bold h-[40px] w-[40px] rounded-full flex justify-center text-blue-600 text-3xl bg-blue-100'>5</span>
                <h2 className='font-semibold text-blue-600 grow'>Pickup Time</h2>
                <p className='text-blue-600 flex items-center gap-1'><FaInfoCircle /> More info</p>
            </div>

            <h1 className='text-3xl font-bold my-5'>Please fill out the opening our of the pickup place on selected date</h1>

            {/* uncommon part */}
            <div className='space-y-10 mt-10'>
                {/* standard time */}
                <div>
                    <p className='text-gray-500 font-semibold mb-2'>Select standard opening hour</p>
                    <div className='flex items-center justify-between border-2 hover:border-blue-600 rounded-md p-5 font-semibold cursor-pointer'>
                        <div><span>09:00 - 17:00</span></div>
                        <div><span className='text-green-400'>+$0.0</span></div>
                    </div>
                </div>

                {/* different time */}
                <div>
                    <p className='text-gray-500 font-semibold'>Or choose your own timeslot</p>
                    <p className='text-gray-500  mb-2 text-sm'>Select a timeslot of 4 hours to pickup</p>

                    <div className='p-10 border-2 hover:border-blue-600 rounded-md'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center justify-between grow border-2 hover:border-blue-600 rounded-md p-3 font-semibold cursor-pointer'>
                                <div><span className='text-xs text-gray-500'>Start time</span><br /><span>10:00</span></div>
                                <div><span className='text-blue-600 text-xl'><FaAngleDown /></span></div>
                            </div>
                            <div className='flex items-center justify-between ml-5 grow border-2 hover:border-blue-600 rounded-md p-3 font-semibold cursor-pointer'>
                                <div><span className='text-xs text-gray-500'>Start time</span><br /><span>14:00</span></div>
                                <div><span className='text-blue-600 text-xl'><FaAngleDown /></span></div>
                            </div>
                        </div>
                        <span className='text-red-500 text-sm font-semibold flex justify-end'>*Must be 4 hours after start time</span>
                    </div>
                </div>

            </div>
            <ContinueButton to='/calculator/deliveryTime' />
        </div>
    );
};

export default PickupTime;