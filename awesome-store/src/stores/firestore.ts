import { auth, db, provider } from 'src/boot/firebase';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { User } from 'src/types/User';
import { Product } from 'src/types/Product';
import { useUserStore } from './user';
import { createUserWithEmailAndPassword, getRedirectResult, signInWithEmailAndPassword, signInWithRedirect, signOut } from 'firebase/auth';
import { useCartStore } from './cart';

export function useFirestore() {
  const userStore = useUserStore()
  const cartStore = useCartStore()

  const addUserToFirestore = async (user : User) => {
    try {
      const docRef = doc(db, 'users', user.email)
      await setDoc(docRef, {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        cartItems: user.cartItems
      })
      console.log('Document written with ID: ', docRef.id)
    }
    catch (error) {
      console.error('Error adding user to FireStore: ', error)
    }
  }

  const getUserCartFromFirestore = async (email : string) => {
    try {
      const docRef = await getDoc(doc(db, 'users', email))
      if(docRef.exists()){
        console.log('im here')
        return docRef.data().cartItems
      }
      return []
    }
    catch(error){
      console.error('Error retrieving user cart from FireStore', error)
      return []
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

  const loginWithEmailAndPassword = async (email : string, password : string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const registerWithEmailAndPassword = async (email : string, password : string, fName: string, lName: string) => {
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = {
        id: userCredential.user?.uid ?? '',
        firstName: fName,
        lastName: lName,
        email: email,
        cartItems: []
      }
      userStore.setUser(user)
      return userCredential
    }
    catch(error){
      console.error('Error creating user', error)
    }
  }

  const logout = async () => {
    await signOut(auth)
    userStore.setUser({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      cartItems: []
    })
  }

  const updateUserInfoInFirestore = async () => {
    const user = auth.currentUser
    if(user){
      const docRef = await getDoc(doc(db, 'users', user.email ?? ''))
      if(docRef.exists()){
        const userData = docRef.data()
        const userCart = userData.cartItems ?? []
        if(userStore.cartItems.length === 0){
          userStore.setUser({
            id: user.uid,
            firstName: userData?.firstName ?? '',
            lastName: userData?.lastName ?? '',
            email: user.email ?? '',
            cartItems: userCart
          })
          userStore.cartItems = userCart
        }
      }
    }
  }

  const updateCartInFirestore = async () => {
    const user = auth.currentUser
    if(user && user.email){
      cartStore.cartItems = await getUserCartFromFirestore(user.email)
    }
  }

  const signInWithGoogle = async () => {
    signInWithRedirect(auth, provider)
    const result = await getRedirectResult(auth);
    if(result){
      const user = result.user
      //const credential = GoogleAuthProvider.credentialFromResult(result)
      //const token = credential?.accessToken
      userStore.setUser({
        id: user.uid,
        firstName: user.displayName ?? '',
        lastName: user.displayName ?? '',
        email: user.email ?? '',
        cartItems: []
      })
    }
  }

  return {
    addUserToFirestore,
    getUserCartFromFirestore,
    saveUserCartToFirestore,
    checkEmailExists,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    updateUserInfoInFirestore,
    updateCartInFirestore,
    signInWithGoogle
  }
}
