<template>

    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div v-if="loading" class="bg-white w-screen h-screen fixed top-0 left-0"></div>
        <div v-else>
            <div id="header-component">
                <Header></Header>
            </div>
            <main id="projectIndex" class="bg-darkgrey w-auto h-screen p-20px
            grid gap-6px auto-rows-1em grid-cols-24 pt-20vh text-white">

                <div id="mainImg" class="relative h-full w-full col-start-1 col-span-7">
                    <template v-for="project in sortedProjects" :key="project._rev">
                        <figure class="absolute w-full h-auto"
                        v-show="hoveredProject === project._rev">
                            <img v-if="project.cover_image.asset._ref"
                                :src="imageBuilder.image (project.cover_image.asset._ref)"
                                class="pic w-full h-full object-cover"/>
                        </figure>
                    </template>
                </div>

                <div id="projectIndexText" class="relative h-[80dvh] w-full DM-Mono leading-tight
                flex flex-col leading-normal col-start-9 col-span-16 overflow-scroll pb-20px">
                    <template v-for="(project, index) in sortedProjects" :key="project._rev">
                        <div class="inline-grid grid-cols-10 gap-6px items-end group
                        w-full border-white border-b-.6 py-2 cursor-pointer hover:bg-darkgreyHover"
                        :class="{ 'border-t-.6': index === 0 }"
                        @mouseover="hoveredProject = project._rev"
                        @mouseleave="hoveredProject = null">
                            <a v-bind:href="'/progetti/'+ project.slug.current"
                            class="col-span-6">
                                <p v-html="project.title" class="truncate"></p>
                            </a>
                            <p v-html="project.citta" class="text-s col-start-7 col-span-3 truncate"></p>
                            <p class="projectIndexArrow self-center col-start-10 col-span-1 text-right
                            opacity-0 group-hover:opacity-100"></p>
                        </div>
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

const imageBuilder = imageUrlBuilder(sanity);

const loading = ref(true);
const myData = ref([]);

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
console.log(sortedProjects)

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

