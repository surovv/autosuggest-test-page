import React from 'react';
import styles from './App.module.css';

import Autosuggest from '../Autosuggest';

const App = () => (
  <div className={styles.root}>
    <Autosuggest />

    <h1 className={styles.title}>
      website content
    </h1>
    <div className={styles.dot} />
    <div className={styles.text}>
      プリンターで作成されたドレスや磁力をデザインに取り入れたドレスなど、
      メトロポリタン美術館やパリのパレ・ド・トーキョーでも展示が行われた。
    </div>
  </div>
);

export default App;
