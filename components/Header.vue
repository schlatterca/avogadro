<template>
    <div v-if="!isMobile" id="head" style="color: white;" :class="{'!text-black':onAbout()}">
        <p :class="{'!transition-none':!onHomepage()}">
            <a href='../' :class="{'small':!onHomepage(), 'show-dot':!onHomepage()}" class="main pointer-events-auto"><span>C</span></a>
            <a href='../' :class="{'notVisible':!onHomepage()}" class="first pointer-events-auto" style="visibility: visible; display: inline;"><span>ecilia</span></a>
            <a href='../' :class="{'invisible':!onHomepage()}" class="blankSpace pointer-events-auto"><span> </span></a>
            <a href='../' :class="{'small':!onHomepage(), 'show-dot':!onHomepage()}" class="main pointer-events-auto ml-[.4em]"><span>A</span></a>
            <a href='../' :class="{'notVisible':!onHomepage()}" class="first pointer-events-auto" style="visibility: visible; display: inline; margin-left: -.08em;"><span>vogadro</span></a>
        </p>
        <p :class="{'invisible':!onHomepage()}" class="arch">Arch.</p>
        <div :class="{'visible':!onHomepage()}" id="spansRow">
            <a v-bind:href="'..#s_4'" :class="{'visible':!onHomepage(), 'hasArrow':onProject()}" class="menu"><span>PROJECTS</span></a>
            <a href='../project-index' :class="{'visible':!onHomepage(), 'hasArrow':onIndex()}" class="menu"><span>INDEX</span></a>
            <a href='../vision' :class="{'visible':!onHomepage(), 'hasArrow':onVision()}" class="menu"><span>VISION</span></a>
            <a href='../about' :class="{'visible':!onHomepage(), 'hasArrow':onAbout(), 'text-black':onAbout()}" class="menu"><span>ABOUT</span></a>
        </div>
    </div>

    <!--MOBILE MENU-->
    <div v-if="isMobile" id="head"
    :class="{'!text-black': onAbout(), 'text-black': headerBlack, 'text-white': !headerBlack}">
        <p>
          <a href='../'><span class="text-l">Cecilia Avogadro</span></a>
        </p>
        <p class="cursor-pointer relative w-[40vw] text-right" @click="toggleMenu">
          <span class="absolute right-0 text-l transition-all"
          :class="{'opacity-0': headerBlack || !onHomepage(), 'pointer-events-none': headerBlack || !onHomepage() }">Arch.</span>
          <span class="absolute right-0 text-l transition-all"
          :class="{'opacity-0': !headerBlack, 'pointer-events-none': !headerBlack, '!opacity-100': !onHomepage(), '!pointer-events-auto': !onHomepage()}">Menu</span>
        </p>
    </div>
    <div v-if="isMobile"
    id="menuMobile"
    class="bg-lightgrey text-l fixed left-0 top-0 z-[999999] p-20px w-screen h-[100dvh] transition-all duration-[600ms]"
    :class="{'translate-x-0':menuIsOpen, 'translate-x-[100vw]':!menuIsOpen}">
      <p class="absolute top-20px right-20px menu cursor-pointer" @click="toggleMenu"><span>Close</span></p>
      <div class="text-xl leading-[120%] absolute flex flex-col w-auto mt-[calc(30dvh-1rem)]">
        <a v-bind:href="'..#s_4'" :class="{'hasArrow':onProject()}"><span>PROJECTS</span></a>
        <a href='../project-index' :class="{'hasArrow':onIndex()}"><span>INDEX</span></a>
        <a href='../vision' :class="{'hasArrow':onVision()}"><span>VISION</span></a>
        <a href='../about' :class="{'hasArrow':onAbout()}"><span>ABOUT</span></a>
      </div>
      <div id="creditsMobile" class="md:hidden flex absolute justify-between
      w-[calc(100vw-40px)] p-0 mt-16 bottom-20px">
          <p>©2024</p>
          <div class="flex w-[70vw] justify-end
          gap-20px md:gap-[12vw]">
              <p>&nbsp;</p>
              <a href="mailto:test@test.it">E—MAIL</a>
              <a href="https://www.instagram.com" target="_blank" class="w-">IG</a>
              <p @click="doSomething" class="cursor-pointer w-">CREDITS</p>
          </div>
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
let headerBlack = computed(() => store.headerBlack)

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