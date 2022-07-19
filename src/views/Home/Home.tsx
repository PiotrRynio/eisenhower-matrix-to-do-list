import { FULL_APP_NAME, SHORT_APP_NAME } from 'constants/names';
import { tasksListsSchema } from 'constants/tasksListsSchema';
import { usePageTitle } from 'hooks';
import { TasksList, Typography } from 'components';
import { TaskLists } from './Home.styles';

export const Home = () => {
  usePageTitle(`Home | ${SHORT_APP_NAME}`);

  return (
    <article>
      <header>
        <Typography variant="title">{FULL_APP_NAME}</Typography>
      </header>
      <TaskLists>
        {tasksListsSchema.map((list) => (
          <TasksList key={list.id} {...list} />
        ))}
      </TaskLists>
    </article>
  );
};
