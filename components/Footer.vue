<template>
    <div :class="{'bg-white':onHomepage(), 'text-black':onHomepage(), 'bg-darkgrey':onIndex(), 'text-white':onIndex()}">
        <div id="footer" class="hidden md:block pt-[8em] mb-24">
            <div class="flex flex-col text-[2rem] ml-20% w-66% gap-0 leading-tight" id="footerColumn">
                <a v-bind:href="'..#s_4'" class="relative w-fit"><span>PROJECTS</span></a>
                <a href='../project-index' class="relative w-fit"><span>INDEX</span></a>
                <a href='../vision' class="relative w-fit"><span>VISION</span></a>
                <a href='../about' class="relative w-fit"><span>ABOUT</span></a>
            </div>
        </div>
        <div id="credits" class="hidden md:flex justify-between
        w-full p-10px mt-0">
            <p>©2024</p>
            <div class="flex w-[70vw] justify-end
            gap-20px md:gap-[12vw]">
                <p>&nbsp;</p>
                <a href="mailto:cecilia.avogadro@gmail.com">E—MAIL</a>
                <a href="https://www.instagram.com/ceciliaavogadroarchitetto/" target="_blank" class="w-">IG</a>
                <p @click="doSomething" class="cursor-pointer w-">CREDITS</p>
            </div>
        </div>
        <div id="creditsOpen" class="hidden md:flex justify-start
        w-full -mt-10px
        overflow-hidden transition-all duration-500 gap-0"
        :class="{'p-0 h-0 opacity-0':isAboutClosed,
          'p-10px pt-0 h-8 opacity-100':!isAboutClosed
        }">
            <p>Design: <a class="underline" href="http://studiosecondo.com/" target="_blank">Studio Secondo</a> / 
            Sviluppo: <a class="underline" href="https://schlatterca.com" target="_blank">Carlo Andrea Schlatter</a></p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const slug = route.params.slug;
let isAboutClosed = ref(true);

const doSomething = () => {
  isAboutClosed.value = !isAboutClosed.value;
  setTimeout(() => {
    document.getElementById('creditsOpen').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 500)
}

const onHomepage = () => {
  return route.path === '/';
};
const onProject = () => {
  return (route.path.includes('/progetti/') || (route.path === '/'));
};
const onAbout = () => {
  return route.path.includes('/about');
};
const onVision = () => {
  return route.path.includes('/vision');
};
const onIndex = () => {
  return route.path.includes('/project-index');
};
</script>