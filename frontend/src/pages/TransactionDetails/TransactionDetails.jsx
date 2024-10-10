import React from 'react';
import { useSelector } from 'react-redux';
import './TransactionDetails.css';

const TransactionDetails = () => {
  const transactions = useSelector((state) => state.profile.transactions);

  if (!transactions || transactions.length === 0) {
    return (
      <div className="transaction-details">
        <h2>Détails des opérations</h2>
        <p>Aucune transaction trouvée.</p>
      </div>
    );
  }

  return (
    <div className="transaction-details">
      <h2>Détails des opérations</h2>
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className="transaction-date">Date : {transaction.date}</p>
            <p className="transaction-amount">Montant : {transaction.amount}</p>
            <p className="transaction-description">Description : {transaction.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionDetails;
