import React from 'react'
import './Ending.css'
import { FaUserPlus, FaClipboardList, FaSearch, FaUserEdit, FaFileInvoiceDollar, FaHandshake } from 'react-icons/fa';
const Ending = () => {
    
  return (
    <>
    <div className='howitwork'>
<div className='head'>How it works?</div>
<div className='storyy'> Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback</div>
    </div>
    <div className="dashboard-container">
      <div className="dashboard-item item-1">
        <FaUserPlus size={50} />
        <p>Select Your Role and Sign Up</p>
      </div>
      <div className="dashboard-item">
        <FaClipboardList size={50} />
        <p>Buyers Post Your Requirements</p>
      </div>
      <div className="dashboard-item item-3">
        <FaSearch size={50} />
        <p>Review, Select, and Contact the Best Suppliers</p>
      </div>
      <div className="dashboard-item">
        <FaUserEdit size={50} />
        <p>Suppliers Complete your profile and get notified for opportunities</p>
      </div>
      <div className="dashboard-item item-5">
        <FaFileInvoiceDollar size={50} />
        <p>Contact to Buyers and Share your Quote for the service</p>
      </div>
      <div className="dashboard-item">
        <FaHandshake size={50} />
        <p>Both the Parties can Connect and Make Business Leave a Feedback</p>
      </div>
    </div>
  
    </>
  )
}

export default Ending