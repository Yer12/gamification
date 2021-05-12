<template>
  <div class="course">
    <div class="header">
      <p class="title">Course</p>
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
    <div class="sub_header">
      <div @click="goBack()" class="back"><i class="far fa-arrow-alt-circle-left"></i> Back to Map</div>
      <div class="road">
        <p class="univer_name">Carnegie Mellon University</p>
        <p class="module">M009</p>
        <p class="course_title">\ Course</p>
      </div>
    </div>
    <div class="cont">
      <div class="cont1">

        <div class="module_progress">
          <p class="module_progress_title">Module Progress</p>
          <p class="module_progress_desc">
            Earn +0.3 points to unblock next University
          </p>
          <div class="module_progress_div">
            <div class="progress">
              <div class="progress-bar"></div>
            </div>
            <i class="fas fa-crown"></i>
          </div>
          <div class="module_footer">
            <p>0</p>
            <p>0.8 / 2.0 pts</p>
          </div>

        </div>
      </div>
      <div class="cont2">
        <div class="course_details">
          <p>Course Details</p>
          <div class="current_grade">
            <div class="current_grade_header">
              <p>Current grade</p>
              <p>25.5 of 72.0pts</p>
            </div>
            <div class="current_grade_body">
              <div><p>Theory</p><hr><p>4.5 of 7.5</p></div>
              <div><p>Quizes </p><hr><p>4.0 of 7.5</p></div>
              <div><p>Contest </p><hr><p>5.0 of 15.0</p></div>
              <div><p>Projects </p><hr><p>9.0 of 15.0</p></div>
            </div>
          </div>
        </div>
        <div class="discussion">
          <div class="discussion_header">
            <p class="discussion_title">
              Discussion
            </p>
            <div class="num_of_discussion">
              3
            </div>
          </div>
          <div class="discussion_body">
            <div class="user_disc">
              <div class="prof_disc circle profile">
                <img src="../assets/images/User-icon.png" alt="">
              </div>
              <div class="user_disc_body">
                <p>Jack Sparrow</p>
                <p>Not all treasure is silver and gold, Mate</p>
                <p>15:43 16 September, 2020</p>
              </div>
            </div>
            <div class="user_disc">
              <div class="prof_disc circle profile">
                <img src="../assets/images/User-icon (1).png" alt="">
              </div>
              <div class="user_disc_body">
                <p>Elizabeth Swann</p>
                <p>Do you like pain? Try wearing a corset.</p>
                <p>16:20 16 September, 2020</p>
              </div>
            </div>
            <div class="user_disc">
              <div class="prof_disc circle profile">
                <img src="../assets/images/User-icon (2).png" alt="">
              </div>
              <div class="user_disc_body">
                <p>Davy Jones</p>
                <p>You're a cruel man, Jack Sparrow!</p>
                <p>18:47 16 September, 2020</p>
              </div>
            </div>

            <div class="desc_input">
              <input type="text" class="inp" placeholder="Your message">
              <button class="send_button"><i class="far fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
        <div class="quick_action">
          <input type="text" class="inp_quick" placeholder="Quick Actions" name="" id="">
          <p>Contact teacher</p>
          <p>Report a technical problem</p>
          <p>Tutorial</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Tasks from "@/components/Tasks";
import Syllabus from "@/components/Syllabus";
export default {
  name: "Course",
  components: {Syllabus, Tasks},
  data(){
    return{
      list: [
        {
          title: "Objects and Classes",
          open: false,
          icon: require("@/assets/images/chalkboard-teacher-solid 1.png"),
          tasks: [
            {
              title: 'Describing objects and classes',
              icon: 'far fa-play-circle',
              isChecked: true
            },
            {
              title: 'UML graphical notation to describe classes',
              icon: 'far fa-play-circle',
              isChecked: true
            },
            {
              title: 'Constructors',
              icon: 'far fa-play-circle',
              isChecked: false
            },
            {
              title: 'Practice objects and classes',
              icon: 'fas fa-pencil-alt',
              isChecked: false
            },
          ]
        },
        {
          title: "Quiz",
          open: false,
          icon: require("@/assets/images/question-circle-regular 1.png"),

        },
        {
          title: "Contest",
          open: false,
          icon: require("@/assets/images/medal-solid 1.png"),
          tasks: [
            {
              title: 'Describing objects and classes',
              icon: 'far fa-play-circle',
              isChecked: true
            },
            {
              title: 'UML graphical notation to describe classes',
              icon: 'far fa-play-circle',
              isChecked: true
            },
            {
              title: 'Constructors',
              icon: 'far fa-play-circle',
              isChecked: false
            },
            {
              title: 'Practice objects and classes',
              icon: 'fas fa-pencil-alt',
              isChecked: false
            },
          ]
        },
        {
          title: "Project",
          open: false,
          icon: require("@/assets/images/pencil-ruler-solid 1.png"),
          tasks: [
            {
              title: 'Describing objects and classes',
              icon: 'far fa-play-circle',
              isChecked: true
            },
            {
              title: 'UML graphical notation to describe classes',
              icon: 'far fa-play-circle',
              isChecked: true
            },
            {
              title: 'Constructors',
              icon: 'far fa-play-circle',
              isChecked: false
            },
            {
              title: 'Practice objects and classes',
              icon: 'fas fa-pencil-alt',
              isChecked: false
            },
          ]
        }
      ],

    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped lang="scss">
.display-block{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.display-block:hover{
  color: #fac91b;
}
.course{
  margin-left: 7.291666666666667VW;
  width: 86vw;
  margin-bottom: 2.604166666666667VW;
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

.cont{
  display: flex;
  justify-content: space-between;
  .cont1{
    width: 55%;
  }
  .cont2{
    width: 35%;
  }
}
.module_div{
  width: 700px;
  >p{
    color: #bbc5c5;
    font-size: 12px;
    margin-bottom: 0 !important;
    font-weight: bold;
  }
  .module_header{
    background: #f1f4f3;
    padding: 25px 25px;
    font-size: 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    >i:first-child{
      color: #C6D2D2;
    }
    >i{
      cursor: pointer;
      font-size: 35px;
    }
    >p{
      margin-top: 15px;
    }
  }
}
.sub_header{
  color: #2F4858;
  .back{
    cursor: pointer;
    outline: none;
    font-weight: bold;
    font-size: 15px;
  }
  .road{
    display: flex;
    align-items: center;
    .univer_name{
      margin-right: 10px;
      font-size: 30px;
    }
    .module{
      font-size: 18px;
      margin-right: 10px;
      color: #505050;
    }
    .course_title{
      font-size: 26px;
    }
  }
}
.module_container{
  width: 93%;
}
.syllabus_task{
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  display:flex;
  flex-flow: column;
  justify-content: space-between;
  line-height: 22px;
  color: #505050;
  margin-bottom: 10px;
  div:first-child>img{
    margin-right: 10px;
  }
  div:nth-child(2){
    display: flex;
    margin-top: 10px;
    font-size: 15px;
    font-weight: none;
    line-height: 29px;
    color: #505050;
    >i{
      margin-left: 70px;
      position: absolute;
      font-size: 30px;
      color:#C6D2D2;
      transition: transform .5s ease-in-out;

    }
  }

}
.open {
  transform: rotateZ(90deg);
  color: #ffd04e !important;
}

.module_progress{
  margin-top: 50px;
  padding: 30px;
  background: #F1F4F3;
  border-radius: 5px;
  .module_progress_title{
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;
    color: #505050;
  }
  .module_progress_desc{
    font-weight: bold;
    font-size: 13px;
    line-height: 22px;
    color: #505050;
  }
  .module_progress_div{
    width: 93%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .progress{
      height:10px;
      width: 470px;
      background:#c6d2d2;
      .progress-bar{
        background:#fac91b;
        width:60%;
        height:10px;
        border-radius: 10px;
      }
    }
    >i{
      font-size: 40px;
      color: #fac91b;
    }
  }
  .module_footer{
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p:first-child{
      color: #c6d2d2;
      font-size: 27px;
      margin-bottom: 0 !important;
      font-weight: bold;
    }
    p:nth-child(2){
      color: #fac91b;
      margin-bottom: 0 !important;
      font-weight: 600;
      font-size: 26px;
    }
  }
}

.course_details{
  margin-bottom: 50px;
  >p{
    font-weight: bold;
    font-size: 13px;
    line-height: 22px;
    color: #C6D2D2;
    margin-bottom: 0 !important;
  }
  .current_grade{
    background: #F1F4F3;
    border-radius: 5px;
    .current_grade_header{
      background: #727171;
      border-radius: 5px 5px 0px 0px;
      display: flex;
      justify-content: space-between;
      padding:18px 20px;
      align-items: center;
      p:first-child{
        font-weight: 500;
        font-size: 20px;
        line-height: 34px;
        margin-bottom: 0 !important;
        color: #FFFFFF;
      }
      p:nth-child(2){
        font-size: 25px;
        line-height: 44px;
        color: #FFFFFF;
        margin-bottom: 0 !important;

      }
    }
    .current_grade_body{
      padding: 20px;
      div{
        display: flex;
        align-items: center;
        >p{
          font-weight: 500;
          font-size: 18px;
          line-height: 29px;
          color: #505050;
          margin-bottom: 0 !important;
        }
        >hr{
          width: 55%;
        }
      }


    }

  }

}
.discussion{
  background: #F1F4F3;
  border-radius: 5px;
  padding-bottom: 20px;
  .discussion_header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #A8E741;
    border-radius: 5px 5px 0px 0px;
    color: #fff;
    padding: 9px 23px;
    .discussion_title{
      margin-bottom: 0 !important;
      font-weight: 500;
      font-size: 28px;
      line-height: 34px;
      color: #FFFFFF;
    }
    .num_of_discussion{
      background: rgba(75, 75, 75, 0.33);
      border-radius: 50px;
      font-weight: 500;
      font-size: 36px;
      text-align: center;
      padding: 10px 27px;
      // width: 60px;
      // height: 60px;
      color: #FFFFFF;
    }
  }
  .discussion_body{
    .user_disc{
      margin: 15px;
      display: flex;
      align-items: center;
      .prof_disc{
        width: 60px;
        height: 60px;
        >img{
          width: 100%;
          height: 100%;
        }
      }
      .user_disc_body{
        margin-left: 20px;
        >p{
          margin-bottom: 5px !important;
        }
        >p:first-child{
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          color: #505050;
        }
        >p:last-child{
          font-weight: 500;
          font-size: 13px;
          line-height: 20px;
          color: #C6D2D2;
        }
        >p:nth-child(2){
          font-weight: 500;
          font-size: 15px;
          line-height: 22px;
          color: #505050;
        }
      }
    }
    .desc_input{
      margin: 0 20px;
      .inp{
        width: 100%;
        background: #FFFFFF;
        border-radius: 5px;
        border:none;
        padding: 15px 25px;
      }
      .inp::placeholder{
        font-family: Montserrat;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: #505050;
      }
      .send_button{
        margin-left: -80px;
        background: #000000;
        color: #fff;
        border:none;
        padding: 7px 25px;
        border-radius: 5px;
        >i{
          font-size: 20px;
        }
      }
    }

  }
}
.quick_action{
  margin-top: 50px;
  .inp_quick{
    border: none;
    width: 100%;
    margin-bottom: 15px;
    border-bottom: 1px solid #C6D2D2;
  }
  .inp_quick::placeholder{
    font-family: Montserrat;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
    color: #C6D2D2;
  }
  p{
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #505050;
    margin-bottom: 10px !important;
  }
}

</style>
