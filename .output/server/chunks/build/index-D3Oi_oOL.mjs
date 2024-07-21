import { s as sanity, _ as _sfc_main$1 } from './sanity-C3NliCUR.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const imageBuilder = imageUrlBuilder(sanity);
    const loading = ref(true);
    const myData = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$1;
      _push(`<!--[--><div id="header-component">`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`</div>`);
      if (loading.value) {
        _push(`<div class="bg-white w-screen h-screen fixed top-0 left-0"></div>`);
      } else {
        _push(`<div><main id="mainHome"><section id="s_1"></section><section id="s_2"><img src="https://freight.cargo.site/t/original/i/eb7592ba1f63f887f8bfefe0682439c59867bdf787af1ada187e871fa91a7447/_Z9A3926.jpg"><img src="https://freight.cargo.site/t/original/i/2a7cd7086a218f34084b4a2bcba1682f8eeec2272068baf14898a753f0279647/_Z9A3936.jpg"><img src="https://freight.cargo.site/t/original/i/9f672c4aeda59bf5c45247795ff7f5cf9bbd74b9e5e6043597515054de662b08/_Z9A3872_a.jpg"></section><section id="s_3"><p>Trasformare uno spazio in un luogo<br> di senso che faccia star bene chi<br> ci trascorre del tempo \xE8 per me<br> una gioia, ma non solo: \xE8 il mezzo<br> con cui faccio la mia parte nella<br> societ\xE0 civile.</p></section><section id="s_4"><!--[-->`);
        ssrRenderList(myData.value, (project) => {
          var _a;
          _push(`<a${ssrRenderAttr("href", "/progetti/" + project.slug.current)} class="flex" style="${ssrRenderStyle(project.gridSpan ? {
            gridColumn: project.gridSpan.columnStart + " / span " + project.gridSpan.columnSpan,
            gridRow: project.gridSpan.rowStart + " / span " + project.gridSpan.rowSpan
          } : {})}"><figure class="group"><p class="projectName opacity-0 group-hover:opacity-100 transition-opacity duration-500 fixed pointer-events-none cursor-follower"><span class="circle"></span><span>${(_a = project.title) != null ? _a : ""}</span></p>`);
          if (project.cover_image) {
            _push(`<img${ssrRenderAttr("src", unref(imageBuilder).image(project.cover_image))} class="pic w-full h-full object-cover">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</figure></a>`);
        });
        _push(`<!--]--></section></main></div>`);
      }
      _push(`<!--]-->`);
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
//# sourceMappingURL=index-D3Oi_oOL.mjs.map
