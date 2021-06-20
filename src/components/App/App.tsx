import React, { PureComponent } from 'react';

import { WorkloadListContainer } from '../WorkloadList';
import { WorkloadFormContainer } from '../WorkloadForm';
import './App.css';


class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>CloudWork</h1>
        <hr />
        <div style={{display: 'flex'}}>


        <div style={{flexBasis: 0, flexGrow: 1}} >
          <WorkloadFormContainer />
        </div>
        {/* <hr /> */}

        <div style={{flexBasis: 0, flexGrow: 1}}>
          <h2>Workloads</h2>
          <WorkloadListContainer />
        </div>
        </div>
     
      </div>
    );
  }
}

export default App;
