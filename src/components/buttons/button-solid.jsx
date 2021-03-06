import React from 'react';

import { useNavigate } from "react-router-dom";

const ButtonSolid = ({ btnStyles, btnTitle, icon, route, handleClick, title }) => {
  /** HOOKS */
  let navigate = useNavigate();
  // If no click function defined but route is defined, implement useNavigate hook
  if (!handleClick && route) {
    handleClick = () => {
      if (route) {
        navigate(route);
      }
      return null;
    }
  }

  return (
    <div className='w-full rounded-full shadow-md transition-transform text-current 
    hover:-translate-y-[2px] active:translate-y-[2px]'>
        <button className={`btn-solid items-center rounded-full 
          ${btnStyles ? btnStyles : ''}
          `}
          title={title}
          onClick={handleClick ? () => handleClick() : undefined}
        >
          <span className='text-sm text-current 
          xl:text-lg'>
            {btnTitle}
          </span>
          <span aria-hidden={true}>
            {icon}
          </span>   
        </button>
    </div>
  )
}

export default ButtonSolid;