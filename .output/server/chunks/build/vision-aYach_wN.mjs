import { s as sanity, _ as _sfc_main$1 } from './sanity-DOpL_fb7.mjs';
import { u as useHead } from './index-CCqbQxu4.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import imageUrlBuilder from '@sanity/image-url';
import { useRoute } from 'vue-router';
import { u as useMyStore } from './store-DowA6jVL.mjs';
import '@sanity/client';
import './server.mjs';
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
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "vision",
  __ssrInlineRender: true,
  setup(__props) {
    const imageBuilder = imageUrlBuilder(sanity);
    const route = useRoute();
    route.params.slug;
    const loading = ref(true);
    const myData = ref([]);
    useHead({
      title: "Cecilia Avogadro",
      meta: [{ name: "description", content: "" }]
    });
    const imageUrlFor = (source) => {
      return imageBuilder.image(source);
    };
    useMyStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="headOverlay"></div><div id="header-component" class="z-50">`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`</div>`);
      if (loading.value) {
        _push(`<div class="bg-white w-screen h-screen fixed top-0 left-0"></div>`);
      } else {
        _push(`<div><div id="header-component" class="pointer-events-none">`);
        _push(ssrRenderComponent(_component_Header, null, null, _parent));
        _push(`</div><div id="snapContainer" class="flex flex-col overflow-scroll snap-mandatory snap-y absolute left-0 top-0 w-screen h-screen select-none"><!--[-->`);
        ssrRenderList(myData.value.slides, (slide) => {
          var _a, _b;
          _push(`<div class="slide pic relative snap-start w-screen h-screen shrink-0 flex gap-20px items-end p-0 overflow-hidden bg-lightgrey">`);
          if (slide.description) {
            _push(`<div class="text absolute bottom-0 left-0 w-full z-10 text-white p-20px pr-66% pointer-events-none leading-tight text-base blur-[20px] transition-[filter] duration-[2000ms]"><p class="text-xl mb-8">${(_a = slide.title) != null ? _a : ""}</p><p class="DM-Mono text-base">${(_b = slide.description) != null ? _b : ""}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<figure class="pic w-full h-full">`);
          if (slide.image) {
            _push(`<img${ssrRenderAttr("src", imageUrlFor(slide.image.asset))} class="${ssrRenderClass([{ "blur-[20px]": slide.title }, "pic vision object-cover transition-[filter] duration-[1200ms] transform scale-[1.2]"])}">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</figure></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vision.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vision-aYach_wN.mjs.map
