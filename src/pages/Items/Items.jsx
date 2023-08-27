import React from 'react';
import { FaHammer, FaHome, FaInfoCircle, FaPlusCircle, FaShuttleVan, FaStoreAlt, FaTrash, FaTrashAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import ContinueButton from '../../components/ContinueButton';

const Items = () => {
    return (
        <div>
            <div className='flex items-center gap-5'>
                <span className='font-bold h-[40px] w-[40px] rounded-full flex justify-center text-blue-600 text-3xl bg-blue-100'>3</span>
                <h2 className='font-semibold text-blue-600 grow'>Items</h2>
                <p className='text-blue-600 flex items-center gap-1'><FaInfoCircle /> More info</p>
            </div>

            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold my-5'>Your Item(s)</h1>
                <button className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-full font-semibold flex items-center gap-2'><span><FaPlusCircle/></span> <span>item</span></button>
            </div>

            {/* items */}
            <div className='space-y-5 mt-10'>

                {/* single item */}
                <div className='flex items-center gap-3 border-2 hover:border-blue-600 rounded-md p-3'>
                    <img className='max-h-[150px] w-auto object-cover rounded-md' src="https://images.unsplash.com/photo-1603112089080-3ef8f7bb9dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80" alt="" />
                    <div>
                        <h3 className='text-xl text-blue-600 font-bold'>Dresser(wood)</h3>
                        <p className='text-sm text-gray-500'>140x40x40</p>
                        <div className='flex items-center gap-2 mt-5'>
                            <div className='text-blue-600 text-lg border-2 rounded-full flex justify-between items-center'>
                                <button className='hover:bg-gray-300 rounded-full w-[30px] h-[30px]' title='Decrease item count'>-</button><span className='text-gray-600'>1</span><button className='hover:bg-gray-300 rounded-full w-[30px] h-[30px]' title='Increase item count'>+</button>
                            </div>
                            <button className='border-2 rounded-full p-2 text-red-600 hover:border-red-600' title='Delete this item'><FaTrash /></button>
                        </div>
                    </div>
                </div>
                <p className='text-sm text-gray-500'>max 200kg per transport</p>
                {/* single item */}

            </div>

            <ContinueButton to='/calculator/date' />
        </div>
    );
};

export default Items;