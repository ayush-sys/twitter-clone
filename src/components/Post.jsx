import { Avatar } from '@mui/material';
import React from 'react';
import './css/Post.css';
import { blue,lightBlue,indigo } from '@mui/material/colors';
import { ChatBubbleOutline, Publish, Repeat, VerifiedUser, FavoriteBorderOutlined } from '@mui/icons-material';



export default function Post({displayName,userName,verified,text,image,avatar}) {
    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar sx={{ bgcolor: indigo[600] }}>A</Avatar>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="header-text">
                        <h3>Ayush pattanayak {" "}
                            <span className="post-header-bage">
                                <VerifiedUser className="post-badge"/> @ noob_coder
                            </span>
                        </h3>
                    </div>
                    <div className="post-header-desc">
                        <p>This is a twitter clone</p>
                    </div>
                </div>
                <img alt="pic"/>
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
