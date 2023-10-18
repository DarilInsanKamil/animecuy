import React from 'react'

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen flex-col'>
            <div className='flex justify-center items-cente loading'>
            </div>
            <p className='text-color-primary mt-2'>Sedang Memuat...</p>
        </div>
    )
}

export default Loading