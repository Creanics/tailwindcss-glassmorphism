const Color = require('color')
const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

const glassmorph = plugin(
  function ({addUtilities, theme, variants, e}) {
    let colors = _.merge(theme('backgroundColor'), theme('glassmorphismColor'));
    let opacities = _.merge(theme('opacity'), theme('glassmorphismOpacity'));
    let blurs = theme('glassmorphismBlur');
    let rules = []
    
    _.forEach(
        blurs, 
        (blurValue, blurName) => {

            _.forEach(
                opacities, 
                (opacityValue, opacityName) => {

                    _.forEach(
                        colors, 
                        (colorValues, colorName) => {

                            if(_.isString(colorValues)) return[];
                            _.forEach(
                                colorValues, 
                                (colorValue, colorIndex) => {

                                    let color = new Color(colorValue);
                                    let rule = ".";
                                    colorValue = `rgba(${color.color.join(',')},${opacityValue})`;

                                    rules.push([
                                        rule,
                                        {
                                            backgroundColor: colorValue,
                                            backdropFilter: `blur(${blurValue})`,
                                        },
                                    ])
                                }
                            )
                        }
                    )
                }
            )
        }
    )  
    
    addUtilities(
      _.fromPairs(rules),
      variants('glass', ['responsive', 'hover', 'focus'])
    )
  },
  {
    theme: {
        glassmorphismBlur:{
          none: "0",
          sm: "2px",
          default: "4px",
          md: "8px",
          lg: "16px",
          xl: "24px",
          "2xl": "40px",
          "3xl": "64px",
        },
        glassmorphismColor:{
          default: "#f3f4f6",
          red: "#ff00ff"
        }
    }
  },
)

module.exports = glassmorph