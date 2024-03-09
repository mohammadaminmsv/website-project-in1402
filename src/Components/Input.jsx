import React from 'react'

const Input = ({place , name , id ,type ,classn,children }) => {
  return (
    <>
   <input className={classn} placeholder={place} type={type} id={id} name={name} >
        {children}
   </input>
   </>
  )
}

export default Input