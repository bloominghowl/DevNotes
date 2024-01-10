import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='border-b-4 border-green-100 text-center fixed top-0 bg-indigo-700 font-bold w-full text-lg text-white'>
            <ul className='py-4 '>
                <li className='inline-block'>
                    <Link to="/" className='pl-6 pr-8 inline-block no-underline hover:text-indigo-200 font-medium text-lg py-2 px-4 lg:-ml-2'>
                        Home
                    </Link>
                </li>
                <li className='inline-block'>
                    <Link to="/articles-list" className='pl-6 pr-8 pl-6 pr-8 inline-block no-underline hover:text-indigo-200 font-medium text-lg py-2 px-4 lg:-ml-2'>
                        Articles
                    </Link>
                </li>
                <li className='inline-block'>
                    <Link to="/about" className='pl-6 pr-8 pl-6 pr-8 inline-block no-underline hover:text-indigo-200 font-medium text-lg py-2 px-4 lg:-ml-2'>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}; 

export default Navbar;
