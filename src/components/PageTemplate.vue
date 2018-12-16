<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button @click.prevent="$router.push('/')">Back</v-ons-back-button>
      </div>
      <div class="center">Sensorium Map // {{title}}</div>
    </v-ons-toolbar>
    <slot />
    <div class="c">made with <ons-icon icon="fa-heart" /> by <a target="_blank" href="http://instagram.com/iainnash">@iainnash</a></div>
  </v-ons-page>
</template>

<script>
export default {
    name: 'PageTemplate',
    props: ['title'],
}
</script>

<style>
.c {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}
.c {
  color: #eee;
  font-size: 0.8em;
}
</style>