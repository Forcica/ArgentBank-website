import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { loginUser } from "../../redux/actions/apiActions";
import { fetchUserProfile } from "../../redux/actions/apiActions";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checkBox, setCheckBox] = useState(false);
	const [error, setError] = useState(""); // Ajout de cette ligne pour l'affichage de l'erreur si identifiant incorrect au login

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await dispatch(loginUser({ email, password }));

		if (result.success) {
			await dispatch(fetchUserProfile(result.token));
			navigate("/user");
		} else {
			setError(result.error);
		}
	};

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
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
						type="password"
						autoComplete="current-password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<TextInput
						className="input-remember"
						label="Remember me"
						id="remember-me"
						type="checkbox"
						onChange={() => setCheckBox(!checkBox)}
					/>
					<Button className="sign-in-button" type="submit">
						Sign In
					</Button>
				</form>
			</section>
			{/* Ajout de cette ligne pour l'affichage de l'erreur si identifiant incorrect au login */}
			{error && <p style={{ color: "red" }}>{error}</p>}
		</main>
	);
}
