<template>
  <div class="users">
    <h1>{{ textTitle }}</h1>
    <h2>Всего пользователей: {{users.length}}</h2>
    <ul class="users__list">
      <li class="users__item" v-for="user in users" :key="user.id">
      <router-link
      :to="{ name: 'user', params: { id: user.id } }"
      class="more-info"
    >
              <p>{{ getFullName(user) }}</p>
    </router-link>

      </li>
    </ul>
  </div>
</template>

<script>
import users from '../mocks/users.js';
export default {
  name: 'ListUsers',
  data() {
    return {
      textTitle: 'Список пользователей',
      users,
    }
  },
  props: {
    user: {
      type: Object
    }
  },
  methods: {
    getFullName(user) {
      return `${user.username} - ${user.name} `
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
