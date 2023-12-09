import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import SidenavItem from './SidenavItem';
import { navItems } from '../config';

const Layout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [navOpen, setOpen] = useState(false);

  if (!user || user === null) {
    navigate('/');
  }

  const navClass = navOpen ? 'show l-navbar' : 'l-navbar'
  const toggleClass = navOpen ? 'ri-close-fill' : 'ri-menu-fill'
  const pageClass = navOpen ? 'body-pd page app-page' : 'page app-page'
  const headerClass = navOpen ? 'body-pd header' : 'header'
  
  const toggleNav = () => {
    setOpen(!navOpen)
  }

  return (
    <div id='body-pd' className={pageClass}>
      <header className={headerClass} id='header'>
        <div className='header_toggle' onClick={() => toggleNav()}>
          <i className={toggleClass} id='header-toggle'></i>
        </div>
        <div className='header_img'></div>
      </header>
      <div className={navClass} id='nav-bar'>
        <nav className='nav'>
          <div>
            <Link to='#' className='nav_logo'>
              nav_logo
            </Link>
            <div className='nav_list'>
              {navItems.map((item) => (
                <SidenavItem key={item.label} {...item} />
              ))}
            </div>
          </div>
          <Link to='#' className='nav_link'>
            <i class='ri-logout-circle-fill nav_icon'>
              {' '}
              <span className='nav_name'>Log Out</span>
            </i>
          </Link>
        </nav>
      </div>
      <div className='height-100 bg-light'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
