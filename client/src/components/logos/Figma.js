import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './logos.css';

const Figma = ({ width, height }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [color, setColor] = useState(false);

  console.log(darkMode);
  const fill = {
    path_one: darkMode
      ? !color
        ? '#f4f4f4'
        : '#0acf83'
      : !color
      ? '#343434'
      : '#0acf83',
    path_two: darkMode
      ? !color
        ? '#f4f4f4'
        : '#a259ff'
      : !color
      ? '#343434'
      : '#a259ff',
    path_three: darkMode
      ? !color
        ? '#f4f4f4'
        : '#f24e1e'
      : !color
      ? '#343434'
      : '#f24e1e',
    path_four: darkMode
      ? !color
        ? '#f4f4f4'
        : '#ff7262'
      : !color
      ? '#343434'
      : '#ff7262',
    path_five: darkMode
      ? !color
        ? '#f4f4f4'
        : '#1abcfe'
      : !color
      ? '#343434'
      : '#1abcfe',
  };

  const handleMouseEnter = () => {
    setColor(true);
  };

  const handleMouseLeave = () => {
    setColor(false);
  };

  return (
    <div
      className='icon-wrap'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width={width}
        height={height}
        viewBox='0 0 256 384'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <path
            d='M64,384 C99.328,384 128,355.328 128,320 L128,256 L64,256 C28.672,256 0,284.672 0,320 C0,355.328 28.672,384 64,384 Z'
            fill={fill.path_one}
          ></path>
          <path
            d='M0,192 C0,156.672 28.672,128 64,128 L128,128 L128,256 L64,256 C28.672,256 0,227.328 0,192 Z'
            fill={fill.path_two}
          ></path>
          <path
            d='M0,64 C0,28.672 28.672,0 64,0 L128,0 L128,128 L64,128 C28.672,128 0,99.328 0,64 Z'
            fill={fill.path_three}
          ></path>
          <path
            d='M128,0 L192,0 C227.328,0 256,28.672 256,64 C256,99.328 227.328,128 192,128 L128,128 L128,0 Z'
            fill={fill.path_four}
          ></path>
          <path
            d='M256,192 C256,227.328 227.328,256 192,256 C156.672,256 128,227.328 128,192 C128,156.672 156.672,128 192,128 C227.328,128 256,156.672 256,192 Z'
            fill={fill.path_five}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Figma;
