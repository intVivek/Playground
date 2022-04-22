import './Preview.scss';
import React from 'react';

import * as uiKit from '@rocket.chat/fuselage-ui-kit';

const Preview = (props) => {
	// console.log(uiKit.UiKitModal([
	// 	{
	// 	  type: 'dividffder',
	// 	},
	//   ]));
	//   console.log(uiKit.UiKitModal([
	// 	{
	// 	  type: 'divider',
	// 	},
	//   ]));
	return (
		<div className='Preview'>
			{uiKit.UiKitModal(props.source)}
		</div>
	);
};

export default Preview;
