import { s as sanity, _ as _sfc_main$1 } from './sanity-Btdn50QE.mjs';
import { _ as _sfc_main$2 } from './Footer-lemmLdBR.mjs';
import { e as useWindowSize, d as useMyStore } from './server.mjs';
import { ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import imageUrlBuilder from '@sanity/image-url';
import '@sanity/client';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

useWindowSize();
const __default__ = {
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight;
      el.style.transition = "opacity 2s";
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = "opacity 2s";
      el.style.opacity = 0;
      done();
    },
    imageUrlFor(image) {
      return `path/to/images/${image}`;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const imageBuilder = imageUrlBuilder(sanity);
    const loading = ref(true);
    const myData = ref([]);
    const myCarousel = ref([]);
    useRoute();
    const store = useMyStore();
    let isMobile = computed(() => store.isMobile);
    const sortedProjects = computed(() => {
      if (!myData.value || myData.value.length === 0)
        return [];
      return myData.value.slice().sort((a, b) => {
        const dateA = new Date(a._createdAt);
        const dateB = new Date(b._createdAt);
        return dateA - dateB;
      });
    });
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$1;
      const _component_Footer = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="overlay bg-white" id="overlay"></div><div id="header-component">`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`</div>`);
      if (loading.value) {
        _push(`<div class="bg-white w-screen h-[100dvh] fixed top-0 left-0"></div>`);
      } else {
        _push(`<div><main id="mainHome"><section id="s_1"><div id="downArrow"></div></section>`);
        if (!unref(isMobile)) {
          _push(`<div id="leftArrow" class="arrow"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!unref(isMobile)) {
          _push(`<div id="rightArrow" class="arrow"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<section id="s_2" class="snap-always">`);
        if (myCarousel.value[0]) {
          _push(`<!--[-->`);
          ssrRenderList(myCarousel.value[0].slides, (slide) => {
            _push(`<!--[-->`);
            if (!unref(isMobile) && slide.image) {
              _push(`<figure class="slide"><img${ssrRenderAttr("src", unref(imageBuilder).image(slide.image.asset).url())} alt="Carousel Image"></figure>`);
            } else {
              _push(`<!---->`);
            }
            if (unref(isMobile) && slide.image_mobile) {
              _push(`<figure class="slide"><img${ssrRenderAttr("src", unref(imageBuilder).image(slide.image_mobile.asset).url())} alt="Carousel Image"></figure>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section><section id="s_3"><p>Trasformare uno spazio in un luogo`);
        if (!unref(isMobile)) {
          _push(`<br>`);
        } else {
          _push(`<!---->`);
        }
        _push(` di senso che faccia star bene chi`);
        if (!unref(isMobile)) {
          _push(`<br>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ci trascorre del tempo \xE8 per me`);
        if (!unref(isMobile)) {
          _push(`<br>`);
        } else {
          _push(`<!---->`);
        }
        _push(` una gioia, ma non solo: \xE8 il mezzo`);
        if (!unref(isMobile)) {
          _push(`<br>`);
        } else {
          _push(`<!---->`);
        }
        _push(` con cui faccio la mia parte nella`);
        if (!unref(isMobile)) {
          _push(`<br>`);
        } else {
          _push(`<!---->`);
        }
        _push(` societ\xE0 civile.</p></section><section id="s_4"><div class="projectGrid relative h-[100dvh] w-screen"><!--[-->`);
        ssrRenderList(unref(sortedProjects), (project) => {
          var _a, _b, _c;
          _push(`<a${ssrRenderAttr("href", "/progetti/" + project.slug.current)} class="flex cursor-none flex-col md:flex-row" style="${ssrRenderStyle(project.gridSpan ? {
            gridColumn: project.gridSpan.columnStart + " / span " + project.gridSpan.columnSpan,
            gridRow: project.gridSpan.rowStart + " / span " + project.gridSpan.rowSpan
          } : {})}">`);
          if (!unref(isMobile) && project.homepage_image) {
            _push(`<figure class="w-full group"><p class="projectName opacity-0 group-hover:opacity-100 transition-opacity duration-500 fixed pointer-events-none cursor-follower"><span class="circle"></span><span>${(_a = project.title) != null ? _a : ""}</span></p><img${ssrRenderAttr("src", unref(imageBuilder).image(project.homepage_image))} class="pic w-full h-full object-cover"></figure>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(isMobile) && project.homepage_image_mobile) {
            _push(`<figure class="w-full group"><p class="projectName opacity-0 group-hover:opacity-100 transition-opacity duration-500 fixed pointer-events-none cursor-follower"><span class="circle"></span><span>${(_b = project.title) != null ? _b : ""}</span></p><img${ssrRenderAttr("src", unref(imageBuilder).image(project.homepage_image_mobile))} class="pic w-full h-full object-cover"></figure>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(isMobile)) {
            _push(`<p>${(_c = project.title) != null ? _c : ""}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</a>`);
        });
        _push(`<!--]--><div id="footer-component" class="mt-4 l-0 row-start-[134] row-span-10 relative md:absolute w-[calc(100vw-40px)] md:w-screen">`);
        _push(ssrRenderComponent(_component_Footer, null, null, _parent));
        _push(`</div></div></section></main></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BvrjbVxK.mjs.map
