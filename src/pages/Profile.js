import classes from './Profile.module.css';

const ProfilePage = () => {
  return (
    <main className={classes['main-container']}>
      <div className={classes.container}>
        <header>
          <h1>
            Hello! <br />
            This is Haniye
          </h1>
        </header>
        <div className={classes.introduction}>
          <p>
            I am a Product Designer who creates digital solutions that are
            visually stunning and user-focused.
          </p>
        </div>
        <div className={classes.haniye}>
          <img src='./image/profile.png' />
          <span>I am in my second year of study.</span>
        </div>
        <div className={classes.like}>
          <span
            >I like to <span className={classes.design}>Design</span>,
            <span className={classes.paint}>Paint</span>,
            <span className={classes.write}>write</span> and do some
            <span className={classes.coding}>coding</span>.</span
          >
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
