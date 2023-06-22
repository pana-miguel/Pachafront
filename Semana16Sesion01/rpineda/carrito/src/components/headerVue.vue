<template>
  <header class="header" id="js_header">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/img/logo.png" alt="logo" />
      </router-link>
    </div>
    <div style="display: none;">

    </div>
    <nav class="menu">
      <!-- Debe mandarse a la ruta mis compras -->
      <div class="mini-shop-cart">
        <span class="circle">
          <span class="counter">
            {{ getCounterMiniShopCart }}
          </span>
        </span>
        <router-link to="/my-shopping">
          <img src="@/assets/img/iconCart.png" alt="iconCart" />
        </router-link>
      </div>
      <!-- Debe de abrir un menu deplegable -->
      <div class="menu-burguer-button" @click="showMenu">
        <img src="@/assets/img/iconBar.png" alt="iconBars" />
      </div>
      <div class="gray-out"></div>
      <div class="widget-menu" id="js_menu">
        <div class="widget-close" @click="hideMenu">
          <i class="fas fa-times-circle"></i>
        </div>
        <ul>
          <li><router-link to="/login">Login / Register</router-link></li>
          <li><router-link to="/my-shopping">Mis compras</router-link></li>
        </ul>
        <h2>Options for Development</h2>
        <ul>
          <li>
            <router-link to="/payment-gateway">Pasarela de pago</router-link>
          </li>
          <li>
            <router-link to="/checkout">Consolidado de pago</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { useItemsShopCartStore } from '../stores/shopCart'
export default {
  name: "headerVue",
  methods: {
    showMenu() {
      const menu = document.querySelector("#js_menu");
      const grayOut = document.querySelector(".gray-out");
      menu.classList.add("active");
      grayOut.classList.add("active");
    },
    hideMenu() {
      const menu = document.querySelector("#js_menu");
      const grayOut = document.querySelector(".gray-out");
      menu.classList.remove("active");
      grayOut.classList.remove("active");
    },
  },
  computed: {
    getCounterMiniShopCart() {
      
const itemsShopCart = useItemsShopCartStore();
itemsShopCart.fill();
console.log(itemsShopCart)
      return itemsShopCart.shopCart.length;
    },
  }
}
  //getCounterMiniShopCart
</script>

<style scoped>
/*Validation vistas*/
.header.login {
  display: none;
}

.header.color {
  display: flex;
  background: var(--color-blue2);
  position: unset;
}

.header {
  background: transparent;
  padding: 0 15px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  transition: background 0.4s ease;
  z-index: 999;
  top: 0;
}

.header.fixed {
  background: var(--color-blue2);
}

.logo a {
  display: block;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75px;
}

.mini-shop-cart {
  position: relative;
}

.circle {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: var(--color-blue);
  position: absolute;
  top: 0;
  right: -9px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter {
  color: var(--color-white);
  font-size: 10px;
  font-family: var(--poppins-bold);
  line-height: 16px;
}

.mini-shop-cart,
.menu-burguer-button {
  cursor: pointer;
}

/*Desplegable menu*/
.gray-out {
  width: 100%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  opacity: 0;
  visibility: hidden;
  background: rgba(53, 53, 53, 0.4);
  transition: 0.4s ease-in-out all;
}

.gray-out.active {
  opacity: 1;
  visibility: visible;
}

.widget-close {
  position: absolute;
  top: 10px;
  right: 15px;
  color: var(--color-white);
  cursor: pointer;
}

.widget-close i {
  font-size: 24px;
}

.widget-menu {
  position: fixed;
  width: 70%;
  height: 100vh;
  top: 0;
  right: -100%;
  background: var(--color-blue2);
  transition: 0.5s ease all;
  z-index: 99;
}

.widget-menu h2 {
  color: var(--color-white);
  font-family: var(--poppins-bold);
  font-size: 18px;
  padding: 20px;
}

.widget-menu.active {
  right: 0rem;
}

.widget-menu ul {
  width: 100%;
  padding: 10px;
  margin: 2rem 0 0 0;
}

.widget-menu li {
  width: 100%;
  height: 40px;
}

.widget-menu a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: var(--color-white);
  font-family: var(--roboto-regular);
  transition: 0.4s ease all;
}

.widget-menu a:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Respoonive */
/* Tablet V */
@media screen and (min-width: 768px) {}

/* Desktop */
@media screen and (min-width: 992px) {
  .header {
    padding: 0 5%;
  }

  .widget-menu {
    width: 40%;
  }
}

/* Large Desktop */
@media screen and (min-width: 1200px) {
  .header {
    padding: 0 8%;
  }

  .widget-menu {
    width: 35%;
  }
}</style>
