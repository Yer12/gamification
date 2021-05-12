<template>
  <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <div v-show="list.open" class="lecture_task">
      <div v-for="(task,index) in list.tasks" :key="index"  class="task">
       <i :class="[{checked : task.isChecked},task.icon]" class="icon far"></i>
        <router-link to="course/video">{{task.title}}</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Tasks",
  props: ['list'],
  methods: {
    enter(el) {
      el.style.height = 'auto';
      const height = getComputedStyle(el).height;
      el.style.height = 0;
      getComputedStyle(el);

      setTimeout(() => {
        el.style.height = height;
      });
    },
    afterEnter(el) {
      el.style.height = 'auto';
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height;
      getComputedStyle(el);

      setTimeout(() => {
        el.style.height = 0;
      });
    }
  }
}
</script>

<style scoped lang="scss">
.lecture_task{
  display: flex;
  flex-flow: column;
  margin-bottom: 0.78125VW;
  list-style: none;
  margin-left:2.083333333333333VW;
.task{
  cursor: pointer;
  display: flex;
  font-weight: 500;
  font-size: 0.78125VW;
  align-items: center;
  margin-bottom:0.78125VW;
  color: #505050;
.icon{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  font-size: 1.5625VW;
  color: #C6D2D2;
}
.checked{
  color: #76DD46;
}
}
}

.expand-enter-active, .expand-leave-active{
  transition: height .5s ease-in-out;
  overflow: hidden;
}

</style>
