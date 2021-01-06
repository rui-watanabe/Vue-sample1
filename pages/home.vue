<template>
 <div class="page">
   <p
     class="text"
   >
     ログインに成功！
   </p>
   {{ indicateUser }}
    <label>
     <span>
      患者名:
     </span>
     <input
       type="text"
       v-model="patient.name"
     >
   </label>
   <label>
     <span>
       email:
     </span>
     <input
       type="text"
       v-model="patient.email"
     >
   </label>
   <button
     type="button"
     @click="submit"
   >
     Submit
   </button>
 </div>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  data () {
   return {
     patient: {
       name: "",
       email: ""
     },
   }
 },
  computed: {
    indicateUser() {
      return this.$store.getters.getUser
    }
  },
  methods: {
     submit () {
     const db = firebase.firestore()
     let dbPatients = db.collection('patients')
     dbPatients
       .add({
         name: this.patient.name,
         email: this.patient.email,
       })
       .then(ref => {
         console.log('Add ID: ', ref.id)
       })
   },
  }
}
</script>
