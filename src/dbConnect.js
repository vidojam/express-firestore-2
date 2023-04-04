import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// import credentials
import { credentials } from "../credentials.js";

// initiallize firbase by brining the credential as an object
initializeApp({
  credential: cert(credentials)
});

export const db = getFirestore();


