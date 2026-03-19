/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';
import { h } from 'vue';

// Icons
import { icons } from '@/icons';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi: {
        component: (props) => {
          const icon = icons[props.icon];
          if (!icon) return null;
          return h(
            'svg',
            {
              ...props,
              viewBox: '0 0 24 24',
              fill: 'currentColor',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            [h('path', { d: icon })],
          );
        },
      },
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#145DA0',
          secondary: '#75787B',
          success: '#198754',
          info: '#1e72fe',
          error: '#DA291C',
          warning: '#ffc107',
          background: '#BFC9D1',
          surface: '#cdd8e1',
        },
      },
      dark: {
        colors: {
          primary: '#145DA0',
          secondary: '#75787B',
          success: '#198754',
          info: '#1e72fe',
          error: '801b13',
          warning: '#ffc107',
          background: '#0f172a', // slate-900 vibe
          surface: '#1e293b'
        },
      },
    },
  },
});
