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

  setTimeout(() => {
    if(props.status === 'WORKING')
    props.onUpdate()
    // updateStatus
  }, timeOut);
  return (
    <div className="WorkloadItem">
      <div>
        <h3 className="WorkloadItem-heading">Workload #{props.id}</h3>
        <span className="WorkloadItem-subHeading">
          Complexity: {props.complexity}
        </span>
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
        {/* <span className="WorkloadItem-subHeading">Status: </span> */}
      </div>
      <div>
        {props.status === "WORKING" ? (
          <>
            <div>
              <TimeAgo date={props.completeDate} />
            </div>
            <button
              className="WorkloadItem-secondaryButton"
              onClick={props.onCancel}
            >
              Cancel
            </button>
          </>
        ) : (
          <span className="WorkloadItem-statusText">
            {props.status.toLowerCase()}
          </span>
        )}
      </div>
    </div>
  );
};







export { WorkloadItem };

export default WorkloadItem;
