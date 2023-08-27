import React from 'react';
import { FaHammer, FaHome, FaInfoCircle, FaPlusCircle, FaShuttleVan, FaStoreAlt, FaTrash, FaTrashAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import ContinueButton from '../../components/ContinueButton';

const DeliverytTime = () => {
    return (
        <div>
            <div className='flex items-center gap-5'>
                <span className='font-bold h-[40px] w-[40px] rounded-full flex justify-center text-blue-600 text-3xl bg-blue-100'>6</span>
                <h2 className='font-semibold text-blue-600 grow'>Delivery time</h2>
                <p className='text-blue-600 flex items-center gap-1'><FaInfoCircle /> More info</p>
            </div>

            <h1 className='text-3xl font-bold my-5'>Select a delivery timeslot</h1>

            {/* uncommon part */}
            <div className='space-y-5 mt-10'>
                {/* flexible time */}
                <div className='text-gray-500 font-semibold'>If you're flexible</div>
                <div className='flex items-center justify-between border-2 hover:border-blue-600 rounded-md p-3 font-semibold cursor-pointer'>
                    <div><span>Flexible between 08:00 - 18:00</span></div>
                    <div><span className='text-green-400'>+$0.0</span></div>
                </div>

                <div className='text-gray-500 font-semibold'>Or select time</div>

                <div className='flex items-center justify-between border-2 hover:border-blue-600 rounded-md p-3 font-semibold cursor-pointer'>
                    <div><span>10:00 - 15:00</span></div>
                    <div><span className='text-yellow-600'>+$10.0</span></div>
                </div>
                <div className='flex items-center justify-between border-2 hover:border-blue-600 rounded-md p-3 font-semibold cursor-pointer'>
                    <div><span>11:00 - 16:00</span></div>
                    <div><span className='text-yellow-600'>+$10.0</span></div>
                </div>
                <div className='flex items-center justify-between border-2 hover:border-blue-600 rounded-md p-3 font-semibold cursor-pointer'>
                    <div><span>12:00 - 17:00</span></div>
                    <div><span className='text-yellow-600'>+$10.0</span></div>
                </div>
                <div className='flex items-center justify-between border-2 hover:border-blue-600 rounded-md p-3 font-semibold cursor-pointer'>
                    <div><span>13:00 - 18:00</span></div>
                    <div><span className='text-yellow-600'>+$10.0</span></div>
                </div>
            </div>

            <ContinueButton to='/calculator/pickupFloor' />
        </div>
    );
};

export default DeliverytTime;