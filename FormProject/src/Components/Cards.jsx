import React from 'react'
import Card  from './Card'

const Cards = ({users,handleRemove}) => {
  return (
    <>
    <div className="w-full max-h-96 overflow-auto p-4 gap-4 justify-center flex flex-wrap ">
        {
          users.map((item,index)=>{
            return <Card user={item} key={index} handleRemove={handleRemove} id={index}/>
          })
        }
    </div>
    </>
  )
}

export default Cards