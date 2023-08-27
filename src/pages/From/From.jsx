import React from 'react';
import { FaHammer, FaHome, FaInfoCircle, FaShuttleVan, FaStoreAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import ContinueButton from '../../components/ContinueButton';

const From = () => {
    return (
        <div>
            <div className='flex items-center gap-5'> 
                <span className='font-bold h-[40px] w-[40px] rounded-full flex justify-center text-blue-600 text-3xl bg-blue-100'>2</span>
                <h2 className='font-semibold text-blue-600 grow'>Type of Transport</h2>
                <p className='text-blue-600 flex items-center gap-1'><FaInfoCircle/> More info</p>
            </div>

            <h1 className='text-3xl font-bold my-5'>Where do we pick it up?</h1>

            {/* places */}
            <div className='space-y-5 mt-10'>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><FaHome/></span>
                    <div>
                        <h3 className='font-semibold'>From a private home</h3>
                        <p className='text-gray-600'>From someone you know or via an online marketplace</p>
                    </div>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><FaStoreAlt/></span>
                    <div>
                        <h3 className='font-semibold'>From a store</h3>
                        <p className='text-gray-600'>For expample from a furniture store</p>
                    </div>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><FaHammer/></span>
                    <div>
                        <h3 className='font-semibold'>From an auction</h3>
                        <p className='text-gray-600'>From troostwijk for example</p>
                    </div>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><FaShuttleVan/></span>
                    <div>
                        <h3 className='font-semibold'>Small move</h3>
                        <p className='text-gray-600'>Need a move to pickup</p>
                    </div>
                </div>
            </div>

            <ContinueButton to='/calculator/items'/>
        </div>
    );
};

export default From;