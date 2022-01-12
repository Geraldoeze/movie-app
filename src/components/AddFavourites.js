import React from 'react';

const AddFavourite = () => {
    return(
        <>
            <span className='mr-2'>Add to Fourites </span>
            <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                class='bi bi-heart-fill'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                >

                <path 
                    fill-rule='evenodd'
                    d='MB 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736'
                />
            </svg>
        </>
    )
}

export default AddFavourite;