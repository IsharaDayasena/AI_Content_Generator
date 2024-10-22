import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-blue-500 via-blue-800 to-purple-600
    flex justify-center items-center flex-col text-white'>
        <h2 className='text-3xl font-bold '>Browse All Templates Here</h2>
        <p>What do you like to create Today?</p>
        <div className='w-full flex justify-center'>
            <div className=' flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
                <Search className='text-primary'/>
                <input type='text' placeholder='Search...'
                onChange={(event)=>onSearchInput(event.target.value)}
                className=' bg-transparent w-full outline-none text-primary'/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection