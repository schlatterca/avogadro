<template>

    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div v-if="loading" class="bg-white w-screen h-[100dvh] fixed top-0 left-0"></div>
        <div v-else>
            <div id="header-component">
                <Header></Header>
            </div>
            <main id="about" class="bg-lightgrey w-auto h-[100dvh] p-20px flex justify-between gap-20px pt-20vh">
                <div id="aboutText" class="relative h-full w-50vw flex flex-col justify-between leading-normal">
                    <div class="upper text-s *:mb-4">
                        <template v-for="block in myData.text_top" :key="block._key">
                            <PortableText
                                :value="[
                                    block
                                ]"
                            />
                        </template>
                    </div>

                    <!-- <p v-html="myData.text_top"></p> -->
                    <div class="bottom text-base">
                        <template v-for="block in myData.text_bottom" :key="block._key">
                            <PortableText
                                :value="[
                                    block
                                ]"
                            />
                        </template>
                    </div>
                </div>

                <figure id="mainImg" class="h-full w-auto max-w-40vw">
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

const imageBuilder = imageUrlBuilder(sanity);

const loading = ref(true);
const myData = ref([]);

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

