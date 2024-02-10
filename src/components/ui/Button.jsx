import React from 'react'

const Button = ({props}) => {
  return (
    <>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 ">
            {props}
        </button>
    </>
  )
}

export default Button