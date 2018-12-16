<template>
    <PageTemplate :title="$route.meta.title">
        <div v-sort:key="event.sort_starttime" v-bind:key="event.index" v-for="event in list">
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
                        <br />
                    </div>
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
    methods: {
        getFloor(floor) {
            const floorMap = {
                
            };
            return floorMap[floor];
        }
    }
}
</script>

<style>
.right {
    float: right;
    color: #aaa;
}
</style>