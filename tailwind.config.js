module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: {
        light:'#7579f4',
        DEFAULT:"#5D5FEF",
        dark:"#4a4cdb",
      },
      dark:{
        light:'#2D3037',
        DEFAULT:"#1F2229",
        dark:"#161920",
        black:"#1B1D24",
      },
      light:{
        light:'#fff',
        DEFAULT:"#fff",
        dark:"#fff",
      },
      gray:{
        DEFAULT:'#A5ACBD',
        dark : '#2D3037'
    },
    },
    fontFamily :{
      body :['Inter', 'san-serif'],
      title:['Satoshi-Regular', 'san-serif'],
      title_bold:['Satoshi-Bold', 'san-serif'],
    },
    extend: {
      backgroundImage: {
        main : "url('/agujero.jpg')",
        astronauta: "url('/bg-astronauta.jpg')",
        team: "url('/bg-team.jpg')",
        pages: "url('/bg-pages.jpg')",
        page_news: "url('/bg-news.jpg')",
        post: "url('/bg-post.jpg')",
        perspetiva: "url('/bg-perspectiva.jpg')",
      }
    },
  },
  plugins: [],
}
