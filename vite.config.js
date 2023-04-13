import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { registerSW } from 'virtual:pwa-register'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
       injectRegister: 'script',
      registerType: 'autoUpdate',
     
      workbox:{
        globPatterns: ['**/*.{js,jsx,css,html,ico,png,svg}']
      },
      includeAssets:["favicon.ico","apple-touch-icon.png","mask-icon.png"],
      manifest:{
        name:"PECHOO Tracking APP",
        short_name:"PECHOO",
        description:"App that connects Restaurants with Freelancer Drivers",
        theme_color:"#CD6D0C",
        icons:[
          {
            src:"/icons/192x192-icon.png",
            sizes:"192x192",
            type:"image/png"
          },
          {
            src:"/icons/512x512-icon.png",
            sizes:"512x512",
            type:"image/png"
          },
          {
            src:"/icons/mask-icon.png",
            sizes:"512x512",
            type:"image/png",
            purpose:"any maskable"
          }
        ]
      }

     }),
     registerSW({ immediate: true })
  ],
  server:{
    host:true
  },
  
})
