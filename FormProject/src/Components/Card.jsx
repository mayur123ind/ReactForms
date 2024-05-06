import React from "react";

const Card = ({ user,handleRemove,id}) => {
  return (
    <>
     <div className="w-52 h-full bg-sky-300 rounded-lg p-2 flex flex-col items-center">
          <div className="w-[3vw] h-[3vw] rounded-full bg-blue-200 overflow-hidden">
            <img className="w-full h-full object-cover" src={user.image} />
          </div>
          <h1 className="text-xl mt-1 font-semibold">{user.name}</h1>
          <h4 className="opacity-60 text-xs font-semibold"> {user.email}</h4>
          <p className="text-center mt-1 text-xs font-semibold leading-none tracking-tight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure non
            minima.
          </p>
          <button onClick={()=>handleRemove(id)}
          className="px-3 py-1 bg-red-500 text-xs rounded-lg font-semibold text-white mt-4">
            Remove it
          </button>
        </div>;
      
    </>
  );
};

export default Card;
