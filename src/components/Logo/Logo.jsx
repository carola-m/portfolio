import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} aria-label="site logo">
        <svg
          fill={s.logoPrimary}
          viewBox="7.214 3.885 305.772 87.68"
          xmlns="http://www.w3.org/2000/svg"
          width="120"
        >
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
