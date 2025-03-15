import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><IoMdCheckmark className='text-green-500 mr-2'></IoMdCheckmark>{feature}</p>
        </div>
    );
};

export default Feature;