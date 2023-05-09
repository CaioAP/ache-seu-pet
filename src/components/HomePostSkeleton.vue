<template>
  <q-card class="post-skeleton" flat square style="min-width: 100%">
    <q-item>
      <q-item-section avatar>
        <q-skeleton type="QAvatar" />
      </q-item-section>

      <q-item-section>
        <q-item-label>
          <q-skeleton type="text" />
        </q-item-label>
        <q-item-label caption>
          <q-skeleton type="text" />
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
