<template>
  <q-page class="row items-center">
    <q-card style="width: 25rem" class=" fixed-center q-pa-sm shadow-5 bg-amber-1">
      <div v-if="signIn">
        <div class="text-h5 q-my-sm text-center text-grey-7">
        <q-btn flat>Sign In</q-btn>/<q-btn flat @click="signIn = false">Sign Up</q-btn>
      </div>
      <form action="">
        <q-input
          v-model="email"
          filled type="email"
          hint="Email"
          class="q-my-sm"
          :rules="[val => !!val || 'Field is required']">
          <template v-slot:append>
            <q-icon name="mail" />
          </template>
        </q-input>
        <q-input
          v-model="password"
          filled :type="isPwd ? 'password' : 'text'"
          hint="Password"
          class="q-my-sm"
          :rules="[val => !!val || 'Field is required']">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd" />
        </template>
      </q-input>
      </form>
      <div class="text-center text-bold text-grey-7">
        ----- OR -----
      </div>
      <div>
        <q-btn @click="signInWithGoogle" class="full-width text-black q-my-sm text-capitalize" color="white">
          Sign in with Google
          <q-avatar class="q-mx-sm" style="width:25px; height:25px">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg">
          </q-avatar>
        </q-btn>
      </div>
      <q-btn
        @click="signInToAccount"
        rounded
        push color="grey-7"
        class="float-right q-ma-md">
        Sign in
      </q-btn>
      <q-btn flat icon="home" color="grey-7" class="q-ma-md" to="/" />
      </div>
      <div v-else>
        <div class="text-h6 q-my-sm text-center text-grey-7">
          <q-btn flat @click="signIn = true">Sign In</q-btn>/<q-btn flat>Sign Up</q-btn>
      </div>
        <form @submit.prevent="createAccount(email)">
          <div class="row">
            <q-input
            v-model="fName"
            filled
            hint="First Name"
            class="q-my-sm col q-mr-sm"
            :rules="[val => !!val || 'Field is required']">
            </q-input>
            <q-input
              v-model="lName"
              filled
              hint="Last Name"
              class="q-my-sm col"
              :rules="[val => !!val || 'Field is required']">
            </q-input>
          </div>
        <q-input
          v-model="email"
          filled type="email"
          hint="Email"
          class="q-my-sm"
          :rules="[val => !!val || 'Field is required']">
          <template v-slot:append>
            <q-icon name="mail" />
          </template>
        </q-input>
        <q-input
          v-model="password"
          filled :type="isPwd ? 'password' : 'text'"
          hint="Password"
          class="q-my-sm"
          :rules="[val => !!val || 'Field is required']">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd" />
        </template>
      </q-input>
      </form>
      <div class="text-center text-bold text-grey-7">
        ----- OR -----
      </div>
      <div>
        <q-btn class="full-width text-black q-my-sm text-capitalize" color="white">
          Sign up with Google
          <q-avatar class="q-mx-sm" style="width:25px; height:25px">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg">
          </q-avatar>
        </q-btn>
      </div>
      <q-btn
        @click="createAccount(email)"
        rounded
        push color="grey-7"
        class="float-right q-ma-md">
        Sign up
      </q-btn>
      <q-btn flat icon="home" color="grey-7" class="q-ma-md" to="/" />
      </div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useFirestore } from 'src/stores/firestore';
import { useUserStore } from 'src/stores/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

  const router = useRouter()
  const password = ref('')
  const fName = ref('')
  const lName = ref('')
  const isPwd = ref(true)
  const email = ref('')
  const signIn = ref(false)
  const firestore = useFirestore()
  const userStore = useUserStore()

  async function createAccount(email : string){
    const userCredential = await firestore.registerWithEmailAndPassword(email, password.value, fName.value, lName.value)
    const user = {
      id: userCredential?.user.uid ?? '',
      firstName: fName.value,
      lastName: lName.value,
      email: email,
      cartItems: []
    }
    userStore.setUser(user)
    await firestore.addUserToFirestore(user)
    const userCart = await firestore.getUserCartFromFirestore(email)
    userStore.cartItems = userCart
    router.push('/')
 }

 async function signInToAccount(){
  try{
    await firestore.loginWithEmailAndPassword(email.value, password.value)
    await firestore.updateUserInfoInFirestore()
    await firestore.updateCartInFirestore()
    router.push('/')
  }
  catch(error){
    console.error('Error signing in: ', error)
    router.push('/')
  }
 }

 async function signInWithGoogle(){
  firestore.signInWithGoogle()
 }
</script>
