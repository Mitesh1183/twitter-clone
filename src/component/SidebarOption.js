import React from 'react';
import '../style/SidebarOption.css'

const SidebarOption =({active, Icon, text })=>{
	return(<>
		<div className={`sidebarOption ${active && "sidebarOption--active"}`}>
		<Icon />
		<h2>{text}</h2>
		</div>
		</>
		)
}

export default SidebarOption