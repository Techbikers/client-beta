import React from "react";

const DescriptionBlock = ({ description, html = false }) => (
  <section id="description">
    {html ?
      <div className="content" itemProp="description" dangerouslySetInnerHTML={{ __html: description }}>
      </div>
    :
      <div className="content" itemProp="description">
        {description}
      </div>
    }
  </section>
);

export default DescriptionBlock;
