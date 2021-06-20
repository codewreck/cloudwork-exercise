import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootAction, RootState } from '../../state';
import { cancel, updateStatus } from '../../state/workloads/actions';
import { WorkloadItem, WorkloadItemStateProps } from '../WorkloadItem';
import { Status } from '../../state/workloads';


export interface WorkloadListStateProps {
  workloads: WorkloadItemStateProps[];
}

export interface WorkloadListDispatchProps {
  cancelWorkload: (id: number) => void;
  update: (id:number, status: Status) => void;
}

export interface WorkloadListProps extends 
  WorkloadListStateProps,
  WorkloadListDispatchProps {}


const WorkloadList: React.SFC<WorkloadListProps> = ({ workloads, cancelWorkload, update }) => (
  !workloads.length 
    ? (
      <span>No workloads to display</span>
    )
  : (
    <ol>
      {workloads.map((workload) => (
        <li key={workload.id}>
          <WorkloadItem {...workload} onCancel={() => cancelWorkload(workload.id)} onUpdate={() => update(workload.id, workload.id % 2
      ? 'FAILURE'
      : 'SUCCESS')} />
        </li>
      ))}
    </ol>
  )
);


const mapStateToProps = (state: RootState): WorkloadListStateProps => ({
  workloads: Object.values(state.workloads),
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): WorkloadListDispatchProps => ({
  cancelWorkload: (id: number) => dispatch(cancel({ id })),
  update: (id: number, status: Status) => dispatch(updateStatus( {id, status} ))
}) 

const WorkloadListContainer = connect(mapStateToProps, mapDispatchToProps)(WorkloadList);


export {
  WorkloadList,
  WorkloadListContainer,
};

export default WorkloadList;
