import React from 'react'

const FinancialOverview = () => {
  return (
    <div className='financial-overview-container'>
        <div className="content">
            <div className="message">
                <h2>
                    A nice and simple financial overview
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam minus inventore ipsa, architecto repellat?
                </p>
            </div>

            <div className="feature-cnt">
                <div className="feature">
                    <h3>120+</h3>
                    <p>Useful widgets</p>
                </div>
                <div className="feature">
                    <h3>20+</h3>
                    <p>Integrations</p>
                </div>
                <div className="feature">
                    <h3>65+</h3>
                    <p>Features out</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinancialOverview