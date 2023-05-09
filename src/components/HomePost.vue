<template>
  <q-card class="post" flat square style="min-width: 100%">
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img v-if="avatar" :src="avatar">
          <q-icon v-else name="mdi-account" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>
          <div class="text-body1">{{ name }}</div>
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-skeleton height="300px" square />

    <q-card-actions class="q-gutter-md q-pl-md">
      <q-icon name="mdi-comment-outline" color="grey-5" size="2rem" />
      <q-icon name="mdi-share-variant-outline" color="grey-5" size="2rem" />
    </q-card-actions>

    <q-card-section class="q-pt-none">
      <q-skeleton type="text" class="text-caption" />
      <q-skeleton type="text" class="text-caption" />
      <q-skeleton type="text" width="50%" class="text-caption" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
import PostGateway from '../gateways/PostGateway';
import Post from 'src/entities/Post';

interface Props {
  id: string;
}

const postGateway = inject('postGateway') as PostGateway;
const props = defineProps<Props>();

let post: Post;
const name = ref<string>('');
const avatar = ref<string | null>('');
onMounted(async () => {
  try {
    post = await postGateway.get(props.id);
    console.log(post);
    avatar.value = post.avatar;
    name.value = post.name;
  } catch (error) {
    post = new Post('1', 'Joao da Silva', null, 'Perdi meu pet', [], []);
    avatar.value = post.avatar;
    name.value = post.name;
  }
});

</script>

<style lang="scss" scoped></style>
