<template>
  <div class="statistics">
    <div class="header">
      <p class="title">Stats</p>
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

    <div class="date">
      <span>Monday,</span> 16 September 2020
    </div>
    <div class="userInfo">
      <div>
        <img src="../assets/images/User-icon.png" alt="">
        <label>
          <p class="title">Hi, Jack Sparrow</p>
          <p>
            This is your overall <span>statistics</span>
            for this semester
          </p>
        </label>

      </div>

    </div>
  <div class="types">
    <div class="userType">
      <p>Your type</p>
      <img src="../assets/images/userType.png" alt="">
    </div>
    <div class="activity">
      <p>Activity</p>
      <VueApexCharts id="#vuechart-example" width="600" type="line" :options="options" :series="series"></VueApexCharts>
    </div>
    <div class="userType">
      <p>Your type</p>
      <img src="../assets/images/userType.png" alt="">
    </div>
  </div>


  </div>

</template>

<script>

import VueApexCharts from 'vue-apexcharts'


export default {
  name: "Statistics",
  data(){
    return{
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },

      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  },
  components: {
    VueApexCharts,
  }
}
</script>

<style scoped lang="scss">
.statistics{
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


.date{
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #C6D2D2;
  >span{
    color: #8ACAA2;
  }
}

.userInfo{
  width: 1000px;
  height: 164px;
  margin-top: 100px;
  text-align: center;
  background: url("../assets/images/Hello.png");
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 200px;
      margin-top: -50px;
      margin-right: 70px;
    }
    label{

      .title{
        font-size: 24px;
        line-height: 29px;
        font-weight: bold;
        color: #FFFFFF;
      }
      p{
        font-size: 18px;
        width: 230px;
        line-height: 22px;
        color: #FFFFFF;
        span{
          font-weight: bold;
          color: #5EBC32;
        }
      }
    }

  }
}
.types{
  display: flex;
  justify-content: space-around;
  .userType{
    margin-top: 50px;
    width: 300px;
    height: 300px;
    background: #F1F4F3;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 243px;
      height: 202px;
    }
    p{
      position: absolute;
      font-weight: bold;
      font-size: 22px;
      line-height: 29px;
      top: 20px;
      left: 20px;
      color: #4B5884;
    }
  }
  .activity{
    margin-top: 50px;
    width: 650px;
    background: #F1F4F3;
    padding-top: 20px;
    border-radius: 5px;
    padding-left: 30px;
    p{
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      color: #4B5884;

    }
  }
}

</style>
