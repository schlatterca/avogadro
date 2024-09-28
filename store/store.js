// stores/myStore.js
import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    myUrl: '',
    myUrlSaved: false,
    myUrl2: '',
    myUrlSaved2: false,
    isMobile: ref(false),
    menuIsOpen: ref(false),
    headerBlack: false,
  })
});
