import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../redux/actions/apiActions";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [error, setError] = useState(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSignUp = async (e) => {
		e.preventDefault();
		const userData = { email, password, firstName, lastName, userName };

		const result = await dispatch(signupUser(userData));

		if (result.success) {
			setSubmitSuccess(true);
			setError(null);
		} else {
			setError(result.error);
		}
	};

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign Up</h1>
				<form onSubmit={handleSignUp}>
					<TextInput
						className="input-wrapper"
						label="E-mail"
						id="email"
						type="text"
						autoComplete="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextInput
						className="input-wrapper"
						label="Password"
						id="password"
						type="text"
						autoComplete="current-password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<TextInput
						className="input-wrapper"
						label="FirstName"
						id="firstName"
						type="text"
						autoComplete="given-name"
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<TextInput
						className="input-wrapper"
						label="LastName"
						id="lastName"
						type="text"
						autoComplete="family-name"
						onChange={(e) => setLastName(e.target.value)}
					/>
					<TextInput
						className="input-wrapper"
						label="UserName"
						id="userName"
						type="text"
						autoComplete="username"
						onChange={(e) => setUserName(e.target.value)}
					/>
					{submitSuccess ? (
						<Button
							className="sign-in-button"
							type="button"
							onClick={() => navigate("/sign-in")}
						>
							Aller sur la page de connexion
						</Button>
					) : (
						<Button className="sign-in-button" type="submit">
							Sign Up
						</Button>
					)}
					{error && <p className="error-message">{error}</p>}
					{submitSuccess && (
						<div className="confirm-success">
							<p>
								Vous êtes inscrit avec succès. Veuillez vous connecter.
							</p>
						</div>
					)}
				</form>
			</section>
		</main>
	);
}
