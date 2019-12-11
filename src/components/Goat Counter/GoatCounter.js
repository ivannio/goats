import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

class GoatCounter extends React.Component {
  // eslint-disable-next-line react/no-typos
  static PropTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  getGoatCount = () => {
    const { goats } = this.props;
    return goats.filter((g) => !g.isBusy).length;
  }

  render() {
    return (
    <h1>{this.getGoatCount()} Goats available</h1>
    );
  }
}

export default GoatCounter;
