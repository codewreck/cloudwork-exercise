import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { created, submit } from '../../state/workloads/actions';
import { Status } from '../../state/workloads';
import moment from 'moment';
import {  WorkloadItemStateProps } from '../WorkloadItem';
import {  RootState } from '../../state';

interface WorkloadFormDispatchProps {
  submitWorkload: (complexity: number) => void,
  createWorkload: (id: number, status: Status, complexity: number, completeDate: Date) => void

}

export interface WorkloadFormStateProps {
  workloads: WorkloadItemStateProps[];

}

interface WorkloadFormProps extends 
WorkloadFormStateProps,
  WorkloadFormDispatchProps {}

interface WorkloadFormState {
  complexity: number;
}

class WorkloadForm extends React.PureComponent<WorkloadFormProps, WorkloadFormState> {
  defaultState = {
    complexity: 5,
  }

  state = this.defaultState;

  handleSubmit = (e: React.MouseEvent) => {
    this.props.submitWorkload(this.state.complexity);
    this.setState(this.defaultState);
    e.preventDefault();
  }

  handleCreate =(e: React.MouseEvent) => {
    this.props.createWorkload(this.props.workloads.length + 1,  'WORKING', this.state.complexity,  moment().add(this.state.complexity, 'second').toDate());
    this.setState(this.defaultState);
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <h2>Create workload</h2>
        
        <div>
          <label>
            Complexity: {this.state.complexity}
            <br />
            <input 
              value={this.state.complexity} 
              onChange={(e) => this.setState({ complexity: Number(e.target.value) })} 
              type="range" 
              min="1" 
              max="10" 
            />
          </label>
        </div>

        <div>
          {/* <button onClick={this.handleSubmit} type="submit">Start work</button> */}
          <button onClick={this.handleCreate} type="submit">Start work</button>
        </div>
      </form>
    );
  }
}


const mapStateToProps = (state: RootState): WorkloadFormStateProps => ({
  workloads: Object.values(state.workloads),
});

const mapDispatchToProps = (dispatch: Dispatch): WorkloadFormDispatchProps => ({
  submitWorkload: (complexity: number) => dispatch(submit({ complexity })),
  createWorkload: (id: number, status: Status, complexity: number, completeDate: Date ) => dispatch(created({id, status, complexity, completeDate}))
});

const WorkloadFormContainer = connect(mapStateToProps, mapDispatchToProps)(WorkloadForm);


export {
  WorkloadForm,
  WorkloadFormContainer,
}

export default WorkloadForm;