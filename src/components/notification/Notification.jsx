import React, { useState, useEffect } from 'react';

const Notification = ({ type, message }) => {

  
  return (
    <div 
    className={`${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }  px-4 py-3  
    `}

 role="alert">
<p class="font-bold">Informational message</p>
<p class="text-sm">{message}</p>
</div> 
  
     
 

      
  )
}

export default Notification