import { Link, useLocation } from 'react-router-dom';

const SidenavItem = ({ icon, label, link }) => {
  const location = useLocation();

  const linkClass = location.pathname === link ? 'nav_link active' : 'nav_link';
  return (
    <Link to={link} className={linkClass}>
      <i className={[`${icon}`, 'nav_icon'].join(' ')}></i>{' '}
      <span className='nav_name'>{label}</span>
    </Link>
  );
};

export default SidenavItem;
