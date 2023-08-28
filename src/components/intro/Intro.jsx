import React from 'react'
import Me from '../img/me1.png'

function intro() {
  return (
    // top class is i which is split into two parts , left and right
    <div className='flex flex-col h-screen sm:flex sm:flex-row'>
        {/* i-left */}
        <div className='flex-1 flex items-center justify-center '>

            <div className='sm:flex p-3 sm:p-10 sm:justify-between sm:flex-col content-center justify-center items-center h-full sm:h-1/2'>

                <h2 className='text-3xl font-light '>Hello, My name is</h2> 
                <h1 className='text-6xl '>Qadeer Zawri</h1>
                <div className=' max-h-14 overflow-hidden'>

                    <div className=' h-full animate-[move_10s_ease-in-out_infinite_alternate]' >

                    <div className='h-14 text-3xl font-bold text-[#59b256]  flex items-center'>Front-end-Developer</div>
                    <div className='h-14 text-3xl font-bold text-[#59b256]   flex items-center '>Business Economicst</div>
                    <div className='h-14 text-3xl font-bold text-[#59b256]   flex items-center'>Collaborative team player</div>
                    <div className='h-14 text-3xl font-bold text-[#59b256]   flex items-center'>Physics Enthusiast</div>
                    <div className='h-14 text-3xl font-bold text-[#59b256]   flex items-center'>Continuous Learning </div>
                    </div>
                </div>
                <p  className='hidden sm:block'>
                    I create front-end webs for my customers, specializing in creating modern websites, business and economics analysis and principles of Physics and problem solving. 
                </p>
            </div>
            <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="absolute bottom-5 w-7 h-7"          
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
        </div>

        <div className='flex-1 relative'>
            {/* i-right */}
            <div className='i-bg absolute top-0 right-0'></div>
            <img src={Me} alt="my-profile" className='w-full h-full object-cover absolute' />
        </div>


    </div>
  )
}

export default intro