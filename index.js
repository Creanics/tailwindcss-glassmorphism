const Color = require('color')
const _ = require('lodash')
const plugin = require('tailwindcss/plugin')


const invalidKeywords = [
    'currentcolor',
    'transparent',
    'unset',
    'initial',
    'inherit',
]

const glassmorph = plugin(
  function ({addUtilities, theme, variants, e}) {
    const rules = []
    let colors = theme('backgroundColor');

    _.forEach(colors, (color, colorName) => {
        if(_.isString(color)) return [];

        _.forEach(color, (value, index) => {
            if(invalidKeywords.includes(value.toLowerCase())) return []
    
            let temp = new Color(value);
            covaluelor = `rgba(${temp.color.join(',')},0.15)`
    
            _.forEach(theme('glassmorphismBlur'), (blur, blurKey) => {
                rules.push([
                    blurKey.toLowerCase() === 'default'
                    ? `.${e(`glass-${colorName}-${index}`)}`
                    : `.${e(`glass-${colorName}-${index}${blurKey   
                        ? "-" + blurKey
                        : ""}`
                    )}`,
                    {
                        backgroundColor: value,
                        backdropFilter: `blur(${blur})`,
                    },
                ])
            })
        })}
    )
    
    addUtilities(
      _.fromPairs(rules),
      variants('glass', ['responsive', 'hover', 'focus'])
    )
  },
  {
    theme: {
        glassmorphismBlur:{
            "none": "0",
            "sm": "2px",
            "": "4px",
            "md": "8px",
            "lg": "16px",
            "xl": "24px",
            "2xl": "40px",
            "3xl": "64px",
        }
    },
  },
)

module.exports = glassmorph