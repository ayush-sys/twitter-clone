import { Avatar, Button } from '@mui/material';
import React from 'react';
import './css/TweetBox.css';
import { blue } from '@mui/material/colors';


export default function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox-input">
                    <Avatar sx={{ bgcolor: blue[600] }}>A</Avatar>
                    <input placeholder="What's happening?" type='text' className='tweetBox-input'></input>
                </div>
                <input placeholder="Enter image url" type='text' className="image-input"></input>
                <Button className="tweet-btn">Tweet</Button>
            </form>
        </div>
    )
}
