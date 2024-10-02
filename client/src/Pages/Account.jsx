import styles from './Account.module.css'; // Assuming you will create a separate CSS file for styles

const EmptyState = () => {
  return (
    <div className={styles.emptyStateContainer}>
      <div className={styles.iconContainer}>
        <i className={styles.folderIcon}>📁</i> 
      </div>
      <h2>It&apos;s empty here</h2>
      <p className={styles.description}>
      We can&apos;t find any result in your account
      </p>
 
      <button className={styles.createNewBtn }>+ Create new</button>
    </div>
  );
};

export default EmptyState;
