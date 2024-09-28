// stores/myStore.js
import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    myUrl: '',
    myUrlSaved: false,
    isMobile: ref(false),
    menuIsOpen: ref(false),
  })
});
