import { db } from 'src/boot/firebase';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { User } from 'src/types/User';
import { Product } from 'src/types/Product';
import { useUserStore } from './user';

export function useFirestore() {
  const userStore = useUserStore()

  const addUserToFirestore = async (user : User) => {
    try {
      const docRef = doc(db, 'users', user.email)
      await setDoc(docRef, {
        id: user.id,
        firstName: user.firstName,
        lastNamr: user.lastName,
        email: user.email,
        cartItems: user.cartItems
      })
      console.log('Document written with ID: ', docRef.id)
    }
    catch (error) {
      console.error('Error adding user to FireStore: ', error)
    }
  }

  const getUserCartFromFirestor = async (email : string) => {
    try {
      const docRef = await getDoc(doc(db, 'users', email))
      if(docRef.exists()){
        return docRef.data().cartItems
      }
    }
    catch(error){
      console.error('Error retrieving user cart from FireStore', error)
    }
  }

  const saveUserCartToFirestore = async (cartItems: Product[]) => {
    try{
      const user = userStore.user
      if(user?.email){
        const docRef = doc(db, 'users', user.email)
        await updateDoc(docRef, {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          cartItems: cartItems
        })
      }
    }
    catch(error){
      console.log('Error saving user cart to FireStore', error)
    }
  }

  const checkEmailExists = async (email: string) => {
    try{
      const docRef = await getDoc(doc(db, 'users', email))
      return docRef.exists()
    }
    catch(error){
      console.error('Error checking email in FireStore', error)
      return false
    }
  }

  return {
    addUserToFirestore,
    getUserCartFromFirestor,
    saveUserCartToFirestore,
    checkEmailExists
  }
}
