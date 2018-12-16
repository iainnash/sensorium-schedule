<template>
    <PageTemplate :title="$route.meta.title">
        <div v-bind:key="event.index" v-for="event in list">
            <ons-card>
                <div class="right" v-if="event.starttime">
                    {{event.starttime}} – {{event.endtime}}
                </div>
                <div class="right" v-if="!event.starttime">
                    Throughout the Night
                </div>
                <div class="title">{{event.title}}</div>
                <div class="content">
                    <div v-if="$route.meta.showLocation">
                        {{LOCATION_MAP[event.location]}}
                    </div>
                    <div v-if="event.artist">
                        <i>{{event.artist}}</i>
                        <div class="ig" v-if="event.instagram">
                            <span v-for="ig in event.instagrams"><ons-icon icon="fa-instagram"></ons-icon>&nbsp;<a target="_blank" :href="`http://instagram.com/${ig}`">{{ig}}</a>&nbsp;</span>
                        </div>
                    </div>
                    <br />
                    <div>{{event.description}}</div>
                </div>
            </ons-card>
        </div>
    </PageTemplate>
</template>

<script>
import PageTemplate from '../components/PageTemplate';

export default {
    name: 'ViewFloor',
    components: {
        PageTemplate,
    },
    data() {
        const list = window.events.filter((event) => this.$route.meta.matcher(event)).sort(function(a, b) { return a.sort_starttime - b.sort_starttime; });
        console.log('data list', list);
        return {
            list,
            LOCATION_MAP: {
                'basement': 'Basement',
                'main': 'Ground',
                '3rd': 'Second floor',
                '4th': 'Third floor',
                '5th': 'Penthouse',
            }
        };
    },
}
</script>

<style>
.right {
    float: right;
    color: #aaa;
}
a {
    color: #eee;
}
.ig {
    opacity: 0.8;
    font-size: 0.8em;
}
</style>