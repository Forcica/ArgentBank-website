import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchUserProfile,
	fetchBankAccount,
} from "../../redux/actions/apiActions";
import Account from "../../components/Account/Account";
import EditButton from "../../components/EditButton/EditButton";

export default function User() {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.userAuth.token);
	const profile = useSelector((state) => state.profile);
	const [error, setError] = useState("");
	const [accounts, setAccounts] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			// Charger le profil
			const profileResult = await dispatch(fetchUserProfile(token));
			if (!profileResult.success) {
				setError(profileResult.error);
				return;
			}

			// Charger les comptes
			const accountResult = await dispatch(fetchBankAccount(token));
			if (accountResult.success) {
				setAccounts(accountResult.data);
			}
		};

		loadData();
	}, [dispatch, token]);

	return (
		<main className="main bg-dark">
			{error && <div className="error-message">{error}</div>}
			<div className="header">
				<h1>
					Welcome back
					<br />
					{profile.firstName + " " + profile.lastName + "!"}
				</h1>
				<EditButton />
			</div>
			<h2 className="sr-only">Accounts</h2>
			{accounts.map((account, index) => (
				<Account
					key={index}
					title={account.title}
					amount={account.amount}
					description={account.description}
				/>
			))}
		</main>
	);
}
