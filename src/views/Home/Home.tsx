import { useState } from 'react';
import { FULL_APP_NAME, SHORT_APP_NAME } from 'constants/names';
import { tasksListsSchema } from 'constants/tasksListsSchema';
import { usePageTitle } from 'hooks';
import { TasksList, Typography } from 'components';
import { StyledButton, TaskLists } from './Home.styles';

export const Home = () => {
  usePageTitle(`Home | ${SHORT_APP_NAME}`);
  const [isDoneTasksDisplayed, setIsDoneTasksDisplayed] = useState<boolean>(false);

  return (
    <article>
      <header>
        <Typography variant="title">{FULL_APP_NAME}</Typography>
      </header>
      <StyledButton onClick={() => setIsDoneTasksDisplayed(!isDoneTasksDisplayed)}>
        {isDoneTasksDisplayed ? 'hide done' : 'show done'}
      </StyledButton>

      <TaskLists>
        {tasksListsSchema.map(({ id, title }) => (
          <TasksList key={id} tasksListId={id} title={title} isDoneTasksDisplayed={isDoneTasksDisplayed} />
        ))}
      </TaskLists>
    </article>
  );
};
