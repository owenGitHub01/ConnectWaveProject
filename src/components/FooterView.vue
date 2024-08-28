<template>
  <div class="main">
    <div class="line"></div>
    <div class="laptop-view">
      <div class="-flex">
        <div>
          <img class="-img" src="../Images/c.png" alt="">
          <img class="-img"  src="../Images/w.png" alt="">
        </div>
        <h2 class="-text">ConnectWave - Be apart of the change.</h2>
      </div>
      <div class="-nav">
        <h2 class="bold">Navigation</h2>
        <ul>
          <li class="li">
            <router-link class="-nav-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="-nav-link" to="/about">About Us</router-link>
          </li>
          <li>
            <router-link class="-nav-link" to="/devices">Devices</router-link>
          </li>
          <li>
            <router-link class="-nav-link" to="/bundles">Bundles</router-link>
          </li>
          <li>
            <router-link class="-nav-link" to="/cart">Basket</router-link>
          </li>
        </ul>
    </div>
    <div class="-socials">
      <h2 class="bold">Socials</h2>
      <div class="flex">
        <img class="social-img" src="../Images/facebook.png" alt="">
        <img class="social-img" src="../Images/twitter.png" alt="">
        <img class="social-img" src="../Images/instagram.png" alt="">
        <img class="social-img" src="../Images/gmail.png" alt="">
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
* {
  text-align: center;
}

.line {
  width: 80%;
  margin: 0 auto 2rem;
  border: 1px solid rgb(125 211 252);
  height: 1px;
}

.main {
  margin: 3rem 0 5rem;
} 

.-flex {
  margin: 1rem 0 2rem;
}
.-img {
  width: 44px;
}
.-text {
  width: 70%;
  margin: 0 auto;
}

.-nav {
  margin: 1rem 0 2rem;
}
.bold {
  font-weight: bold;
  font-size: 28px;
}
li {
  list-style-type: none;
  padding-right: 20px;
}
.-nav-link {
  font-size: 24px;
  text-decoration: none;
  color: black;
}

.-socials {
  margin: 1.5rem 0;
}
.flex {
  display: flex;
  justify-content: center;
}
.social-img {
  width: 40px;
  margin: 0 12px;
}

/* Small iPad screens (iPad Mini) */
@media screen and (min-width:760px){
  .-img {
    width: 48px;
  }
  .-nav {
    margin: 4rem 0;
  }
  .bold {
    font-size: 32px;
  }
  .-nav-link {
    font-size: 20px;
  }
  .-socials {
    margin: 2.5rem 0;
  }
  .social-img {
    width: 48px;
    margin: 0 20px;
  }
}

/* Large iPad screens (iPad Pro) */
@media screen and (min-width:960px){
  .ipad-view {
    width: 80%;
  }
  .bold {
    font-size: 36px;
  }
}

/* Laptop screens */
@media screen and (min-width:1220px){
  .laptop-view {
    display: flex;
    height: 18rem;
    justify-content: space-evenly;
  }
  .line {
    width: 95%;
  }
  .-nav {
    margin: 1rem 0;
    margin-right: 0;
  }
  .-socials {
    margin: 1rem 0;
  }
}
</style>