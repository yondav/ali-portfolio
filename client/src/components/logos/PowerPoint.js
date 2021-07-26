import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './logos.css';

const PowerPoint = ({ width, height }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [color, setColor] = useState(false);

  const fill = {
    path_one: darkMode
      ? !color
        ? '#f4f4f4'
        : '#ED6C47'
      : !color
      ? '#343434'
      : '#ED6C47',
    path_two: darkMode
      ? !color
        ? '#c1c1c1'
        : '#FF8F6B'
      : !color
      ? '#595959'
      : '#FF8F6B',
    path_three: darkMode
      ? !color
        ? '#e6e6e6'
        : '#D35230'
      : !color
      ? '#393939'
      : '#D35230',
    stop: darkMode
      ? !color
        ? '#dddddd'
        : '#b62f14'
      : !color
      ? '#333333'
      : '#b62f14',
    path_four: darkMode
      ? !color
        ? '#343434'
        : '#f4f4f4'
      : !color
      ? '#f4f4f4'
      : '#f4f4f4',
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
        viewBox='0 0 2000 2000'
      >
        <path
          d='M1160.9 982.3L1026.95 0h-10.002C529.872 1.422 135.372 395.922 133.95 882.998V893z'
          fill={fill.path_one}
        />
        <path
          d='M1036.952 0h-10.002v893l446.5 178.6 446.5-178.6v-10.002C1918.528 395.922 1524.028 1.422 1036.952 0z'
          fill={fill.path_two}
        />
        <path
          d='M1919.95 893v9.823c-1.398 487.185-395.992 881.779-883.177 883.177h-19.646c-487.185-1.398-881.779-395.992-883.177-883.177V893z'
          fill={fill.path_three}
        />
        <linearGradient
          gradientTransform='matrix(1 0 0 -1 0 1788)'
          y2='339.899'
          x2='811.655'
          y1='1450.101'
          x1='170.645'
          gradientUnits='userSpaceOnUse'
          id='a'
        >
          <stop offset='1' stopColor={fill.stop} />
        </linearGradient>
        <path
          d='M81.843 401.85h818.613c45.201 0 81.843 36.643 81.843 81.843v818.613c0 45.201-36.643 81.844-81.843 81.844H81.843c-45.2 0-81.843-36.643-81.843-81.843V483.693c0-45.2 36.643-81.843 81.843-81.843z'
          fill='url(#a)'
        />
        <path
          d='M500.08 620.144a224.99 224.99 0 01149.042 43.668 156.272 156.272 0 0151.883 126.493 176.015 176.015 0 01-25.584 94.524 170.963 170.963 0 01-72.646 64.207 246.66 246.66 0 01-109.259 22.95H389.973v192.441H283.929V620.144zM389.884 888.848h91.265a118.501 118.501 0 0080.683-24.066 89.3 89.3 0 0027.281-70.413c0-59.98-34.857-89.97-104.57-89.97h-94.658v184.449z'
          fill={fill.path_four}
        />
      </svg>
    </div>
  );
};

export default PowerPoint;
