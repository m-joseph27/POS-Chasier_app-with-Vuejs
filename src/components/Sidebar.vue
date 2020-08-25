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
        <div @click="$emit('modal-add')" class="add"></div>
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
.sidebar.sidebarActive{
  transition: ease .5s;
  left: -85px;
}

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
  left: 0;
  transition: ease .5s;
}

.fork-menu{
  background-image: url('../assets/img/fork.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 60px;
  cursor: pointer;
  margin-bottom: 25px;
}

.fork-menu:active{
  transform: translateY(1px);
}

.history{
  background-image: url('../assets/img/clipboard.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 60px;
  margin-bottom: 25px;
  cursor: pointer;
}

.history:active{
  transform: translateY(2px);
}

.add{
  background-image: url('../assets/img/add.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 40px;
  height: 60px;
  cursor: pointer;
}

.add:active{
  transform: translateY(2px);
}

.exit{
  width: 40px;
  height: 60px;
  margin-top: 290px;
  transform: rotate(180deg);
}

.exit:active{
  transform: translateY(2px);
}

</style>
