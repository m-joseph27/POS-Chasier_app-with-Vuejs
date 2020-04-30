<template>
  <div>
    <div class="navbar">
      <div class="menu">
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
          <div class="item-cart"><p>0</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
  z-index: 6;
  background-color: #fff;
  // background-color: black;
  .menu{
    // background-color: blanchedalmond;
    width: 50px;
    height: 100%;
  }
  .nav-name{
    // background-color: blue;
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
    // background-color: brown;
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    .search{
      // background-color: cadetblue;
      width: 50px;
      height: 100%;
    }
    .cart{
      // background-color: chocolate;
      width: 70px;
      height: 100%;
      display: flex;
      .item-cart{
        background-color: deepskyblue;
        width: 35px;
        height: 23px;
        border-radius: 30px;
        p{
          color: white;
          font-family: airbnbmedium;
        }
      }
      &:active{
        transform: translateY(2px);
      }
    }
  }
}
</style>
