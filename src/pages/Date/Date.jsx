import React from 'react';
import { FaHammer, FaHome, FaInfoCircle, FaPlusCircle, FaShuttleVan, FaStoreAlt, FaTrash, FaTrashAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import ContinueButton from '../../components/ContinueButton';

const Date = () => {
    return (
        <div>
            <div className='flex items-center gap-5'>
                <span className='font-bold h-[40px] w-[40px] rounded-full flex justify-center text-blue-600 text-3xl bg-blue-100'>4</span>
                <h2 className='font-semibold text-blue-600 grow'>Pickup Date</h2>
                <p className='text-blue-600 flex items-center gap-1'><FaInfoCircle /> More info</p>
            </div>

            <h1 className='text-3xl font-bold my-5'>Select a date for pickup and delivery</h1>

            {/* items */}
            <div className='space-y-5 mt-10'>
                {/* single cards */}
                <div className='flex items-center justify-between border-2 hover:border-blue-600 rounded-md p-3 font-semibold cursor-pointer'>
                    <div><span>Today, 27 August 2023</span></div>
                    <div><span className='text-red-600'>+$40.0</span></div>
                </div>
                <div className='flex items-center justify-between border-2 hover:border-blue-600 rounded-md p-3 font-semibold cursor-pointer'>
                    <div><span>Tommorow, 28 August 2023</span></div>
                    <div><span className='text-yellow-600'>+$25.0</span></div>
                </div>
                <div className='flex items-center justify-between border-2 hover:border-blue-600 rounded-md p-3 font-semibold cursor-pointer'>
                    <div><span>Tuesday, 29 August 2023</span></div>
                    <div><span className='text-green-400'>+$0.0</span></div>
                </div>
                <div className='flex items-center justify-between border-2 hover:border-blue-600 rounded-md p-3 font-semibold cursor-pointer'>
                    <div><span>Wednesday, 30 August 2023</span></div>
                    <div><span className='text-green-400'>+$0.0</span></div>
                </div>
            </div>

            <div className='flex items-center gap-2 text-gray-500 mt-2'>
                <input className='cursor-pointer' type="checkbox" name="differentDeliveryDate" id="date" />
                <label className='cursor-pointer' for="date">Select a different delivery date</label>
            </div>

            <ContinueButton to='/calculator/deliveryTime' />
        </div>
    );
};

export default Date;