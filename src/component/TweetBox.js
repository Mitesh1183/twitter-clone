import React,{useState} from 'react';
import '../style/tweetbox.css'
import {Avatar,Button} from '@material-ui/core'
import db from '../firebase'

const TweetBox=()=>{

	const[tweetMessage,setTweetMessage] =useState('')
	const[tweetImage,setTweetImage] =useState('')
	const sendTweet=(e)=>{
		e.preventDefault();

		db.collection('posts').add({
			displayName:'kavar',
			username:'kkkk',
			verified:true,
			text:tweetMessage,
			image:tweetImage,
			avatar:'https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo'
		})

		setTweetMessage('');
		setTweetImage('')
	}
	return(
		<div className='tweetbox'>
			<form>
				<div className='tweetbox_input'>
				<Avatar src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo" />
				<input value={tweetMessage}
						onChange={e=>setTweetMessage(e.target.value)}
				 placeholder="What's happening" type='text'/>
				</div>
				<input value={tweetImage}
						onChange={e=>setTweetImage(e.target.value)} className='tweetbox_imageInput' placeholder="What's happening" type='text'/>
				<Button onClick={sendTweet} type='submit' className='tweetbox_tweetButton'>Tweet</Button>
			</form>

		</div>
		)
}

export default TweetBox;