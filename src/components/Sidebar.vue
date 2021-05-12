<template>
  <div class="sidebar">
    <div class="menu">
      <div class="menu_logo"><span>J</span></div>
      <div v-for="(m,i) in menu" @click="choosen(i)" :class="{active: m.isChoosen}">
        <router-link :to="m.link">
          <div class="menu_elem">
            <img :src="m.image" alt="">
          </div>
        </router-link>
      </div>

    </div>
    <div class="profile">
      <div class="avatar">
        <img src="../assets/images/User-icon.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      menu : [
        {
          image: require('@/assets/images/Vector.png'),
          link: '/map',
          isChoosen: false,
        },
        {
          image: require('@/assets/images/Book.png'),
          link: '/syllabus',
          isChoosen: false,
        },
        {
          image: require('@/assets/images/Cup.png'),
          link: '/leaderboard',
          isChoosen: false,
        },
        {
          image: require('@/assets/images/Segment.png'),
          link: '/statistics',
          isChoosen: false,
        },
        {
          image: require('@/assets/images/Settings.png'),
          link: '/settings',
          isChoosen: false,
        },
      ]
    }
  },
  methods: {
    choosen(i) {
      for(let i=0; i<this.menu.length; i++){
        this.menu[i].isChoosen = false;
      }
      this.menu[i].isChoosen = true;

    }
  }
}
</script>

<style lang="scss">
.sidebar{
  background: #525151;
  width: 4.166666666666666VW;
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu{
  .menu_elem{
    width: 4.166666666666666VW;
    height: 4.166666666666666VW;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    >img{
      width:1.3020833333333335VW;
    }
  }
  .menu_logo{
    font-family: Montserrat, sans-serif;
    height: 4.166666666666666VW;
    background: #000;
    color: #FFFFFF;
    display: flex;
    cursor: pointer;
    align-items: flex-start;
    justify-content: center;
    >span {
      transform: rotate(-28.77deg);
      font-weight: bold;
      font-size: 2.604166666666667VW;
      line-height: 4.0625VW;
    }
  }
  .menu_elem:hover{
    background-color: rgb(34, 32, 32);
  }
}
.active{
  background-color: #fac91b;
  outline: none;
}
.profile{
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar{
    width: 3.125VW;
    height: 3.125VW;
    margin-bottom: 10px;
    >img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
