import { tasksLists } from 'mocks/TasksLists';
import { usePageTitle } from 'hooks';
import { FULL_APP_NAME, SHORT_APP_NAME } from 'constants/names';
import { TasksList, Typography } from 'components';
import { TaskLists } from './Home.styles';

export const Home = () => {
  usePageTitle(`Home | ${SHORT_APP_NAME}`);

  return (
    <article>
      <Typography variant="title">{FULL_APP_NAME}</Typography>
      <TaskLists>
        {tasksLists.map((list) => (
          <TasksList key={list.title} {...list} />
        ))}
      </TaskLists>
    </article>
  );
};
