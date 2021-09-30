import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import "components/Appointment/styles.scss";
import React from "react";

export default function Appointment(props) {
  const { time, interview } = props;

  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? <Show student={interview.student} interviewer={interview.interviewer} /> : <Empty />}
    </article>
  );
}