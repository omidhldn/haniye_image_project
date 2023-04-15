import { Link } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => {

  return(
    <div className={classes.nav}>
      <div className={classes['background-one']}>
    <div className={classes['link-container']}>
      <Link className={classes['link-one']} to="/">Home</Link>
    </div>
  </div>
  <div className={`${classes['background-two']} ${classes['link-container']}`}>
    <Link className={classes['link-two']} to="/profile">Profile</Link>
  </div>
  <div className={`${classes['background-three']} ${classes['link-container']}`}>
    <Link className={classes['link-three']} to="/gallery">Gallery</Link>
  </div>
    </div>
  );

};

export default Navigation;

