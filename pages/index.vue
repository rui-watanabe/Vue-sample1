<template>
 <div class="page">
   <form
     class="form"
     @submit.prevent
   >
     <label class="label">
       <span class="label">
         email
       </span>
       <input
         class="input"
         type="text"
         v-model="email"
       >
     </label>
     <label class="label">
       <span class="label">
         password
       </span>
       <input
         class="input"
         type="password"
         v-model="password"
       >
     </label>
     <button
       class="button"
       type="submit"
       @click="login"
     >
       Login
     </button>
   </form>
 </div>
</template>

<script>
import firebase from '../plugins/firebase'

export default {
 data() {
   return {
     email: '',
     password: ''
   }
 },
 methods : {
  login() {
    this.$store.dispatch('loginAction', {
      email: this.email,
      password: this.password
    })
   },
 }
}
</script>


