import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";
import propTypes from "prop-types";
import React from "react";

export default function InterviewerList(props) {

  const { interviewers } = props;

  const interviewerList = interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
      />
    )
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerList}
      </ul>
    </section>
  )
}

InterviewerList.propTypes = {
  interviewers: propTypes.array.isRequired
}