import React, { useRef } from 'react';

import { ColumnContainer, ColumnTitle } from './styles';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext';
import { Card } from './Card';
import { useItemDrag } from './hooks/useItemDrag';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

export const Column: React.FC<ColumnProps> = ({ text, index, id }) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: 'COLUMN', id, index, text });

  drag(ref);

  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card text={task.text} key={task.id}/>
      ))}
      <AddNewItem
        toggleButtonText={'+ Add another task'}
        onAdd={text => dispatch({ type: 'ADD_TASK', payload: { text, taskId: state.lists[index].id } })}
        dark={true}
      />
    </ColumnContainer>
  );
};
