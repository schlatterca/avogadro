<template>
    <div>

        <div class="overlay bg-white" id="overlay"></div>

        <div id="header-component">
            <Header></Header>
        </div>

        <transition name="fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
            <div v-if="loading" class="bg-white w-screen h-[100dvh] fixed top-0 left-0">
            </div>
            <div v-else>

                <main id="mainHome"
                @scroll.passive="checkVisibilityMobile"
                ref="mainHome">
                    <section id="s_1">
                        <div id="downArrow"></div>
                    </section>

                    <div v-if="!isMobile" id="leftArrow" class="arrow"></div>
                    <div v-if="!isMobile" id="rightArrow" class="arrow"></div>
                    <!-- <div class="overlay bg-white" id="overlay_slide"></div> -->

                    <section id="s_2" ref="s_2" class="snap-always"
                    @mousemove="handleMouseMove" 
                    @mouseleave="handleMouseLeave"
                    @mouseenter="handleMouseEnter"
                    @click="handleClick">
                        <!-- <template v-for="slide in myCarousel.slides" :key="slide._key">
                            <figure v-if="slide.image" class="slide">
                                <img :src="urlFor(slide.image.asset._ref).url()" alt="Carousel Image" />
                            </figure>
                        </template> -->
                        <template v-if="myCarousel[0]" v-for="slide in myCarousel[0].slides" :key="slide._key">

                            <figure v-if="!isMobile && slide.image" class="slide">
                                <img :src="imageBuilder.image(slide.image.asset).url()" alt="Carousel Image" />
                            </figure>

                            <figure v-if="isMobile && slide.image_mobile" class="slide">
                                <img :src="imageBuilder.image(slide.image_mobile.asset).url()" alt="Carousel Image" />
                            </figure>
                            
                        </template>

                        <!-- <figure class="slide">
                            <img src="https://freight.cargo.site/t/original/i/eb7592ba1f63f887f8bfefe0682439c59867bdf787af1ada187e871fa91a7447/_Z9A3926.jpg">
                        </figure>
                        <figure class="slide">
                            <img src="https://freight.cargo.site/t/original/i/2a7cd7086a218f34084b4a2bcba1682f8eeec2272068baf14898a753f0279647/_Z9A3936.jpg">
                        </figure>
                        <figure class="slide">
                            <img src="https://freight.cargo.site/t/original/i/9f672c4aeda59bf5c45247795ff7f5cf9bbd74b9e5e6043597515054de662b08/_Z9A3872_a.jpg">
                        </figure> -->
                    </section>

                    <section id="s_3" ref="s_3">
                        <p>Trasformare uno spazio in un luogo<template v-if="!isMobile"><br></template>
                        di senso che faccia star bene chi<template v-if="!isMobile"><br></template>
                        ci trascorre del tempo è per me<template v-if="!isMobile"><br></template>
                        una gioia, ma non solo: è il mezzo<template v-if="!isMobile"><br></template>
                        con cui faccio la mia parte nella<template v-if="!isMobile"><br></template>
                        società civile.</p>
                    </section>

                    <section id="s_4">
                        <div class="projectGrid relative h-[100dvh] w-screen">
                            <template v-for="project in sortedProjects" :key="project._key">
                                <a v-bind:href="'/progetti/'+ project.slug.current"
                                class="flex cursor-none
                                flex-col md:flex-row"
                                :style="project.gridSpan ? {
                                    gridColumn: project.gridSpan.columnStart + ' / span ' + project.gridSpan.columnSpan,
                                    gridRow: project.gridSpan.rowStart + ' / span ' + project.gridSpan.rowSpan
                                } : {}">
                                    <!-- <p v-html="project.title"></p> -->
                                    <figure v-if="!isMobile && project.homepage_image"
                                    class="w-full group">
                                        <p class="projectName opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                        fixed pointer-events-none cursor-follower">
                                            <span class="circle"></span>
                                            <span v-html="project.title"></span>
                                        </p>
                                        <img
                                        :src="imageBuilder.image (project.homepage_image)"
                                        class="pic w-full h-full object-cover"/>
                                    </figure>
                                    <figure v-if="isMobile && project.homepage_image_mobile"
                                    class="w-full group">
                                        <p class="projectName opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                        fixed pointer-events-none cursor-follower">
                                            <span class="circle"></span>
                                            <span v-html="project.title"></span>
                                        </p>
                                        <img
                                        :src="imageBuilder.image (project.homepage_image_mobile)"
                                        class="pic w-full h-full object-cover"/>
                                    </figure>
                                    <p v-if="isMobile" v-html="project.title"></p>
                                </a>
                            </template>


                            <div id="footer-component" class="mt-4 l-0 row-start-[134] row-span-10
                            relative md:absolute w-[calc(100vw-40px)] md:w-screen">
                                <Footer></Footer>
                            </div>
                        </div>

                    </section>
                </main>

            </div>
        </transition>

        
    </div>
</template>
  

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import sanity from "../sanity/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import { useMyStore } from '/store/store.js';
import groq from "groq"; // Ensure you have groq imported if used in your setup

const imageBuilder = imageUrlBuilder(sanity);

const loading = ref(true);
const myData = ref([]);
const myCarousel = ref([]);
const route = useRoute();
const store = useMyStore();
let isMobile = computed(() => store.isMobile)


const fetchData = async () => {
    loading.value = true;
    try {
        const data = await sanity.fetch(groq`*[_type == "project"]`);
        myData.value = data;
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};
const fetchDataCarousel = async () => {
    loading.value = true;
    try {
        const data = await sanity.fetch(groq`*[_type == "homepage"]{
            slides[]{
                _key,
                _type,
                title,
                image,
                image_mobile,
            }
        }[0...50]`);
        myCarousel.value = data;
        //console.log(myCarousel._rawValue[0].slides)
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

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

const changeBackgroundColor = () => {
    const colors = ["#723137", "#7d91a0", "#c3c2be"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const element = document.getElementById("s_1");

    if (element) {
        element.style.backgroundColor = randomColor;
    } else {
        console.error("Element not found!");
    }
};

const setupVisibilityToggle = () => {
    const observer = new IntersectionObserver(entries => {
        if(isMobile.value){return}
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            const spansRow = document.querySelector('#spansRow');
            const spans = document.querySelectorAll('#head a.first');
            const spansMenu = document.querySelectorAll('#head a.menu');
            const spansMenuMobile = document.querySelector('#head #spansRowMobile p.menu');
            const myMains = document.querySelectorAll('#head a.main');

            if (entry.isIntersecting) {
                if (entry.target.id == "s_2") {
                    entry.target.classList.add("inView")
                } else {
                    document.getElementById('s_2').classList.remove("inView")
                }

                if (entry.target.id == "s_4") {
                    spansRow.classList.add('visible');
                    spansMenu.forEach(span => {
                        span.classList.add('visible');
                    });

                    document.querySelector('#head p.arch').classList.add('invisible');
                    myMains[0].classList.add('small');
                    myMains[1].classList.add('small');
                    
                    document.querySelector('#head a.blankSpace').classList.add('invisible');
                    document.querySelector('#head a.first').classList.add('invisible');
                } else {
                    spansRow.classList.remove('visible');
                    spansMenu.forEach(span => {
                        span.classList.remove('visible');
                    });
                    
                    document.querySelector('#head p.arch').classList.remove('invisible');
                    myMains[0].classList.remove('small');
                    myMains[1].classList.remove('small');
                    
                    document.querySelector('#head a.blankSpace').classList.remove('invisible');
                    document.querySelector('#head a.first').classList.remove('invisible');
                }

                if (entry.target.id == "s_4") {
                    spans.forEach(span => {
                        span.classList.add('!hidden');
                    });
                    document.getElementById("head").style.color = 'white';
                    document.getElementById("head").style.mixBlendMode = 'difference';
                    document.getElementById("head").classList.add('s4');
                } else if (entry.target.id == "s_1") {
                    document.getElementById("head").style.color = 'white';
                    document.getElementById("head").style.mixBlendMode = 'normal';
                    document.getElementById("head").classList.remove('s4');
                    
                    spans.forEach(span => {
                        span.style.opacity = '1';
                        span.style.pointerEvents = 'auto';
                    });
                    myMains[0].classList.remove('show-dot');
                    myMains[1].classList.remove('show-dot');
                } else {
                    document.getElementById("head").style.color = 'black';
                    document.getElementById("head").style.mixBlendMode = 'normal';
                    spans.forEach(span => {
                        span.classList.remove('!hidden');
                        span.style.opacity = '0';
                        span.style.pointerEvents = 'none';
                    });
                    myMains[0].classList.add('show-dot');
                    myMains[1].classList.add('show-dot');
                }
            }
        });
    }, { threshold: 0.5 }); // Trigger when at least 50% of the section is in view
    
    const sections = document.querySelectorAll('section[id^="s_"]');
    sections.forEach(section => {
        observer.observe(section);
    });
};



onMounted(async () => {
    await fetchData();
    await fetchDataCarousel();
    await nextTick();
    changeBackgroundColor();
    setupVisibilityToggle();

    const scrollToHash = () => {
        const hash = route.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                document.getElementById('overlay').classList.add('show');
                element.scrollIntoView({ behavior: 'smooth' });
                
                setTimeout(() => {
                    document.getElementById('overlay').classList.remove('show')
                }, 1000)
            }
        }
    };
    setTimeout(() => {
        scrollToHash(), 600
    })

    const followers = document.querySelectorAll('.cursor-follower');
    const updateFollowerPositions = (event) => {
        if(isMobile.value){return}
        const x = event.clientX;
        const y = event.clientY;
        followers.forEach((follower) => {
        follower.style.left = `${x}px`;
        follower.style.top = `${y}px`;
        });
    };

    document.addEventListener('mousemove', updateFollowerPositions);

    // Clean up the event listener on unmount
    /* onBeforeUnmount(() => {
        document.removeEventListener('mousemove', updateFollowerPositions);
    }); */

    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            handleClick('left');
        } else if (event.key === 'ArrowRight') {
            handleClick('right');
        }
    });
});



let firstTimeout;
let myTimeout;
let myInterval;
let currentIndex = 0;
let figures;
const snapContainer = ref(null);

let timeScroll = 200;
let stopForeverScrollMobile = false;

onMounted(() => {
    setTimeout(() => {
        if(isMobile.value){return}
        if (snapContainer.value) {
            figures = snapContainer.value.querySelectorAll('.slide');

            if(snapContainer.value.classList.contains('inView')){
                myTimeout = setTimeout(() => {
                    idleScroll()
                }, 3000);
            }
        }
    }, 1000);
})

function idleScroll() {

    /* console.log(s_2.value.getBoundingClientRect().top)
    console.log(s_2.value.getBoundingClientRect().bottom) */
    if((s_2.value.getBoundingClientRect().top < 0) && (s_2.value.getBoundingClientRect().bottom < 1)){
        console.log('no')
        stopForeverScrollMobile = true;
        console.log(stopForeverScrollMobile)
        return
    }
    if(isMobile.value){
        timeScroll = 2000;
    } else {
        timeScroll = 200;
    }
    myInterval = setInterval(() => {
        if (stopForeverScrollMobile === true) {
            clearTimeout(myTimeout);
            clearInterval(myInterval);
            return;
        }
        //currentIndex = (currentIndex + 1) % figures.length;
        //figures[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        
        const container = document.getElementById('s_2');
        /* const overlay = document.getElementById('overlay_slide');
        if (overlay.classList.contains('show')) {
            return;
        } */
        const slides = Array.from(container.children).filter(child => child.classList.contains('slide'));
        const currentIndex = slides.findIndex(slide => slide.getBoundingClientRect().left >= container.getBoundingClientRect().left - 10);
        let nextIndex;
        nextIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
        //overlay.classList.add('show');
        
        myTimeout = setTimeout(() => {
            if (stopForeverScrollMobile === true) {
                clearInterval(myInterval);
                return;
            }
            
            if (currentIndex < slides.length - 1) {
                slides[currentIndex + 1].scrollIntoView({ behavior: 'smooth', inline: 'start' });
            } else {
                slides[0].scrollIntoView({ behavior: 'smooth', inline: 'start' });
            }
        }, timeScroll);

    }, 4000);
}

const handleMouseMove = (event) => {
    if(isMobile.value){return}

    clearTimeout(myTimeout);
    if (myInterval) {
        clearInterval(myInterval);
    }
    
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

    if(document.querySelector('#s_2').classList.contains('inView')){
        idleScroll()
    }
};
const handleMouseLeave = () => {
    if(isMobile.value){return}
    
    document.querySelector('#leftArrow').classList.remove('visible');
    document.querySelector('#rightArrow').classList.remove('visible');

    clearTimeout(myTimeout);
    if (myInterval) {
        clearInterval(myInterval);
    }
};
const handleMouseEnter = (event) => {
    if(isMobile.value){return}
    handleMouseMove(event);

    myTimeout = setTimeout(() => {
        idleScroll()
    }, 4000);
};


const s_2 = ref(null);
const s_3 = ref(null);
const mainHome = ref(null);
function checkVisibilityMobile() {
    if(!isMobile.value){return}

    if(s_3.value.getBoundingClientRect().top < window.innerHeight / 2){
        store.headerBlack = true;
    } else {
        store.headerBlack = false;
    }


    if(s_2.value.getBoundingClientRect().top < 0) {
        stopForeverScrollMobile = true;
    } else if((s_2.value.getBoundingClientRect().top < window.innerHeight / 2) && (s_2.value.getBoundingClientRect().bottom > 0)){
        idleScroll();
    }
    
}



const handleClick = (event) => {

    /* const overlay = document.getElementById('overlay_slide');

    if (overlay.classList.contains('show')) {
        return;
    } */

    stopForeverScrollMobile = true

    let mouseX
    let container
    let containerWidth

    if(event != 'left' && event != 'right'){
        event.preventDefault();
        container = event.currentTarget;
        mouseX = event.clientX - container.getBoundingClientRect().left;
        containerWidth = container.offsetWidth;
    } else {
        container = document.getElementById('s_2');
    }

    const slides = Array.from(container.children).filter(child => child.classList.contains('slide'));
    const currentIndex = slides.findIndex(slide => slide.getBoundingClientRect().left >= container.getBoundingClientRect().left - 10);

    let nextIndex;
    if (mouseX < containerWidth / 2 || event=='left') {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    } else {
        nextIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    }

    //overlay.classList.add('show');
    setTimeout(() => {
        if (mouseX < containerWidth / 2 || event=='left') {
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

        /* setTimeout(() => {
            overlay.classList.remove('show');
        }, 300); */

    }, 200);
};

</script>



<script>
const { width, height } = useWindowSize();

export default {
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // Trigger reflow
      el.style.transition = 'opacity 2s';
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 2s';
      el.style.opacity = 0;
      done();
    },
    imageUrlFor(image) {
      return `path/to/images/${image}`;
    }
  }
};
</script>