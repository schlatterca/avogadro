import { s as sanity, _ as _sfc_main$1 } from './sanity-DOpL_fb7.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import imageUrlBuilder from '@sanity/image-url';
import 'vue-router';
import '@sanity/client';

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
    const loading = ref(true);
    const myData = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$1;
      if (loading.value) {
        _push(`<div class="bg-white w-screen h-screen fixed top-0 left-0"></div>`);
      } else {
        _push(`<div><div id="header-component">`);
        _push(ssrRenderComponent(_component_Header, null, null, _parent));
        _push(`</div><main id="projectIndex" class="bg-darkgrey w-auto h-screen p-20px grid gap-6px auto-rows-1em grid-cols-24 pt-20vh text-white"><div id="mainImg" class="relative h-full w-full col-start-1 col-span-7"><!--[-->`);
        ssrRenderList(myData.value, (project) => {
          _push(`<figure class="absolute w-full h-auto" style="${ssrRenderStyle(_ctx.hoveredProject === project._rev ? null : { display: "none" })}">`);
          if (project.cover_image.asset._ref) {
            _push(`<img${ssrRenderAttr("src", unref(imageBuilder).image(project.cover_image.asset._ref))} class="pic w-full h-full object-cover">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</figure>`);
        });
        _push(`<!--]--></div><div id="projectIndexText" class="relative h-[80dvh] w-full DM-Mono leading-tight flex flex-col leading-normal col-start-9 col-span-16 overflow-scroll pb-20px"><!--[-->`);
        ssrRenderList(myData.value, (project, index) => {
          var _a, _b;
          _push(`<div class="${ssrRenderClass([{ "border-t-.6": index === 0 }, "inline-grid grid-cols-10 gap-6px items-end group w-full border-white border-b-.6 py-2 cursor-pointer hover:bg-darkgreyHover"])}"><a${ssrRenderAttr("href", "/progetti/" + project.slug.current)} class="col-span-6"><p class="truncate">${(_a = project.title) != null ? _a : ""}</p></a><p class="text-s col-start-7 col-span-3 truncate">${(_b = project.citta) != null ? _b : ""}</p><p class="projectIndexArrow self-center col-start-10 col-span-1 text-right opacity-0 group-hover:opacity-100"></p></div>`);
        });
        _push(`<!--]--></div></main></div>`);
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
//# sourceMappingURL=project-index-CUB8j0xG.mjs.map
