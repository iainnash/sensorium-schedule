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
                  showLocation: true,
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
                  showLocation: true,
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
            showLocation: true,
          },
          children: [
              {
                  path: 'immersive',
                  name: 'Immersive',
                  meta: {
                      title: 'Experience',
                      matcher: (event) => event.type.toLowerCase() === 'immersive',
                      showLocation: true,
                  },
                  component: buildView('AImmersive'),
              },
              {
                  path: 'music',
                  name: 'Music',
                  meta: {
                      title: 'Music',
                      matcher: (event) => event.type.toLowerCase() === 'music',
                      showLocation: true,
                  },
                  component: buildView('AMusic'),
              },
              {
                path: 'installation',
                name: 'Installation',
                meta: {
                    title: 'Install',
                    matcher: (event) => event.type.toLowerCase() === 'installation',
                    showLocation: true,
                },
                component: buildView('AInstallation'),
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