import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserTransactions } from "../../redux/actions/apiActions";
import "./TransactionDetails.css";

const TransactionDetails = () => {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.userAuth.token);
	const [transactions, setTransactions] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const loadTransactions = async () => {
			const result = await dispatch(fetchUserTransactions(token));
			if (result.success) {
				setTransactions(result.data);
			} else {
				setError(result.error);
			}
		};

		loadTransactions();
	}, [dispatch, token]);

	return (
		<main className="main bg-dark">
			<h2>Transactions</h2>
			{error && <div className="error-message">{error}</div>}
			{transactions && transactions.length > 0 ? (
				<ul className="transaction-list">
					{transactions.map((transaction) => (
						<li key={transaction.id}>
							<p className="transaction-date">
								Date : {transaction.date}
							</p>
							<p className="transaction-amount">
								Montant : {transaction.amount}
							</p>
							<p className="transaction-description">
								Description : {transaction.description}
							</p>
						</li>
					))}
				</ul>
			) : (
				<p>Aucune transaction trouvée.</p>
			)}
		</main>
	);
};

export default TransactionDetails;
