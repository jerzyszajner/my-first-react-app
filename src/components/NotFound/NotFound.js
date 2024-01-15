import styles from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
    return (
      <div className={styles.notFound}>
        <PageTitle>404</PageTitle>
        <p className={styles.subtitle}>Not Found</p>
      </div>
    );
  };

  export default NotFound;