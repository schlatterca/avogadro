<template>
    <div>

        <div id="header-component">
            <Header></Header>
        </div>

        <transition name="fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
            <div v-if="loading" class="bg-white w-screen h-screen fixed top-0 left-0">
            </div>
            <div v-else>
                <div id="header-component" class="pointer-events-none">
                    <Header></Header>
                </div>

                <div id='snapContainer' class="flex flex-col overflow-scroll snap-mandatory snap-y absolute left-0 top-0
                w-screen h-screen select-none" ref="snapContainer"
                @wheel="onScroll">
                <!--snap-mandatory snap-x-->

                    <!-- <div class="overlay" id="overlay"></div> -->

                    <div v-for="slide in myData.slides"
                    :key="slide._key"
                    class="slide pic relative snap-start w-screen h-screen shrink-0 flex gap-20px items-end p-0
                    overflow-hidden bg-lightgrey">

                        <div v-if="slide.description"
                        class="text absolute bottom-0 left-0 w-full z-10 text-white
                        p-20px pr-66% pointer-events-none
                        leading-tight text-base blur-[20px] transition-[filter] duration-[2000ms]">
                            <p class="text-xl mb-8" v-html="slide.title"></p>
                            <p class="DM-Mono text-base" v-html="slide.description"></p>
                        </div>
                        
                        <figure class="pic w-full h-full">
                            <img v-if="slide.image"
                            :src="imageUrlFor(slide.image.asset)"
                            class="pic vision object-cover transition-[filter] duration-[1200ms]
                            transform scale-[1.2]"
                            :class="{ 'blur-[20px]': slide.title }" />
                        </figure>
                    </div>

                </div>
            </div>
        </transition>
    </div>
</template>
  

<script setup>
import { onMounted, ref, nextTick, computed } from 'vue';
import { useWindowSize } from '@vueuse/core'
import sanity from "../sanity/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import { useRoute } from 'vue-router';
import { useMyStore } from '../store/store.js';

const imageBuilder = imageUrlBuilder(sanity);
const route = useRoute();
const slug = route.params.slug;

const loading = ref(true);
const myData = ref([]);

useHead({
    title: "Cecilia Avogadro",
    meta: [{ name: "description", content: "" }],
});

// import store from '../store'

const otherQuery = `*[_type == "vision"]{
    title,
    slides[]{
        _key,
        _type,
        title,
        image,
        description,
    }
}[0...50]`;
/* const otherQuery = `*[_type == "vision"]{
    _id,
    _type,
    title,
    slides[]{
        _key,
        _type,
        title,
        image,
        description,
        }
    }
}[0...50]`; */

const imageUrlFor = (source) => {
  return imageBuilder.image(source);
};



const fetchData = () => {
    loading.value = true;
    sanity.fetch(otherQuery).then(
        (data) => {
            console.log(otherQuery)
            console.log('data: ', data[0]);
            loading.value = false;
            myData.value = data[0];

            //console.log('aaa', isContentCenter(data[0].slides.justify));
        },
        (error) => {
            loading.value = false;
            console.error(error);
        }
    );
};
onMounted(() => {
    fetchData();
});
/* const query = groq`*[_type == "vision"]`;
const { data } = useSanityQuery(query);
console.log("data:", data); */



//if contains gifs
const store = useMyStore();

let accumulatedDeltaY = 0; // Track accumulated scroll amount

function onScroll(event) {
    if(!event.target.parentElement.parentElement.querySelector('.text')){
        return
    }
    if(!event.target.classList.contains('isUnblurred')){
        
        const mySlideImg = event.target;
        let imgBlur = mySlideImg.style.filter.split(/blur\(|px\)/)[1];

        if(imgBlur <= 0){
            setTimeout(() => {
                event.target.classList.add('isUnblurred')
            }, 2000)
        }

        event.preventDefault();
        const maxBlur = 20;
        const minBlur = 0;
        const blurStep = 0.06; // Adjust blur per unit of deltaY
        accumulatedDeltaY += event.deltaY;
        let newBlur = maxBlur - Math.max(0, (accumulatedDeltaY * blurStep) - 60);
        newBlur = Math.max(minBlur, Math.min(maxBlur, newBlur));

        mySlideImg.style.filter = `blur(${newBlur}px)`;
        mySlideImg.parentElement.parentElement.querySelector('.text').style.filter = `blur(${newBlur}px)`;

        return
    } else {

        const container = event.currentTarget;
        const slides = Array.from(container.querySelectorAll('.slide'));
        
        let targetIndex = slides.find(slide => slide.querySelector('img') && !slide.querySelector('img').classList.contains('isUnblurred'));
        let slidesWithTextStillBlurred = slides.find(slide => slide.querySelector('div.text') && !slide.querySelector('img').classList.contains('isUnblurred'));

        //if there are still slides with text
        if(slidesWithTextStillBlurred){
            targetIndex.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        return
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
      // Define your method to generate image URL
      return `path/to/images/${image}`;
    }
  }
};
</script>