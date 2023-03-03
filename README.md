# tailwind-glassmorphism
// Generate 
//  .glass
//  .glass-{blur}
//  .glass-{color}
//  .glass-{color}-{blur}
//  .glass-{color}/{opacity}
//  .glass-{color}/{opacity}-{blur}

> Generate glassy UI CSS code using tailwindcss

[Demo](https://codepen.io/Creanics/pen/mdGmPzV)

## Why?

This plugin is inspired by [glassgenerator](https://glassgenerator.netlify.app/) (in its most basic form).


## Getting Started

Install via npm or yarn

```
npm install tailwindcss-glassmorphism
```

```
yarn add tailwindcss-glassmorphism
```

Then just require it as a plugin.

```js
// tailwind.config.js
module.exports = {
  plugins: [require('tailwindcss-glassmorphism')],
}
```

This plugin generates a class by color, by opacity and by amount of blur


```css
.nm-flat-red-500 {
  background: #F56565;
  box-shadow: 0.2em 0.2em calc(0.2em * 2) #F01414, calc(0.2em * -1) calc(0.2em * -1) calc(0.2em * 2) #F9A6A6;
}

.nm-concave-red-500 {
  background: linear-gradient(145deg, #F23434, #F78585);
  box-shadow: 0.2em 0.2em calc(0.2em * 2) #F01414, calc(0.2em * -1) calc(0.2em * -1) calc(0.2em * 2) #F9A6A6;
}

.nm-convex-red-500 {
  background: linear-gradient(145deg, #F78585, #F23434);
  box-shadow: 0.2em 0.2em calc(0.2em * 2) #F01414, calc(0.2em * -1) calc(0.2em * -1) calc(0.2em * 2) #F9A6A6;
}

.nm-inset-red-500 {
  background: linear-gradient(145deg, #F78585, #F23434);
  box-shadow: inset 0.2em 0.2em calc(0.2em * 2) #F01414, inset calc(0.2em * -1) calc(0.2em * -1) calc(0.2em * 2) #F9A6A6;
}

.nm-flat-red-500-lg {
  background: #F56565;
  box-shadow: 0.4em 0.4em calc(0.4em * 2) #F01414, calc(0.4em * -1) calc(0.4em * -1) calc(0.4em * 2) #F9A6A6;
}

/* ... */
```

### Colors

By default, neumorphism classes will be generated for all of your background colors. Alternatively, you can set these colors explicitly in the config under `neumorphismColor`.

```js
module.exports = {
  // ...
  theme: {
    neumorphismColor: {
      red: {
        100: '#FBEBE9',
        200: '#F5CEC7',
        // ...
      },
    },
  },
  // ...
}
```

### Sizes

You can change the sizes of the generated neumorphisms using the `neumorphismSize` property. There are 5 sizes by default, ranging from `xs` to `xl`. Setting a key of `default` will generate an unsuffixed class. Values can be generated from any valid sizing unit.

```js
module.exports = {
  // ...
  theme: {
    neumorphismSize: {
      xs: '0.05em',
      sm: '0.1em',
      default: '0.2em',
      lg: '0.4em',
      xl: '0.8em',
    },
  },
  // ...
}
```




This plugin will generate these css classes for by default :

```CSS
.glass
.glass-lg
```

And will generate these css classes for each color an each opacity (`.glass-{color}\/{opacity}-{blur_size}`) :

```CSS
.glass-red-500
.glass-red-500\/50
.glass-red-500-lg
.glass-red-500\/50-lg
```
Default blur sizes are :

```JSON
"none": "0"
"sm": "1px"
"md": "2px"
"default": "4px"
"lg": "6px"
"xl": "8px"
"2xl": "10px"
"3xl": "16px"
```

Colors used by default are background colors so you can modify `color` and `backgroundColor` but please use `glassmorphismColor` to modify colors for this plugin.
You can add/override blur sizes with `glassmorphismBlur`.
Opacities used by default are basics opacities so you can modify `opacity` but please use `glassmorphismOpacity` to modify opacities for this plugin.

/!\ Please don't create blur size with same name as a color otherwise the color will be UNUSABLE /!\


---
<!-- ================================================================================================================ -->


### Variants

The default variants for each neumorphism utility are `responsive`, `hover` and `focus`. These can be configured [like any other tailwind utility](https://tailwindcss.com/docs/configuring-variants/), including being toggled on and off individually.

```js
module.exports = {
  // ...
  variants: {
    neumorphismFlat: ['responsive'],
    neumorphismConcave: false,
    neumorphismConvex: ['responsive', 'hover'],
    neumorphismInset: ['focus', 'active'],
  },
  // ...
}
```





---


![](https://img.shields.io/badge/Feature-Coming%20Soon-brigthgreen)

Adding Shadows & Borders