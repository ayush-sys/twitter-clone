import React,{useEffect, useState} from 'react';
import './css/Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
// import db from '../firebase';


export default function Feed() {

    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     db.collection('posts').onSnapshot(snapshot =>{
    //         setPosts(snapshot.docs.map(doc => doc.data()));
    //     })
    // }, []);

    return (
        <div className='feed'>
            {/* Header */}
            <div className='feed-header'>
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox/>

            {/* Posts */}
            <Post displayName="Ayush Pattanayak" userName="noob_coder" verified text="Hey, it's working" avatar="A" image="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80"/>
            <Post displayName="Ayush Pattanayak" userName="noob_coder"  text="Hey, it's working" avatar="A"/>
            <Post displayName="Ayush Pattanayak" userName="noob_coder" verified text="Hey, it's working" avatar="A"/>
            <Post displayName="Ayush Pattanayak" userName="noob_coder"  text="Hey, it's working" avatar="A"/>
            <Post displayName="Ayush Pattanayak" userName="noob_coder"  text="Hey, it's working" avatar="A"/>
            <Post displayName="Ayush Pattanayak" userName="noob_coder"  text="Hey, it's working" avatar="A"/>
            <Post displayName="Ayush Pattanayak" userName="noob_coder" verified text="Hey, it's working" avatar="A"/>
            <Post displayName="Ayush Pattanayak" userName="noob_coder" verified text="Hey, it's working" avatar="A"/>
            <Post displayName="Ayush Pattanayak" userName="noob_coder"  text="Hey, it's working" avatar="A"/>
            <Post displayName="Ayush Pattanayak" userName="noob_coder"  text="Hey, it's working" avatar="A"/>
            
        </div>
    )
}
