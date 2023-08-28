import React from 'react'

function Product({img, link }) {
  return (
    <div className='max-[480px]:w-1/4 max-[480px]:h-[20vh] h-72 w-72  rounded-t-xl m-12 border-2 overflow-hidden border-slate-200 '>
        {/* top div and put three more for circles */}
        <div className='h-6 w-full bg-slate-200 flex items-center sticky z-10'>
        <div className='bg-white h-2 w-2 rounded-full m-0.5'></div>
        <div className='bg-white h-2 w-2 rounded-full m-0.5'></div>
        <div className='bg-white h-2 w-2 rounded-full m-0.5'></div>
        </div>
        {/* now the image part */}
        <a href={link} target='_blank' className='' rel="noreferrer">
            <img src={img} alt="" className='w-full transition-10s hover:translate-y-[-100%]'/>
        </a>

    </div>
  )
}

export default Product