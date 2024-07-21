<template>

    <transition name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave">
        <div v-if="loading" class="bg-white w-screen h-screen fixed top-0 left-0">
        </div>
        <div v-else>
            <div id="header-component">
                <Header></Header>
            </div>
            <figure id='background' class="pic snap-start w-screen h-screen shrink-0">
                <img v-if="myData.cover_image"
                    :src="imageUrlFor(myData.cover_image)"
                    class="pic w-full h-full object-cover"
                />
            </figure>
        
            <div id='snapContainer' class="flex snap-mandatory snap-x overflow-scroll absolute left-0 top-0 w-screen h-screen"
            @scroll.passive="onScroll">
                <!-- <div>
                    <p class="text-3xl font-bold underline">{{slug}}</p>
                    <p class="text-5xl font-bold underline">{{myData.title}}</p>
                </div> -->
                <div id="empty" class="pic snap-start w-screen h-screen shrink-0"></div>

                <div id='planimetria' class="w-66% ml-33% flex pic snap-end h-screen shrink-0 bg-lightgrey">
                    <figure class="ml-17vw w-33% mt-50vh bg-lightgrey -translate-x-1/2 -translate-y-1/2">
                        <img v-if="myData.planimetria"
                        :src="imageUrlFor(myData.planimetria)"
                        class="pic w-auto h-full m-auto object-cover mix-blend-multiply"/>
                    </figure>
                    <div class="m-auto w-33% ml-0 DM-Mono leading-tight">
                        <p class="text-l uppercase" v-html="myData.title" v-if="myData.title"></p>
                        <p class="text-s mt-4" v-html="myData.citta" v-if="myData.citta"></p>
                        <p class="text-l mt-8" v-html="myData.description" v-if="myData.description"></p>
                        <p class="text-s mt-6" v-html="myData.altre_info" v-if="myData.altre_info"></p>
                    </div>
                </div>

                <div v-for="slide in myImages.slides" :key="slide._key"
                class="pic snap-start w-screen h-screen shrink-0 flex gap-20px items-end p-20px bg-lightgrey"
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
            </div>
        </div>
    </transition>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useWindowSize } from '@vueuse/core'
import sanity from "../sanity/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import { useRoute } from 'vue-router';
import { useMyStore } from '../store/store.js';

const imageBuilder = imageUrlBuilder(sanity);
const route = useRoute();
const slug = route.params.slug;

const loading = ref(true);
const myImages = ref([]);
const myData = ref([]);

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
            console.log('ccc', data[0]);
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
});
const query = groq`*[_type == "project" && slug.current == "${slug}"]`;
const { data } = useSanityQuery(query);
console.log("data:", data);







//if contains gifs
const store = useMyStore();

function onScroll(event) {
    const { width, height } = useWindowSize();
    let firstSlide = document.getElementById('planimetria')
    
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

    

    
    let GIFs = document.querySelectorAll('figure[alt_1]');
    if(GIFs.length > 0){
        const originalImgSrc = GIFs[0].getElementsByTagName('img')[0].src;
        //console.log('original:', GIFs[0].getElementsByTagName('img')[0].parentElement.getAttribute('alt_1'));
        if(!store.myUrlSaved){
            store.myUrl_1 = originalImgSrc;
            store.myUrl_2 = GIFs[0].getElementsByTagName('img')[0].parentElement.getAttribute('alt_1');
            store.myUrlSaved = true;
        }
        if((GIFs.length > 0)&&(GIFs[0].getBoundingClientRect().left > (width._value / 2)&&(GIFs[0].classList.contains('changed')))) {
            //console.log('2')
            GIFs[0].classList.remove('changed')
            GIFs[0].getElementsByTagName('img')[0].src = store.myUrl_1;
        } else if((GIFs.length > 0)&&(GIFs[0].getBoundingClientRect().left <= (width._value / 2)&&(!GIFs[0].classList.contains('changed')))) {
            //console.log('1')
            GIFs[0].classList.add('changed')
            GIFs[0].getElementsByTagName('img')[0].src = store.myUrl_2;
        }
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