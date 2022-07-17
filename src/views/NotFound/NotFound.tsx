import { usePageTitle } from 'hooks';
import { Link, Typography } from 'components';
import { APP_NAME } from 'constants/names';

export const NotFound = () => {
  usePageTitle(`Not Found | ${APP_NAME}`);

  return (
    <div>
      <Typography variant="subtitle" isSecondaryColor>
        PAGE NOT FOUND
      </Typography>
      <Link to="/">
        <Typography variant="itemTitle">Go to home pages!</Typography>
      </Link>
    </div>
  );
};
