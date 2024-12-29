import { setLogIn } from "../reducers/userAuthSlice";
import { setEditProfile } from "../reducers/profileSlice";

const API_URL = "http://localhost:3001/api/v1";

// Helper pour les appels API
const apiCall = async (
	endpoint,
	method = "POST",
	body = null,
	token = null
) => {
	try {
		const headers = {
			"Content-Type": "application/json",
			...(token && { Authorization: `Bearer ${token}` }),
		};

		const config = {
			method,
			headers,
			...(body && { body: JSON.stringify(body) }),
		};

		const response = await fetch(`${API_URL}${endpoint}`, config);
		const data = await response.json();

		return { response, data };
	} catch (error) {
		throw new Error("Erreur de connexion au serveur");
	}
};

// Actions
export const loginUser = (credentials) => async (dispatch) => {
	try {
		const { response, data } = await apiCall(
			"/user/login",
			"POST",
			credentials
		);

		if (response.ok) {
			dispatch(setLogIn(data.body.token));
			return { success: true, token: data.body.token };
		}
		return { success: false, error: data.message };
	} catch (error) {
		return { success: false, error: error.message };
	}
};

export const signupUser = (userData) => async () => {
	try {
		const { response, data } = await apiCall(
			"/user/signup",
			"POST",
			userData
		);
		return {
			success: response.ok,
			error: !response.ok ? data.message : null,
		};
	} catch (error) {
		return { success: false, error: error.message };
	}
};

export const updateUserProfile = (userName, token) => async (dispatch) => {
	try {
		const { response } = await apiCall(
			"/user/profile",
			"PUT",
			{ userName },
			token
		);

		if (response.ok) {
			dispatch(setEditProfile(userName));
			return { success: true };
		}
		return { success: false, error: "Échec de la mise à jour" };
	} catch (error) {
		return { success: false, error: error.message };
	}
};

export const fetchUserProfile = (token) => async (dispatch) => {
	try {
		const { response, data } = await apiCall(
			"/user/profile",
			"POST",
			null,
			token
		);

		if (response.ok) {
			dispatch(setEditProfile(data.body.userName));
			return { success: true };
		}
		return { success: false, error: data.message };
	} catch (error) {
		return { success: false, error: error.message };
	}
};

export const logoutUser = () => (dispatch) => {
	dispatch(setLogIn(null));
	return { success: true };
};

// Actions pour les transactions non implémentées mais utiles pour le futur

export const fetchUserTransactions = (token) => async () => {
	try {
		const { response, data } = await apiCall(
			"/user/transactions",
			"POST",
			null,
			token
		);
		return {
			success: response.ok,
			data: response.ok ? data.body : null,
			error: !response.ok ? data.message : null,
		};
	} catch (error) {
		return { success: false, error: error.message };
	}
};

export const fetchBankAccount = (token) => async () => {
	try {
		const { response, data } = await apiCall(
			"/user/account",
			"POST",
			null,
			token
		);
		return {
			success: response.ok,
			data: response.ok ? data.body : null,
			error: !response.ok ? data.message : null,
		};
	} catch (error) {
		return { success: false, error: error.message };
	}
};
