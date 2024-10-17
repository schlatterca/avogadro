import { s as sanity, _ as _sfc_main$1 } from './sanity-Btdn50QE.mjs';
import { _ as _sfc_main$2 } from './Footer-lemmLdBR.mjs';
import { computed, ref, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import imageUrlBuilder from '@sanity/image-url';
import { d as useMyStore } from './server.mjs';
import 'vue-router';
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

const __default__ = {
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight;
      el.style.transition = "opacity 0.5s";
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = "opacity 0.5s";
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
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "project-index",
  __ssrInlineRender: true,
  setup(__props) {
    const imageBuilder = imageUrlBuilder(sanity);
    const store = useMyStore();
    let isMobile = computed(() => store.isMobile);
    const loading = ref(true);
    const myData = ref([]);
    ref(null);
    let scrolledProject = ref(0);
    const sortedProjects = computed(() => {
      if (!myData.value || myData.value.length === 0)
        return [];
      return myData.value.slice().sort((a, b) => {
        const dateA = new Date(a._createdAt);
        const dateB = new Date(b._createdAt);
        return dateA - dateB;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$1;
      const _component_Footer = _sfc_main$2;
      if (loading.value) {
        _push(`<div class="bg-white w-screen h-[100dvh] fixed top-0 left-0"></div>`);
      } else {
        _push(`<div><div id="header-component">`);
        _push(ssrRenderComponent(_component_Header, null, null, _parent));
        _push(`</div><main id="projectIndex" class="bg-darkgrey w-auto h-[100dvh] p-20px auto-rows-1em grid-cols-24 text-white flex md:grid flex-col pt-16 md:pt-20vh gap-[16px] md:gap-6px">`);
        if (!unref(isMobile)) {
          _push(`<div id="mainImg" class="relative w-full col-start-1 col-span-7 h-[50%] md:h-full"><!--[-->`);
          ssrRenderList(unref(sortedProjects), (project) => {
            _push(`<figure class="absolute w-full h-full md:h-auto content-center md:content-[unset]" style="${ssrRenderStyle(!unref(isMobile) && _ctx.hoveredProject === project._rev ? null : { display: "none" })}">`);
            if (project.homepage_image.asset._ref) {
              _push(`<img${ssrRenderAttr("src", unref(imageBuilder).image(project.homepage_image.asset._ref))} class="pic object-cover w-auto md:w-full h-auto max-h-[100%] md:max-h-[unset] md:h-full m-auto md:m-[unset]">`);
            } else {
              _push(`<!---->`);
            }
            _push(`</figure>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isMobile)) {
          _push(`<div id="mainImg" class="relative w-full col-start-1 col-span-7 h-[50%] md:h-full"><!--[-->`);
          ssrRenderList(unref(sortedProjects), (project, index) => {
            _push(`<figure class="absolute w-full h-full md:h-auto content-center md:content-[unset]" style="${ssrRenderStyle(unref(isMobile) && unref(scrolledProject) === index ? null : { display: "none" })}">`);
            if (project.homepage_image_mobile.asset._ref) {
              _push(`<img${ssrRenderAttr("src", unref(imageBuilder).image(project.homepage_image_mobile.asset._ref))} class="pic object-cover w-auto md:w-full h-auto max-h-[100%] md:max-h-[unset] md:h-full m-auto md:m-[unset]">`);
            } else {
              _push(`<!---->`);
            }
            _push(`</figure>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div id="projectIndexText" class="relative w-full DM-Mono leading-tight flex flex-col leading-normal col-start-9 col-span-16 overflow-scroll pb-20px h-[50%] md:h-[80dvh]"><!--[-->`);
        ssrRenderList(unref(sortedProjects), (project, index) => {
          var _a, _b;
          _push(`<a${ssrRenderAttr("href", "/progetti/" + project.slug.current)} class="${ssrRenderClass([{ "border-t-[1px]": index === 0 }, "border-b-[1px]"])}"><div class="singleproject inline-grid grid-cols-10 gap-6px items-end group w-full border-white py-2 cursor-pointer md:hover:bg-darkgreyHover"><p class="text-[.8rem] md:text-base col-span-6 truncate">${(_a = project.title) != null ? _a : ""}</p><p class="text-[.6rem] md:text-s col-start-7 col-span-3 truncate">${(_b = project.citta) != null ? _b : ""}</p><p class="projectIndexArrow self-center col-start-10 col-span-1 text-right opacity-0 md:group-hover:opacity-100 text-[15px] md:text-base"></p></div></a>`);
        });
        _push(`<!--]--></div></main><div id="footer-component" class="relative l-0 w-screen row-start-[134] row-span-10">`);
        _push(ssrRenderComponent(_component_Footer, null, null, _parent));
        _push(`</div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=project-index-qjqoifea.mjs.map
