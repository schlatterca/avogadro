import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { useRoute } from "vue-router";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.slug;
    let isAboutClosed = ref(true);
    const onHomepage = () => {
      return route.path === "/";
    };
    const onIndex = () => {
      return route.path.includes("/project-index");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { "bg-white": onHomepage(), "text-black": onHomepage(), "bg-darkgrey": onIndex(), "text-white": onIndex() }
      }, _attrs))}><div id="footer" class="hidden md:block pt-[8em] mb-24"><div class="flex flex-col text-[2rem] ml-20% w-66% gap-0 leading-tight" id="footerColumn"><a${ssrRenderAttr("href", "..#s_4")} class="relative w-fit"><span>PROJECTS</span></a><a href="../project-index" class="relative w-fit"><span>INDEX</span></a><a href="../vision" class="relative w-fit"><span>VISION</span></a><a href="../about" class="relative w-fit"><span>ABOUT</span></a></div></div><div id="credits" class="hidden md:flex justify-between w-full p-10px mt-0"><p>©2024</p><div class="flex w-[70vw] justify-end gap-20px md:gap-[12vw]"><p> </p><a href="mailto:cecilia.avogadro@gmail.com">E—MAIL</a><a href="https://www.instagram.com/ceciliaavogadroarchitetto/" target="_blank" class="w-">IG</a><p class="cursor-pointer w-">CREDITS</p></div></div><div id="creditsOpen" class="${ssrRenderClass([{
        "p-0 h-0 opacity-0 pointer-events-none": unref(isAboutClosed),
        "p-10px pt-0 h-8 opacity-100 pointer-events-all": !unref(isAboutClosed)
      }, "hidden md:flex justify-start w-full -mt-10px overflow-hidden transition-all duration-500 gap-0"])}"><p>Design: <a class="underline" href="https://www.instagram.com/studio_secondo/" target="_blank">Studio Secondo</a> / Sviluppo: <a class="underline" href="https://schlatterca.com" target="_blank">Carlo Andrea Schlatter</a></p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Footer-lemmLdBR.js.map
