import React, { useState } from 'react';

import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';

interface NewItemFormProps {
	onAdd(text: string): void;
}

export const NewItemForm: React.FC<NewItemFormProps> = ({ onAdd }) => {
	const [text, setText] = useState('');

	return (
		<NewItemFormContainer>
			<NewItemInput value={text} onChange={(e: any) => setText(e.target.value)} />
			<NewItemButton onClick={() => onAdd(text)}>
				Create
			</NewItemButton>
		</NewItemFormContainer>
	);
};
