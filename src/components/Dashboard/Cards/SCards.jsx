import { PeopleAltOutlined } from '@mui/icons-material'
import React from 'react'

const SCards = ({data, title, color}) => {
  return (
    <div className='flex p-6 bg-white rounded-2xl gap-4 items-center'>
      <div className={`p-1 bg-${color} rounded-lg w-10 h-10 flex items-center justify-center`}>
        <PeopleAltOutlined className='!text-xl'/>
      </div>
      <div>
        <span className='text-2xl font-semibold text-gray-600'>{data}{data > 100 && "+"}</span>
        <p className='font-medium text-sm'>{title}</p>
      </div>
    </div>
  )
}

export default SCards
