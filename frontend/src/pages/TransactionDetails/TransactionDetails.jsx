import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TransactionDetails = () => {
  const transactions = useSelector((state) => state.profile.transactions);

  return (
    <div>
      <h2>Détails des opérations</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>Date : {transaction.date}</p>
            <p>Montant : {transaction.amount}</p>
            <p>Description : {transaction.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionDetails;