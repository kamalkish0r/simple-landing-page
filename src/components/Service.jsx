import React from 'react'

const Service = ({logo , title , description }) => {
  return (
    <div className='service'>
        <div className="service-logo">
            {logo}
        </div>
        <div className="service-title">
            <h3>
               {title}
            </h3>
        </div>
        <div className="service-description">
           {
            description
           }
        </div>
    </div>
  )
}

export default Service;