import React from 'react';

const Rank = ({ name }) => {
  return (
    <div>
      <div className='black f2 b pb2'>
        {name}
      </div>
      <div className='black f3 b'>
        Enter an image Url
      </div>
    </div>
  );
}

export default Rank;