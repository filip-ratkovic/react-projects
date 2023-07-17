import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh5Mf1qIUOS4sVaSHAJhkacq2i07gQEHo",
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