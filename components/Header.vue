<template>
    <div id="head" style="color: white;" :class="{'!text-black':onAbout()}">
        <p :class="{'!transition-none':!onHomepage()}">
            <a href='../' :class="{'small':!onHomepage(), 'show-dot':!onHomepage()}" class="main"><span>C</span></a>
            <a href='../' :class="{'notVisible':!onHomepage()}" class="first" style="visibility: visible; display: inline;"><span>ecilia</span></a>
            <a href='../' :class="{'invisible':!onHomepage()}" class="blankSpace"><span> </span></a>
            <a href='../' :class="{'small':!onHomepage(), 'show-dot':!onHomepage()}" class="main"><span>A</span></a>
            <a href='../' :class="{'notVisible':!onHomepage()}" class="first" style="visibility: visible; display: inline; margin-left: -.08em;"><span>vogadro</span></a>
        </p>
        <p :class="{'invisible':!onHomepage()}" class="arch">Arch.</p>
        <div :class="{'visible':!onHomepage()}" id="spansRow">
            <a v-bind:href="'..#s_4'" :class="{'visible':!onHomepage(), 'hasArrow':onProject()}" class="menu"><span>PROJECTS</span></a>
            <a href='../project-index' :class="{'visible':!onHomepage(), 'hasArrow':onIndex()}" class="menu"><span>INDEX</span></a>
            <a href='../' :class="{'visible':!onHomepage()}" class="menu"><span>VISION</span></a>
            <a href='../about' :class="{'visible':!onHomepage(), 'hasArrow':onAbout(), 'text-black':onAbout()}" class="menu"><span>ABOUT</span></a>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const slug = route.params.slug;

const onHomepage = () => {
  return route.path === '/';
};
const onProject = () => {
  return route.path.includes('/progetti/');
};
const onAbout = () => {
  return route.path.includes('/about');
};
const onIndex = () => {
  return route.path.includes('/project-index');
};
</script>