import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.scss';
import Down from '../../asssets/icons/Down.png';
import CopyGreen from '../../asssets/icons/copyGreen.png';
import Loading from '../../asssets/icons/Path.png';

const CopyModal = ({ isShowing, hide }) => {
  const [time, settime] = useState(2);
  useEffect(() => {
    const timer = setTimeout(() => {
      hide();
    }, 2000);

    const interval = setInterval(() => {
      if (time > 0) settime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles['modal-overlay']} />
          <div
            className={styles['modal-wrapper']}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={styles['modal']}>
              <button
                type="button"
                className={styles['modal-close-button']}
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <img src={Down} alt="down" />
              </button>
              <img src={CopyGreen} alt="copy green" className={styles['copyImg']} />
              <p className={styles['modal-text']}>Saved to clipboard</p>
              <div className={styles['modal-time']}>
                <img src={Loading} alt="Loading" />
                <span className={styles['time']}>{time}s</span>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default CopyModal;
