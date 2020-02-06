import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import S from './Loader.module.css';

export default class App extends React.Component {
  // other logic
  state = {};

  render() {
    return (
      <div className={S.section}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          // timeout={3000} // 3 secs
        />
      </div>
    );
  }
}
