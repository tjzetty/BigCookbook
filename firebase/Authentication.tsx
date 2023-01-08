import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./FirebaseApp";
import { User } from "../models/User";
import { prisma, PrismaClient } from "@prisma/client";

export function googleSignin() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential === null) throw new TypeError();
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

export function googleSignout() {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
