<template>
 <div class="page">
   <p
     class="text"
   >
     ログインに成功！
   </p>
   {{ indicateUser }}
 </div>
</template>

<script>
export default {
  computed: {
    indicateUser() {
      return this.$store.getters.getUser
    }
  }
}
</script>
