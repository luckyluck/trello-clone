import React from 'react';

import { ColumnContainer, ColumnTitle } from './styles';
import { AddNewItem } from './AddNewItem';

interface ColumnProps {
	text: string;
}

export const Column: React.FC<React.PropsWithChildren<ColumnProps>> = ({ text, children }) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{children}
			<AddNewItem toggleButtonText={'+ Add another task'} onAdd={console.log} dark={true}/>
		</ColumnContainer>
	);
};
