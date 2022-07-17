import { usePageTitle } from 'hooks';
import { Link, Typography } from 'components';
import { APP_NAME } from 'constants/names';

export const NotFound = () => {
  usePageTitle(`Not Found | ${APP_NAME}`);

  return (
    <div>
      <Typography variant="title">PAGE NOT FOUND</Typography>
      <Link to="/">
        <Typography variant="body1">Go to home pages!</Typography>
      </Link>
    </div>
  );
};
