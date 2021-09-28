module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes:{
        '0%':{
          opacity:'0.4'
        },
        '100':{
          opacity:'1'
        }
      },
      colors:{
        gray:{
          light:'#BBBBBB',
          dark:'#717171'
        }
      },
    },
  animation:{
    fade:'fade 1.5s ease-out'
  }
},
  variants: {
    extend: {
      backgroundColor:['active'],
    },
  },
  plugins: [],
}
