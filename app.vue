<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  import { onMounted, onBeforeUnmount } from 'vue'
  import { useMyStore } from '/store/store.js';
  import { useWindowSize } from "@vueuse/core";
  const { width } = useWindowSize();
  const store = useMyStore();
  // const query = groq`*[_type == "project"]`;
  // const { data } = useSanityQuery(query);
  // console.log(data);
  let isMobile = computed(() => width.value <= 768);

  onMounted(() => {
    console.log(store.isMobile)
    store.isMobile = isMobile;
    console.log(store.isMobile)
  })

</script>