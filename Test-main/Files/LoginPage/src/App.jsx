import React, { useState } from 'react';
import './app.css';


function Card() {
     const [isHovering, setIsHovering] = useState(false);

     return (
          <a className='card' href='/' >
               <img
                    src='https://static.toiimg.com/photo/msid-74467029/74467029.jpg'
                    alt="Narendra Modi"
                    width={150}
                    height={150}
               />
               <p className="name" >Narendra Modi</p>
               <span data-testid='idle-since'>10 years ago</span>
               <span
                    className="infoIcon"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
               >
                    ⓘ
               </span>
               {isHovering && <span className='infoMessage'>This is a message about of Idle user
               </span>
               }
          </a>
     );
};

export default Card;