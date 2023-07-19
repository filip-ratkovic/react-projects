import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { store } from "../Store/store";
import { authSlice } from "../Store/authSlice";
import { Navigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-quote-8aae3.firebaseapp.com",
  projectId: "fir-quote-8aae3",
  storageBucket: "fir-quote-8aae3.appspot.com",
  messagingSenderId: "829826053384",
  appId: "1:829826053384:web:c51fd6b3b84face1c2a8bd",
  measurementId: "G-YZL3HZ6RH5"
};

const app = initializeApp(firebaseConfig);
// SIGN UP 
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const signUp = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  store.dispatch(
    authSlice.actions.setData({
      id: user.uid,
      email: user.email,
      token: user.accessToken,
    })
  );
  return user;
};

export  const signInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user
    store.dispatch(
      authSlice.actions.setData({
        id: user.uid,
        email: user.email,
        token: user.accessToken,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    store.dispatch(authSlice.actions.logout());
  } catch (error) {
    console.log(error);
  }
};

// LOGIN 
export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  store.dispatch(
    authSlice.actions.setData({
      id: user.uid,
      email: user.email,
      token: user.accessToken,
    })
  );
  return user
}

// FETCH DATA 
export const db = getFirestore(app);

export const getQuotes = async () => {
    const quotesCollection = collection(db, "quotes");
    const quoteResults = await getDocs(quotesCollection);
    const quoteList = quoteResults.docs.map((doc) => ({...doc.data(), id : doc.id}));
    return quoteList;
  };
  
  export const addQuote = async (data) => {
    const result = await addDoc(collection(db, "quotes"), data);
    return result;
  };

  export const deleteQuote = async (id) => {
    const docRef = doc(db, "quotes", id);
    return await deleteDoc(docRef)
  }

  export const likeQuote = async (id, likes) => {
    const docRef = doc(db, "quotes", id);
    return await updateDoc(docRef, { likes: likes });
  };
  export const isLiked = async (id, Isliked) => {
    const docRef = doc(db, "quotes", id);
    return await updateDoc(docRef, { Isliked: Isliked });
  };
  
  export const updateQuoteData = async (id, data) => {
    const docRef = doc(db, "quotes", id);
    return await updateDoc(docRef, data);
  };

  export const getQuoteById = async (id) => {
    const docRef = doc(db, "quotes", id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return { ...data, id: id };
  };