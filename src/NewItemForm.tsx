import React, { useState } from 'react';

import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';
import { useFocus } from './hooks/useFocus';

interface NewItemFormProps {
	onAdd(text: string): void;
}

export const NewItemForm: React.FC<NewItemFormProps> = ({ onAdd }) => {
	const [text, setText] = useState('');
	const inputRef = useFocus();

	return (
		<NewItemFormContainer>
			<NewItemInput ref={inputRef} value={text} onChange={(e: any) => setText(e.target.value)}/>
			<NewItemButton onClick={() => onAdd(text)}>
				Create
			</NewItemButton>
		</NewItemFormContainer>
	);
};
