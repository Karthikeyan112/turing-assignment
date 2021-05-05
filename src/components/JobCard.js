import React from 'react'

const JobCard = ({ role, postedTime, company, location, description, rate }) => {
  return (
    <div className='item-container'>
      <div className='role-container'>
        <h4 className='role'>{role}</h4>
        <span className='timestamp'>{postedTime}</span>
      </div>
      <div className='company-details'>
        <div className='company-name'>{company}</div>
        <div className='location'>{location}</div>
      </div>
      <div className='description'>
        {description}
        {rate && <div className='rate'>{rate}</div>}
      </div>
      <button className='offer-btn nxt-btn'>&#62;</button>
    </div>
  )
}

export default JobCard;
