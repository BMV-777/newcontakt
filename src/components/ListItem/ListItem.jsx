import styles from './List-item.module.css';

const ListItem = ({ name, number, onClick }) => {
  return (
    <>
      <li className={styles.item}>
        <span className={styles.nameUser}>{name} </span>
        <span className={styles.phoneNum}>{number} </span>
        <button type="button" className={styles.btnDel} onClick={onClick}>
          Delete
        </button>
      </li>
    </>
  );
};

export default ListItem;
