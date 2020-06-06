import { DragItem } from '../DragItem';

export const isHidden = (draggedItem: DragItem | undefined, itemType: string, id: string): boolean => {
	return draggedItem?.type === itemType && draggedItem?.id === id;
};
