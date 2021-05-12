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
        <p class="course_title">\ Theory</p>
      </div>
    </div>
    <div class="cont">
      <div class="cont1">
        <div class="module_div">
          <p class="tiny_words">Current Assignments</p>

          <div class="module_container">
            <div v-for="(l,i) in videos" class="syllabus_task">
              <div class="display-block" @click="l.open = !l.open">
                <div class="play" :class="{'open': l.open}" >
                  <i class="far far fa-play-circle"></i>
                </div>
              </div>
            </div>

          </div>
        </div>
        <iframe width="790" height="500"
                src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0">
        </iframe>
        <p class="constructors_title">Constructors</p>
        <p class="tiny_words">Attachments (click to download)</p>

        <div class="attachments">
          <a href="">- Constructors.pptx</a>
          <a href="">- text_lecture.pdf</a>
        </div>

        <button class="next_step">
          Next step <i class="fa fa-arrow-right"></i>
        </button>

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
export default {
  name: "CourseVideo",
  components: {Tasks},
  data(){
    return{
      videos: [
        {
          title: "Objects and Classes",
          open: true,
          link: ""
        },
        {
          title: "Quiz",
          open: false,
          link: ""
        },
        {
          title: "Contest",
          open: false,
          link: ""
        },
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
.course{
  margin-left: 7.291666666666667VW;
  width: 84.375VW;
  margin-bottom: 2.604166666666667VW;

}
.header{
  height: 7.8125VW;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header_element{
  display: flex;
}
.title{
  font-size: 2.604166666666667VW;
  color: #505050;
}
.ellipse{
  cursor: pointer;
  width: 8.333333333333332VW;
  height: 2.604166666666667VW;
  border-radius: 50%;
  display: flex;
  align-items: center;
}
.message{
  background: #565656;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2.604166666666667VW;
  font-weight: 500;
  font-size: 0.78125VW;
  line-height: 2.2916666666666665VW;
  text-align: center;
  color: #FFFFFF;
  .num_of_message{
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2.604166666666667VW;
    font-size: 1.4583333333333333VW;
    margin-right: 0.5208333333333333VW;
  }
}

.circle{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.604166666666667VW;
  height: 2.604166666666667VW;
}
.user{
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2.604166666666667VW;
  font-weight: 500;
  margin-left: 1.5625VW;
  font-size: 0.6770833333333334VW;
  line-height: 1.0416666666666665VW;
  text-align: center;
  color: #121622;
  >span{
    margin-left: 0.4166666666666667VW;
  }
  .circle{
    >img{
      width: 100%;
      height: 100%;
      margin-left: 0.10416666666666667VW;
      margin-top: 0.10416666666666667VW;
    }
  }

}

a{
  text-decoration: none !important;

}
.cont{
  display: flex;
  justify-content: space-between;
  .cont1{
    width: 60%;
    >iframe{
      width: 50.083333333333336VW;
      height: 32.739583333333336VW;
      margin-top: 0.78125VW;
    }
    .constructors_title{
      font-size: 36px;
      margin-top: 5px;
    }
    .attachments{
      a{
        color: #2F4858 !important;
        margin-bottom: 10px;
      }
      display: flex;
      margin-top: 1.0416666666666665VW;
      flex-flow: column;
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.25VW;
      line-height: 1.5104166666666667VW;
      border: 3px solid #F1F4F3;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 1.0416666666666665VW;
    }
    .next_step{
      margin-top: 1.0416666666666665VW;
      width: 10.416666666666668VW;
      height: 3.125VW;
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1.25VW;
      line-height: 1.5104166666666667VW;
      text-align: center;
      background: #727171;
      border-radius: 5px;
      color: white;
      i{
        font-size: 0.78125VW;
      }
    }
  }
  .cont2{
    width: 35%;
  }
}
.tiny_words{
  color: #bbc5c5;
  font-size: 0.9375VW;
  margin-bottom: 0 !important;
  font-weight: bold;
}
.module_div{
  width: 100%;

  >p{

  }
  .module_header{
    background: #f1f4f3;
    padding: 1.3020833333333335VW 1.3020833333333335VW;
    font-size: 1.0416666666666665VW;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.083333333333333VW;
    >i:first-child{
      color: #C6D2D2;
    }
    >i{
      cursor: pointer;
      font-size: 1.8229166666666667VW;
    }
    >p{
      margin-top: 0.78125VW;
    }
  }
}
.sub_header{
  color: #2F4858;
  .back{
    cursor: pointer;
    outline: none;
    font-weight: bold;
    font-size: 0.78125VW;
  }
  .road{
    display: flex;
    align-items: center;
    .univer_name{
      margin-right:0.5208333333333333VW;
      font-size: 1.5625VW;
    }
    .module{
      font-size: 0.9375VW;
      margin-right: 0.5208333333333333VW;
      color: #505050;
    }
    .course_title{
      font-size: 1.3541666666666667VW;
    }
  }
}
.module_container{
  margin-top: 10px;
  width: 13.020833333333334VW;
  display: flex;
}
.syllabus_task{
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9375VW;
  display:flex;
  flex-flow: column;
  justify-content: space-between;
  line-height: 22px;
  color: #505050;
  margin-bottom: 10px;
  .display-block{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .play{
    width: 3.125VW;
    height: 3.125VW;
    color: white;
    border-radius: 5px;
    background-color: #9E9E9E;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    >i{
      font-size: 2.34375VW;
    }
  }
  .play:hover{
    background-color: #fac91b;
  }
}
.open {
  background-color: #5EBC32 !important;
}


.module_progress{
  margin-top: 2.604166666666667VW;
  padding: 1.5625VW;
  background: #F1F4F3;
  border-radius: 0.26041666666666663VW;
  .module_progress_title{
    font-weight: 500;
    font-size: 1.0416666666666665VW;
    line-height: 1.7708333333333333VW;
    color: #505050;
  }
  .module_progress_desc{
    font-weight: bold;
    font-size: 0.6770833333333334VW;
    line-height: 1.1458333333333333VW;
    color: #505050;
  }
  .module_progress_div{
    width: 93%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .progress{
      height:0.5208333333333333VW;
      width: 24.479166666666664VW;
      background:#c6d2d2;
      .progress-bar{
        background:#fac91b;
        width:60%;
        height:0.5208333333333333VW;
        border-radius: 0.5208333333333333VW;
      }
    }
    >i{
      font-size: 2.083333333333333VW;
      color: #fac91b;
    }
  }
  .module_footer{
    margin-top: 0.26041666666666663VW;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p:first-child{
      color: #c6d2d2;
      font-size: 1.40625VW;
      margin-bottom: 0 !important;
      font-weight: bold;
    }
    p:nth-child(2){
      color: #fac91b;
      margin-bottom: 0 !important;
      font-weight: 600;
      font-size: 1.3541666666666667VW;
    }
  }
}

.course_details{
  margin-bottom: 2.604166666666667VW;
  >p{
    font-weight: bold;
    font-size: 0.6770833333333334VW;
    line-height: 1.1458333333333333VW;
    color: #C6D2D2;
    margin-bottom: 0 !important;
  }
  .current_grade{
    background: #F1F4F3;
    border-radius: 0.26041666666666663VW;
    .current_grade_header{
      background: #727171;
      border-radius: 0.26041666666666663VW 0.26041666666666663VW 0px 0px;
      display: flex;
      justify-content: space-between;
      padding:0.9375VW 1.0416666666666665VW;
      align-items: center;
      p:first-child{
        font-weight: 500;
        font-size: 1.0416666666666665VW;
        line-height: 34px;
        margin-bottom: 0 !important;
        color: #FFFFFF;
      }
      p:nth-child(2){
        font-size: 1.875VW;
        line-height: 2.2916666666666665VW;
        color: #FFFFFF;
        margin-bottom: 0 !important;

      }
    }
    .current_grade_body{
      padding: 1.0416666666666665VW;
      div{
        display: flex;
        align-items: center;
        >p{
          font-weight: 500;
          font-size: 0.9375VW;
          line-height: 1.5104166666666667VW;
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
  border-radius: 0.26041666666666663VW;
  padding-bottom: 1.0416666666666665VW;
  .discussion_header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #A8E741;
    border-radius: 0.26041666666666663VW 0.26041666666666663VW 0px 0px;
    color: #fff;
    padding: 0.46875VW 1.1979166666666667VW;
    .discussion_title{
      margin-bottom: 0 !important;
      font-weight: 500;
      font-size: 1.4583333333333333VW;
      line-height: 1.7708333333333333VW;
      color: #FFFFFF;
    }
    .num_of_discussion{
      background: rgba(75, 75, 75, 0.33);
      border-radius: 2.604166666666667VW;
      font-weight: 500;
      font-size: 1.875VW;
      text-align: center;
      padding: 0.5208333333333333VW 1.40625VW;
      // width: 3.125VW;
      // height: 3.125VW;
      color: #FFFFFF;
    }
  }
  .discussion_body{
    .user_disc{
      margin: 1.0416666666666665VW;
      display: flex;
      align-items: center;
      .prof_disc{
        width: 3.125VW;
        height: 3.125VW;
        >img{
          width: 100%;
          height: 100%;
        }
      }
      .user_disc_body{
        margin-left: 1.0416666666666665VW;
        >p{
          margin-bottom: 0.26041666666666663VW !important;
        }
        >p:first-child{
          font-weight: bold;
          font-size:0.8333333333333334VW;
          line-height: 1.0416666666666665VW;
          color: #505050;
        }
        >p:last-child{
          font-weight: 500;
          font-size: 0.6770833333333334VW;
          line-height: 1.0416666666666665VW;
          color: #C6D2D2;
        }
        >p:nth-child(2){
          font-weight: 500;
          font-size: 0.9375VW;
          line-height: 1.1458333333333333VW;
          color: #505050;
        }
      }
    }
    .desc_input{
      margin: 0 1.0416666666666665VW;
      .inp{
        width: 100%;
        background: #FFFFFF;
        border-radius: 0.26041666666666663VW;
        border:none;
        padding: 0.78125VW 0.9895833333333333VW;
      }
      .inp::placeholder{
        font-family: Montserrat, sans-serif, sans-serif;
        font-weight: 500;
        font-size: 0.9375VW;
        line-height: 1.1458333333333333VW;
        color: #505050;
      }
      .send_button{
        margin-left: -4.566666666666666VW;
        background: #000000;
        color: #fff;
        border:none;
        padding: 0.3645833333333333VW 1.4583333333333333VW;
        border-radius: 0.26041666666666663VW;
        >i{
          font-size: 1.0416666666666665VW;
        }
      }
    }

  }
}
.quick_action{
  margin-top: 2.604166666666667VW;
  .inp_quick{
    border: none;
    width: 100%;
    margin-bottom: 1.26041666666666663VW;
    border-bottom: 1px solid #C6D2D2;
  }
  .inp_quick::placeholder{
    font-family: Montserrat, sans-serif, sans-serif;
    font-weight: bold;
    font-size: 0.9375VW;
    line-height: 1.1458333333333333VW;
    color: #C6D2D2;
  }
  p{
    font-weight: 500;
    font-size: 14px;
    line-height: 1.1458333333333333VW;
    color: #505050;
    margin-bottom: 0.5208333333333333VW !important;
  }
}


</style>
