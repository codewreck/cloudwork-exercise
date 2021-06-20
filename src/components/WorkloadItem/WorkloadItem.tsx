import moment from "moment";
import React  from "react";

import TimeAgo from "react-timeago";
import { Status } from "../../state/workloads";

export interface WorkloadItemStateProps {
  id: number;
  complexity: number;
  status: Status;
  completeDate: Date;
}

export interface WorkloadItemMethodProps {
  onCancel: () => void;
  onUpdate: () => void
}


export interface WorkloadItemProps
  extends WorkloadItemStateProps,
    WorkloadItemMethodProps {}

const WorkloadItem: React.SFC<WorkloadItemProps> = (props) => {

  const timeOut =
    parseInt(moment(props.completeDate).format("x")) -
    parseInt(moment().format("x"));

 const number = setTimeout(() => {
    if(props.status === 'WORKING')
    props.onUpdate()
    // updateStatus
  }, timeOut);

  
  return (
    <div className="WorkloadItem" style={{display: 'flex',justifyContent: 'space-between', alignItems: 'center', }}>
      <div>
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Workload #{props.id}</div>
        <span className="WorkloadItem-subHeading">
          Complexity: {props.complexity}
        </span>
       
        {/* <span className="WorkloadItem-subHeading">Status: </span> */}
      </div>
      <div>
        {props.status === "WORKING" ? (
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{paddingRight: '3px'}}>
              <TimeAgo date={props.completeDate} />
            </div>
            <button
              className="WorkloadItem-secondaryButton"
              onClick={() => {
                clearTimeout(number);
                props.onCancel()
              }}
              style={{ backgroundColor: '#D6C0FF', color: 'white', cursor: 'pointer',  borderColor: '#f1f1f1', padding: '8px'}}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div
          style={{
            maxWidth: "60px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#d0d0d0",
            fontSize: "10px",
            borderRadius: "8px",
            padding: "2px 6px",
          }}
        >
          {props.status}
        </div>
        )}
      </div>
    </div>
  );
};







export { WorkloadItem };

export default WorkloadItem;
