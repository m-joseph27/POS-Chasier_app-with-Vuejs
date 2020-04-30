<template>
  <div class="login">
    <div class="header-area">
      <p>Chasier app</p>
    </div>
    <div class="login-area">
      <div class="login-form">
        <div class="login-text1">
          <p>Register</p>
        </div>
        <div class="login-text2">
          <p>Welcome to Cashier App, Please register first to continue</p>
        </div>
        <div class="login-input">
            <div class="username">
              <label for="username" class="label-username"
              v-validate="'required'">Username</label><br>
              <input id="username" type="text" class="input-username">
            </div>
            <div class="fullname">
              <label for="fullname" class="label-fullname">Fullname</label><br>
              <input id="fullname" type="text" class="input-fullname">
            </div>
            <div class="email">
              <label for="email" class="label-email">Email</label><br>
              <input id="email" type="email" class="input-email">
            </div>
            <div class="password">
              <label for="password" class="label-password">Password</label><br>
              <input id="password" type="password" class="input-password">
            </div>
              <!-- <div class="password">
                <label for="repeat" class="label-password">Repeat Password</label><br>
                <input id="repeat" type="password" class="input-password">
              </div> -->
        </div>
        <div class="login-button">
          <router-link to="/login">
            <button class="button-1">Sign Up</button>
          </router-link>
          <router-link to="/login">
            <button class="button-2">Login</button>
          </router-link>
        </div>
        <div class="terms"></div>
      </div>
    </div>
    <div class="footer-area">
      <p>Photo from The Creative Exchange on Unsplash</p>
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

  .login{
    // background-color: olive;
    background-image:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))
    ,url('../assets/img/register-min.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    .header-area{
      // background-color: darksalmon;
      width: 100%;
      height: 10%;
      padding-left: 10px;
      p{
        font-family: airbnb;
        color: white;
        font-size: 50px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
        text-align: left;
        font-weight: bold;
      }
    }
    .login-area{
      // background-color: darkseagreen;
      width: 100%;
      height: 85%;
      display: flex;
      justify-content: center;
      .login-form{
        // background-color: rebeccapurple;
        width: 70%;
        height: 100%;
        font-family: airbnb;
        text-align: left;
        p{
          font-family: airbnb;
          color: white;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
          text-align: center;
          font-weight: bold;
        }
        .login-text1{
          // background-color: darkred;
          width: 100%;
          height: 70px;
          font-size: 40px;
        }
        .login-text2{
          // background-color: darkkhaki;
          width: 100%;
          height: 50px;
        }
        .login-input{
          // background-color: darkorange;
          width: 100%;
          height: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          .username{
            border-radius: 5px;
            border: 1px solid rgba(0, 0, 0, 0.9);
            background-color: rgba(255, 255, 255, 0);
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
            width: 400px;
            height: 70px;
            padding-left: 10px;
            .input-username{
              border: none;
              text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
              background-color: rgba(255, 255, 255, 0);
              color: white;
              width: 97%;
              outline: none;
            }
          }
          .fullname{
            border-radius: 5px;
            border: 1px solid rgba(0, 0, 0, 0.9);
            background-color: rgba(255, 255, 255, 0);
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
            width: 400px;
            height: 70px;
            padding-left: 10px;
            .input-fullname{
              border: none;
              text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
              background-color: rgba(255, 255, 255, 0);
              color: white;
              width: 97%;
              outline: none;
            }
          }
          .email{
            border-radius: 5px;
            border: 1px solid rgba(0, 0, 0, 0.9);
            background-color: rgba(255, 255, 255, 0);
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
            width: 400px;
            height: 70px;
            padding-left: 10px;
            .input-email{
              border: none;
              text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
              background-color: rgba(255, 255, 255, 0);
              color: white;
              width: 97%;
              outline: none;
            }
          }
          .password{
            border-radius: 5px;
            border: 1px solid rgba(0, 0, 0, 0.9);
            background-color: rgba(255, 255, 255, 0);
            width: 400px;
            height: 70px;
            padding-left: 10px;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
            .input-password{
              border: none;
              text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
              background-color: rgba(255, 255, 255, 0);
              color: white;
              width: 97%;
              outline: none;
            }
          }
        }
        .login-button{
          // background-color: darksalmon;
          width: 100%;
          height: 60px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          padding-top: 10px;
          button{
            border: 1px solid rgba(0, 0, 0, 0.9);
            background-color:rgba(206, 197, 197, 0);
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
            width: 100px;
            height: 50px;
            border-radius: 5px;
            color: white;
          }
          button:hover{
            background: rgba(78, 72, 72, 0.26);
            color: black;
          }
        }
        .terms{
          // background-color: darkslategray;
          width: 100%;
          height: 70px;
        }
      }
    }
    .footer-area{
      // background-color: deeppink;
      display: flex;
      align-items: flex-end;
      width: 100%;
      height: 5%;
      text-align: left;
      padding-left: 10px;
      font-family: airbnb;
      color: white;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
    }
  }
</style>
