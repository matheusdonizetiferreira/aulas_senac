# Shorthand

* junção de propriedades
* resumindo
* legível

```css
{
  /* background properties */
  background-color: #000;
  background-image: url(images/bg.jpg);
  background-repeat: no-repeat;
  background-position: left top;

  /* background shorthand */
  background: #000 url(images/bg..jpg) no-repeat left top;

  /* font properties */
  font-style: italic;
  font-weight: bold;
  font-size: .8em;
  line-height: 1.2;
  font-family: Arial, sans-serif;

  /* font shorthand */
  font: bold italic .8em/1.2 Arial, sans-serif;

}
```

## Detalhes
* não irá considerar propriedades anteriores
* valores não especificados irão assumir o valor padrão
* geralmente, a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, poderemos encontra problemas

## Propriedades que aceitam shorthand
animation, background, border, border-bottom, border-color, border-left,
border-radius, border-right, border-style, border-top, border-width, 
columns, flex, flex-flow, font, grid, text-decoration, padding, transition

**https://developer.mozilla.org/en-US/docs/Web/Css/Shorthand_properties**