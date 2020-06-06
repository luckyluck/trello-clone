import React from 'react';

import { AppContainer } from './styles';
import { Column } from './Column';
import { AddNewItem } from './AddNewItem';
import { List, useAppState } from './AppStateContext';
import { CustomDragLayer } from './CustomDragLayer';

function App() {
	const { state, dispatch } = useAppState();

	return (
		<AppContainer>
			<CustomDragLayer/>
			{state.lists.map((list: List, i: number) => (
				<Column key={list.id} text={list.text} index={i} id={list.id}/>
			))}
			<AddNewItem
				toggleButtonText={'+ Add another list'}
				onAdd={text => dispatch({ type: 'ADD_LIST', payload: text })}
			/>
		</AppContainer>
	);
}

export default App;
