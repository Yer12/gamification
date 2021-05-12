<template>
  <div class="rightbar">
    <div class="info_about_univer">
      <div class="univer_title">
        Carnegie Mellon University
      </div>
      <div class="cont">
        <div class="slider">
<!--          <img src="../assets/images/image 3.png" alt="">-->
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide><img src="../assets/images/image 3.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/image 3.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/image 3.png" alt=""></swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>

        </div>
        <div class="desc">
          Carnegie Mellon University (CMU) is a private research university based in Pittsburgh, Pennsylvania. Founded in 1900 by Andrew Carnegie as the Carnegie Technical Schools, the university became the Carnegie Institute of Technology in 1912 and began granting four-year degrees. In 1967, the Carnegie Institute of Technology merged with the Mellon Institute of Industrial Research to form Carnegie Mellon University.
        </div>
      </div>
    </div>
    <div class="syllabus">
      <div class="syllabus_title">
        Your syllabus here:
      </div>
      <div v-for="(l,i) in list" class="syllabus_task">
        <div class="display-block" @click="l.open = !l.open">
          <div>
            <img :src="l.icon" alt="">
            {{l.title}}
          </div>
          <div>0 of 0.5 <i :class="{'open': l.open}" class="far fa-arrow-alt-circle-right"></i></div>
        </div>
        <tasks :list="l" />
      </div>
    </div>
  </div>
</template>

<script>
import Tasks from "@/components/Tasks";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'


export default {
name: "RightBar",
  components: {
    Tasks,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data(){
    return{
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: -70,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
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
}
</script>

<style scoped lang="scss">
@import './node_modules/swiper/swiper';
.swiper-slide {
  width: 100%;
}
.rightbar{
  width: 26.041666666666668VW;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  padding-top: 2.083333333333333VW;
  background: #525252;
  overflow-y: scroll;
}
.univer_title:first-child{
  background: #FAC91B;
  font-weight: bold;
  font-size: 1.575VW;
  display: flex;
  padding: 0.26041666666666663VW 1.5625VW;
  color: #FFFFFF;
}
.syllabus_title{
  background: #FAC91B;
  font-weight: bold;
  font-size: 1.25VW;
  margin-top: 1.0416666666666665VW;
  margin-bottom: 1.0416666666666665VW;
  display: flex;
  padding: 0.26041666666666663VW 1.5625VW;
  color: #FFFFFF;
}
.slider{
  padding: 1.0416666666666665VW 1.0416666666666665VW 1.3020833333333335VW 1.5625VW;
  .line{
    width: 5.208333333333334VW;
    border-bottom: 4px solid #FAC91B;
    padding: 8px;
  }
  >img{
    border: 3px solid #fff;
    width: 12.5VW;
    height: 8.333333333333332VW;
  }
}
.desc{
  color: #fff;
  font-weight: 500;
  font-size: 0.8333333333333334VW;
  line-height: 1.0416666666666665VW;
  text-align: justify;
  padding: 1.5625VW;
  padding-top: 0;
  padding-bottom: 0.26041666666666663VW;
}
.syllabus_task{
  cursor: pointer;
  margin-left: 2.083333333333333VW;
  font-weight: bold;
  font-size: 0.9375VW;
  line-height: 1.1458333333333333VW;
  color: #FFFFFF;
  margin-bottom: 1.0416666666666665VW;
  >img:first-child{
    margin-right: 0.5208333333333333VW;
  }

}
.lecture_task{
  margin-top: 1.0416666666666665VW;
  margin-bottom: 1.0416666666666665VW;
  list-style: none;
  margin-left: 2.083333333333333VW;
  outline: none;
  .task{
    margin-left: 1.0416666666666665VW;
    cursor: pointer;
    outline: none;
    display: flex;
    font-weight: 500;
    font-size:0.78125VW;
    align-items: center;

    margin-bottom:0.5208333333333333VW;
    color: #FFFFFF;
    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.4166666666666667VW;
      font-size: 1.3020833333333335VW;
      color: #C6D2D2;
    }
    .checked{
      color: #76DD46;
    }
  }
}
.swiper{
  img{
    width: 15.104166666666666VW;
    border: 4px solid #Fff;
  }
}
i {
  margin-left: 30px;
  margin-right: 20px;
  font-size: 1.5625VW;
  color: #C6D2D2;
  transition: transform .5s ease-in-out;
}
.open {
  transform: rotateZ(90deg);
  color: #ffd04e !important;
}
.display-block{
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.display-block:hover{
  color: #fac91b;
}

</style>
