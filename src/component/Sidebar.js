import React from 'react';
import SidebarOption from './SidebarOption'
import '../style/sidebar.css'

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';


const Sidebar=()=>{
	return(
		<div className='sidebar'>
		<TwitterIcon className='sidebar_twitterIcon'/>
		<SidebarOption active Icon={HomeIcon} text='Home'/>
		<SidebarOption Icon={SearchIcon} text='Explore'/>
		<SidebarOption Icon={NotificationsNoneIcon} text='Notification'/>
		<SidebarOption Icon={MailOutlineIcon} text='Mail'/>
		<SidebarOption Icon={BookmarkBorderIcon} text='Explore'/>
		<SidebarOption Icon={ListAltIcon} text='Lists'/>
		<SidebarOption Icon={PermIdentityIcon} text='Home'/>
		<SidebarOption Icon={MoreHorizIcon} text='Explore'/>


		<Button variant='outlined' className="sidebar_tweet" fullWidth>Tweet</Button>
		</div>
		)
}


export default Sidebar