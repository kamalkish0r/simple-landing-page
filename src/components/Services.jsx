import React from 'react'
import Service from './Service'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WidgetsIcon from '@mui/icons-material/Widgets';

const serviceList = [
    {
        id : 1,
        logo : <MailOutlineIcon />,
        Title : "Email Management",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati quo incidunt atque totam hic in delectus voluptatibus error doloremque."
    },
    {
        id : 2,
        logo : <DateRangeIcon />,
        Title : "Campaign Calender",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati quo incidunt atque totam hic in delectus voluptatibus error doloremque."
    },
    {
        id : 3,
        logo : <PersonIcon />,
        Title : "Personal Assistance",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati quo incidunt atque totam hic in delectus voluptatibus error doloremque."
    },
    {
        id : 4,
        logo : <PaymentIcon />,
        Title : "Payments feature",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati quo incidunt atque totam hic in delectus voluptatibus error doloremque."
    },
    {
        id : 5,
        logo : <WidgetsIcon />,
        Title : "Utility apps",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati quo incidunt atque totam hic in delectus voluptatibus error doloremque."
    },
    {
        id : 5,
        logo : <NotificationsIcon />,
        Title : "Sale notification",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum obcaecati quo incidunt atque totam hic in delectus voluptatibus error doloremque."
    }
];

const Services = () => {
  return (
    <div className='services-container' id='about'>
        <div className="intro-text">
            <h2>
                Supercharge your workflow to get started
            </h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore molestiae iste officiis iusto, alias placeat exercitationem. Sit atque excepturi distinctio.
            </p>
        </div>

        <div className="services">
            {
                serviceList.map((data, index)=>{
                    return <Service logo = {data.logo} title = {data.Title} description = {data.description} />
                })
            }
        </div>
    </div>
  )
}


export default Services