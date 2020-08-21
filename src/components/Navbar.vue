<template>
  <div>
    <div class="navbar">
      <div @click="$emit('menu-clicked')" class="menu">
        <img src="../assets/img/list.png" width="40px" height="40px">
      </div>
      <div class="nav-name">
        <h1> Food lists</h1>
        </div>
      <div class="nav-option">
        <div class="search">
          <img src="../assets/img/icons8-search-64.png" width="50px" height="50px">
        </div>
        <div class="cart" @click="$emit('cart-clicked')">
          <img src="../assets/img/icons8-shopping-cart-64.png" width="50px" height="45px">
          <div class="item-cart">
            <p>{{ countCart }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters([
      'countCart',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@font-face{
  font-family: airbnb;
  src: url('../assets/fonts/AirbnbCerealBold.ttf');
}
@font-face{
  font-family: airbnbmedium;
  src: url('../assets/fonts/AirbnbCerealMedium.ttf');
}
.navbar{
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.185);
  z-index: 6;
  background-color: #fff;
  .menu{
    width: 50px;
    height: 100%;
    cursor: pointer;
  }
  .nav-name{
    width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    h1{
      font-family: airbnbmedium;
      font-size: 25px;
      text-align: center;
    }
  }
  .nav-option{
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    .search{
      width: 50px;
      height: 100%;
      cursor: pointer;
    }
    .cart{
      width: 70px;
      height: 100%;
      display: flex;
      cursor: pointer;
      .item-cart{
        background-color: deepskyblue;
        width: 35px;
        height: 23px;
        border-radius: 30px;
        p{
          color: white;
          font-family: airbnbmedium;
          font-weight: bold;
        }
      }
      &:active{
        transform: translateY(2px);
      }
    }
  }
}
</style>
