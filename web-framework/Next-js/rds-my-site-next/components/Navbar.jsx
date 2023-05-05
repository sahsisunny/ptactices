import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='bg-custom-blue flex fixed top-0 w-full z-10 items-center justify-between p-4 font-bold h-18'>
      <ul className='flex items-center text-white justify-between w-2/5'>
        <li>
          <a href='https://realdevsquad.com'>
            <Image
              src='https://my.realdevsquad.com/RDSLogo-6e66b2e6661cc94333a8c7365f25d438.png'
              alt='Real Dev Squad'
              width={50}
              height={50}
            />
          </a>
        </li>
        <li>Welcome</li>
        <li>Events</li>
        <li>Members</li>
        <li>Crypto</li>
        <li>Status</li>
      </ul>
      <div className='profile flex items-center'>
        <p className='text-white pr-2 '>Hello Sunny!</p>
        <Image
          src='https://res.cloudinary.com/realdevsquad/image/upload/v1670801589/profile/jbGcfZLGYjHwxQ1Zh8ZJ/omnzmzuz2girwhj51ske.jpg'
          alt='Sunny Sahsi'
          width={50}
          height={50}
          className='rounded-full w-10 h-10'
        />
      </div>
    </nav>
  );
};

export default Navbar;
