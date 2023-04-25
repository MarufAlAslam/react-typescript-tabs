import React from 'react';

const Box = ({ name, value }) => {
    return (
        <div>
            <p>
                {name}
            </p>
            <div className='text-center value'>
                {value}%
            </div>
        </div>
    );
};

export default Box;