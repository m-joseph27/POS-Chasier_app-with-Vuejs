<template>
      <div class="modal-parent">
        <div class="modal-content">
          <div class="content-head">
            <h1>Add Items</h1>
          </div>
          <div class="content-body"></div>
          <div class="content-footer">
            <button class="cancel" @click="$emit('closeModal')">Cancel</button>
            <button class="add">Add</button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>

.modal-parent{
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: ease 0.50s;
  // background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  top: 10%;
  left: 30%;
  right: 30%;
  &.modal-active{
    visibility: visible;
    opacity: 1;
    top: 0;
    left: 0;
    transform: rotate3d(360deg);
  }
  .modal-content{
    // background-color: salmon;
    width: 600px;
    height: 500px;
    border-radius: 10px;
    top: 10%;
    left: 25%;
    overflow: hidden;
    outline: none;
    border: none;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
    .content-head{
      // background-color: seagreen;
      width: 100%;
      height: 10%;
      padding-left: 15px;
      display: flex;
      align-items: center;
      // position: fixed;
      h1{
        text-align: left;
        font-family: airbnbmedium;
        font-size: 25px;
      }
    }
    .content-body{
      // background-color: coral;
      width: 100%;
      height: 75%;
    }
    .content-footer{
      // background-color: skyblue;
      width: 100%;
      height: 15%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 20px;
      left: 0;
      button{
        outline: none;
        width: 120px;
        height: 40px;
        font-family: airbnbmedium;
        border-radius: 3px;
        color: white;
      }
      .cancel{
        border: none;
        background-color: #F24F8A;
      }
      .add{
        border: none;
        background-color: #57CAD5;
      }
    }
  }
}
</style>
