//theme-gm.ts

import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const ThemeGm = definePreset(Aura, {
    components: {
        button: {
            borderRadius: '25rem',
            labelFontWeight: 'bold',
            
        },
    },
    semantic: {
        primary: {
            50: '#f9ffe8',   
            100: '#f0ffbd',  
            200: '#e5ff8a', 
            300: '#d1ff66', 
            400: '#bbff44',  
            500: '#98e036',  
            600: '#76c02d',  
            700: '#5b9825',  
            800: '#46751c', 
            900: '#2d5013',  
            950: '#1b300c',  
        }
    }

});

export default ThemeGm;