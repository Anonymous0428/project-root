<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
<header class="header">
  <div class="header__container">
    <div class="header__container__contents">
      <div class="header__left">
        <div class="header__menu">
          <ul class="menu__list">
            <li class="menu__list__item"><RouterLink to="#">MENU</RouterLink></li>
            <li class="menu__list__item"><RouterLink to="#">MENU</RouterLink></li>
            <li class="menu__list__item"><RouterLink to="#">MENU</RouterLink></li>
          </ul>
        </div>
      </div>
      <div class="header__right">
        <div class="header__login">
          <ul class="connect__list">
            <li class="connect__list__item"><RouterLink to="/login">Se connecter</RouterLink></li>
            <li class="connect__list__item"><RouterLink to="/register">Créer un compte</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</header>

<main>
  <slot></slot>
</main>

<footer class="rights">
    <div class="text__footer">
      <p>Tous droits réservés, @2025.</p>
    </div>
  </footer>
</template>


<style scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  padding: 10px 0px;
  display: block;
  align-content: center;
  background-color: #af7ea5;
}
.header__container {
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  padding: 45px 0;
}
.header__container__contents {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.menu__list {
  display: flex;
  gap: 15px;
}
.header__right {
  display: flex;
  align-items: center;
  gap: 30px;
}
.connect__list {
  display: flex;
  gap: 10px;
}
.connect__list__item a {
  background-color: #664760;
  padding: 10px 15px;
  border: none;
  border-radius: 30px;
  color: #d8cdcd;
}
.connect__list__item a:hover {
  background-color: #af7ea5;
  color: #fff;
}




.rights {
  background-color: #af7ea5;
}
.text__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 52px 0;
}
.text__footer p {
  color: #fff;
  font-size: 16px;
}
</style>