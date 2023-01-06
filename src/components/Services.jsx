import React from 'react'
import Service from './Service'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Services = () => {
  return (
    <div className='services-container'>
        <div className="intro-text">
            <h2>
                Supercharge your workflow to get started
            </h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore molestiae iste officiis iusto, alias placeat exercitationem. Sit atque excepturi distinctio.
            </p>
        </div>

        <div className="services">
            <Service logo={<MailOutlineIcon/>} title="Email Management"  description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores saepe consectetur quos repudiandae optio, accusantium molestiae sequi omnis vel quae!"}/>
             <Service logo={<MailOutlineIcon/>} title="Email Management"  description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores saepe consectetur quos repudiandae optio, accusantium molestiae sequi omnis vel quae!"}/>
              <Service logo={<MailOutlineIcon/>} title="Email Management"  description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores saepe consectetur quos repudiandae optio, accusantium molestiae sequi omnis vel quae!"}/>
               <Service logo={<MailOutlineIcon/>} title="Email Management"  description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores saepe consectetur quos repudiandae optio, accusantium molestiae sequi omnis vel quae!"}/>
                <Service logo={<MailOutlineIcon/>} title="Email Management"  description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores saepe consectetur quos repudiandae optio, accusantium molestiae sequi omnis vel quae!"}/>
                <Service logo={<MailOutlineIcon/>} title="Email Management"  description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores saepe consectetur quos repudiandae optio, accusantium molestiae sequi omnis vel quae!"}/>
        </div>
    </div>
  )
}


export default Services