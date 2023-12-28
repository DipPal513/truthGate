import Sidebar from '@/components/Sidebar'
import React from 'react'

const Dashboard = ({children}) => {
  return (
    <div>
        <Sidebar />
        {
            children
        }
    </div>
  )
}

export default Dashboard