<template>

    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div v-if="loading" class="bg-white w-screen h-[100dvh] fixed top-0 left-0"></div>
        <div v-else>
            <div id="header-component">
                <Header></Header>
            </div>
            <main id="about" class="bg-lightgrey w-auto p-20px flex gap-20px pt-20vh
            flex-col-reverse md:flex-row
            overflow-y-scroll md:overflow-y-unset justify-unset md:justify-between h-auto md:h-[100dvh]">
                <div id="aboutText" class="relative h-full flex flex-col justify-between leading-normal
                w-full md:w-50vw">
                    <div id="aboutTopText" class="upper text-[.9rem] leading-[120%] *:mb-4">
                        <template v-for="block in myData.text_top" :key="block._key">
                            <PortableText
                                :value="[block]"
                            />
                        </template>
                    </div>

                    <figure id="mainImg" class="h-full w-auto
                    md:max-w-40vw"
                    v-if="isMobile">
                        <img v-if="myData.cover_image.asset._ref"
                            :src="imageBuilder.image (myData.cover_image.asset._ref)"
                            class="pic w-full h-full object-cover"/>
                    </figure>

                    <!-- <p v-html="myData.text_top"></p> -->
                    <div class="bottom text-[.9rem] leading-[120%]
                    mt-4 mb-8 md:mt-0 md:mb-0">
                        <template v-for="block in myData.text_bottom" :key="block._key">
                            <PortableText
                                :value="[
                                    block
                                ]"
                            />
                        </template>
                    </div>
                </div>

                <figure id="mainImg" class="h-full w-auto
                md:max-w-40vw"
                v-if="!isMobile">
                    <img v-if="myData.cover_image.asset._ref"
                        :src="imageBuilder.image (myData.cover_image.asset._ref)"
                        class="pic w-full h-full object-cover"/>
                </figure>
            </main>
        </div>
    </transition>
</template>
  

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import sanity from "../sanity/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import groq from "groq"; // Ensure you have groq imported if used in your setup
import { PortableText } from '@portabletext/vue';
import { useMyStore } from '../store/store.js';

const imageBuilder = imageUrlBuilder(sanity);

const loading = ref(true);
const myData = ref([]);
const store = useMyStore();
let isMobile = computed(() => store.isMobile)

const fetchData = async () => {
    loading.value = true;
    try {
        const data = await sanity.fetch(groq`*[_type == "about"][0]`);
        myData.value = data;
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
  }
};
</script>