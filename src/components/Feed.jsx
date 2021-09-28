import React from 'react';
import './css/Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';


export default function Feed() {
    return (
        <div className='feed'>
            {/* Header */}
            <div className='feed-header'>
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox/>

            {/* Posts */}
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            
        </div>
    )
}
