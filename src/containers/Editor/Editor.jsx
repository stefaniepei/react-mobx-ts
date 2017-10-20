import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import s from './Editor.styles.scss';

import Textbox from '../../components/Textbox';
import HtmlPreview from '../../components/HtmlPreview';

/**
 * Combines together Textbox and HtmlPreview to render
 * an Markdown-to-HTML editor
 */
@inject('Text')
@observer
class Editor extends Component {

  render () {
    const { Text } = this.props;

    const {
      rawText,
      htmlStr,
      setText
    } = Text;

    return (
      <div className={s.container}>
        <Textbox
          value={rawText}
          onChange={setText}
        />
        <HtmlPreview htmlStr={htmlStr} />
      </div>
    );
  }

}

Editor.wrappedComponent.propTypes = {
  /**
   * Text store object passed from Text MobX store
   */
  Text: PropTypes.shape({
    rawText: PropTypes.string,
    htmlStr: PropTypes.string,
    setText: PropTypes.func.isRequired
  }).isRequired
};

export default Editor;
