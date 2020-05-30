import React, { useState } from 'react';

import { AddItemButton } from './styles';

interface AddNewItemProps {
	onAdd(text: string): void;
	toggleButtonText: string;
	dark?: boolean;
}

export const AddNewItem: React.FC<AddNewItemProps> = ({ onAdd, toggleButtonText, dark }): React.ReactElement => {
	const [showForm, setShowForm] = useState(false);

	return (
		<AddItemButton dark={dark} onClick={() => setShowForm(true)}>
			{toggleButtonText}
		</AddItemButton>
	);
};
