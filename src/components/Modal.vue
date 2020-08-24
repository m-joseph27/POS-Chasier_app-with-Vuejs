<template>
      <div class="modal-parent">
        <div class="modal-content">
          <div class="content-head">
            <h1>Add Item</h1>
          </div>
          <div class="content-body">
            <div class="body-label">
              <label for="nama">Nama</label>
              <label for="image">Image</label>
              <label for="price">Price</label>
              <label for="category">Category</label>
            </div>
            <div class="body-input">
              <input class="name-input" type="text" id="nama">
              <input class="image-input" type="file" id="image">
              <input class="price-input" type="text" id="price">
              <select class="category-input" name="category" id="category">
                <option value="1">Category</option>
                <option value="2">Food</option>
                <option value="3">Drink</option>
              </select>
            </div>
          </div>
          <div class="content-footer">
            <button @click="$emit('close-clicked')" class="cancel">Cancel</button>
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
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  &.modal-active{
    visibility: visible;
    opacity: 1;
    top: 0;
    left: 0;
    transition: ease 0.50s;
  }
  .modal-content{
    width: 600px;
    height: 400px;
    border-radius: 10px;
    top: 20%;
    left: 30%;
    overflow: hidden;
    outline: none;
    border: none;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
    .content-head{
      width: 100%;
      height: 10%;
      padding-left: 15px;
      display: flex;
      align-items: center;
      padding-top: 15px;
      h1{
        text-align: left;
        font-family: airbnbmedium;
        font-size: 25px;
      }
    }
    .content-body{
      width: 100%;
      height: 75%;
      display: flex;
      justify-content: center;
      line-height: 60px;
      .body-label{
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 17px;
        font-weight: bold;
      }
      .body-input{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        line-height: 50px;
        input{
          outline: none;
          border: 1px solid rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          padding-left: 10px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
          font-weight: bold;
          font-size: 14px;
        }
        select{
          outline: none;
          border: 1px solid rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          padding-left: 10px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
          font-weight: bold;
          font-size: 14px;
        }
        .name-input{
          width: 300px;
          height: 40px;
          margin: 10px 0;
        }
        .image-input{
          margin: 10px 0;
          padding-left: 0;
        }
        .price-input{
          width: 300px;
          height: 40px;
          margin: 10px 0;
        }
        .category-input{
          width: 150px;
          height: 40px;
          margin: 10px 0;
        }
      }
    }
    .content-footer{
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
        margin: 0 10px;
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
