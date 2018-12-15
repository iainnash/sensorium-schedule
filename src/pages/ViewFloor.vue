<template>
    <PageTemplate :title="$route.meta.title">
        <div v-sort:key="event.sort_starttime" v-bind:key="event.index" v-for="event in list">
            <ons-card>
                <div class="right" v-if="event.starttime">
                    {{event.starttime}} – {{event.endtime}}
                </div>
                <div class="title">{{event.title}}</div>
                <div class="content">
                    {{event.description}}
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
        const list = window.events.filter((event) => this.$route.meta.matcher(event));
        return {
            list,
        };
    }
}
</script>

<style>
.right {
    float: right;
    color: #aaa;
}
</style>