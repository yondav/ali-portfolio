import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './logos.css';

const Sketch = ({ width, height }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [color, setColor] = useState(false);

  const fill = {
    poly_one: darkMode
      ? !color
        ? '#eeeeee'
        : '#EB6C00'
      : !color
      ? '#222222'
      : '#EB6C00',
    poly_two: darkMode
      ? !color
        ? '#f4f4f4'
        : '#FDAD00'
      : !color
      ? '#343434'
      : '#FDAD00',
    poly_three: darkMode
      ? !color
        ? '#f9f9f9'
        : '#FDD231'
      : !color
      ? '#393939'
      : '#FDD231',
    poly_four: darkMode
      ? !color
        ? '#ffffff'
        : '#FEEEB7'
      : !color
      ? '#595959'
      : '#FEEEB7',
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
        viewBox='0 0 256 232'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid'
      >
        <g>
          <polygon
            fill={fill.poly_one}
            points='0 82.6076 128 231.6616 51.846 82.6076'
          ></polygon>
          <polygon
            fill={fill.poly_one}
            points='204.1533 82.6076 128.0003 231.6616 255.9993 82.6076'
          ></polygon>
          <polygon
            fill={fill.poly_two}
            points='51.8463 82.6076 128.0003 231.6616 204.1543 82.6076'
          ></polygon>
          <polygon
            fill={fill.poly_three}
            points='55.8548 7.6282 51.8458 82.6072 127.9998 0.0002'
          ></polygon>
          <polygon
            fill={fill.poly_three}
            points='204.1533 82.6076 200.1453 7.6276 128.0003 0.0006'
          ></polygon>
          <polygon
            fill={fill.poly_two}
            points='204.1542 82.6076 255.9992 82.6076 200.1452 7.6276'
          ></polygon>
          <polygon
            fill={fill.poly_two}
            points='0 82.6076 51.846 82.6076 55.855 7.6276'
          ></polygon>
          <polygon
            fill={fill.poly_four}
            points='127.9998 0.0002 51.8458 82.6072 204.1538 82.6072'
          ></polygon>
        </g>
      </svg>
    </div>
  );
};

export default Sketch;
