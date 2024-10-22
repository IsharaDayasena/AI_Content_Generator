"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateList from './_components/TemplateList'

function Dashboard() {
  const [userSearchInput,setUserSearchInput] = useState<string>();
  return (
    <div>
      {/* Search section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>

       {/* Template section */}
       <TemplateList userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard