import React from 'react';
import '../style/widgets.css'
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

const Widgets=()=>{
	return(
		<div className='widgets'>
			<div className='widgets_input'>
			<SearchIcon className='widgets_searchIcon'/>
			<input placeholder='Search twitter' type='text'/>
			</div>
			<div className='widgets_widgetContainer'>
			<h2>What's Happening</h2>
			<TwitterTweetEmbed tweetId={'1272155597291560965'} />
			<TwitterTimelineEmbed sourceType='profile'
								screenName='kavarmitesh1'
								options={{height:400}} />
			<TwitterShareButton url={'https://www.facebook.com/mitesh.patel.3139/'}
				options={{text:'react js awesome',via:"kavarmitesh1"}}/>
			</div>
		</div>
		)
}

export default Widgets;