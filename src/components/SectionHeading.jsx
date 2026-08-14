import React from 'react';

export const SectionHeading = ({ eyebrow, title, description, align = 'left', actions }) => {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left';

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div>
        <h2 className="section-title text-balance">{title}</h2>
        {description ? <p className="section-lead">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
};
