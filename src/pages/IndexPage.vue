<template>
  <q-page class="row justify-evenly">
    <div v-if="!posts" style="width: 100%">
      <template v-for="skeleton in skeletons" :key="skeleton">
        <q-separator v-if="skeleton > 1" class="q-mt-xs q-mb-sm" />
        <home-post-skeleton></home-post-skeleton>
      </template>
    </div>
    <div v-else-if="!posts.length" class="row items-center" style="height: 100vh">
      <p class="text-body1 text-dark">Nenhum resultado encontrado!</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import HomePost from 'src/components/HomePost.vue';
import HomePostSkeleton from '../components/HomePostSkeleton.vue';
const skeletons = reactive([1, 2, 3]);
const posts = ref<[] | null>(null);
onMounted(async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      posts.value = [];
      resolve(true);
    }, 200);
  });
});
</script>
