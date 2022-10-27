import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase-setup";

export async function writeToDB(item) {
  try {
    const docRef = await addDoc(collection(firestore, "expenses"), item);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(key) {
  try {
    await deleteDoc(doc(firestore, "expenses", key));
  } catch (err) {
    console.log(err);
  }
}

export async function updateFromDB(key, status) {
  try {
    const docRef = doc(firestore, "expenses", key);
    const data = {
      isImportant:status
    }
    await updateDoc(docRef,data);
  } catch (err) {
    console.log(err);
  }
}
