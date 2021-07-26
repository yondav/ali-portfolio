import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './logos.css';

const Acrobat = ({ width, height }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [color, setColor] = useState(false);

  const fill = {
    path_one: darkMode
      ? !color
        ? '#f4f4f4'
        : '#f4b400'
      : !color
      ? '#343434'
      : '#f4b400',
    path_two: darkMode
      ? !color
        ? '#343434'
        : '#f4f4f4'
      : !color
      ? '#f4f4f4'
      : '#f4f4f4',
    path_three: darkMode
      ? !color
        ? '#c9c9c9'
        : '#fada80'
      : !color
      ? '#898989'
      : '#fada80',
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
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 200 275'
      >
        <defs>
          <linearGradient
            id='a'
            x1='-244.81'
            y1='732.09'
            x2='-243.81'
            y2='732.09'
            gradientTransform='matrix(0, 63.54, 63.54, 0, -46353.32, 15631.07)'
            gradientUnits='userSpaceOnUse'
          ></linearGradient>
          <radialGradient
            id='b'
            cx='-231.14'
            cy='666.13'
            r='104.95'
            gradientTransform='matrix(4.23, 0, 0, -4.23, 983.11, 2822.23)'
            gradientUnits='userSpaceOnUse'
          ></radialGradient>
        </defs>
        <g>
          <path
            d='M125,0H18.75A18.81,18.81,0,0,0,0,18.75v237.5A18.81,18.81,0,0,0,18.75,275h162.5A18.81,18.81,0,0,0,200,256.25V75L156.25,43.75Z'
            fill={fill.path_one}
          />
          <path
            d='M140.62,125H59.37A9.4,9.4,0,0,0,50,134.38v81.25A9.4,9.4,0,0,0,59.37,225h81.25a9.4,9.4,0,0,0,9.38-9.37V134.38A9.41,9.41,0,0,0,140.62,125Zm-3.12,71.88h-75V153.13h75Z'
            fill={fill.path_two}
          />
          <path d='M130.48,69.52,200,139V75Z' fill='url(#a)' />
          <path
            d='M125,0V56.25A18.74,18.74,0,0,0,143.75,75H200Z'
            fill={fill.path_three}
          />
        </g>
      </svg>
    </div>
  );
};

export default Acrobat;
