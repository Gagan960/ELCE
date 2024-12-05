import React, { useEffect } from 'react'
import { useState } from 'react'

 export const State3 = () => {
    const [total,setTotal]=useState(0);
    const [double,setDouble]=useState(0);
    useEffect(() =>{
      setDouble(total*2)
    },[total])
  return (
    <div>
        <button onClick={() =>{setTotal(total+1);

        }}>increase</button>
        <button onClick={() =>{setTotal(total-1);

 }}>deacrease

 </button>
 <h2>{total}</h2>
 <h2>{double}</h2>

     </div>
    
   );
 };

// export const State3 = () => {
//     const [total,setTotal]=useState('Green');
//   return (
    
//     <div>
//         <h2 style={{color:total}}> my faviourate color{total}</h2>
//         <button onClick={() =>{setTotal('Blue');

//         }}>Blue</button>
//         <button onClick={() =>{setTotal('Red');

//         }}>Red</button>


//     </div>
    
//   );
// };
