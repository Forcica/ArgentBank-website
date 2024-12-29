import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../redux/actions/apiActions";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

export default function EditButton() {
	const token = useSelector((state) => state.userAuth.token);
	const profile = useSelector((state) => state.profile);
	const [isEditing, setIsEditing] = useState(false);
	const [newUserName, setNewUserName] = useState(profile.userName);
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		setNewUserName(profile.userName);
	}, [profile.userName]);

	const editUserName = async (e) => {
		e.preventDefault();
		if (!newUserName) {
			setError("Le champ ne peut pas être vide.");
			return;
		}

		const result = await dispatch(updateUserProfile(newUserName, token));

		if (result.success) {
			setIsEditing(false);
			setSuccessMessage(
				"Le nom d'utilisateur a été mis à jour avec succès."
			);
		} else {
			setError(result.error);
		}
	};

	return (
		<div>
			{isEditing ? (
				<div>
					<TextInput
						label="Username "
						id="username"
						type="text"
						autoComplete="username"
						onChange={(e) => {
							setNewUserName(e.target.value);
							setError("");
						}}
						value={newUserName}
					/>
					{error && <p className="error-message">{error}</p>}
					<br />
					<Button className="edit-button" onClick={editUserName}>
						Save
					</Button>
				</div>
			) : (
				<Button className="edit-button" onClick={() => setIsEditing(true)}>
					Edit UserName
				</Button>
			)}
			{successMessage && <p className="success-message">{successMessage}</p>}
		</div>
	);
}
