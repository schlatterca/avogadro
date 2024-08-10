import { f as defineStore } from './server.mjs';

const useMyStore = defineStore("myStore", {
  state: () => ({
    myUrl: "",
    myUrlSaved: false
  })
});

export { useMyStore as u };
//# sourceMappingURL=store-DowA6jVL.mjs.map
