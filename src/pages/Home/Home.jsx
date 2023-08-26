import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContinueButton from '../../components/ContinueButton';
import { FaArrowRight, FaMapMarkerAlt, FaRegClock, FaRegThumbsUp, FaShoppingBasket, FaShuttleVan, FaStar } from "react-icons/fa";
import van from '/van.png'
import banner from '/banner.svg'


const Home = () => {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const [districs, setDistrics] = useState([]);
    console.log(districs);

    useEffect(() => {
        fetch('districs.json')
            .then(res => res.json())
            .then(data => setDistrics(data.districts))
    }, [])

    const handleGetFrom = (event) => {
        setFrom(event.target.value);
    }
    const handleGetTo = (event) => {
        setTo(event.target.value);
    }


    return (
        <div className='max-w-[1480px] mx-auto bg-blue-50'>
            <div style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}>
                <img className='w-[200px]' src={van} alt="" />
            </div>
            <div className='bg-blue-200 py-5'>
                <div className='md:w-[80%] mx-auto px-2 bg-white  rounded-sm flex justify-between items-center'>
                    <div className='flex items-center'>
                        <span className='text-blue-600 mr-3'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                        <select className='grow outline-none' value={from} onChange={handleGetFrom}>
                            {
                                districs.map(dis => <option value={dis}>{dis}</option>)
                            }
                        </select>
                    </div>
                    <span className='font-bold'><FaArrowRight></FaArrowRight></span>
                    <div className='flex items-center'>
                        <span className='text-blue-600 mr-3'><FaMapMarkerAlt></FaMapMarkerAlt></span>
                        <select className='grow outline-none' value={to} onChange={handleGetTo}>
                            {
                                districs.map(dis => <option value={dis}>{dis}</option>)
                            }
                        </select>
                    </div>
                    <Link to='/calculator/from'><button className='bg-emerald-400 hover:bg-emerald-500 text-white font-semibold text-sm px-4 py-2 rounded-sm my-2'>Calculate Price →</button></Link>
                </div>
            </div>
            <div className='md:grid md:grid-cols-4 md:w-[80%] mx-auto px-2 justify-between gap-5 text-center py-10'>

                <div>
                    <p className='flex font-semibold text-sm text-gray-700'><span className='mt-1 mr-2 text-blue-600'><FaRegThumbsUp></FaRegThumbsUp></span> <span>Free cancelletion up to 60 hours in advance.</span></p>
                </div>
                <div>
                    <p className='flex font-semibold text-sm text-gray-700'><span className='mt-1 mr-2 text-blue-600'><FaShuttleVan></FaShuttleVan></span> <span>Insured for up to 40 kg/item transport.</span></p>
                </div>
                <div>
                    <p className='flex font-semibold text-sm text-gray-700'><span className='mt-1 mr-2 text-blue-600'><FaShoppingBasket></FaShoppingBasket></span> <span>Services for marketplace of all cities.</span></p>
                </div>
                <div>
                    <p className='flex font-semibold text-sm text-gray-700'><span className='mt-1 mr-2 text-blue-600'><FaRegClock></FaRegClock></span> <span>Pickup and delivery whenever you want.</span></p>
                </div>
            </div>
            <div className='bg-white text-center flex items-center justify-center py-10'>
                <span className='text-yellow-400 flex'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </span>
                <p className='ml-2'>5500+ Reviews</p>
            </div>
            <div className=''>
                <div className='md:w-[80%] mx-auto px-2 absolut'>
                    <h1 className='text-3xl text-blue-600 font-bold '>Easier and more Affordable</h1>
                    <p className='text-gray-700'>We are here for your safe and secure transport.</p>
                </div>
            </div>

        </div>
    );
};

export default Home;