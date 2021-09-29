import "components/InterviewerListItem.scss"
import classNames from "classnames";
import React from "react";

export default function InterviewerListItem(props) {
  const { id, name, avatar, setInterviewer, selected } = props;

  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected
  });

  return (
    <li className={interviewerClass} onClick={setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
}