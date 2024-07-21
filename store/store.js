// stores/myStore.js
import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    myUrl: '',
    myUrlSaved: false
  })
});
