import React from 'react'

const Button = ({styles}) => {
  return (
     <button type="button" className={`py-4 px-6 bg-teal-800 font-poppins rounded-[10px] font-medium text-[18px] text-white outline-none ${styles}`}>
         Explore
     </button>
  )
}

export default Button