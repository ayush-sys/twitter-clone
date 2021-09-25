import React from 'react'
import './css/SidebarOption.css';


export default function SidebarOption({active, text, Icon}) {
    return (
        <div className={`sidebar-opt && ${active && 'sidebar-opt--active'}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}
