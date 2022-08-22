<template>
  <div class="user-card">
    <h2>список постов</h2>
    <ul>
      <li v-for="post in postsUser" :key="post.id">
        <p>{{ post.title }}</p>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <h2>список альбомов</h2>
    <ul class="list-albums">
      <li class="item-album" v-for="album in albumsUser" :key="album.id">
        <p>{{ album.title }}</p>
      </li>
    </ul>
    <swiper :options="swiperOption" class="my-swipper">
      <swiper-slide v-for="photo in photosUser" :key="photo.id">
        <img :src=photo.url :alt="photo.title">
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import posts from '../mocks/posts';
import photos from '../mocks/photos';
import albums from '../mocks/albums';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


export default {
  name: 'UserCard',
  data() {
    return {
      post: null,
      photo: null,
      album: null,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    postsUser: function () {
      return posts.filter(postU => postU.userId === this.$route.params.id);
    },
    albumsUser: function () {
      return albums.filter(albumU => albumU.userId === this.$route.params.id)
    },
    photosUser: function () {
      return photos.filter(photoU => photoU.albumId === this.$route.params.id)
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    aaa(albums){
      const aa = albums.filter(albumU => albumU.userId === this.$route.params.id);
      console.log(aa);
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
