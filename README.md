# Tailwind Glassmorphism

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