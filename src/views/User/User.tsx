import { usePageTitle } from 'hooks';
import { APP_NAME } from 'constants/names';

export const User = () => {
  usePageTitle(`User | ${APP_NAME}`);

  return <div>User</div>;
};
