import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import s from './Textbox.styles.scss';

function Textbox ({ value, onChange }) {
  return (
    <div>
      <textarea
        value={value}
        onChange={onChange}
        className={s.textarea}
        placeholder="Write markdown!"
      />
    </div>
  );
}

Textbox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default observer(Textbox);
