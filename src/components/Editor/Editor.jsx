import './Editor.scss';
import React, {useState, useEffect} from 'react';

const Editor = (props) => {

	const [editor, setEditor] = useState('');
	const [error, setError] = useState(false);

	useEffect(()=>{
		setEditor(props.source.length>0?JSON.stringify(props.source, null, 4):'')
	},[props?.source])

	useEffect(()=>{
		console.log(editor);
	},[editor])

	const changeHandler = (e) =>{
		try {
			let val = JSON.parse(e.target.value);
			props.setSource(val);
			setError(false);
		} catch (e) {
			setError(true);
		}
		setEditor(e.target.value);
	}

	const getClassName=()=>{
		console.log('ads')
		return error?'Editor editorError':'Editor';
	}

	return (
		<textarea 
			className={getClassName()}
			onChange={changeHandler}
			value={editor}
		/>
	);
};

export default Editor;
