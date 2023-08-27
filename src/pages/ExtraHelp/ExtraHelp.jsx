import React from 'react';
import { FaInfoCircle, FaLevelDownAlt, FaShuttleVan, FaStoreAlt, FaUser, FaUserFriends, FaUsersCog } from "react-icons/fa";
import ContinueButton from '../../components/ContinueButton';

const ExtraHelp = () => {
    return (
        <div>
            <div className='flex items-center gap-5'> 
                <span className='font-bold h-[40px] w-[40px] rounded-full flex justify-center text-blue-600 text-3xl bg-blue-100'>9</span>
                <h2 className='font-semibold text-blue-600 grow'>Extra service</h2>
                <p className='text-blue-600 flex items-center gap-1'><FaInfoCircle/> More info</p>
            </div>

            <h1 className='text-3xl font-bold mt-5 mb-2'>Need extra help for pickup or delivery?</h1>

            {/* places */}
            <div className='space-y-5 mt-10'>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><FaUser/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>No, not necessary</h3>
                        <p className='text-gray-600'>One courier who helps you carry at the pickup location.</p>
                    </div>
                    <span className='font-semibold text-green-600'>+$0.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><FaUserFriends/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>Extra help</h3>
                        <p className='text-gray-600'>A second couriar to help with carring.</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$45.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><FaShuttleVan/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>A van with automatic tail lift</h3>
                        <p className='text-gray-600'>To lift thing in and out of the van, you are responsible for loading and unloading the item on to the tail lift.</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$30.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><FaUsersCog/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>A van with automatic tail lift +2 courier</h3>
                        <p className='text-gray-600'>A second courier helps to carry and the van has a tail lift.</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$70.00</span>
                </div>
               
            </div>

            <ContinueButton to='/calculator/contactDetails'/>
        </div>
    );
};

export default ExtraHelp;