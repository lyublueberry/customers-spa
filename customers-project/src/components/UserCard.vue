<template>
    <div class="user-card">
        <p>{{ user.name }}</p>
        <p>{{ user.username }}</p>
        <p>{{ user.email }}</p>
    </div>
</template>

<script>
import users from '../mocks/users';
export default {
    data() {
        return {
            user:null
        }
    },
      created() {
    const user = users.find(user => user.id == this.$route.params.id)
    if (user) {
      this.user = user
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
