<template>
    <PageTemplate title="Home">

    <p style="text-align:center">
      <ons-card>
        <div class="title">Rooms by floor</div>
        <div class="content">
          <ons-list>
            <ons-list-item tappable modifier="chevron" @click="$router.push({path: '/floor/basement'})">Basement</ons-list-item>
            <ons-list-item tappable modifier="chevron" @click="$router.push({path: '/floor/main'})">Ground</ons-list-item>
            <ons-list-item tappable modifier="chevron" @click="$router.push({path: '/floor/3rd'})">Floor 2</ons-list-item>
            <ons-list-item tappable modifier="chevron" @click="$router.push({path: '/floor/4th'})">Floor 3</ons-list-item>
            <ons-list-item tappable modifier="chevron" @click="$router.push({path: '/floor/5th'})">Penthouse</ons-list-item>
          </ons-list>
        </div>
      </ons-card>
      <ons-card>
        <div class="title">Music Stage Schedule</div>
        <div class="content">
          <ons-list>
            <ons-list-item tappable modifier="chevron" @click="$router.push({path: '/stage/main'})">Main Stage</ons-list-item>
            <ons-list-item tappable modifier="chevron" @click="$router.push({path: '/stage/5th'})">Penthouse Stage</ons-list-item>
          </ons-list>
        </div>
      </ons-card>
      <ons-card>
        <div class="title">View all by</div>
        <div class="content">
          <ons-list>
            <ons-list-item tappable modifier="chevron" @click="$router.push({path: '/all'})">Everything</ons-list-item>
            <ons-list-item tappable modifier="chevron" @click="$router.push({path: '/all/immersive'})">Immersive</ons-list-item>
            <ons-list-item tappable modifier="chevron" @click="$router.push({path: '/all/installation'})">Installation</ons-list-item>
            <ons-list-item tappable modifier="chevron" @click="$router.push({path: '/all/music'})">Music</ons-list-item>
          </ons-list>
        </div>
      </ons-card>
      <br />
      <v-ons-button class="button-light" target="_blank" href="http://sensoriumholiday.splashthat.com">See event info</v-ons-button>
    </p>
  </PageTemplate>
</template>

<script>
import ViewFloor from './ViewFloor.vue';
import PageTemplate from '../components/PageTemplate.vue';

export default {
  key: 'page1',
  template: '#main',
  components: {
      PageTemplate,
  },
  methods: {
    push(floor) {
      this.$emit('push-page', ViewFloor, {data: floor});
    }
  }
}
</script>