import React from 'react'
import TableCon from './_components/Table'
import SideNav from '../dashboard/_components/SideNav'


function History() {
  return (
    
         <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block w-64 fixed'>
            <SideNav/></div>
        <div className='md:ml-64'>
        <TableCon/></div>
        
        
        </div>
   
  )
}

export default History