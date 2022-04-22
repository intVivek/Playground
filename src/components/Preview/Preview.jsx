import './Preview.scss';
import React from 'react';
import close from '../../assets/images/close.svg'
import * as uiKit from '@rocket.chat/fuselage-ui-kit';

const Preview = (props) => {

	const clickHandler = (i) =>{
		props.setSource(prev=>{
			prev.splice(i,1);
			return [...prev];
		})
	}

	return (
		<div className='Preview'>
			{/* {uiKit.UiKitModal(props.source)} */}
			{props?.source.map((element,i)=>{
				return<div className='element' key={i}>
					<img className='close' src={close} onClick={()=>clickHandler(i)}/>
					{uiKit.UiKitModal([element])}
				</div>
			})}
		</div>
	);
};

export default Preview;
