
type FontSize = 'inherit' | 'default' | 'small' | 'large';

 export type SvgIconProps = {
  children?: any; // Nodes passed into the SVG element.
  className?: string; // Add a custom class name
  color?: 'inherit' | 'primary'; // The color of the component. It supports those theme colors that make sense for this component.
  fontSize?: FontSize; // The fontSize applied to the icon. Defaults to 16px, but can be configure to inherit font size.
  htmlColor?: string; // Applies a color attribute to the SVG element.
  shapeRendering?: string; // The shape-rendering attribute. If you are having issues with blurry icons you should investigate this property.
  viewBox?: string; // Allows you to redefine what the coordinates without units mean inside an SVG element.
};
