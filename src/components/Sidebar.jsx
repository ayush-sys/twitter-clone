import React from 'react';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import './css/Sidebar.css';
import { BookmarkBorder, ListAlt, MailOutline, MoreHoriz, PermIdentity, Search, NotificationsNone, Home } from '@mui/icons-material';
import { Button} from '@mui/material';


export default function Sidebar(){

    return(
        <div className='sidebar'>
            {/* Twitter Icon */}
            <TwitterIcon/>

            {/* Sidebar Icons */}
            <SidebarOption text='Home' Icon={Home} active/>
            <SidebarOption text='Explore' Icon={Search}/>
            <SidebarOption text='Notifications' Icon={NotificationsNone}/>
            <SidebarOption text='Messages' Icon={MailOutline}/>
            <SidebarOption text='Bookmarks' Icon={BookmarkBorder}/>
            <SidebarOption text='Lists' Icon={ListAlt}/>
            <SidebarOption text='Profile' Icon={PermIdentity}/>
            <SidebarOption text='More' Icon={MoreHoriz}/>


            {/* Tweet Icon */}
            <Button variant='outlined' className='tweet-btn' fullWidth>Tweet</Button>

        </div>
    );
}
