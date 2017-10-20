import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './Header.styles.scss';

function Header ({ navItems }) {
  return (
    <div className={s.container}>
      {
        navItems
          .map(item => (
            <Link
              to={item.path}
              key={item.path}
              className={s.item}
            >
              {item.navOptions.label}{' | '}
            </Link>
          ))
      }
    </div>
  );
}

Header.propTypes = {
  /**
   * Objects to use to render navigation items
   */
  navItems: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    navOptions: PropTypes.shape({
      label: PropTypes.string
    }).isRequired
  }))
};

Header.defaultProps = {
  navItems: []
};

export default Header;
