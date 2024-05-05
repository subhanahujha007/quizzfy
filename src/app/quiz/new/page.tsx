import React from 'react'
import UploadDoc from '../UploadDoc'

const page = () => {
  
    return (
    <div className='flex flex-col flex-1'>
        <main className='py-11 flex flex-col flex-1 items-center mt-24 gap-4'>
            <h2 className='text-3xl font-bold mb-4  '>What Do you want to be quizzed about today?</h2>
        <UploadDoc/>
        </main>
    </div>
  )
}

export default page