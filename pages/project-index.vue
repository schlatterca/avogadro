<template>

    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div v-if="loading" class="bg-white w-screen h-[100dvh] fixed top-0 left-0"></div>
        <div v-else>
            <div id="header-component">
                <Header></Header>
            </div>
            <main id="projectIndex" class="bg-darkgrey w-auto h-[100dvh] p-20px
            auto-rows-1em grid-cols-24 text-white
            flex md:grid flex-col pt-16 md:pt-20vh gap-[16px] md:gap-6px">

                <!-- DESKTOP -->
                <div v-if="!isMobile" id="mainImg" class="relative w-full col-start-1 col-span-7
                h-[50%] md:h-full">
                    <template v-for="project in sortedProjects" :key="project._rev">
                        <figure class="absolute w-full
                        h-full md:h-auto content-center md:content-[unset]"
                        v-show="(!isMobile && hoveredProject === project._rev)">
                            <img v-if="project.homepage_image.asset._ref"
                                :src="imageBuilder.image (project.homepage_image.asset._ref)"
                                class="pic object-cover
                                w-auto md:w-full h-auto max-h-[100%] md:max-h-[unset] md:h-full m-auto md:m-[unset]"/>
                        </figure>
                    </template>
                </div>

                <!-- MOBILE -->
                <div v-if="isMobile" id="mainImg" class="relative w-full col-start-1 col-span-7
                h-[50%] md:h-full">
                    <template v-for="(project, index) in sortedProjects" :key="index">
                        <figure class="absolute w-full
                        h-full md:h-auto content-center md:content-[unset]"
                        v-show="(isMobile && scrolledProject === index)">
                            <img v-if="project.homepage_image.asset._ref"
                                :src="imageBuilder.image(project.homepage_image.asset._ref)"
                                class="pic object-cover
                                w-auto md:w-full h-auto max-h-[100%] md:max-h-[unset] md:h-full m-auto md:m-[unset]"/>
                        </figure>
                    </template>
                </div>

                <div id="projectIndexText" class="relative w-full DM-Mono leading-tight
                flex flex-col leading-normal col-start-9 col-span-16 overflow-scroll pb-20px
                h-[50%] md:h-[80dvh]"
                @scroll.passive="indexScrollMobile"
                ref="indexScroll">
                    <template v-for="(project, index) in sortedProjects" :key="project._rev">
                        <a v-bind:href="'/progetti/'+ project.slug.current"
                        class="border-b-[1px]"
                        :class="{ 'border-t-[1px]': index === 0 }">
                          <div class="singleproject inline-grid grid-cols-10 gap-6px items-end group
                          w-full border-white py-2 cursor-pointer md:hover:bg-darkgreyHover"
                          @mouseover="hoveredProject = project._rev"
                          @mouseleave="hoveredProject = null">
                              <p v-html="project.title" class="text-[.8rem] md:text-base col-span-6 truncate"></p>
                              <p v-html="project.citta" class="text-[.6rem] md:text-s col-start-7 col-span-3 truncate"></p>
                              <p class="projectIndexArrow self-center col-start-10 col-span-1 text-right
                              opacity-0 md:group-hover:opacity-100 text-[15px] md:text-base"></p>
                          </div>
                        </a>
                    </template>
                </div>
            </main>

            <div id="footer-component" class="relative l-0 w-screen row-start-[134] row-span-10">
              <Footer></Footer>
            </div>

        </div>
    </transition>
</template>
  

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import sanity from "../sanity/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import groq from "groq"; // Ensure you have groq imported if used in your setup
import { useMyStore } from '../store/store.js';

const imageBuilder = imageUrlBuilder(sanity);
const store = useMyStore();
let isMobile = computed(() => store.isMobile)

const loading = ref(true);
const myData = ref([]);
const indexScroll = ref(null)

let scrolledProject = ref(0);

const sortedProjects = computed(() => {
  // Check if myData is defined and not empty
  if (!myData.value || myData.value.length === 0) return [];

  // Sort projects by the creation date in descending order
  return myData.value.slice().sort((a, b) => {
    const dateA = new Date(a._createdAt);
    const dateB = new Date(b._createdAt);
    return dateA - dateB;  // For descending order
  });
});
//console.log(sortedProjects)

const fetchData = async () => {
    loading.value = true;
    try {
      const data = await sanity.fetch(groq`*[_type == "project"]`);
      myData.value = data;
      console.log(myData._value);
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
};

onMounted(async () => {
    await fetchData();
});

function indexScrollMobile() {
  if(!isMobile.value){return}

  let elements = indexScroll.value.querySelectorAll('.singleproject');

  elements.forEach(span => {
    span.classList.remove('bg-darkgreyHover');
    span.querySelector('.projectIndexArrow').classList.remove('opacity-100');
  });

  let percent = indexScroll.value.scrollTop / (indexScroll.value.scrollHeight - indexScroll.value.clientHeight);
  let steps = 1 / elements.length;
  let actualStep = Math.floor(percent/steps);

  //console.log(percent, steps, actualStep, scrolledProject.value);
  
  if(actualStep < 0){
    scrolledProject.value = 0;
    elements[0].classList.add('bg-darkgreyHover');
    elements[0].querySelector('.projectIndexArrow').classList.add('opacity-100');
  } else if((actualStep >= 0)&&(actualStep < elements.length)){
    scrolledProject.value = actualStep;
    elements[actualStep].classList.add('bg-darkgreyHover');
    elements[actualStep].querySelector('.projectIndexArrow').classList.add('opacity-100');
  } else if(actualStep <= elements.length) {
    scrolledProject.value = actualStep - 1;
    elements[actualStep - 1].classList.add('bg-darkgreyHover');
    elements[actualStep - 1].querySelector('.projectIndexArrow').classList.add('opacity-100');
  }

}
</script>

<script>
export default {
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // Trigger reflow
      el.style.transition = 'opacity 0.5s';
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.5s';
      el.style.opacity = 0;
      done();
    },
    imageUrlFor(image) {
      return `path/to/images/${image}`;
    }
  },

  data() {
    return {
      myData: [
        // Your project data here
      ],
      hoveredProject: null
    };
  }
};
</script>

