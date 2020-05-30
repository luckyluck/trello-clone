import React, { useState } from 'react';

import { NewItemForm } from './NewItemForm';

interface AddNewItemProps {
	onAdd(text: string): void;

	toggleButtonText: string;
	dark?: boolean;
}

export const AddNewItem: React.FC<AddNewItemProps> = ({ onAdd, toggleButtonText, dark }): React.ReactElement => {
	const [showForm, setShowForm] = useState(false);

	if (showForm) {
		return (
			<NewItemForm onAdd={(text: string): void => {
				onAdd(text);
				setShowForm(false);
			}}/>
		);
	}

	return (
		<button onClick={() => setShowForm(true)}>
			{toggleButtonText}
		</button>
	);
};
