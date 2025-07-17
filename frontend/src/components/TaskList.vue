<script setup>
import {ref} from 'vue'
import { useStorage } from '@vueuse/core'

const data = useStorage('formDataList', [])

const formData = ref({
  task: '',
  date: Date,
})

const error=ref(false)
const checkstate = ref([])

const errorDate = (date) => {
  const todayDate = new Date()
  const formDate = new Date(date)
  todayDate.setHours(0, 0, 0, 0)
  formDate.setHours(0, 0, 0, 0)
  if(formDate<todayDate){
    error.value=true
    console.log(error.value)
    return error.value
  }
  else if(formDate==todayDate){
    error.value=false
    console.log(error.value)
    return error.value
  }
  console.log(todayDate)
}

const displayTasks = () => {
  errorDate(formData.value.date)
  if (!error.value) {
    console.log(formData.value)
    data.value.push({...formData.value})
    console.log(data.value)
    formData.value.task = ''
    formData.value.date = ''
  }
}
</script>

<template>
  <div class="container">
    <div class="container__contents">
      <div class="services__texts">
        <h1 class="services__title">Gagnez du temps Restez organisé Atteignez vos objectifs.</h1>
        <div class="services__scrolling__container">
          <h2 class="services__scrolling__item">Votre vie bien organisée commence ici.</h2>
          <h2 class="services__scrolling__item">La gestion de tâches n'a jamais été aussi simple et efficace.</h2>
          <h2 class="services__scrolling__item">Organisez, planifiez et accomplissez plus, tout en un seul endroit. </h2>
          <h2 class="services__scrolling__item"> Simplifiez votre quotidien avec notre outil de gestion de tâches intuitif.</h2>
          <h2 class="services__scrolling__item">L'outil qu'il vous faut pour rester productif et motivé.()</h2>
        </div>
      </div>
      <div class="tasks__form">
        <form @submit.prevent="displayTasks" class="form">
          <div class="tasks__form__item">
            <label for="task"><h2>Ajouter une tâche</h2></label>
            <textarea name="task__text" class="task__text" v-model="formData.task"></textarea>
          </div>
          <div class="tasks__form__item">
            <label for="date"><h2>Pour quel jour voulez-vous programmer cette tâche ?</h2></label>
            <input type="date" v-model="formData.date"/>
            <span class="dateError" v-if="error">La date entrée est invalide</span>
          </div>
          <button class="form__btn">Ajouter</button>
        </form>
      </div>

      <h1 class="tasklist_title">Liste des tâches</h1>
      <div v-if="data.length > 0" class="notepad__container">
        <div v-for="(item, index) in data" :key="index" class="notepad_items">
          <input type="checkbox" v-model="checkstate" :value="index" class="checkbox">
          <div :class="{ 'barre': checkstate.includes(index) }">
            <h2 class="date">{{ item.date }}</h2>
            <h2 class="task">{{ item.task }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 50px auto;
}
.services__texts {
  display: flex;
}
.services__title {
  margin-top: 40px;
  width: 40%;
  font-family: 'Aclonica-Regular';
  font-size: 40px;
}
.services__scrolling__container {
  width: 70%;
  height: 200px;
  margin-top: 30px;
  position: relative;
  overflow: hidden;
  border: 2px dashed #000000;
  background: #50003cb4;
  border-radius: 8px;
}
.services__scrolling__item {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 40px;
  font-family: 'Exo-Regular';
  color: #ddbdbd;
  align-items: center;
  padding-left: 38px;
  opacity: 0;
  animation: itemSequence 20s infinite;
}
.services__scrolling__item:nth-child(1) {
  animation-delay: 0s;
}
.services__scrolling__item:nth-child(2) {
  animation-delay: 4s;
}
.services__scrolling__item:nth-child(3) {
  animation-delay: 8s;
}
.services__scrolling__item:nth-child(4) {
  animation-delay: 12s;
}
.services__scrolling__item:nth-child(5) {
  animation-delay: 16s;
}

@keyframes itemSequence {
  0%,
  100% {
    opacity: 0;
    transform: translateX(50px);
  }
  10%,
  15% {
    opacity: 1;
    transform: translateX(0);
  }
  25% {
    opacity: 0;
    transform: translateX(-50px);
  }
}

.tasks__form {
  width: 800px;
  margin-right: auto;
  margin-left: auto;
}
.form {
  margin-top: 120px;
  margin-bottom: 20px;
  padding: 40px;
  background-color: #460037b4;
  border-radius: 30px;
}
.tasks__form__item {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.tasks__form__item textarea {
  outline: none;
  padding: 15px 20px;
  border: none;
  border-radius: 30px;
  margin-bottom: 70px;
}
.tasks__form__item input {
  padding: 25px 20px;
  outline: none;
  border: none;
  border-radius: 30px;
}
.form__btn {
  display: block;
  width: 100%;
  margin-top: 45px;
  background-color: rgba(168, 115, 238, 0.849);
  border-radius: 50px;
  padding: 15px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
}
.form__btn:hover {
  background-color: rgba(142, 142, 177, 0.432);
  color: #fff;
}



.dateError{
  font-size: 18px;
  color: red;
}

.tasklist_title{
  margin-top: 100px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 1000;
  text-decoration: underline;
}

.notepad__container {
  display: grid;
  grid-template-columns: 250px 250px 250px;
  align-items: center;
  justify-content: center;
  gap: 80px;
  width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 10px;
  padding-bottom: 30px;
  padding-left: 80px;
}

.notepad_items {
  display: flex;
  gap: 20px;
  margin: 10px auto;
  box-shadow: 0px 0px 10px #04291db4;
  border-radius: 10px;
  background-color: rgb(184, 165, 142);
  padding: 30px;
}

.checkbox{
  padding: 20px;
}

.barre{
  text-decoration: line-through;
}

.task{
  word-break: break-all;
}
</style>
