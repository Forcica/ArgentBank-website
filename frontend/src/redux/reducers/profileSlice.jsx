import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
   name: "profile",
   initialState: {
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
      transactions: [], // Ajout du champ transactions pour le BACKEND
   },
   reducers: {
      setGetProfile: (state, action) => {
         state.email = action.payload.data.body.email;
         state.firstName = action.payload.data.body.firstName;
         state.lastName = action.payload.data.body.lastName;
         state.userName = action.payload.data.body.userName;
      },
      setTransactions: (state, action) => {
         state.transactions = action.payload; // Met à jour les transactions dans le store pour le BACKEND
      },
      setEditProfile: (state, action) => {
         state.userName = action.payload;   // Met à jour uniquement le userName
      },
      resetProfile: (state) => {
         return profileSlice.getInitialState();
      },
   },
})

export const { setGetProfile, setEditProfile, resetProfile } = profileSlice.actions
export default profileSlice.reducer