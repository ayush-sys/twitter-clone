import { Avatar } from '@mui/material';
import React from 'react';
import './css/Post.css';
import { blue } from '@mui/material/colors';
import { ChatBubbleOutline, Publish, Repeat, VerifiedUser, FavoriteBorderOutlined } from '@mui/icons-material';



export default function Post({displayName,userName,verified,text,image,avatar}) {
    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar sx={{ bgcolor: blue[600] }}>{avatar}</Avatar>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="header-text">
                        <h3>{displayName} {" "}
                            <span className="post-header-bage">
                                {verified && <VerifiedUser className="post-badge"/>} @ {userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post-header-desc">
                        <p>{text}</p>
                    </div>
                </div>
                <img alt="pic" src={image}/>
                <div className="post-footer">
                    <ChatBubbleOutline fontSize="small"/>
                    <Repeat fontSize="small"/>
                    <FavoriteBorderOutlined fontSize="small"/>
                    <Publish fontSize="small"/>
                </div>
            </div>
        </div>
    )
}
