import logo from 'assets/images/logo/logo.svg';
import { LogoImage } from './Logo.styles';
import { Link } from 'components';

export const Logo = () => {
  return (
    <Link to={'/'}>
      <LogoImage src={logo} alt={'Eisenhower List app logo'} />
    </Link>
  );
};
