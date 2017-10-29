import  CardBoard  from './Components/cardBoard';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import Store from './store';
import './Styles/style.css';

const Wrap: React.SFC<{}> = props => {
  return (
    <Provider store={Store}>
      <CardBoard/>
    </Provider>
  );
};

ReactDOM.render(<Wrap />, document.getElementById('app'))