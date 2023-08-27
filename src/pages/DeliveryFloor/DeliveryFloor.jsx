import React from 'react';
import { FaDoorOpen, FaHammer, FaHome, FaInfoCircle, FaLevelDownAlt, FaShuttleVan, FaStoreAlt } from "react-icons/fa";
import { GiElevator } from "react-icons/gi";
import { PiNumberSquareEightBold, PiNumberSquareFiveBold, PiNumberSquareFourBold, PiNumberSquareNineBold, PiNumberSquareOneBold, PiNumberSquareSevenBold, PiNumberSquareSixBold, PiNumberSquareThreeBold, PiNumberSquareTwoBold } from "react-icons/pi";
import ContinueButton from '../../components/ContinueButton';

const DeliveryFloor = () => {
    return (
        <div>
            <div className='flex items-center gap-5'> 
                <span className='font-bold h-[40px] w-[40px] rounded-full flex justify-center text-blue-600 text-3xl bg-blue-100'>8</span>
                <h2 className='font-semibold text-blue-600 grow'>Delivery floor</h2>
                <p className='text-blue-600 flex items-center gap-1'><FaInfoCircle/> More info</p>
            </div>

            <h1 className='text-3xl font-bold mt-5 mb-2'>Delivery: Where does everything go?</h1>
            <p className='text-sm text-gray-500'>The damage insurance applies from door to door and not indoors.</p>

            {/* places */}
            <div className='space-y-5 mt-10'>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><FaDoorOpen/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>Ground floor</h3>
                        <p className='text-gray-600'>Beyond the front door</p>
                    </div>
                    <span className='font-semibold text-green-600'>+$0.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><GiElevator/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>Elevator available</h3>
                        <p className='text-gray-600'>Regardless which floor</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$10.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><FaLevelDownAlt/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>Basement</h3>
                        <p className='text-gray-600'>Without elevator</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$10.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><PiNumberSquareOneBold/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>1st floor</h3>
                        <p className='text-gray-600'>Without elevator</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$10.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><PiNumberSquareTwoBold/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>2nd floor</h3>
                        <p className='text-gray-600'>Without elevator</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$20.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><PiNumberSquareThreeBold/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>3rd floor</h3>
                        <p className='text-gray-600'>Without elevator</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$30.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><PiNumberSquareFourBold/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>4th floor</h3>
                        <p className='text-gray-600'>Without elevator</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$40.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><PiNumberSquareFiveBold/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>5th floor</h3>
                        <p className='text-gray-600'>Without elevator</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$50.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><PiNumberSquareSixBold/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>6th floor</h3>
                        <p className='text-gray-600'>Without elevator</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$60.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><PiNumberSquareSevenBold/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>7th floor</h3>
                        <p className='text-gray-600'>Without elevator</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$70.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><PiNumberSquareEightBold/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>8th floor</h3>
                        <p className='text-gray-600'>Without elevator</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$80.00</span>
                </div>
                <div className='flex items-center gap-7 border-2 hover:border-blue-600 rounded-md p-3 cursor-pointer'>
                    <span className='text-2xl text-blue-600'><PiNumberSquareNineBold/></span>
                    <div className='grow'>
                        <h3 className='font-semibold'>9th floor</h3>
                        <p className='text-gray-600'>Without elevator</p>
                    </div>
                    <span className='font-semibold text-yellow-600'>+$90.00</span>
                </div>
               
            </div>

            <ContinueButton to='/calculator/extraHelp'/>
        </div>
    );
};

export default DeliveryFloor;