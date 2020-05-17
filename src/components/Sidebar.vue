<template>
  <div>
    <div class="sidebar">
      <router-link to="/">
        <div class="fork-menu"></div>
      </router-link>
      <router-link to="/history">
        <div class="history"></div>
      </router-link>
      <router-link to="/">
        <div class="add" @click="$emit('modalAdd',$event.target)"></div>
      </router-link>
      <router-link to="/login">
        <div class="exit">
          <img src="../assets/img/icons8-exit-52.png" width="30px" height="30px" class="img-text">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.sidebar{
  background-color: white;
  width:85px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 4;
  top: 0;
}
.fork-menu{
  /* background-color: royalblue; */
  background-image: url('../assets/img/fork.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 60px;
  cursor: pointer;
  margin-bottom: 25px;
}
.history{
  /* background-color: red; */
  background-image: url('../assets/img/clipboard.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 60px;
  margin-bottom: 25px;
  cursor: pointer;
}
.add{
  /* background-color: gold; */
  background-image: url('../assets/img/add.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 60px;
  cursor: pointer;
}
.exit{
  /* background-color: burlywood; */
  width: 40px;
  height: 60px;
  margin-top: 240px;
  transform: rotate(180deg);
}
</style>
