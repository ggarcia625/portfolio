import React from 'react';

const SVGComponent = ({ svgText, width = "24", height = "24", fill = "currentColor", ...props }) => {
  const SvgComponent = () => <span dangerouslySetInnerHTML={{ __html: svgText }} {...props} />;

  return (
    <SvgComponent
      style={{ width, height, fill }}
      aria-hidden="true"
      focusable="false"
      role="img"
    />
  );
};

export default SVGComponent;
