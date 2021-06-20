import React, { PureComponent } from 'react';

import { WorkloadListContainer } from '../WorkloadList';
import { WorkloadFormContainer } from '../WorkloadForm';
import './App.css';


class App extends PureComponent {
  render() {
    return (
      <div style={{margin: '64px 192px', color: '#001eff'}}>
        <h1>CloudWork</h1>
        <hr className="layout-color" />
        <h2>Workloads</h2>

        <div style={{display: 'flex'}}>

        <div style={{flexBasis: 0, flexGrow: 2, paddingRight: '200px'}}>
         
          <WorkloadListContainer />
        </div>
        <div style={{flexBasis: 0, flexGrow: 1}} >
          <WorkloadFormContainer />
        </div>
        {/* <hr /> */}

       
        </div>
     
      </div>
    );
  }
}

export default App;
