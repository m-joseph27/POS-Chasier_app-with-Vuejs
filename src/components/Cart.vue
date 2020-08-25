<template>
  <div class="cart-parent">
    <div class="name">
      <div class="btn-back" @click="$emit('btn-back-clicked')">
        <img src="../assets/img/icons8-back-to-40.png" alt="back">
      </div>
      <div class="name-cart">
        <h4>Cart</h4>
        <div class="selected">
          <div class="selected-item">
            <p>{{ countCart }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrap">
      <div v-if="isEmpty" class="emptyContent">
        <img src="../assets/img/cart.png" alt="cart">
        <header>Your Cart Is Empty</header>
      </div>
      <div v-for="item in selectedItem" :key="item.item.id_menu" class="content">
        <div class="content-img">
          <img :src="item.item.menu_img">
        </div>
        <div class="content-name">
        <div class="name-item">
          <p>{{ item.item.menu_name }}</p>
        </div>
          <div class="item">
            <button @click="decerement(item)" >-</button>
            <button class="number">{{ item.count }}</button>
            <button @click="incerement(item)">+</button>
          </div>
        </div>
        <div class="item-price">
          <p>Rp: <span>{{ item.item.price * item.count}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="total">
      <div class="price">
        <div class="total-price">Total :</div>
        <div class="price-number"> Rp: <span></span>
        </div>
      </div>
      <div class="tax">
        <p>*Belum termasuk ppn</p>
      </div>
      <div class="cart-btn">
        <button class="ok">Check Out</button>
        <button class="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  data() {
    return {
      total: 0,
      getOrder: [],
    };
  },
  computed: {
    isEmpty() {
      return this.selectedItem.length === 0;
    },
    selectedItem() {
      return this.$store.state.selectedItem;
    },
    ...mapGetters([
      'countCart',
    ]),
  },

  methods: {
    incerement(data) {
      this.$store.commit('INCEREMENT', data);
    },
    decerement(data) {
      this.$store.commit('DECEREMENT', data);
    },
  },

};
</script>

<style lang="scss" scoped>
.cart-parent.parent-active{
  right: 0;
  transition: ease .9s;
  position: fixed;
  z-index: 10;
  top: 0;
}
.cart-parent.parent-active:active{
  transform: translateY(2px);
}
.cart-parent{
  position: fixed;
  display: flex;
  flex-direction: column;
  right: -400px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.9);
  width: 400px;
  height: 100vh;
  z-index: 10;
  transition: ease .9s;
  top: 0;
  background-color: white;
  .name{
    background-color: #fff;
    display: flex;
    width: 100%;
    height: 60px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.185);
    .btn-back{
      display: flex;
      align-items: center;
      width: 15%;
      height: 100%;
      img{
        transform: rotate(180deg);
        cursor: pointer;
        &:active{
          transform: translateY(1px);
        }
      }
    }
    .name-cart{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      height: 100%;
      top: 0;
      h4{
        font-family: airbnbmedium;
      }
      .selected{
        width: 40px;
        height: 50px;
        display: flex;
        justify-content: center;
        padding-top: 5px;
        .selected-item{
          background-color: #57CAD5;
          width: 25px;
          height: 25px;
          border-radius: 25px;
          text-align: center;
          color: white;
          padding-top: 1px;
          p{
            font-weight: bold;
          }
        }
      }
    }
  }
  .content-wrap{
    width: 100%;
    height: 70vh;
    padding-left: 20px;
    padding-top: 20px;
    overflow-y: scroll;
    .emptyContent{
      width: 100%;
      height: 100%;
      img{
        object-fit: contain;
        height: 80%;
        width: 80%;
      }
      header{
        font-family: airbnbmedium;
        font-weight: bold;
        color: #F24F8A;
      }
    }
  }
  .content{
    display: flex;
    width: 100%;
    padding-bottom: 20px;
    .content-img{
      background-color: steelblue;
      width: 25%;
      height: 80px;
      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .content-name{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      height: 80px;
      .name-item{
        width: 100%;
        height: 30px;
        text-align: left;
        font-family: airbnbmedium;
        padding-left: 10px;
      }
      .item{
        width: 100%;
        height: 30px;
        display: flex;
        padding-left: 10px;
        font-family: airbnbmedium;
        button{
          border: 1px solid #82DE3A;
          background: #E5E5E5;
          width: 35px;
          color: #82DE3A;
          font-weight: 700;
        }
        .number{
          background: white;
          color: #82DE3A;
        }
      }
    }
    .item-price{
      width: 25%;
      height: 80px;
      display: flex;
      padding-top: 60px;
      p{
        font-family: airbnbmedium;
      }
    }
  }
  .total{
    width: 100%;
    height: 200px;
    .price{
      width: 100%;
      height: 25px;
      display: flex;
      font-family: airbnb;
      .total-price{
        text-align: left;
        padding-left: 10px;
        width: 60%;
        height: 100%;
      }
      .price-number{
        text-align: right;
        padding-right: 10px;
        width: 40%;
        height: 100%;
      }
    }
    .tax{
      width: 100%;
      height: 20px;
      text-align: left;
      font-size: 13px;
      padding-left: 10px;
    }
    .cart-btn{
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      height: 120px;
      button{
        outline: none;
        border: none;
        width: 350px;
        height: 40px;
        border-radius: 3px;
        font-family: airbnbmedium;
        color: white;
      }
      .ok{
        background-color: #57CAD5;
      }
      .cancel{
        background-color: #F24F8A;
      }
    }
  }
}
</style>
