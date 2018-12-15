import Vue from 'vue';
import Router from 'vue-router';
import ViewFloor from './pages/ViewFloor';
import Main from './pages/Main';

Vue.use(Router);

const extendMain = name => ({ name, extends: Main });
const buildView = (name) => ({ name, extends: ViewFloor });

const floors = [
    'basement',
    'main',
    '3rd',
    '4th',
    '5th',
];

const stages = [
    'main',
    '5th',
];

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Main,
      children: [
        {
          path: 'floor',
          name: 'ByFloor',
          component: extendMain('MainFloor'),
          children: floors.map((floor) => ({
              path: floor,
              name: `floor_${floor}`,
              meta: {
                  title: `Floor ${floor}`,
                  matcher: (event) => event.location.toLowerCase() === floor,
              },
              component: buildView(`floor_${floor}`),
          })),
        },
        {
          path: 'stage',
          name: 'By stage',
          component: extendMain('MainStage'),
          children: stages.map((stage) => ({
              path: stage,
              name: `stage_${stage}`,
              meta: {
                  title: `Stage ${stage}`,
                  matcher: (event) => event.location.toLowerCase() === stage && event.type === 'music',
              },
              component: buildView(stage),
          })),
        },
        {
          path: 'all',
          name: 'By all',
          component: buildView('All'),
          meta: {
            title: 'Everything',
            matcher: (event) => true,
          },
          children: [
              {
                  path: 'experience',
                  meta: {
                      title: 'Experience',
                      matcher: (event) => event.type.toLowerCase() === 'experience',
                  },
                  component: buildView('Experience'),
              },
              {
                path: 'experience',
                meta: {
                    title: 'Install',
                    matcher: (event) => event.type.toLowerCase() === 'install',
                },
                component: buildView('Install'),
            },
          ]
        }
      ]
    }
  ]
});

/* For Vuex
 *
 * import store from 'store.js';
 *
 * router.beforeEach((to, from, next) => {
 *   // Reset pageStack to the new route
 *   store.commit('navigator/resetStack', to.matched.map(m => m.components.default));
 *   next();
 * });
 */

export default router;