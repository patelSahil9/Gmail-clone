import React from 'react'

export default function Compose({showCompose}) {
  return (<>
    <div className={`bg-gray-100 w-full ml-[75px] h-[100px] flex flex-col bg-red-500 ${showCompose ? 'block' : 'hidden'}`}>
      Compose
    </div>
    </>
  )
}
