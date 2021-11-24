<template>
  <div class="lun">
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
import '@/assets/css/1.css'
export default {
  data() {
    return {
      items: [
        {
          src: "https://b.appsimg.com/upload/momin/2021/11/19/108/1637314194187.jpg",
        },
        {
          src: "https://b.appsimg.com/upload/momin/2021/11/19/194/1637304883578.jpg",
        }
      ],
    };
  },
};
</script>
<style scoped>
</style>