import React from "react";
import profile from '../../assets/images/profile.png'
const Header=()=>{
    return(
        <div className="flex justify-between items-center p-4 mx-4 border-b-2">
            <h1 className='text-3xl font-bold underline'>Knowledge Cafe Website</h1>
            <img src={profile} alt="" />
        </div>
    );
        
}

export default Header;