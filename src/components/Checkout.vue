<template>
  <div class="checkout-master">
    <div class="checkout">
      <div class="header">
        <div class="checkout-header">
          <div class="receipt">
            <h3>Checkout</h3>
          </div>
          <div class="receipt-cancel" @click="$emit('closeReceipt')">
            <img src="../assets/img/icons8-cancel-40.png" width="40px" height="40px">
          </div>
        </div>
        <div class="checkout-cashier">
          <div class="cashier-name">
            <div class="name-of-cashier">
              <p>Chasier :</p>
            </div>
              <p>Pevita pearce</p>
          </div>
          <div class="receipt-number">
            <p>Receipt no: #010410919</p>
          </div>
        </div>
      </div>
      <div class="body"></div>
      <div class="total"><p>Total :</p><p>Rp.115.500*</p></div>
      <div class="payment">Payment : Cash</div>
      <div class="btn-checkout">
        <div class="btn-print">Print</div>
        <div class="or"><p>OR</p></div>
        <div class="btn-email">Send Email</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.checkout-master{
  position: fixed;
  display: flex;
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 20;
  .checkout{
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: #fff;
    right: 35%;
    top: 10%;
    width: 480px;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
    .header{
      background-color: white;
      width: 100%;
      height: 20%;
      .checkout-header{
        // background-color: dimgray;
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .receipt{
          // background-color: tomato;
          width: 45%;
          height: 100%;
          display: flex;
          align-items: center;
          padding-left: 20px;
          h3{
            font-family: airbnb;
            font-size: 25px;
            font-weight: 200;
          }
        }
        .receipt-cancel{
          display: flex;
          font-family: airbnbmedium;
          width: 45px;
          height: 50px;
          padding-top: 5px;
        }
      }
      .checkout-cashier{
        // background-color: tan;
        font-family: airbnbmedium;
        padding-left: 10px;
        display: flex;
        width: 100%;
        height: 25px;
        .cashier-name{
          // background-color: sandybrown;
          width: 50%;
          height: 100%;
          display: flex;
          .name-of-cashier{
            // background-color: seagreen;
            width: 35%;
            height: 100%;
          }
        }
        .receipt-number{
          // background-color: salmon;
          width: 50%;
          height: 100%;
        }
      }
    }
    .body{
      background-color: royalblue;
      width: 100%;
      height: 40%;
    }
    .total{
      background-color: white;
      display: flex;
      padding-left: 330px;
      width: 100%;
      height: 5%;
      font-family: airbnbmedium;
    }
    .payment{
      background-color: white;
      width: 100%;
      height: 5%;
      text-align: left;
      padding-left: 10px;
      font-family: airbnbmedium;
    }
    .btn-checkout{
      // background-color: tan;
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 10px;
      font-family: airbnbmedium;
      .btn-print{
        background-color: #F24F8A;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 45px;
        border-radius: 5px;
        color: white;
      }
      .or{
        // background-color: fuchsia;
        width: 100%;
        height: 20%;
      }
      .btn-email{
        background-color:#57CAD5;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 45px;
        border-radius: 5px;
        color: white;
      }
    }
  }
}

</style>
