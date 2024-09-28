<template>
    <div id="head" style="color: white;" :class="{'!text-black':onAbout()}">
        <p :class="{'!transition-none':!onHomepage()}">
            <a href='../' :class="{'small':!onHomepage(), 'show-dot':!onHomepage()}" class="main pointer-events-auto"><span>C</span></a>
            <a href='../' :class="{'notVisible':!onHomepage()}" class="first pointer-events-auto" style="visibility: visible; display: inline;"><span>ecilia</span></a>
            <a href='../' :class="{'invisible':!onHomepage()}" class="blankSpace pointer-events-auto"><span> </span></a>
            <a href='../' :class="{'small':!onHomepage(), 'show-dot':!onHomepage()}" class="main pointer-events-auto"><span>A</span></a>
            <a href='../' :class="{'notVisible':!onHomepage()}" class="first pointer-events-auto" style="visibility: visible; display: inline; margin-left: -.08em;"><span>vogadro</span></a>
        </p>
        <p :class="{'invisible':!onHomepage()}" class="arch">Arch.</p>
        <div v-if="!isMobile" :class="{'visible':!onHomepage()}" id="spansRow">
            <a v-bind:href="'..#s_4'" :class="{'visible':!onHomepage(), 'hasArrow':onProject()}" class="menu"><span>PROJECTS</span></a>
            <a href='../project-index' :class="{'visible':!onHomepage(), 'hasArrow':onIndex()}" class="menu"><span>INDEX</span></a>
            <a href='../vision' :class="{'visible':!onHomepage(), 'hasArrow':onVision()}" class="menu"><span>VISION</span></a>
            <a href='../about' :class="{'visible':!onHomepage(), 'hasArrow':onAbout(), 'text-black':onAbout()}" class="menu"><span>ABOUT</span></a>
        </div>
        <div v-if="isMobile" :class="{'visible':!onHomepage()}" id="spansRowMobile">
          <p :class="{'visible':!onHomepage()}" class="menu cursor-pointer" @click="toggleMenu"><span>MENU</span></p>
        </div>
    </div>
    <div v-if="isMobile"
    id="menuMobile"
    class="bg-lightgrey fixed left-0 top-0 z-[999999] p-20px w-screen h-[100dvh] transition-all duration-[600ms]"
    :class="{'translate-x-0':menuIsOpen, 'translate-x-[100vw]':!menuIsOpen}">
      <p class="absolute top-20px right-20px menu cursor-pointer" @click="toggleMenu"><span>CLOSE</span></p>
      <div class="flex flex-col w-auto">
        <a v-bind:href="'..#s_4'" :class="{'hasArrow':onProject()}"><span>PROJECTS</span></a>
        <a href='../project-index' :class="{'hasArrow':onIndex()}"><span>INDEX</span></a>
        <a href='../vision' :class="{'hasArrow':onVision()}"><span>VISION</span></a>
        <a href='../about' :class="{'hasArrow':onAbout()}"><span>ABOUT</span></a>
      </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useMyStore } from '../store/store.js';
const route = useRoute();
const slug = route.params.slug;
const store = useMyStore();
let isMobile = computed(() => store.isMobile)
let menuIsOpen = computed(() => store.menuIsOpen);

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

const toggleMenu = () => {
  store.menuIsOpen = !store.menuIsOpen;
}
</script>