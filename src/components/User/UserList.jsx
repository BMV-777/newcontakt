import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem/ListItem';
import styles from './Form.module.css';

const UserList = ({ item, deleteContact }) => {
  return (
    <div className={styles.ListUsers}>
      <ul className={styles.list}>
        {item.map(({ id, name, number }) => (
          <ListItem
            className={item}
            key={id}
            name={name}
            number={number}
            onClick={() => deleteContact(id)}
          />
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default UserList;
