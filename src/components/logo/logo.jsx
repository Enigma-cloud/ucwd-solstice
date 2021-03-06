import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as SolsticeLogoLight } from '../../assets/solstice-logo-light.svg';
import { ReactComponent as SolsticeLogoColoured } from '../../assets/solstice-logo-coloured.svg';

const Logo = ({ isColoured }) => {
  return (
    <Link className="flex justify-center items-center text-lg font-bold md:text-3xl" to='/'>
      {
        isColoured ?
        <SolsticeLogoColoured aria-hidden={true} />
        : <SolsticeLogoLight aria-hidden={true} />
      }
      <div className={`flex flex-col items-center justify-center ml-1 h-full text-center`}>
        solstice
      </div>
    </Link>
  )
}

export default Logo