<template>
<div class="super-class">
  <div class="all-card">
    <div @click="selectedItem(menu)" v-for="menu in menu" :key="menu.id_menu" class="parent-card">
      <div class="card-image">
        <img :src="menu.menu_img">
      </div>
      <div class="card-label">{{menu.menu_name}}</div>
      <div class="card-price">{{menu.price}}</div>
    </div>
  </div>
  <div class="page-controler">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
        <a class="page-link" style="cursor:pointer" @click="prevPages">Previous</a>
        </li>
        <li class="page-item" v-for="pagination in totalPage" :key="pagination">
          <a class="page-link" style="cursor:pointer"
          @click="pages(pagination)"  >{{pagination}}</a></li>
        <li class="page-item next">
        <a class="page-link" style="cursor:pointer" @click="nextPages">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'menu',
  data() {
    return {
      menu: [],
      currentPage: 1,
      totalPage: [],
      url: 'localhost:2000/api/v1/menu?page=',
    };
  },
  methods: {
    selectedItem(item) {
      this.$store.commit('selectedItem', item);
    },
    pages(id) {
      this.currentPage = 0 + id;
      axios.get(`http://localhost:2000/api/v1/menu?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.menu = res.data.result[2];
        });
    },
    nextPages() {
      if (this.currentPage === this.totalPage) {
        this.currentPage = this.totalPage;
      } else {
        this.currentPage += 1;
      }
      axios.get(`http://localhost:2000/api/v1/menu?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.menu = res.data.result[2];
          // eslint-disable-next-line prefer-destructuring
          this.totalPage = res.data.result[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    prevPages() {
      if (this.currentPage === 1) {
        this.currentPage = 1;
      } else {
        this.currentPage -= 1;
      }
      axios.get(`http://localhost:2000/api/v1/menu?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.menu = res.data.result[2];
          // eslint-disable-next-line prefer-destructuring
          this.totalPage = res.data.result[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    axios.get(`http://localhost:2000/api/v1/menu?page=${this.currentPage}`)
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        this.menu = res.data.result[2];
        // eslint-disable-next-line prefer-destructuring
        this.totalPage = res.data.result[0];
      });
  },

};
</script>


<style lang="scss" scoped>
.super-class{
  background-color: rgba(190, 195, 202, 0.3);
  width: 100%;
  height: 100vh;
  z-index: 2;
  padding-left:180px;
  padding-top: 80px;
  .all-card{
    // background-color: sandybrown;
    display: flex;
    flex-wrap: wrap;
    .parent-card{
      // background-color: violet;
      width: 250px;
      height: 200px;
      text-align: left;
      margin: 10px;
      cursor: pointer;
      &:hover{
        transform: scale(1.1);
        transition: ease .2s;
      }
      transition: ease .2s;
    }
    .card-image{
      background-color: salmon;
      // background-image: url('../assets/img/espresso.jpeg');
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 80%;
      border-radius: 10px 10px 0 0;
      overflow: hidden;
      img{
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    .card-label{
      // background-color: slateblue;
      width: 100%;
      height: 10%;
    }
    .card-price{
      // background-color: sandybrown;
      width: 100%;
      height: 10%;
      font-weight: bold;
    }
  }
  .page-controler{
    margin-top: 50px;
  }
}
</style>
