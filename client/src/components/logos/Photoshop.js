import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './logos.css';

const PhotoShop = ({ width, height }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [color, setColor] = useState(false);

  const fill = {
    rect: darkMode
      ? !color
        ? '#f4f4f4'
        : '#001E36'
      : !color
      ? '#343434'
      : '#001E36',
    path_one: darkMode
      ? !color
        ? '#343434'
        : '#31A8FF'
      : !color
      ? '#f4f4f4'
      : '#31A8FF',
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
        viewBox='0 0 128 128'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='128' height='128' fill={fill.rect} />
        <path
          d='M28.5781 90.9788V36.9375C28.5781 36.5436 28.7478 36.3455 29.0859 36.3455C29.9866 36.3455 31.0577 36.3314 32.2991 36.3031C33.5391 36.2752 34.8783 36.2471 36.317 36.2189C37.7545 36.191 39.2768 36.1627 40.8839 36.134C42.4911 36.1061 44.0837 36.092 45.6618 36.0916C49.3359 35.9974 52.9984 36.5412 56.4866 37.6988C59.132 38.5938 61.5447 40.0672 63.5491 42.0119C65.2478 43.6976 66.5608 45.7317 67.3973 47.974C68.1876 50.1564 68.5881 52.4609 68.5803 54.782C68.7401 58.74 67.6448 62.6472 65.4509 65.9454C63.3517 68.8888 60.4001 71.1174 56.9944 72.3305C53.1987 73.6975 49.1881 74.3708 45.154 74.3182C43.9129 74.3182 43.0394 74.3041 42.5335 74.2758C42.0257 74.2479 41.2645 74.2337 40.2501 74.2334V90.8941C40.2647 90.9975 40.2552 91.1029 40.2221 91.2019C40.1891 91.3009 40.1334 91.3909 40.0596 91.4648C39.9858 91.5386 39.8958 91.5942 39.7967 91.6273C39.6977 91.6604 39.5923 91.6699 39.4889 91.6552H29.1708C28.7757 91.6552 28.5781 91.4297 28.5781 90.9788ZM40.25 46.4939V64C40.9821 64.057 41.6585 64.0852 42.279 64.0849H45.0692C47.1163 64.115 49.1558 63.8299 51.1161 63.2394C52.7921 62.7417 54.2898 61.7729 55.4308 60.4481C56.6113 58.8999 57.1963 56.9791 57.0792 55.0357C57.124 53.3999 56.6983 51.7856 55.8527 50.3845C54.9639 49.0298 53.6796 47.9815 52.1742 47.3823C50.2083 46.6178 48.1083 46.2582 46.0001 46.3248C44.6474 46.3248 43.4495 46.339 42.4064 46.3672C41.3617 46.3962 40.6429 46.4385 40.25 46.4939Z'
          fill={fill.path_one}
        />
        <path
          d='M101.502 60.6172C99.5397 59.8103 97.4972 59.2151 95.4088 58.8415C93.4809 58.399 91.5097 58.172 89.5316 58.1647C88.4614 58.1358 87.3927 58.264 86.3597 58.5452C85.7021 58.6916 85.1177 59.0662 84.7102 59.6027C84.435 60.0317 84.2885 60.5306 84.2883 61.0402C84.3035 61.5348 84.4816 62.0105 84.795 62.3935C85.2893 62.9714 85.8932 63.4457 86.5718 63.7891C87.7775 64.4384 89.0199 65.0171 90.2928 65.5223C93.1308 66.4728 95.8427 67.765 98.3687 69.3706C100.089 70.4567 101.513 71.9534 102.513 73.726C103.353 75.4044 103.774 77.2617 103.739 79.1384C103.79 81.6168 103.082 84.0514 101.709 86.1155C100.241 88.2114 98.2006 89.8407 95.8319 90.8092C92.8105 92.0217 89.5715 92.5977 86.3173 92.5011C83.9182 92.5254 81.5231 92.2985 79.1712 91.8242C77.2098 91.4793 75.2941 90.9118 73.4613 90.1328C73.2764 90.0373 73.1226 89.8912 73.0178 89.7114C72.9131 89.5316 72.8617 89.3257 72.8698 89.1177V79.9844C72.8597 79.8949 72.874 79.8043 72.9114 79.7223C72.9487 79.6404 73.0077 79.5701 73.0819 79.519C73.1544 79.4781 73.2377 79.4602 73.3206 79.4678C73.4036 79.4754 73.4822 79.508 73.5461 79.5614C75.6892 80.7568 77.9984 81.626 80.3977 82.1407C82.4176 82.6471 84.4896 82.9168 86.5718 82.9442C88.0631 83.037 89.5553 82.7762 90.9267 82.1831C91.347 81.9908 91.7025 81.6808 91.9502 81.2905C92.1978 80.9003 92.3269 80.4466 92.3218 79.9844C92.286 79.5586 92.1531 79.1466 91.9334 78.7801C91.7136 78.4136 91.4128 78.1023 91.054 77.8701C89.4538 76.8216 87.7179 75.9964 85.8944 75.4176C83.239 74.4931 80.7213 73.2129 78.41 71.6119C76.7566 70.4627 75.3955 68.9421 74.4356 67.1721C73.6029 65.5059 73.1819 63.6642 73.208 61.8016C73.2035 59.5639 73.8185 57.3687 74.9848 55.459C76.3143 53.3555 78.2235 51.6813 80.4826 50.6379C83.1051 49.2041 86.0522 48.4686 89.0409 48.5019C91.4177 48.3778 93.8001 48.4124 96.1723 48.6056C98.1022 48.9984 99.9772 49.624 101.756 50.4688C101.871 50.5017 101.977 50.5609 102.065 50.6416C102.153 50.7224 102.22 50.8226 102.263 50.9342C102.32 51.1406 102.349 51.3539 102.348 51.5681V60.11C102.354 60.2093 102.333 60.3084 102.289 60.3974C102.244 60.4864 102.177 60.5622 102.094 60.6172C102.006 60.6733 101.903 60.703 101.798 60.703C101.693 60.703 101.59 60.6733 101.502 60.6172Z'
          fill={fill.path_one}
        />
      </svg>
    </div>
  );
};

export default PhotoShop;
