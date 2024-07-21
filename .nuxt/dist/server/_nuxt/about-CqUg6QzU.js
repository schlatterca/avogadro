import { s as sanity, _ as _sfc_main$1 } from "./sanity-C3NliCUR.js";
import { ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/vue";
import "vue-router";
import "@sanity/client";
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
  __name: "about",
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
        _push(`</div><main id="about" class="bg-lightgrey w-auto h-screen p-20px flex justify-between gap-20px pt-20vh"><div id="aboutText" class="relative h-full w-50vw flex flex-col justify-between leading-normal"><div class="upper text-s *:mb-4"><!--[-->`);
        ssrRenderList(myData.value.text_top, (block) => {
          _push(ssrRenderComponent(unref(PortableText), {
            value: [
              block
            ]
          }, null, _parent));
        });
        _push(`<!--]--></div><div class="bottom text-base"><!--[-->`);
        ssrRenderList(myData.value.text_bottom, (block) => {
          _push(ssrRenderComponent(unref(PortableText), {
            value: [
              block
            ]
          }, null, _parent));
        });
        _push(`<!--]--></div></div><figure id="mainImg" class="h-full w-auto max-w-40vw">`);
        if (myData.value.cover_image.asset._ref) {
          _push(`<img${ssrRenderAttr("src", unref(imageBuilder).image(myData.value.cover_image.asset._ref))} class="pic w-full h-full object-cover">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</figure></main></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-CqUg6QzU.js.map
