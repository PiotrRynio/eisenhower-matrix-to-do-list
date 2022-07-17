import { usePageTitle } from 'hooks';
import { APP_NAME } from 'constants/names';

export const Searcher = () => {
  usePageTitle(`Searcher | ${APP_NAME}`);

  return <div>Results</div>;
};
