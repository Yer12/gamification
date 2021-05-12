<template>
  <div class="leaderboard">
    <div class="header">
      <p class="title">Leaderboard</p>
      <div class="header_element">
        <div class="ellipse message">
          <div class="circle num_of_message">
            3
          </div>
          Messages
        </div>
        <div class="ellipse user">
          <div class="circle profile">
            <img src="../assets/images/User-icon.png" alt="">
          </div>
          <span>Jack Sparrow</span>
        </div>
      </div>
    </div>
    <div class="top_three" v-for="(u,idx) in topUsers.slice(0,1)">
      <div class="tops top2">
        <img src="../assets/images/User-icon (1).png" alt="">
        <p class="username">Elizabeth Swann</p>
        <p class="id">ID180107029</p>
        <p class="point">62.3 pts</p>
        <img class="medal" src="../assets/images/Medal.png" alt="">
      </div>
      <div class="tops top1">
        <img src="../assets/images/User-icon (1).png" alt="">
        <p class="username">Elizabeth Swann</p>
        <p class="id">ID180107029</p>
        <p class="point">62.3 pts</p>
        <img class="medal" src="../assets/images/Medal (1).png" alt="">

      </div>
      <div class="tops top3">
        <img src="../assets/images/User-icon (1).png" alt="">
        <p class="username">Elizabeth Swann</p>
        <p class="id">ID180107029</p>
        <p class="point">62.3 pts</p>
        <img class="medal" src="../assets/images/Medal (2).png" alt="">
      </div>
    </div>
    <div class="table_div">
      <table>
        <thead>
        <tr>
          <th >Rank</th>
          <th>Name</th>
          <th >ID</th>
          <th >Points</th>
          <th >Program</th>
        </tr>
        </thead>
        <tbody v-for="(u,idx) in topUsers.slice(3,topUsers.length)">
          <tr>
          <th>{{ idx+4 }}</th>
          <td>
              <img :src="u.userIcon" alt="">
              <span>{{ u.username }}</span>
          </td>
          <td>{{ u.id }}</td>
          <td>{{ u.point }}</td>
          <td>CSS</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Leaderboard",
  data() {
    return {
      topUsers: [
        {
          username: "Erlan Urazov",
          userIcon: require("../assets/images/User-icon (1).png"),
          id: 180107136,
          point: 99.9
        },
        {
          username: "Azamat Maemerov",
          userIcon: require("../assets/images/User-icon (2).png"),
          id: 180107236,
          point: 90.9
        },
        {
          username: "Bekzat Zagge",
          userIcon: require("../assets/images/User-icon.png"),
          id: 180107166,
          point: 89.9
        },
        {
          username: "John Joan",
          userIcon: require("../assets/images/User-icon (1).png"),
          id: 180107130,
          point: 79.9
        },
        {
          username: "Khabib Nurmagametov",
          userIcon: require("../assets/images/User-icon (2).png"),
          id: 180107106,
          point: 69.9
        },
        {
          username: "Maldibay Bakbergen",
          userIcon: require("../assets/images/User-icon.png"),
          id: 180107236,
          point: 59.9
        },
        {
          username: "Lion Bloods",
          userIcon: require("../assets/images/User-icon (1).png"),
          id: 180107126,
          point: 49.9
        },{
          username: "Skymag Maggy",
          userIcon: require("../assets/images/User-icon (2).png"),
          id: 18010778,
          point: 39.9
        },

      ]
    }
  }
}
</script>

<style scoped lang="scss">
.leaderboard{
  margin-left: 140px;
  width: 86vw;
  margin-bottom: 50px;
}
.header{
  height: 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_element{
  display: flex;
}
.title{
  font-size: 50px;
  color: #505050;
}
.ellipse{
  cursor: pointer;
  width: 160px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
}
.message{
  background: #565656;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-weight: 500;
  font-size: 15px;
  line-height: 44px;
  text-align: center;
  color: #FFFFFF;
.num_of_message{
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  font-size: 28px;
  margin-right: 10px;
}
}

.circle{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}
.user{
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-weight: 500;
  margin-left: 30px;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  color: #121622;
  >span{
    margin-left: 8px;
  }
  .circle{
    >img{
      width: 100%;
      height: 100%;
      margin-left: 2px;
      margin-top: 2px;
    }
  }
}

.top_three{
  padding-top: 80px;
  display: flex;
  justify-content: space-around;
  .tops{
    position: relative;
    width: 380px;
    height: 254px;
    background: #262626;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .medal{
      width: 50px;
      height: 64px;
      position: absolute;
      top: -20px;
      right: -20px;
    }
    .username{
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #FF9A00;
    }
    .id{
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #C6D2D2;
    }
    .point{
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #FFFFFF;
    }
    img{
      width: 90px;
    }
  }
  .top1{
    margin-top: -70px;
  }
  .top2{
    margin-top: -20px;
  }
}


table{
  color: #fff;
  border-collapse:separate;
  border-spacing:0 25px;
  thead{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 44px;
    text-align: center;
    tr{
      display: flex;
      background: #5EBC32;
      border-radius: 5px;
      width: 1330px;
      padding: 20px 30px;
      justify-content: space-between;
    }
  }
  tbody{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    tr{
      cursor: pointer;
      margin-bottom: 8px;
      display: flex;
      background: #262626;
      border-radius: 5px;
      text-align: center;
      width: 1330px;
      padding: 20px 30px;
      justify-content: space-between;
      align-items: center;
      th{
        font-size: 48px;
        line-height: 59px;
        /* identical to box height */

        text-align: center;

        color: #FF9A00;
      }
      td:nth-child(2){
        img{
          width: 70px;
          height: 70px;
          margin-left: -40px;
          margin-right: 20px;
        }
      }
    }
  }

}

</style>
