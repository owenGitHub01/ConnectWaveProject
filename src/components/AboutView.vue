<script setup>
import { useShoppingStore } from '../stores'
const data = useShoppingStore();
</script>

<template>
  <h2 class="-h2">About Us,</h2>
<div class="timeline">
  <div v-for="item in data.aboutInfo">
    <div class="container" :class="{'left-container': item.style === 'l', 'right-container': item.style === 'r'}">
      <div class="text-box">
        <h1>{{item.title}}</h1>
        <small>{{item.date}}</small>
        <p>{{item.text}}</p>
        <span :class="{'left-arrow': item.style === 'l', 'right-arrow': item.style === 'r'}"></span>
      </div>
    </div>
  </div>
</div>    
</template>

<style scoped>

* {
  margin: 0;
  padding: 0;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  box-sizing: border-box;
  width: 100%;
}

.-h2 {
  text-align: center;
  padding: 4rem 0 0;
  font-size: 32px;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 100px auto;
}
.container {
  padding: 10px 50px;
  position: relative;
  width: 50%;
  animation: movedown 1s linear forwards;
  opacity: 0;
}
@keyframes movedown {
  0%{
    opacity: 1;
    transform: translateY(-30px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}

small {
  font-size: 22px;
}
p {
  font-size: 20px;
}

.text-box {
  padding: 20px 30px;
  background: #eee;
  position: relative;
  border-radius: 6px;
  font-size: 20px;
}

.left-container {
  left: -25%;
}

.right-container {
  left: 25%;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 100%;
  background-color: #eee;
  top: 0;
  left: 50%;
  margin-left: 3px;
  z-index: -1;
  animation: moveline 6s linear forwards;
}
@keyframes moveline {
  0%{
    height: 0;
  }
  100%{
    height:100%;
  }
}

.textbox h2 {
  font-weight: 600;
}

.text-box small {
  display: inline-block;
  margin-bottom: 16px;
}

.left-arrow {
  height: 0;
  width: 0;
  position: absolute;
  top: 28px;
  z-index: 1;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 15px solid #eee;
  right: -16px;
}

.right-arrow {
  height: 0;
  width: 0;
  position: absolute;
  top: 28px;
  z-index: 1;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-right: 15px solid #eee;
  left: -16px;
}

@media screen and (max-width: 880px){
  .timeline {
    margin: 50px auto;
  }
  .timeline::after{
    left: 31px;
  }
  .container {
    width: 100%;
    padding-left: 80px;
    padding-right: 25px;
  }
  .text-box {
    font-size: 13px;
  }
  .text-box small {
    margin-bottom: 10px;
  }
  .left-arrow, .right-arrow {
    border-right: 15px solid #eee;
    border-left: 0;
    left: -16px;
  }
  .left-container {
    left: 0;
  }
  .right-container {
    left: 0;
  }
}


</style>
