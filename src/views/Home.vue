<template>
  <div>
    <navbar @cart-clicked="showModal"
            @menu-clicked="sidebarModal"/>
    <sidebar @modal-add="addProduct"/>
    <Menu/>
    <cart @btn-back-clicked="removeModal"
          @addModal="addReceipt"/>
    <modal @closeModal="closeModal"
            @close-clicked="closemodalAdd"/>
    <checkout @closeReceipt="closeReceipt"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Menu from '../components/Menu.vue';
import Cart from '../components/Cart.vue';
import Modal from '../components/Modal.vue';
import Checkout from '../components/Checkout.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Menu,
    Cart,
    Modal,
    Checkout,
  },
  methods: {
    sidebarModal() {
      document.querySelector('.sidebar').classList.toggle('sidebarActive');
    },
    showModal() {
      document.querySelector('.cart-parent').classList.add('parent-active');
    },
    addProduct() {
      document.querySelector('.modal-parent').classList.add('modal-active');
    },
    closemodalAdd() {
      document.querySelector('.modal-parent').classList.remove('modal-active');
    },
    addReceipt() {
      document.querySelector('.checkout-master').classList.add('checkout-active');
    },
    closeReceipt() {
      document.querySelector('.checkout-master').classList.remove('checkout-active');
    },
    closeModal() {
      document.querySelector('.modal-parent').classList.remove('modal-active');
    },
    removeModal() {
      document.querySelector('.cart-parent').classList.remove('parent-active');
    },
  },
};
</script>

<style>

</style>
