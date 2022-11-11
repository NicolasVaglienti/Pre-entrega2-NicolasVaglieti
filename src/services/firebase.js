import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
  getDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvin-uNkbGO5Y-tlTeP0NIyCbK5ntkWmg",
  authDomain: "coderhouse-reactjs-f639f.firebaseapp.com",
  projectId: "coderhouse-reactjs-f639f",
  storageBucket: "coderhouse-reactjs-f639f.appspot.com",
  messagingSenderId: "561184809946",
  appId: "1:561184809946:web:a4b4b204483f87d3d7d6e3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productCollection = collection(db, "products");
const categoriesCollection = collection(db, "categories");

export const getData = async () => {
  const products = await getDocs(productCollection);
  return products?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const findProductByCategory = async (categoryName) => {
  const q = query(productCollection, where("category", "==", categoryName));
  const products = await getDocs(q);
  return products?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getCategories = async () => {
  const categories = await getDocs(categoriesCollection);
  return categories?.docs.map((doc) => doc.data());
};

export const getProduct = async (id) => {
  const productRef = doc(db, "products", id);
  const product = await getDoc(productRef);
  return { id: product.id, ...product.data() };
};

export const saveSale = async (orderData) => {
  const salesCollection = collection(db, "orders");
  let respuesta = await addDoc(salesCollection, {
    ...orderData,
    date: serverTimestamp(),
  });
  return respuesta.id;
};
