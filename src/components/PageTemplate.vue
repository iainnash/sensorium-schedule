<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button @click.prevent="$router.push('/')">Back</v-ons-back-button>
      </div>
      <div class="center">Sensorium Map // {{title}}</div>
    </v-ons-toolbar>
    <slot />
  </v-ons-page>
</template>

<script>
export default {
    name: 'PageTemplate',
    props: ['title'],
}
</script>