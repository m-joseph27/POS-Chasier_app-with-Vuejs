<template>
  <div>
    <div class="navbar-history">
      <div class="burger">
        <img src="../assets/img/list.png" width="40px" height="40px">
      </div>
      <div class="history">History</div>
    </div>
    <div class="income">
      <div class="pink">
        <div class="detail">
          <h5> Today's Income</h5>
          <h1 class="text-3xl">Rp. 1.000.000</h1>
          <p>+2% yesterday</p>
        </div>
        <div class="circle-pink">
          <div class="circle-a"></div>
          <div class="circle-b"></div>
          <div class="circle-c"></div>
        </div>
      </div>
      <div class="blue">
        <div class="detail">
          <h5> Orders</h5>
          <h1 class="text-3xl">3.270</h1>
          <p>+5% Last Week</p>
        </div>
        <div class="circle-pink">
          <div class="circle-a"></div>
          <div class="circle-b"></div>
          <div class="circle-c"></div>
        </div>
      </div>
      <div class="green">
        <div class="detail">
          <h5> Orders</h5>
          <h1 class="text-3xl">3.270</h1>
          <p>+5% Last Week</p>
        </div>
        <div class="circle-pink">
          <div class="circle-a"></div>
          <div class="circle-b"></div>
          <div class="circle-c"></div>
        </div>
      </div>
    </div>
  <sidebar/>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  components: {
    Sidebar,
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

.navbar-history{
  background-color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  position: fixed;
  display: flex;
  z-index: 20;
  width: 100%;
  height: 60px;
  .burger{
    // background-color: tan;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 100%;
  }
  .history{
    // background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: airbnb;
    font-weight: 100;
    font-size: 23px;
    width: 100%;
    height: 100%;
  }
}
.income{
  // background-color: yellowgreen;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  width: 100vw;
  z-index: 30;
  padding: 90px 120px;
  .pink{
    width: 30%;
    height: 180px;
    background: linear-gradient(285.38deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
    box-shadow: 10px 15px 10px rgba(255, 143, 178, 0.25);
    border-radius: 10px;
    position: relative;
    }
    .blue{
      width: 30%;
      height: 180px;
      background: linear-gradient(285.38deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
      box-shadow: 10px 15px 10px rgba(41, 223, 255, 0.25);
      border-radius: 10px;
      position: relative;
    }
    .green{
      width: 30%;
      height: 180px;
      background: linear-gradient(285.38deg,
      rgb(41, 255, 123) 30.05%, rgba(41, 223, 255, 0) 133.19%);
      box-shadow: 10px 15px 10px rgba(41, 223, 255, 0.25);
      border-radius: 10px;
      position: relative;
    }

}

</style>
