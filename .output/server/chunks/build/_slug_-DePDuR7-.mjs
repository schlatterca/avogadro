import { s as sanity, _ as _sfc_main$1 } from './sanity-DOpL_fb7.mjs';
import { u as useHead } from './index-CCqbQxu4.mjs';
import { c as useNuxtApp, d as asyncDataDefaults, e as createError, b as useRuntimeConfig } from './server.mjs';
import { ref, mergeProps, useSSRContext, shallowRef, toRef, getCurrentInstance, onServerPrefetch, unref } from 'vue';
import { createClient } from '@sanity/client';
import { v as hash, o as defu } from '../runtime.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderAttrs } from 'vue/server-renderer';
import imageUrlBuilder from '@sanity/image-url';
import { useRoute } from 'vue-router';
import { u as useMyStore } from './store-DowA6jVL.mjs';
import '@unhead/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const hasCachedData = () => options.getCachedData(key, nuxtApp) != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = asyncDataDefaults.errorValue;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref((_i = options.getCachedData(key, nuxtApp)) != null ? _i : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxtApp));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const groq = String.raw || ((strings, ...keys) => {
  const lastIndex = strings.length - 1;
  return strings.slice(0, lastIndex).reduce(
    (query, currentString, index) => query + currentString + keys[index],
    ""
  ) + strings[lastIndex];
});
const createSanityHelper = (options) => {
  const config = { ...options };
  let client = createClient(config);
  return {
    client,
    config,
    // @ts-expect-error untyped args
    fetch: (...args) => client.fetch(...args),
    setToken(token) {
      config.token = token;
      client = createClient(config);
    }
  };
};
const useSanity = (client = "default") => {
  var _a;
  const nuxtApp = useNuxtApp();
  if ((_a = nuxtApp._sanity) == null ? void 0 : _a[client]) {
    return nuxtApp._sanity[client];
  }
  nuxtApp._sanity = nuxtApp._sanity || {};
  const $config = useRuntimeConfig();
  const { additionalClients = {}, ...options } = defu($config.sanity, $config.public.sanity);
  if (!options.disableSmartCdn && nuxtApp.$preview) {
    options.useCdn = false;
  } else if (!options.useCdn && !options.token) {
    options.useCdn = true;
  }
  if (client === "default") {
    nuxtApp._sanity.default = createSanityHelper(options);
    return nuxtApp._sanity.default;
  }
  nuxtApp._sanity[client] = createSanityHelper(defu(additionalClients[client], options));
  return nuxtApp._sanity[client];
};
const useSanityQuery = (query, _params, _options = {}) => {
  const { client, ...options } = _options;
  const sanity2 = useSanity(client);
  return useAsyncData("sanity-" + hash(query + ""), () => sanity2.fetch(query, {}), options);
};
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const imageBuilder = imageUrlBuilder(sanity);
    const route = useRoute();
    const slug = route.params.slug;
    const loading = ref(true);
    const myImages = ref([]);
    const myData = ref([]);
    useHead({
      title: "Cecilia Avogadro",
      meta: [{ name: "description", content: "" }]
    });
    const imageUrlFor = (source) => {
      return imageBuilder.image(source);
    };
    const getImageWidthClass = (myData2) => {
      return myData2.split("%")[0];
    };
    const getMargin = (myMargin) => {
      if (myMargin) {
        return String(myMargin).replaceAll("left-", "").replaceAll("right-", "");
      } else {
        return "20";
      }
    };
    const getMarginTop = (myMargin) => {
      switch (myMargin) {
        case "top-0":
          return "no";
        case "top-20":
          return "0";
        case "top-max":
          return "max";
        default:
          return "0";
      }
    };
    const getMarginBottom = (myMargin) => {
      switch (myMargin) {
        case "bottom-0":
          return "no";
        case "bottom-20":
          return "0";
        case "bottom-max":
          return "max";
        default:
          return "0";
      }
    };
    const isContentCenter = (justifyContentData) => {
      switch (justifyContentData) {
        case "destra":
          return "end";
        case "sinistra":
          return "start";
        case "giustifica":
          return "justify";
        default:
          return "center";
      }
    };
    const isContentHeight = (justifyContentData) => {
      switch (justifyContentData) {
        case "60%":
          return "60";
        case "70%":
          return "70";
        case "80%":
          return "80";
        case "max":
          return "max";
        default:
          return "auto";
      }
    };
    const query = groq`*[_type == "project" && slug.current == "${slug}"]`;
    useSanityQuery(query);
    useMyStore();
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_Header = _sfc_main$1;
      if (loading.value) {
        _push(`<div class="bg-white w-screen h-screen fixed top-0 left-0"></div>`);
      } else {
        _push(`<div><div id="header-component" class="pointer-events-none">`);
        _push(ssrRenderComponent(_component_Header, null, null, _parent));
        _push(`</div><figure id="background" class="pic snap-start w-screen h-screen shrink-0">`);
        if (myData.value.cover_image) {
          _push(`<img${ssrRenderAttr("src", imageUrlFor(myData.value.cover_image))} class="pic w-full h-full object-cover">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</figure><div id="leftArrow" class="arrow"></div><div id="rightArrow" class="arrow"></div><div id="snapContainer" class="flex overflow-scroll snap-mandatory snap-x absolute left-0 top-0 w-screen h-screen select-none"><div class="overlay" id="overlay"></div><div id="empty" class="slide active pic snap-start w-screen h-screen shrink-0"></div><div id="planimetria" class="slide w-66% ml-33% grid grid-cols-2 pic snap-end h-screen shrink-0 bg-lightgrey"><figure class="w-auto mx-20% bg-lightgrey mt-auto mb-auto">`);
        if (myData.value.planimetria) {
          _push(`<img${ssrRenderAttr("src", imageUrlFor(myData.value.planimetria))} class="pic w-auto h-full m-auto object-cover mix-blend-multiply">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</figure><div class="m-auto w-[20rem] mx-auto DM-Mono leading-tight">`);
        if (myData.value.title) {
          _push(`<p class="text-base uppercase">${(_a = myData.value.title) != null ? _a : ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (myData.value.citta) {
          _push(`<p class="text-s mt-4">${(_b = myData.value.citta) != null ? _b : ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (myData.value.description) {
          _push(`<p class="text-s lg:text-base mt-8">${(_c = myData.value.description) != null ? _c : ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (myData.value.altre_info) {
          _push(`<p class="text-s mt-6">${(_d = myData.value.altre_info) != null ? _d : ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><!--[-->`);
        ssrRenderList(myImages.value.slides, (slide) => {
          _push(`<div class="${ssrRenderClass([
            [`place-content-${isContentCenter(slide.justify)}`],
            [`fixed-height-${isContentHeight(slide.fixed_height)}`],
            "slide pic snap-start w-screen h-screen shrink-0 flex gap-20px items-end p-20px bg-lightgrey"
          ])}"><!--[-->`);
          ssrRenderList(slide.images, (imageObj) => {
            _push(`<figure${ssrRenderAttrs(mergeProps({
              class: "pic h-auto",
              key: imageObj._key,
              ref_for: true
            }, {
              alt_1: imageObj.image_2 ? imageUrlFor(imageObj.image_2) : void 0,
              ref: imageObj.image_2 ? "originalImg" : void 0
            }, {
              class: [
                `image-width-${getImageWidthClass(imageObj.image_width)}`,
                `mg-left-${getMargin(imageObj.margin_left)}`,
                `mg-right-${getMargin(imageObj.margin_right)}`,
                `mg-top-${getMarginTop(imageObj.margin_top)}`,
                `mg-bottom-${getMarginBottom(imageObj.margin_bottom)}`
              ]
            }))}>`);
            if (imageObj.image.asset) {
              _push(`<img${ssrRenderAttr("src", imageUrlFor(imageObj.image.asset))} class="pic object-cover">`);
            } else {
              _push(`<!---->`);
            }
            _push(`</figure>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/progetti/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DePDuR7-.mjs.map
