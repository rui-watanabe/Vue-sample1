<template>
 <div class="page">
   <p
     class="text"
   >
     ログインに成功！
   </p>
   {{ indicateUser }}
   <button
     type="button"
     @click="fetchData"
   >
     fetchData
   </button>
   <div id="patient" />
 </div>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  data () {
   return {
     patient: {
       name: ""
     },
   }
 },
  computed: {
    indicateUser() {
      return this.$store.getters.getUser
    }
  },
  methods: {
    fetchData () {
     let Ref = firebase.database().ref('/')
     Ref.on('value', function(snapshot){
       document.getElementById("patient").innerHTML = snapshot.child("name").val()
     })
   },
  }
}
</script>
