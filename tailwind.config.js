/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html','./src/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['Inter','sans-serif'], mono: ['JetBrains Mono','monospace'] }, colors: { ink:'#111827', canvas:'#f7f8fb', brand:'#6366f1', mint:'#2dd4bf' } } }, plugins: [] };
