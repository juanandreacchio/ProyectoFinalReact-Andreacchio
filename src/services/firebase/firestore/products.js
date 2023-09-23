import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const productsRef = categoryId
      ? query(collection(db, "productos"), where("category", "==", categoryId))
      : collection(db, "productos");

    getDocs(productsRef)
      .then((querySnapshot) => {
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });
        resolve(productsAdapted);
      })
      .catch((error) => {
        reject(error);
      })
  });
};

export const getProductsById = (id) =>{
    return new Promise ((resolve, reject) =>{
        const productRef = doc(db, 'productos', id)

        getDoc(productRef)
            .then(documentSnapshot =>{
                const fields = documentSnapshot.data()
                const productAdapted = { id: documentSnapshot.id, ...fields}
                resolve(productAdapted)
            })
            .catch(error => reject(error))
    })

}