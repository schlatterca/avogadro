<template>

    <transition name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave">
        <div v-if="loading" class="bg-white w-screen h-[100dvh] fixed top-0 left-0">
        </div>
        <div v-else>
            <div id="header-component" class="md:pointer-events-none">
                <Header></Header>
            </div>
            <figure id='background' class="pic snap-start w-screen h-[100dvh] shrink-0">
                <img v-if="myData.cover_image"
                    :src="imageUrlFor(myData.cover_image)"
                    class="pic w-full h-full object-cover"
                />
            </figure>
        
            <div v-if="!isMobile" id="leftArrow" class="arrow"></div>
            <div v-if="!isMobile" id="rightArrow" class="arrow"></div>

            <!-- @scroll.passive="onScroll"
            @mouseenter="handleMouseEnter"
            @mousemove="handleMouseMove" -->
            <div id='snapContainer' class="flex overflow-scroll absolute left-0 top-0 snap-mandatory snap-x
            w-screen h-[100dvh] select-none
            flex-col md:flex-row snap-y md:snap-x"
            ref="snapContainer"
            tabindex="0"
            
            @scroll.passive="onScroll"
            @mousemove="handleMouseMove" 
            @mouseleave="handleMouseLeave"
            @mouseenter="handleMouseEnter"
            @click="handleClick"
            >

                <div class="overlay" id="overlay"></div>
                <div id="empty" class="slide active pic snap-start w-screen shrink-0
                h-[100dvh] md:h-[100dvh]"></div>

                <div id='planimetria' class="slide relative grid-cols-2 pic snap-end shrink-0 bg-lightgrey
                w-screen md:w-66% ml-0 md:ml-33% flex md:grid flex-col h-[100dvh] md:h-[100dvh]
                snap-always">
                    <figure class="w-auto mx-20% bg-lightgrey mb-auto
                    h-[50dvh] md:h-auto mt-[10dvh] md:mt-auto">
                        <img v-if="myData.planimetria"
                        :src="imageUrlFor(myData.planimetria)"
                        class="pic h-full m-auto object-contain mix-blend-multiply
                        !w-auto !max-h-[80dvh]"/>
                    </figure>
                    <div class="relative DM-Mono leading-tight
                    w-auto md:w-[20rem] max-w-[80vw] md:max-w-[unset]
                    ml-20px mb-20px md:m-auto md:mx-auto h-[40dvh] md:h-auto content-end md:content-auto">
                        <p class="text-base uppercase" v-html="myData.title" v-if="myData.title"></p>
                        <p class="text-s mt-4" v-html="myData.citta" v-if="myData.citta"></p>
                        <p class="text-s lg:text-base mt-8" v-html="myData.description" v-if="myData.description"></p>
                        <p class="text-s mt-6" v-html="myData.altre_info" v-if="myData.altre_info"></p>
                    </div>
                </div>

                <!-- DESKTOP -->
                <div v-if="!isMobile" v-for="slide in myImages.slides" :key="slide._key"
                class="slide pic snap-start w-screen h-[100dvh] shrink-0 flex gap-20px items-end p-20px bg-softwhite"
                :class="[`place-content-${isContentCenter(slide.justify)}`],
                    [`fixed-height-${isContentHeight(slide.fixed_height)}`]">
                    
                    <figure class="pic h-auto" v-for="imageObj in slide.images" :key="imageObj._key"
                    v-bind="{
                        alt_1: imageObj.image_2 ? imageUrlFor(imageObj.image_2) : undefined,
                        ref: imageObj.image_2 ? 'originalImg' : undefined
                        }"
                    :class="[`image-width-${getImageWidthClass(imageObj.image_width)}`,
                        `mg-left-${getMargin(imageObj.margin_left)}`,
                        `mg-right-${getMargin(imageObj.margin_right)}`,
                        `mg-top-${getMarginTop(imageObj.margin_top)}`,
                        `mg-bottom-${getMarginBottom(imageObj.margin_bottom)}`]">
                        <img v-if="imageObj.image.asset"
                        :src="imageUrlFor(imageObj.image.asset)"
                        class="pic object-cover"
                        />
                    </figure>
                </div>

                <!-- MOBILE -->
                <div v-if="isMobile"
                class="slide pic snap-start w-screen h-auto shrink-0 flex flex-col gap-20px items-end p-20px bg-lightgrey snap-unset">
                    <div class="slide pic snap-start w-auto h-auto shrink-0 flex flex-col gap-20px items-end
                    overflow-y-scroll">
                        <template v-for="slide in myImages.slides" :key="slide._key">
                            <figure class="pic h-auto" v-for="imageObj in slide.images" :key="imageObj._key"
                            v-bind="{
                            alt_1: imageObj.image_2 ? imageUrlFor(imageObj.image_2) : undefined,
                            ref: imageObj.image_2 ? 'originalImg' : undefined
                            }">
                                <img v-if="imageObj.image.asset"
                                :src="imageUrlFor(imageObj.image.asset)"
                                class="pic object-cover"
                                />
                            </figure>
                        </template>
                    </div>
                </div>

            </div>
        </div>
    </transition>
</template>

<script setup>
import { onMounted, ref, nextTick, computed } from 'vue';
import { useWindowSize } from '@vueuse/core'
import sanity from "../sanity/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import { useRoute } from 'vue-router';
import { useMyStore } from '../store/store.js';
import $ from 'jquery';

const imageBuilder = imageUrlBuilder(sanity);
const route = useRoute();
const slug = route.params.slug;

const loading = ref(true);
const myImages = ref([]);
const myData = ref([]);

const store = useMyStore();
let isMobile = computed(() => store.isMobile)

useHead({
    title: "Cecilia Avogadro",
    meta: [{ name: "description", content: "" }],
});

// import store from '../store'

//const otherQuery = `*[_type == "project" && slug.current == "${slug}"]`;
const otherQuery = `*[_type == "project" && slug.current == "${slug}"]{
    _id,
    _type,
    title,
    slug,
    citta,
    cover_image,
    planimetria,
    description,
    altre_info,
    slides[]{
        _key,
        _type,
        title,
        justify,
        fixed_height,
        images[]{
            _key,
            _type,
            image{
                asset->
            },
            image_2{
                asset->
            },
            image_3{
                asset->
            },
            image_width,
            margin_left,
            margin_right,
            margin_top,
            margin_bottom,
        }
    }
}[0...50]`;

const imageUrlFor = (source) => {
  return imageBuilder.image(source);
  //console.log(source);
};

const getImageWidthClass = (myData) => {
    return myData.split('%')[0];
    /* switch (imageWidth) {
    case '10%':
        return 'w-10';
    case '30%':
        return 'w-30';
    default:
        return '';
    } */
}
const getMargin = (myMargin) => {
    if(myMargin){   
        return String(myMargin).replaceAll('left-','').replaceAll('right-','');
    } else {
        return '20';
    }
}
const getMarginTop = (myMargin) => {
    switch (myMargin) {
        case 'top-0':
            return 'no';
        case 'top-20':
            return '0';
        case 'top-max':
            return 'max';
        default:
            return '0';
    }
}
const getMarginBottom = (myMargin) => {
    switch (myMargin) {
        case 'bottom-0':
            return 'no';
        case 'bottom-20':
            return '0';
        case 'bottom-max':
            return 'max';
        default:
            return '0';
    }
}

const isContentCenter = (justifyContentData) => {
    switch (justifyContentData) {
        case 'destra':
            return 'end';
        case 'sinistra':
            return 'start';
        case 'giustifica':
            return 'justify';
        default:
            return 'center';
    }
};

const isContentHeight = (justifyContentData) => {
    switch (justifyContentData) {
        case '60%':
            return '60';
        case '70%':
            return '70';
        case '80%':
            return '80';
        case 'max':
            return 'max';
        default:
            return 'auto';
    }
};

const fetchData = () => {
    loading.value = true;
    sanity.fetch(otherQuery).then(
        (data) => {
            //console.log('ccc', data[0]);
            loading.value = false;
            myImages.value = data[0];
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
    console.log(snapContainer)
    setTimeout(() => {
        if(isMobile.value){return}
        snapContainer.value.focus();
    }, 100);
});
const query = groq`*[_type == "project" && slug.current == "${slug}"]`;
const { data } = useSanityQuery(query);
//console.log("data:", data);







function onScroll(event) {
    //handleMouseMove();

    const { width, height } = useWindowSize();
    let firstSlide = document.getElementById('planimetria')

    if(!isMobile.value){
        if (firstSlide.getBoundingClientRect().left <= (width._value / 3)) {
            document.querySelectorAll('#head a:not(.text-black)').forEach(span => {
                span.classList.add('text-black');
            });
        } else if (firstSlide.getBoundingClientRect().left <= ((width._value / 3)*2 + 10)) {
            document.querySelectorAll('#head a:not(.menu).text-black').forEach(span => {
                span.classList.remove('text-black');
            });
            document.querySelectorAll('#head a.menu:not(.text-black)').forEach(span => {
                span.classList.add('text-black');
            });
        } else {
            document.querySelectorAll('#head a.text-black').forEach(span => {
                span.classList.remove('text-black');
            });
        }
    } else if(isMobile.value){
        if (firstSlide.getBoundingClientRect().top <= (height._value / 10)) {
            document.querySelector('#homeLinkMobile').classList.add('text-black');
            document.querySelector('#menuButtonMobile').classList.add('text-black');
        } else {
            document.querySelector('#homeLinkMobile').classList.remove('text-black');
            document.querySelector('#menuButtonMobile').classList.remove('text-black');
        }
    }

    

    
    /* let GIFs = document.querySelectorAll('figure[alt_1]');
    if(GIFs.length > 0){
        const originalImgSrc = GIFs[0].getElementsByTagName('img')[0].src;
        if(!store.myUrlSaved){
            store.myUrl_1 = originalImgSrc;
            store.myUrl_2 = GIFs[0].getElementsByTagName('img')[0].parentElement.getAttribute('alt_1');
            store.myUrlSaved = true;
        }
        if((GIFs.length > 0)&&(GIFs[0].getBoundingClientRect().left > (width._value / 2)&&(GIFs[0].classList.contains('changed')))) {
            GIFs[0].classList.remove('changed')
            GIFs[0].getElementsByTagName('img')[0].src = store.myUrl_1;
        } else if((GIFs.length > 0)&&(GIFs[0].getBoundingClientRect().left <= (width._value / 2)&&(!GIFs[0].classList.contains('changed')))) {
            GIFs[0].classList.add('changed')
            GIFs[0].getElementsByTagName('img')[0].src = store.myUrl_2;
        }
    } */
}


const originalImg = ref(null) 
function changeGifImg(mousePosition, width) {
    let GIFs = document.querySelectorAll('figure[alt_1]');

    if(GIFs.length > 1){
        const originalImgSrc = GIFs[0].getElementsByTagName('img')[0].src;
        const originalImgSrc2 = GIFs[1].getElementsByTagName('img')[0].src;
        if(!store.myUrlSaved){
            store.myUrl_1 = originalImgSrc;
            store.myUrl_2 = GIFs[0].getElementsByTagName('img')[0].parentElement.getAttribute('alt_1');
            store.myUrlSaved = true;

            store.myUrl_1_2 = originalImgSrc2;
            store.myUrl_2_2 = GIFs[1].getElementsByTagName('img')[0].parentElement.getAttribute('alt_1');
            store.myUrlSaved2 = true;
        }
        if((GIFs.length > 0)&&(GIFs[0].classList.contains('changed'))) {
            GIFs[0].classList.remove('changed')
            GIFs[0].getElementsByTagName('img')[0].src = store.myUrl_1;

            GIFs[1].classList.remove('changed')
            GIFs[1].getElementsByTagName('img')[0].src = store.myUrl_1_2;

        } else if((GIFs.length > 0)&&(!GIFs[0].classList.contains('changed'))) {
            GIFs[0].classList.add('changed')
            GIFs[0].getElementsByTagName('img')[0].src = store.myUrl_2;
            GIFs[1].classList.add('changed')
            GIFs[1].getElementsByTagName('img')[0].src = store.myUrl_2_2;
        } 
    } else if(GIFs.length > 0){
        const originalImgSrc = GIFs[0].getElementsByTagName('img')[0].src;
        if(!store.myUrlSaved){
            store.myUrl_1 = originalImgSrc;
            store.myUrl_2 = GIFs[0].getElementsByTagName('img')[0].parentElement.getAttribute('alt_1');
            store.myUrlSaved = true;
        }
        if((GIFs.length > 0)&&(GIFs[0].classList.contains('changed'))) {
            GIFs[0].classList.remove('changed')
            GIFs[0].getElementsByTagName('img')[0].src = store.myUrl_1;
        } else if((GIFs.length > 0)&&(!GIFs[0].classList.contains('changed'))) {
            GIFs[0].classList.add('changed')
            GIFs[0].getElementsByTagName('img')[0].src = store.myUrl_2;
        } 
    }
}


let intervalIsSetted = false;
let interval;
const handleMouseEnter = (event) => {
    handleMouseMove(event);
};
const handleMouseMove = (event) => {
    
    if(isMobile.value){return}

    const container = event.currentTarget;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);

    const containerWidth = container.offsetWidth;
    if (mouseX < containerWidth / 2) {
        document.querySelector('#leftArrow').classList.add('visible');
        document.querySelector('#rightArrow').classList.remove('visible');
    } else {
        document.querySelector('#leftArrow').classList.remove('visible');
        document.querySelector('#rightArrow').classList.add('visible');
    }

    const { width, height } = useWindowSize();
    if(document.querySelectorAll('figure[alt_1]')){
    //if(originalImg){
        /* if(!intervalIsSetted && document.querySelector('figure[alt_1]').getBoundingClientRect().left > 0
        && document.querySelector('figure[alt_1]').getBoundingClientRect().left < (width._value)){
            //changeGifImg(mouseX, width._value);
            interval = setInterval(function() {changeGifImg(true, true)}, 2000);
            intervalIsSetted = true;
        } */
        document.querySelectorAll('figure[alt_1]').forEach(imageGIF => {
            if(!intervalIsSetted && imageGIF.getBoundingClientRect().left > 0
            && imageGIF.getBoundingClientRect().left < (width._value)){
                //changeGifImg(mouseX, width._value);
                interval = setInterval(function() {changeGifImg(true, true)}, 2000);
                intervalIsSetted = true;
            }
        })
    }
};

const handleMouseLeave = () => {
    if(isMobile.value){return}
    document.querySelector('#leftArrow').classList.remove('visible');
    document.querySelector('#rightArrow').classList.remove('visible');
};




//VANILLA JS
const handleClick = (event) => {
    event.preventDefault();

    const container = event.currentTarget;
    const mouseX = event.clientX - container.getBoundingClientRect().left;
    const containerWidth = container.offsetWidth;

    const slides = Array.from(container.children).filter(child => child.classList.contains('slide'));
    const currentIndex = slides.findIndex(slide => slide.getBoundingClientRect().left >= container.getBoundingClientRect().left - 10);

    let nextIndex;
    if (mouseX < containerWidth / 2) {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    } else {
        nextIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    }

    setTimeout(() => {
        if (mouseX < containerWidth / 2) {
            if (currentIndex > 0) {
                slides[currentIndex - 1].scrollIntoView({ behavior: 'smooth', inline: 'start' });
            } else {
                slides[slides.length - 1].scrollIntoView({ behavior: 'smooth', inline: 'start' });
            }
        } else {
            if (currentIndex < slides.length - 1) {
                slides[currentIndex + 1].scrollIntoView({ behavior: 'smooth', inline: 'start' });
            } else {
                slides[0].scrollIntoView({ behavior: 'smooth', inline: 'start' });
            }
        }

    }, 100);
};
//JQUERY
/* const handleClick = (event) => {
    event.preventDefault();

    const $container = $(event.currentTarget);
    const mouseX = event.clientX - $container.offset().left;
    const containerWidth = $container.width();
    const viewportWidth = $(window).width();
    const containerScrollLeft = $container.scrollLeft();
    const containerScrollWidth = $container[0].scrollWidth;
    const $slides = $container.children('.slide');

    // Check if the scrolling animation is already in progress
    if ($container.is(':animated')) return;

    // Determine the direction and calculate the new scroll position
    let newScrollLeft;
    if (mouseX < containerWidth / 2) {
        // Scroll left
        if (containerScrollLeft <= 0) {
            // If at the start, jump to the end
            newScrollLeft = containerScrollWidth - containerWidth;
        } else {
            // Otherwise, scroll by viewport width
            newScrollLeft = Math.max(containerScrollLeft - viewportWidth, 0);
        }
    } else {
        // Scroll right
        if (containerScrollLeft + containerWidth >= containerScrollWidth) {
            // If at the end, jump to the start
            newScrollLeft = 0;
        } else {
            // Otherwise, scroll by viewport width
            newScrollLeft = Math.min(containerScrollLeft + viewportWidth, containerScrollWidth - containerWidth);
        }
    }

    // Remove the scroll snap class
    $container.removeClass('snap-mandatory');

    // Animate scrolling
    $container.animate({ scrollLeft: newScrollLeft }, 500, function() {
        // Add the scroll snap class back after the animation completes
        $container.addClass('snap-mandatory');
    });
}; */



//VERTICAL SCROLL
const snapContainer = ref(null);
let scrollTimeout;

/* setTimeout(() => {
    if (snapContainer.value) {
        let container = snapContainer._value;

        // Horizontal scroll on vertical scroll
        container.addEventListener('wheel', function(e) {
            if (e.deltaY !== 0) {
                container.scrollLeft += e.deltaY;
                e.preventDefault();
            }

            // Reset the timeout on every scroll
            clearTimeout(scrollTimeout);

            // Set a timeout to run after the user stops scrolling
            scrollTimeout = setTimeout(() => {
                snapToMostVisibleSlide(container);
            }, 100); // Adjust the delay as needed
        });
    }
}, 100); */

// Function to calculate the most visible slide and snap to the right margin
function snapToMostVisibleSlide(container) {
    const slides = container.querySelectorAll('.slide');
    let mostVisibleSlide = null;
    let maxVisibleArea = 0;

    slides.forEach(slide => {
        const rect = slide.getBoundingClientRect();
        const visibleArea = Math.max(0, Math.min(rect.right, container.clientWidth) - Math.max(rect.left, 0));

        if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            mostVisibleSlide = slide;
        }
    });

    if (mostVisibleSlide) {
        // Calculate the scroll position needed to align the right edge of the slide with the right edge of the container
        const scrollPosition = mostVisibleSlide.offsetLeft - (container.clientWidth - mostVisibleSlide.offsetWidth);
        container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
}


/* const snapContainer = ref(null);
onMounted(async () => {
    
    setTimeout(() => {
        if (snapContainer.value) {
            snapContainer.value.addEventListener('wheel', (ev) => {
                if (ev.deltaY !== 0) {
                    ev.preventDefault();
                    snapContainer.value.scrollLeft += ev.deltaY;

                    // Debugging output
                    console.log(
                        'Scroll Amount (Vertical):', ev.deltaY,
                        'Current ScrollLeft:', snapContainer.value.scrollLeft
                    );
                }
            });
        } else {
        console.error('snapContainer.value is null');
        }
    }, 100); // 100 ms delay to ensure DOM updates
}); */

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