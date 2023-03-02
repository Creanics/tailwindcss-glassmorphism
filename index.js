const Color = require('color')
const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

// Generate 
//  .glass
//  .glass-{blur}
//  .glass-{color}
//  .glass-{color}-{blur}
//  .glass-{color}/{opacity}
//  .glass-{color}/{opacity}-{blur}


const invalidKeywords = [
    'currentcolor',
    'transparent',
    'unset',
    'initial',
    'inherit',
]

const glassmorph = plugin(
  function ({addUtilities, theme, variants, e}) {
    let colors = _.merge(theme('backgroundColor'), theme('glassmorphismColor'));
    let opacities = _.merge(theme('opacity'), theme('glassmorphismOpacity'));
    let blurs = theme('glassmorphismBlur');
    let rules = [];

    _.forEach(colors, (color, i)=>{
      _.forEach(blurs, (blur, j)=>{
        if(i == j)
          delete colors[i]
      })
    })
    
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
                    colorValue = `rgba(${color.color.join(',')},${opacityValue})`;

                    let rule = "glass";
                    rule += `-${colorName}-${colorIndex}`;
                    if(opacityName != "default")
                      rule += `/${opacityName}`;
                    if(blurName != "default")
                      rule += `-${blurName}`;

                    rules.push([
                        `.${e(rule)}`,
                        {
                            backgroundColor: colorValue,
                            backdropFilter: `blur(${blurValue})`,
                        },
                    ])
                })
            })
        })
    })

    let colorValue = colors['gray']['800']; // THE default color
    _.forEach(
      blurs, 
      (blurValue, blurName) => {
            
        let color = new Color(colorValue);
        colorValue = `rgba(${color.color.join(',')},0.1)`;

        let rule = "glass";
        if(blurName != "default")
          rule += `-${blurName}`;
        rules.push([
          `.${e(rule)}`,
          {
            backgroundColor: colorValue,
            backdropFilter: `blur(${blurValue})`,
          },
        ])
    })
    
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
        md: "4px",
        lg: "8px",
        default: "10px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },
      glassmorphismOpacity:{
        default: "0.10",
      }
    }
  },
)

module.exports = glassmorph