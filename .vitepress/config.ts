import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/Snlan-Blog-Vite/',
  title: "SnLan's blog",
  description: "A VitePress Site",
  head:[
    ['link',{rel:'icon',href:'/logo.png',type:'image/png'}]
  ],
  themeConfig: {
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text:"Compile",
        items:[
          {text:"CompileBase",link:"/Compile/CompileBase.md"},
          {text:"LargeData",link:"/Compile/LargeData.md"}
        ]
      },
      {
        text:"Typescript",
        items:[
          {
            text:"Type-Challenges",link:"/TypescriptAbout/TypeChallenges.md"
          },{
            text:"Object-Maaping",link:"/TypescriptAbout/TransformMapping.md"
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
