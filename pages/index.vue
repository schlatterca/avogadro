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
            <div v-if="loading" class="bg-white w-screen h-screen fixed top-0 left-0">
            </div>
            <div v-else>

                <main id="mainHome">
                    <section id="s_1">
                    </section>

                    <div id="leftArrow" class="arrow"></div>
                    <div id="rightArrow" class="arrow"></div>
                    <div class="overlay bg-white" id="overlay_slide"></div>

                    <section id="s_2"
                    @mousemove="handleMouseMove" 
                    @mouseleave="handleMouseLeave"
                    @mouseenter="handleMouseEnter"
                    @click="handleClick">
                        <figure class="slide">
                            <img src="https://freight.cargo.site/t/original/i/eb7592ba1f63f887f8bfefe0682439c59867bdf787af1ada187e871fa91a7447/_Z9A3926.jpg">
                        </figure>
                        <figure class="slide">
                            <img src="https://freight.cargo.site/t/original/i/2a7cd7086a218f34084b4a2bcba1682f8eeec2272068baf14898a753f0279647/_Z9A3936.jpg">
                        </figure>
                        <figure class="slide">
                            <img src="https://freight.cargo.site/t/original/i/9f672c4aeda59bf5c45247795ff7f5cf9bbd74b9e5e6043597515054de662b08/_Z9A3872_a.jpg">
                        </figure>
                    </section>

                    <section id="s_3">
                        <p>Trasformare uno spazio in un luogo<br>
                        di senso che faccia star bene chi<br>
                        ci trascorre del tempo è per me<br>
                        una gioia, ma non solo: è il mezzo<br>
                        con cui faccio la mia parte nella<br>
                        società civile.</p>
                    </section>

                    <!-- <section id="s_4">
                        <div class="imagesGroup">
                            <div class="image img_1">
                                <img src="https://freight.cargo.site/t/original/i/732eeab1c9250de3f02831b0394e080d320572e9d2862790526c9316502d9a77/_Z9A3996---dimensioni-grandi.jpeg">
                                <p>Piazzale Aquileia</p>
                            </div>
                            <div class="image img_2">
                                <img src="https://freight.cargo.site/t/original/i/034d4e19749dd252d9aed8dc1bc27a7cb97f5772074058f5ce47bbadc76728c0/Friuli30-Cristina-Galliena-Bohman---dimensioni-grandi.jpeg">
                                <p>Via Friuli</p>
                            </div>
                            <div class="image img_3">
                                <img src="https://freight.cargo.site/t/original/i/963733fd202bfec2c4118f44497e3c0530553b8376d34b0b4ad659f9c3bd6792/Londonio004-Casamenu---dimensioni-grandi.jpeg">
                                <p>Via Londonio</p>
                            </div>
                            <div class="image img_4">
                                <img src="https://freight.cargo.site/t/original/i/034d4e19749dd252d9aed8dc1bc27a7cb97f5772074058f5ce47bbadc76728c0/Friuli30-Cristina-Galliena-Bohman---dimensioni-grandi.jpeg">
                                <p>Via Friuli</p>
                            </div>
                        </div>
                    </section> -->

                    <section id="s_4">
                        <template v-for="project in myData" :key="project._key">
                        <a v-bind:href="'/progetti/'+ project.slug.current"
                        class="flex"
                        :style="project.gridSpan ? {
                            gridColumn: project.gridSpan.columnStart + ' / span ' + project.gridSpan.columnSpan,
                            gridRow: project.gridSpan.rowStart + ' / span ' + project.gridSpan.rowSpan
                        } : {}">
                            <!-- <p v-html="project.title"></p> -->
                            <figure
                            class="group">
                                <p class="projectName opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                fixed pointer-events-none cursor-follower">
                                    <span class="circle"></span>
                                    <span v-html="project.title"></span>
                                </p>
                                <img v-if="project.homepage_image"
                                :src="imageBuilder.image (project.homepage_image)"
                                class="pic w-full h-full object-cover"/>
                            </figure>
                        </a>
                        </template>
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
import groq from "groq"; // Ensure you have groq imported if used in your setup

const imageBuilder = imageUrlBuilder(sanity);

const loading = ref(true);
const myData = ref([]);
const route = useRoute();

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
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            const spansRow = document.querySelector('#spansRow');
            const spans = document.querySelectorAll('#head a.first');
            const spansMenu = document.querySelectorAll('#head a.menu');
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
});
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

//S_2 -> mouseMove, mouseLeave, mouseEnter, handleClick
//S_2 -> also has idleScroll
let firstTimeout;
let myTimeout;
let myInterval;
let currentIndex = 0;
let figures;
firstTimeout = setTimeout(() => {
    /* figures = document.querySelectorAll('#s_2 > .slide');

    if(document.querySelector('#s_2').classList.contains('inView')){
        myTimeout = setTimeout(() => {
            idleScroll()
        }, 3000);
    } */
}, 1000);

function idleScroll() {
    myInterval = setInterval(() => {
        //currentIndex = (currentIndex + 1) % figures.length;
        //figures[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        
        //replicate click
        const container = document.getElementById('s_2');
        const overlay = document.getElementById('overlay_slide');
        if (overlay.classList.contains('show')) {
            return;
        }
        const slides = Array.from(container.children).filter(child => child.classList.contains('slide'));
        const currentIndex = slides.findIndex(slide => slide.getBoundingClientRect().left >= container.getBoundingClientRect().left - 10);
        let nextIndex;
        nextIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
        overlay.classList.add('show');
        setTimeout(() => {
            if (currentIndex < slides.length - 1) {
                slides[currentIndex + 1].scrollIntoView({ behavior: 'smooth', inline: 'start' });
            } else {
                slides[0].scrollIntoView({ behavior: 'smooth', inline: 'start' });
            }
            setTimeout(() => {
                overlay.classList.remove('show');
            }, 200);
        }, 200);

    }, 4000);
}

const handleMouseMove = (event) => {
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
    document.querySelector('#leftArrow').classList.remove('visible');
    document.querySelector('#rightArrow').classList.remove('visible');

    clearTimeout(myTimeout);
    if (myInterval) {
        clearInterval(myInterval);
    }
};
const handleMouseEnter = (event) => {
    handleMouseMove(event);

    myTimeout = setTimeout(() => {
        idleScroll()
    }, 4000);
};




const handleClick = (event) => {
    event.preventDefault();

    const container = event.currentTarget;
    const overlay = document.getElementById('overlay_slide');

    if (overlay.classList.contains('show')) {
        return;
    }

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

    overlay.classList.add('show');
    setTimeout(() => {
        if (mouseX < containerWidth / 2) {
            if (currentIndex > 0) {
                slides[currentIndex - 1].scrollIntoView({ behavior: 'instant', inline: 'start' });
            } else {
                slides[slides.length - 1].scrollIntoView({ behavior: 'instant', inline: 'start' });
            }
        } else {
            if (currentIndex < slides.length - 1) {
                slides[currentIndex + 1].scrollIntoView({ behavior: 'instant', inline: 'start' });
            } else {
                slides[0].scrollIntoView({ behavior: 'instant', inline: 'start' });
            }
        }

        setTimeout(() => {
            overlay.classList.remove('show');
        }, 300);

    }, 200);
};
</script>