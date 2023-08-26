import React from 'react';
import { Link } from 'react-router-dom';

const ContinueButton = ({to}) => {
    return (
        <div className='p-7 shadow-xl bg-white/50 flex justify-center items-center w-full ml-0 fixed bottom-10 left-0 border-2 z-10'>
            <Link to={to}><button className='px-10 py-2 bg-emerald-400 hover:bg-emerald-500 text-white font-semibold'>Continue →</button></Link>
        </div>
    );
};

export default ContinueButton;