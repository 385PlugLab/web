import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'free delivery'}
        subtitle={'on orders over *50'}
      />
      <Attribute
        icon={'cycle'}
        title={'Rank-Up'}
        subtitle={'for Recruiting Plugs'}
      />
      <Attribute
        icon={'creditcard'}
        title={'payment portal'}
        subtitle={'Credit/Debit Card, Venmo, PayPal, CashApp'}
      />
    </div>
  );
};

export default AttributeGrid;
