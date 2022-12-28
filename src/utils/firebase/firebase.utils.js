import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIsZmX_Fua8WOpedcM-WKIIjDTMtyE64A",
  authDomain: "authentication-8d570.firebaseapp.com",
  projectId: "authentication-8d570",
  storageBucket: "authentication-8d570.appspot.com",
  messagingSenderId: "641296244661",
  appId: "1:641296244661:web:f8387f27ee8afea4b5c3fc",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

facebookProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const singInWithFacebookPopup = () => {
  signInWithPopup(auth, facebookProvider);
};
