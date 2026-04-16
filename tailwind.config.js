import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "surface-dim": "#d9dadb",
              "secondary-container": "#cfe6f2",
              "tertiary-fixed": "#a6eff3",
              "primary-fixed": "#e0e0ff",
              "on-error-container": "#93000a",
              "on-primary-fixed": "#000767",
              "on-secondary-fixed": "#071e27",
              "secondary": "#4c616c",
              "background": "#f8f9fa",
              "on-primary": "#ffffff",
              "outline": "#767683",
              "surface": "#f8f9fa",
              "secondary-fixed": "#cfe6f2",
              "on-tertiary-container": "#5aa3a7",
              "error": "#ba1a1a",
              "on-secondary": "#ffffff",
              "error-container": "#ffdad6",
              "on-surface": "#191c1d",
              "surface-bright": "#f8f9fa",
              "primary": "#1A237E",
              "secondary-fixed-dim": "#b4cad6",
              "primary-fixed-dim": "#bdc2ff",
              "surface-tint": "#4c56af",
              "surface-container-high": "#e7e8e9",
              "outline-variant": "#c6c5d4",
              "surface-container-lowest": "#ffffff",
              "on-primary-fixed-variant": "#343d96",
              "on-tertiary-fixed-variant": "#004f53",
              "surface-variant": "#e1e3e4",
              "surface-container-low": "#f3f4f5",
              "inverse-primary": "#bdc2ff",
              "on-primary-container": "#8690ee",
              "on-secondary-container": "#526772",
              "on-background": "#191c1d",
              "on-secondary-fixed-variant": "#354a53",
              "inverse-on-surface": "#f0f1f2",
              "inverse-surface": "#2e3132",
              "surface-container": "#edeeef",
              "surface-container-highest": "#e1e3e4",
              "on-error": "#ffffff",
              "tertiary-container": "#003638",
              "tertiary": "#001f21",
              "on-surface-variant": "#454652",
              "on-tertiary-fixed": "#002021",
              "tertiary-fixed-dim": "#8ad3d7",
              "primary-container": "#1a237e",
              "on-tertiary": "#ffffff"
          },
          "borderRadius": {
              "DEFAULT": "8px",
              "lg": "8px",
              "xl": "12px",
              "full": "9999px"
          },
          "fontFamily": {
              "headline": ["Manrope", "sans-serif"],
              "body": ["Inter", "sans-serif"],
              "label": ["Inter", "sans-serif"],
              "manrope": ["Manrope", "sans-serif"],
              "inter": ["Inter", "sans-serif"]
          }
      }
  },
  plugins: [
    forms,
    containerQueries
  ],
}
