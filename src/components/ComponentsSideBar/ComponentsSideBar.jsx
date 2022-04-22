import './ComponentsSideBar.scss';
import React from 'react';

import img from '../../assets/images/components.png'
import * as actions from '../../utils/payloads/actions.ts';
import * as conditional from '../../utils/payloads/conditional.ts';
import * as context from '../../utils/payloads/context.ts';
import * as divider from '../../utils/payloads/divider.ts';
import * as image from '../../utils/payloads/image.ts';
import * as input from '../../utils/payloads/input.ts';
import * as preview from '../../utils/payloads/preview.ts';
import * as section from '../../utils/payloads/section.ts';

const Action =(props)=>{

	const clickHandler =(value)=>{
		props.setSource(prev=>{
			return [...prev, actions[value][0]];
		});
	}

	return(
		<div className='dropDown'>
			<div className ='title'>Action</div>
			<div className ='item' onClick={()=>{clickHandler('actionsWithAllSelects')}}><img src={img}/><span>All selects</span></div>
			<div className ='item' onClick={()=>{clickHandler('actionsWithButton')}}><img src={img}/><span>Button</span></div>
			<div className ='item' onClick={()=>{clickHandler('actionsWithButtonAsLink')}}><img src={img}/><span>Button As Link</span></div>
			<div className ='item' onClick={()=>{clickHandler('actionsWithDatePicker')}}><img src={img}/><span>Date Picker</span></div>
			{/* <div className ='item' onClick={()=>{clickHandler('actionsWithFilteredConversationsSelect')}}><img src={img}/><span>Filtered Conversations</span></div>
			<div className ='item' onClick={()=>{clickHandler('actionsWithInitializedSelects')}}><img src={img}/><span>Initialized Selects</span></div> */}
		</div>
	)
}

const Conditional =(props)=>{

	const clickHandler =(value)=>{
		props.setSource(prev=>{
			return [...prev, conditional[value][0]];
		});
	}

	return(
		<div className='dropDown'>
			<div className ='title'>Conditional</div>
			<div className ='item' onClick={()=>{clickHandler('conditional')}}><img src={img}/><span>conditional</span></div>
		</div>
	)
}

const Context =(props)=>{

	const clickHandler =(value)=>{
		props.setSource(prev=>{
			return [...prev, context[value][0]];
		});
	}

	return(
		<div className='dropDown'>
			<div className ='title'>Context</div>
			<div className ='item' onClick={()=>{clickHandler('contextWithMrkdwn')}}><img src={img}/><span>Mrkdwn</span></div>
			<div className ='item' onClick={()=>{clickHandler('contextWithPlainText')}}><img src={img}/><span>Plain Text</span></div>
			<div className ='item' onClick={()=>{clickHandler('contextWithTextAndImages')}}><img src={img}/><span>Text And Images</span></div>
		</div>
	)
}

const Divider =(props)=>{

	const clickHandler =(value)=>{
		props.setSource(prev=>{
			return [...prev, divider[value][0]];
		});
	}

	return(
		<div className='dropDown'>
			<div className ='title'>Divider</div>
			<div className ='item' onClick={()=>{clickHandler('divider')}}><img src={img}/><span>Divider</span></div>
		</div>
	)
}

const Image =(props)=>{

	const clickHandler =(value)=>{
		props.setSource(prev=>{
			return [...prev, image[value][0]];
		});
	}

	return(
		<div className='dropDown'>
			<div className ='title'>Image</div>
			<div className ='item' onClick={()=>{clickHandler('imageWithTitle')}}><img src={img}/><span>Image with Title</span></div>
			<div className ='item' onClick={()=>{clickHandler('imageWithoutTitle')}}><img src={img}/><span>Image without Title</span></div>
		</div>
	)
}

const Input =(props)=>{

	const clickHandler =(value)=>{
		props.setSource(prev=>{
			return [...prev, input[value][0]];
		});
	}

	return(
		<div className='dropDown'>
			<div className ='title'>Input</div>
			<div className ='item' onClick={()=>{clickHandler('inputWithDatePicker')}}><img src={img}/><span>Date Picker</span></div>
			<div className ='item' onClick={()=>{clickHandler('inputWithLinearScale')}}><img src={img}/><span>Linear Scale</span></div>
			<div className ='item' onClick={()=>{clickHandler('inputWithMultiUsersSelect')}}><img src={img}/><span>Multi Users Select</span></div>
			<div className ='item' onClick={()=>{clickHandler('inputWithMultilinePlainTextInput')}}><img src={img}/><span>Multiline Plain Input</span></div>
			<div className ='item' onClick={()=>{clickHandler('inputWithPlainTextInput')}}><img src={img}/><span>Plain Text Input</span></div>
			<div className ='item' onClick={()=>{clickHandler('inputWithStaticSelect')}}><img src={img}/><span>Static Select</span></div>
		</div>
	)
}


const Preview =(props)=>{

	const clickHandler =(value)=>{
		props.setSource(prev=>{
			return [...prev, preview[value][0]];
		});
	}

	return(
		<div className='dropDown'>
			<div className ='title'>Preview</div>
			<div className ='item' onClick={()=>{clickHandler('preview')}}><img src={img}/><span>preview</span></div>
			<div className ='item' onClick={()=>{clickHandler('previewWithExternalUrl')}}><img src={img}/><span>preview External Url</span></div>
		</div>
	)
}

const ComponentsSideBar = (props) => {

	return (
		<div className='ComponentsSideBar'>
			<Action       setSource={props.setSource}/>
			<Conditional  setSource={props.setSource}/>
			<Context      setSource={props.setSource}/>
			<Divider      setSource={props.setSource}/>
			<Image        setSource={props.setSource}/>
			<Input        setSource={props.setSource}/>
			<Preview      setSource={props.setSource}/>
		</div>
	);
};

export default ComponentsSideBar;
