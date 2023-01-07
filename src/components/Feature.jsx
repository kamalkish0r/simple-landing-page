import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

const Feature = ({title, description, bullets}) => {
  return (
    <div className='feature-description'>
        <div className="feature-title">
           <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className="feature-bullets">
            <ul>
                <li>
                    <div className="bullet-style">
                        <CheckIcon />
                    </div>
                    <p>{bullets[0]}</p>
                </li>
                <li>
                    <div className="bullet-style">
                        <CheckIcon />
                    </div>
                    <p>{bullets[1]}</p>
                </li>
                <li>
                    <div className="bullet-style">
                        <CheckIcon />
                    </div>
                    <p>{bullets[2]}</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Feature