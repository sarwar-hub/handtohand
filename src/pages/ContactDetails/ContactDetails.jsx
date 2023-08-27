import React, { useState } from 'react';
import { FaDoorOpen, FaHammer, FaHome, FaInfoCircle, FaLevelDownAlt, FaShuttleVan, FaStoreAlt } from "react-icons/fa";
import ContinueButton from '../../components/ContinueButton';
import { Link } from 'react-router-dom';

const ContactDetails = () => {
    const [type, setType] = useState('private');
    return (
        <div>
            <div className='flex items-center gap-5'>
                <span className='font-bold h-[40px] w-[40px] rounded-full flex justify-center text-blue-600 text-3xl bg-blue-100'>10</span>
                <h2 className='font-semibold text-blue-600 grow'>Contact details</h2>
                <p className='text-blue-600 flex items-center gap-1'><FaInfoCircle /> More info</p>
            </div>

            <h1 className='text-3xl font-bold mt-5 mb-2'>Fill in your contact details</h1>
            <p className='text-sm text-gray-500'>How can we contact you? With these contact details we'll keep you up to date on your transport.</p>
            <p className='text-sm text-gray-500'>Enter your details here. Do you already have an account? Then you can go here <span className='font-semibold text-blue-600 hover:underline'><Link to='/login'>Login</Link></span></p>

            {/* uncommon part */}
            <div className='mt-10'>
                {/* tab */}
                <div className='flex items-center gap-'>
                    <button onClick={() => setType('private')} className={`${type == 'private' ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-600'} px-5 py-2 rounded-tl-md rounded-bl-md font-semibold border-2 border-blue-600 grow`}>Private</button>
                    <button onClick={() => setType('business')} className={`${type == 'business' ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-600'} px-5 py-2 rounded-tr-md rounded-br-md font-semibold border-2 border-blue-600 grow`}>Business</button>
                </div>

                {/* form */}
                <div className='bg-blue-50 p-10 border-2 border-blue-600 border-dashed border-l-0 border-r-0 mt-10'>
                    
                    {/* forms */}
                    {type == 'private' ?
                    // if type is private
                    <form>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <input className='p-3 rounded-md border-2 outline-blue-600 grow' type="text" placeholder='First name' />
                            <input className='p-3 rounded-md border-2 outline-blue-600 grow' type="text" placeholder='Last name' />                        
                            <input className='p-3 rounded-md border-2 outline-blue-600 grow' type="email" placeholder='Email' />
                            <input className='p-3 rounded-md border-2 outline-blue-600 grow' type="tel" placeholder='Phone' />
                        </div>
                    </form>
                    :
                    // if type is business    
                    <form>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <input className='p-3 rounded-md border-2 outline-blue-600 grow' type="text" placeholder='Business name' />
                            <input className='p-3 rounded-md border-2 outline-blue-600 grow' type="text" placeholder='Business type' />
                            <input className='p-3 rounded-md border-2 outline-blue-600 grow' type="email" placeholder='Email' />
                            <input className='p-3 rounded-md border-2 outline-blue-600 grow' type="tel" placeholder='Phone' />
                        </div>
                    </form>
                    }
                </div>
            </div>

            <ContinueButton to='/calculator/payment' />
        </div>
    );
};

export default ContactDetails;