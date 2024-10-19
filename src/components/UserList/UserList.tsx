import React from 'react';
import { UserListProps } from '../../types';

import styles from './UserList.module.css'

const UserList: React.FC<UserListProps> = ({ users, isLoading, error }) => {

 if (isLoading) {
    return <div className={styles.container}>Cargando cursos...</div>;
  }

  if (error) {
    return <div className={styles.container}>Error: {error}</div>;
  }

  if (!Array.isArray(users)) {
    return <div className={styles.container}>Error: users is not an array</div>;
  }

 return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>
      <ul className={styles.userList}>
        {users.map((user, index) => (
          <li key={index} className={styles.userItem}>
            <div className={styles.userHeader}>
              <strong>{user.name} {user.surname}</strong>
            </div>
            <div className={styles.userEmail}>
              <span>{user.email}</span>
            </div>
            <div className={styles.purchaseRecord}>
              <h3>Purchase Records:</h3>
              {Array.isArray(user.PurchaseRecord) && user.PurchaseRecord.length > 0 ? (
                <div>
                  {user.PurchaseRecord.map((purchase, purchaseIndex) => (
                    <div key={purchase.id || purchaseIndex} className={styles.purchaseItem}>
                      {purchase.id}
                    </div>
                  ))}
                </div>
              ) : (
                <p>No purchase records available.</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default UserList;