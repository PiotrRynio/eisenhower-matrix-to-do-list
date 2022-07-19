import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useTasksLists } from 'hooks';

const TasksListsDragDropProvider = ({ children }: { children: React.ReactNode }) => {
  const { changeTaskPosition } = useTasksLists();

  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    changeTaskPosition({
      taskId: draggableId,
      newTasksList: destination.droppableId,
      newTasksIndex: destination.index,
    });
  };

  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
};

export { TasksListsDragDropProvider };
