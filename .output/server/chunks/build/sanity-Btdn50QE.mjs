import { useSSRContext, computed, ref, unref } from 'vue';
import { ssrRenderStyle, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { d as useMyStore } from './server.mjs';
import { createClient } from '@sanity/client';

const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.slug;
    const store = useMyStore();
    let isMobile = computed(() => store.isMobile);
    let menuIsOpen = computed(() => store.menuIsOpen);
    let headerBlack = computed(() => store.headerBlack);
    let isAboutClosedMobile = ref(true);
    const onHomepage = () => {
      return route.path === "/";
    };
    const onProject = () => {
      return route.path.includes("/progetti/") || route.path === "/";
    };
    const onAbout = () => {
      return route.path.includes("/about");
    };
    const onVision = () => {
      return route.path.includes("/vision");
    };
    const onIndex = () => {
      return route.path.includes("/project-index");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (!unref(isMobile)) {
        _push(`<div id="head" style="${ssrRenderStyle({ "color": "white" })}" class="${ssrRenderClass({ "!text-black": onAbout() })}"><p class="${ssrRenderClass({ "!transition-none": !onHomepage() })}"><a href="../" class="${ssrRenderClass([{ "small": !onHomepage(), "show-dot": !onHomepage() }, "main pointer-events-auto"])}"><span>C</span></a><a href="../" class="${ssrRenderClass([{ "notVisible": !onHomepage() }, "first pointer-events-auto"])}" style="${ssrRenderStyle({ "visibility": "visible", "display": "inline" })}"><span>ecilia</span></a><a href="../" class="${ssrRenderClass([{ "invisible": !onHomepage() }, "blankSpace pointer-events-auto"])}"><span></span></a><a href="../" class="${ssrRenderClass([{ "ml-[6px]": onHomepage(), "small": !onHomepage(), "show-dot": !onHomepage() }, "main pointer-events-auto"])}"><span>A</span></a><a href="../" class="${ssrRenderClass([{ "notVisible": !onHomepage() }, "first pointer-events-auto"])}" style="${ssrRenderStyle({ "visibility": "visible", "display": "inline", "margin-left": "-.08em" })}"><span>vogadro</span></a></p><p class="${ssrRenderClass([{ "invisible": !onHomepage() }, "arch"])}">Arch.</p><div class="${ssrRenderClass({ "visible": !onHomepage() })}" id="spansRow"><a${ssrRenderAttr("href", "..#s_4")} class="${ssrRenderClass([{ "visible": !onHomepage(), "hasArrow": onProject() }, "menu"])}"><span>PROJECTS</span></a><a href="../project-index" class="${ssrRenderClass([{ "visible": !onHomepage(), "hasArrow": onIndex() }, "menu"])}"><span>INDEX</span></a><a href="../vision" class="${ssrRenderClass([{ "visible": !onHomepage(), "hasArrow": onVision() }, "menu"])}"><span>VISION</span></a><a href="../about" class="${ssrRenderClass([{ "visible": !onHomepage(), "hasArrow": onAbout(), "text-black": onAbout() }, "menu"])}"><span>ABOUT</span></a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isMobile)) {
        _push(`<div id="head" class="${ssrRenderClass({ "!text-black": onAbout(), "text-black": unref(headerBlack), "text-white": !unref(headerBlack) })}"><p><a id="homeLinkMobile" href="../"><span class="text-l transition-all">Cecilia Avogadro</span></a></p><p class="relative w-[40vw] text-right"><span class="${ssrRenderClass([{ "opacity-0": unref(headerBlack) || !onHomepage(), "pointer-events-none": unref(headerBlack) || !onHomepage() }, "absolute right-0 text-l transition-all"])}">Arch.</span><span id="menuButtonMobile" class="${ssrRenderClass([{ "opacity-0": !unref(headerBlack), "pointer-events-none": !unref(headerBlack), "!opacity-100": !onHomepage(), "!pointer-events-auto": !onHomepage() }, "absolute right-0 text-l transition-all cursor-pointer"])}">Menu</span></p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isMobile)) {
        _push(`<div id="menuMobile" class="${ssrRenderClass([{ "translate-x-0": unref(menuIsOpen), "translate-x-[100vw]": !unref(menuIsOpen) }, "bg-lightgrey text-l fixed left-0 top-0 z-[999999] p-20px w-screen h-[100dvh] transition-all duration-[600ms]"])}"><p class="absolute top-20px right-20px menu cursor-pointer"><span>Close</span></p><div class="text-xl leading-[120%] absolute flex flex-col w-auto mt-[calc(30dvh-1rem)]"><a${ssrRenderAttr("href", "..#s_4")} class="${ssrRenderClass({ "hasArrow": onProject() })}"><span>PROJECTS</span></a><a href="../project-index" class="${ssrRenderClass({ "hasArrow": onIndex() })}"><span>INDEX</span></a><a href="../vision" class="${ssrRenderClass({ "hasArrow": onVision() })}"><span>VISION</span></a><a href="../about" class="${ssrRenderClass({ "hasArrow": onAbout() })}"><span>ABOUT</span></a></div><div id="creditsMobile" class="md:hidden absolute w-[calc(100vw-40px)] p-0 mt-16 bottom-20px"><div class="w-full flex justify-between"></div><p class="inline-block w-auto">\xA92024</p><div class="inline-flex w-[70vw] justify-end gap-20px md:gap-[12vw]"><p>\xA0</p><a href="mailto:cecilia.avogadro@gmail.com">E\u2014MAIL</a><a href="https://www.instagram.com/ceciliaavogadroarchitetto/" target="_blank" class="w-">IG</a><p class="cursor-pointer w-">CREDITS</p></div><p class="${ssrRenderClass([{
          "opacity-0 h-0 pointer-events-none": unref(isAboutClosedMobile),
          "opacity-100 h-14 pointer-events-all": !unref(isAboutClosedMobile)
        }, "transition-all duration-500"])}"> Design: <a class="underline" href="https://www.instagram.com/studio_secondo/" target="_blank">Studio Secondo</a><br>Sviluppo: <a class="underline" href="https://schlatterca.com" target="_blank">Carlo Andrea Schlatter</a></p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sanity = createClient({
  projectId: "z2uq9iqi",
  // find this at manage.sanity.io or in your sanity.json
  dataset: "production",
  // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: "2021-03-25"
});

export { _sfc_main as _, sanity as s };
//# sourceMappingURL=sanity-Btdn50QE.mjs.map
