import React from 'react';
import './css/Widgets.css';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import { Search } from '@mui/icons-material';


export default function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets-input">
                <Search className="widgets-search"/>
                <input type="text" placeholder="Seach"/>
            </div>

            <div className="widgets-container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1439925298737287177"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="ZeeNews"
                    options={{height:400}}
                />

                <TwitterShareButton
                    options={{text:"React JS is awesome !!", via:"noob_coder"}}
                />
            </div>
        </div>
    )
}
