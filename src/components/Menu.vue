<template>
<div class="super-class">
  <div class="all-card">
    <div v-for="menu in getMenu" :key="menu.id_menu"
      @click="isSelected(menu)" class="parent-card">
      <div class="card-image">
        <img :src="menu.menu_img" alt="menu">
      </div>
      <div class="card-label">
        <p>{{ menu.menu_name }}</p>
      </div>
      <div class="card-price">
        <p>{{ menu.price }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'menu',
  data() {
    return {
      selectedMenu: [],
    };
  },

  methods: {
    isSelected(item) {
      this.$store.commit('selectedItem', { item, count: 1 });
    },
  },

  mounted() {
    this.$store.dispatch('GETMENU');
  },

  computed: {
    getMenu() {
      return this.$store.state.menu;
    },
  },

};
</script>


<style lang="scss" scoped>
.super-class{
  background-color: rgba(190, 195, 202, 0.3);
  width: 100%;
  height: 100%;
  z-index: 2;
  padding-left:180px;
  padding-top: 80px;
  padding-bottom: 30px;
  .all-card{
    display: flex;
    flex-wrap: wrap;
    .parent-card{
      width: 250px;
      height: 200px;
      text-align: left;
      margin: 10px;
      cursor: pointer;
      overflow: hidden;
      &:hover{
        transition: ease .2s;
      }
      transition: ease .2s;
    }
    .card-image{
      background-color: salmon;
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 80%;
      border-radius: 10px 10px 0 0;
      transition: ease-out .3s;
      overflow: hidden;
      &:hover{
        transform: scale(1.1);
        transition: ease-out .3s;
      }
      img{
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    .card-label{
      width: 100%;
      height: 10%;
      p{
        color: #F24F8A;
      }
    }
    .card-price{
      width: 100%;
      height: 10%;
      font-weight: bold;
      p{
        color: #57CAD5;
      }
    }
  }
}
</style>
