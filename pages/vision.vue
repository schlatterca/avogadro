<template>
    <div id="mainVision">

        <div id="headOverlay" class="transition-opacity duration-[2000ms] opacity-0"></div>
        <div id="header-component" class="z-50">
            <Header></Header>
        </div>

        <transition name="fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
            <div v-if="loading" class="bg-white w-screen h-[100dvh] fixed top-0 left-0">
            </div>
            <div v-else>
                <div id="header-component" class="pointer-events-none">
                    <Header></Header>
                </div>

                <div id='snapContainer' class="flex flex-col overflow-scroll snap-mandatory snap-y absolute left-0 top-0
                w-screen h-[100dvh] select-none overflow-y-hidden" ref="snapContainer"
                @scroll.passive="onScroll">
                <!--snap-mandatory snap-x @wheel="debouncedScroll"-->

                    <!-- <div class="overlay" id="overlay"></div> -->

                    <div v-for="(slide, index) in myData.slides"
                    :key="slide._key"
                    class="slide pic relative snap-start w-screen h-[100dvh] shrink-0 flex gap-20px items-end p-0
                    overflow-hidden snap-always"><!-- bg-lightgrey -->

                        <div v-if="slide.description"
                        class="text fixed m-0 text-white pointer-events-none
                        text-m DM-Mono z-50
                        opacity-0 blur-0 transition-all duration-[600ms]
                        left-20px md:left-[calc(calc(23vw+2px))]
                        top-[unset] md:top-[50%]
                        bottom-20px md:bottom-[unset]
                        w-auto md:w-[30vw] max-w-[80vw] md:max-w-[unset]">
                        <!-- text absolute bottom-0 left-0 w-full z-10 text-white
                        p-20px pr-66% pointer-events-none
                        leading-tight text-m blur-[20px] transition-[filter] duration-[1200ms] -->
                            <p class="text-xl mb-8" v-html="slide.title"></p>
                            <p class="DM-Mono text-m" v-html="slide.description"></p>
                        </div>

                        <div class="absolute bottom-0 left-0 w-full h-full z-[5] pointer-events-none transition-opacity duration-[2000ms]"
                        :class="{'opacity-0':index == 0, 'firstBackground':index == 0}"
                        style="background: linear-gradient(to top, rgba(0,0,0,0.4) 30%, rgba(255,255,255,0) 60%)"></div>
                        
                        <figure class="pic w-full h-full">
                            <img v-if="slide.image"
                            :src="imageUrlFor(slide.image.asset)"
                            class="pic vision object-cover transition-opacity duration-[2000ms]
                            transform scale-[1.2]"
                            :class="{'opacity-0':index == 0, 'firstImage':index == 0}"
                            />
                            <!-- :class="{ 'blur-[20px]': slide.title, 'noblur': !slide.description }" -->
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
const snapContainer = ref(null)

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
            //console.log(otherQuery)
            //console.log('data: ', data[0]);
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

    //unblur first slide
    setTimeout(() => {
        //const mySlideImg = snapContainer.value.querySelector('img');
        //let imgBlur = mySlideImg.classList.value.split(' ').find(myClass => myClass.includes('blur-')).split('[')[1].split('px')[0];
        //let imgBlur = mySlideImg.classList.filter.split(/blur\(|px\)/)[1];
        //console.log(imgBlur)
        /* if(imgBlur <= 0){
            setTimeout(() => {
                mySlideImg.classList.add('isUnblurred')
            }, 2000)
        } */
        /* const maxBlur = 20;
        const minBlur = 0;
        const blurStep = 0.06; // Adjust blur per unit of deltaY
        accumulatedDeltaY += Math.abs(0);
        let newBlur = maxBlur - Math.max(0, (accumulatedDeltaY * blurStep) - 60);
        newBlur = Math.max(minBlur, Math.min(maxBlur, newBlur)); */

        //snapContainer.value.querySelectorAll('img:not(.noblur)')[0].classList.replace('blur-[20px]', 'blur-0');
        document.querySelector('#headOverlay').classList.replace('opacity-0', 'opacity-100');
        snapContainer.value.querySelectorAll('.firstBackground')[0].classList.replace('opacity-0', 'opacity-100');
        snapContainer.value.querySelectorAll('.firstImage')[0].classList.replace('opacity-0', 'opacity-100');
        //mySlideImg.classList.add('isUnblurred');
    }, 1000);
    setTimeout(() => {
        snapContainer.value.querySelectorAll('.text')[0].classList.replace('blur-[20px]', 'blur-0');
        snapContainer.value.querySelectorAll('.text')[0].classList.replace('opacity-0', 'opacity-100');
        snapContainer.value.classList.replace('overflow-y-hidden', 'overflow-y-scroll');
    }, 3000);

});
/* const query = groq`*[_type == "vision"]`;
const { data } = useSanityQuery(query);
console.log("data:", data); */





//SCROLLING
let isTransitioning = false; // Flag to track if a transition is running
let debounceTimeout;
let mySlides = [];

function debounce(func, delay) {
  let timeout;
  return function() {
    //document.querySelectorAll('img:not(.noblur)').forEach((el) => {el.classList.remove('blur-0'); el.classList.add('blur-[20px]')});
    document.querySelectorAll('.text.blur-0').forEach((el) => {el.classList.replace('blur-0', 'blur-[20px]')});
    document.querySelectorAll('.text.opacity-100').forEach((el) => {el.classList.replace('opacity-100', 'opacity-0')});

    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

//if contains gifs
const store = useMyStore();
const debouncedScroll = debounce(onScroll, 200);

function onScroll(event) {

    if(mySlides.length < 1){
        document.querySelectorAll('.slide').forEach((slide) => {
            mySlides.push(slide);
        });
    }

    clearTimeout(debounceTimeout);

    document.querySelectorAll('.text.blur-0').forEach((el) => {el.classList.replace('blur-0', 'blur-[20px]')});
    document.querySelectorAll('.text.opacity-100').forEach((el) => {el.classList.replace('opacity-100', 'opacity-0')});

    debounceTimeout = setTimeout(() => {
        let mySlideIndex = Math.round(snapContainer.value.scrollTop / window.innerHeight);

        if (!isTransitioning && mySlides[mySlideIndex] && mySlides[mySlideIndex].querySelector('img:not(.noblur)')) {
            //isTransitioning = true;

            const img = mySlides[mySlideIndex].querySelector('img:not(.noblur)');
            const text = mySlides[mySlideIndex].querySelector('.text');

            if (text && text.classList.contains('blur-[20px]')) {
                //img.classList.replace('blur-[20px]', 'blur-0');
                text.classList.replace('blur-[20px]', 'blur-0');
                text.classList.replace('opacity-0', 'opacity-100');

                /* setTimeout(() => {
                    img.addEventListener('transitionend', transitionEndHandler, { once: true });
                    text.addEventListener('transitionend', transitionEndHandler, { once: true });
                }, 1000); */
            }
        }
    }, 200);
    
    
    /* mySlides.forEach((slide, index) => {

        const slideRect = slide.getBoundingClientRect();
        const containerRect = snapContainer.value.getBoundingClientRect();

        // Check if the slide is fully or partially in view
        if (slideRect.top >= containerRect.top && slideRect.bottom <= containerRect.bottom) {
            //console.log(slide)
            slide.querySelector('img:not(.noblur)').classList.replace('blur-[20px]', 'blur-0')
            slide.querySelector('.text').classList.replace('blur-[20px]', 'blur-0')
            slide.querySelector('.text').classList.replace('opacity-0', 'opacity-100')
        }
    }); */


    /* if(!event.target.parentElement.parentElement.querySelector('.text')){
        return
    } */
    /* if(!event.target.classList.contains('isUnblurred')){
        
        console.log('was blurred')
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
        accumulatedDeltaY += Math.abs(event.deltaY);
        let newBlur = maxBlur - Math.max(0, (accumulatedDeltaY * blurStep) - 60);
        newBlur = Math.max(minBlur, Math.min(maxBlur, newBlur));

        mySlideImg.style.filter = `blur(${newBlur}px)`;
        //mySlideImg.parentElement.parentElement.querySelector('.text').style.filter = `blur(${newBlur}px)`;

        return
    } else { */

    /* const container = event.currentTarget;
    const slides = Array.from(container.querySelectorAll('.slide'));
    let targetIndex = slides.find(slide => !slide.querySelector('img').classList.contains('isUnblurred'));
    if(targetIndex){
        targetIndex.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    console.log(targetIndex.querySelector('img'))
    setTimeout(() => {
        targetIndex.querySelector('img').style.filter = `blur(0px)`;
        targetIndex.querySelector('img').classList.add('isUnblurred');
    }, 1000);

    return */
    
    /* } */

}

function transitionEndHandler() {
    isTransitioning = false;
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