import React from 'react';
import './thumbnail.css';

const Thumbnail = ({ source, alt, name, client, width }) => {
  return (
    <div className='thumbnail'>
      <div width='100%' className='thumbnail-cont'>
        <img src={source} alt={alt} width={width} />
      </div>
      <div className='thumbnail-text'>
        <p>{name}</p>
        {client.map((c) => (
          <div className='thumbnail-text' key={c}>
            <p>|</p>
            <p>{c}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thumbnail;
