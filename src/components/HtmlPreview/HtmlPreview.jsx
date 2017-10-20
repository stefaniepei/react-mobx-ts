import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import s from './HtmlPreview.styles.scss';

/**
 * Renders a string as HTML
 */
function HtmlPreview ({ htmlStr }) {
  const innerHtml = { __html: htmlStr };

  return (
    <div
      className={s.container}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={innerHtml}
    />
  );
}

HtmlPreview.propTypes = {
  /**
   * String to render as HTML
   */
  htmlStr: PropTypes.string
};

export default observer(HtmlPreview);
