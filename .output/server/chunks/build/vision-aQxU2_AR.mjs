import { s as sanity, _ as _sfc_main$1 } from './sanity-Btdn50QE.mjs';
import { u as useHead } from './index-DMqtYQSF.mjs';
import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { e as useWindowSize, d as useMyStore } from './server.mjs';
import imageUrlBuilder from '@sanity/image-url';
import { useRoute } from 'vue-router';
import '@sanity/client';
import '@unhead/shared';
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
    const { width } = useWindowSize();
    const imageBuilder = imageUrlBuilder(sanity);
    const route = useRoute();
    route.params.slug;
    const loading = ref(true);
    const myData = ref([]);
    ref(null);
    let isMobile = computed(() => width.value <= 768);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "mainVision" }, _attrs))}><div id="headOverlay" class="transition-opacity duration-[2000ms] opacity-0"></div><div id="header-component" class="z-50">`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`</div>`);
      if (loading.value) {
        _push(`<div class="bg-white w-screen h-[100dvh] fixed top-0 left-0"></div>`);
      } else {
        _push(`<div><div id="header-component" class="pointer-events-none">`);
        _push(ssrRenderComponent(_component_Header, null, null, _parent));
        _push(`</div><div id="snapContainer" class="flex flex-col overflow-scroll snap-mandatory snap-y absolute left-0 top-0 w-screen h-[100dvh] select-none overflow-y-hidden"><!--[-->`);
        ssrRenderList(myData.value.slides, (slide, index) => {
          var _a, _b;
          _push(`<div class="slide pic relative snap-start w-screen h-[100dvh] shrink-0 flex gap-20px items-end p-0 overflow-hidden snap-always">`);
          if (slide.description) {
            _push(`<div class="text fixed m-0 text-white pointer-events-none text-m DM-Mono z-50 opacity-0 blur-0 transition-all duration-[600ms] left-20px md:left-[calc(calc(23vw+2px))] top-[unset] md:top-[50%] bottom-20px md:bottom-[unset] w-auto md:w-80 max-w-[80vw] md:max-w-[unset]"><p class="text-xl mb-8">${(_a = slide.title) != null ? _a : ""}</p><p class="DM-Mono text-m">${(_b = slide.description) != null ? _b : ""}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="${ssrRenderClass([{ "opacity-0": index == 0, "firstBackground": index == 0 }, "absolute bottom-0 left-0 w-full h-full z-[5] pointer-events-none transition-opacity duration-[2000ms]"])}" style="${ssrRenderStyle({ "background": "linear-gradient(to top, rgba(0,0,0,0.4) 30%, rgba(255,255,255,0) 60%)" })}"></div><figure class="pic w-full h-full">`);
          if (!unref(isMobile) && slide.image) {
            _push(`<img${ssrRenderAttr("src", imageUrlFor(slide.image.asset))} class="${ssrRenderClass([{ "opacity-0": index == 0, "firstImage": index == 0 }, "pic vision object-cover transition-opacity duration-[2000ms] transform scale-[1.2]"])}">`);
          } else {
            _push(`<!---->`);
          }
          if (unref(isMobile) && slide.image_mobile) {
            _push(`<img${ssrRenderAttr("src", imageUrlFor(slide.image_mobile.asset))} class="${ssrRenderClass([{ "opacity-0": index == 0, "firstImage": index == 0 }, "pic vision object-cover transition-opacity duration-[2000ms] transform scale-[1.2]"])}">`);
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
//# sourceMappingURL=vision-aQxU2_AR.mjs.map
