import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
    const navigate = useNavigate();
  return (
    <div>
      ddddddddddd
      <button onClick={()=> navigate('/')}>Back</button>
    </div>
  )
}

export default AdminPanel
