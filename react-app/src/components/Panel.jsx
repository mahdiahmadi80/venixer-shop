import React from 'react'

export default function Panel() {
  return (
    <div>
      <div className='container mx-auto mt-16 px-6'>
        <h2 className='mb-6 text-3xl font-semibold text-center'> دسته بندی</h2>
        <h2 className='max-w-md mx-auto text-center'>متن دسته بندی</h2>
      </div>
      <div className='container mx-auto relative my-6 mb-32 mt-12 px-6'>
        <div className='flex flex-col justify-center max-w-xl mx-auto mb-6 md:space-x-10 md:flex-row-reverse'>
            <div></div>
        </div>
      </div>
    </div>
  )
}
