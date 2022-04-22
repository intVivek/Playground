import './Home.scss';
import React, { useState } from 'react';

import NavBar from '../../components/NavBar/NavBar';
import ComponentsSideBar from '../../components/ComponentsSideBar/ComponentsSideBar';
import Editor from '../../components/Editor/Editor';
import Preview from '../../components/Preview/Preview';

const Home = () => {
	const [source, setSource] = useState([]);

	return (
		<>
			<NavBar/>
			<div className='Home'>
				<ComponentsSideBar setSource={setSource} />
				<Preview source={source} />
				<Editor source={source} setSource={setSource}/>
			</div>
		</>
	);
};

export default Home;
