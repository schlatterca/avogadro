import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { createClient } from "@sanity/client";
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.slug;
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
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "head",
        style: { "color": "white" },
        class: { "!text-black": onAbout() }
      }, _attrs))}><p class="${ssrRenderClass({ "!transition-none": !onHomepage() })}"><a href="../" class="${ssrRenderClass([{ "small": !onHomepage(), "show-dot": !onHomepage() }, "main pointer-events-auto"])}"><span>C</span></a><a href="../" class="${ssrRenderClass([{ "notVisible": !onHomepage() }, "first pointer-events-auto"])}" style="${ssrRenderStyle({ "visibility": "visible", "display": "inline" })}"><span>ecilia</span></a><a href="../" class="${ssrRenderClass([{ "invisible": !onHomepage() }, "blankSpace pointer-events-auto"])}"><span></span></a><a href="../" class="${ssrRenderClass([{ "small": !onHomepage(), "show-dot": !onHomepage() }, "main pointer-events-auto"])}"><span>A</span></a><a href="../" class="${ssrRenderClass([{ "notVisible": !onHomepage() }, "first pointer-events-auto"])}" style="${ssrRenderStyle({ "visibility": "visible", "display": "inline", "margin-left": "-.08em" })}"><span>vogadro</span></a></p><p class="${ssrRenderClass([{ "invisible": !onHomepage() }, "arch"])}">Arch.</p><div class="${ssrRenderClass({ "visible": !onHomepage() })}" id="spansRow"><a${ssrRenderAttr("href", "..#s_4")} class="${ssrRenderClass([{ "visible": !onHomepage(), "hasArrow": onProject() }, "menu"])}"><span>PROJECTS</span></a><a href="../project-index" class="${ssrRenderClass([{ "visible": !onHomepage(), "hasArrow": onIndex() }, "menu"])}"><span>INDEX</span></a><a href="../vision" class="${ssrRenderClass([{ "visible": !onHomepage(), "hasArrow": onVision() }, "menu"])}"><span>VISION</span></a><a href="../about" class="${ssrRenderClass([{ "visible": !onHomepage(), "hasArrow": onAbout(), "text-black": onAbout() }, "menu"])}"><span>ABOUT</span></a></div></div>`);
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
export {
  _sfc_main as _,
  sanity as s
};
//# sourceMappingURL=sanity-DOpL_fb7.js.map
