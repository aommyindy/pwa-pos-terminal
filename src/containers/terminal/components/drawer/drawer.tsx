import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AccountDetailsTwoTone, ChevronRightTwoTone } from 'icons';
import styles from './drawer.module.css';

type DrawerProps = {
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ onClose }) => {
  const [redirect, setRedirect] = useState(false);

  const handleOnClickOnClose = () => onClose();
  const handleOnClickOnBackdrop = () => onClose();
  const handleOnClickOnAdmin = () => setRedirect(true);

  if (redirect) return <Redirect to={'/admin'} />;

  return (
    <Fragment>
      <div className={styles.root}>
        <div className={styles.head}>
          <button className={styles.menuBtn} onClick={handleOnClickOnClose}>
            <ChevronRightTwoTone />
          </button>
        </div>
        <div className={styles.body}>
          <div className={styles.menuItem} onClick={handleOnClickOnAdmin}>
            <div className={styles.menuIcon}>
              <AccountDetailsTwoTone />
            </div>
            <div className={styles.menuLabel}>Admin</div>
          </div>
        </div>
      </div>
      <div className={styles.backdrop} onClick={handleOnClickOnBackdrop} />
    </Fragment>
  );
};

export default Drawer;
