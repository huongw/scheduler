import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import "components/Appointment/styles.scss";
import useVisualMode from "hooks/useVisualMode";
import React from "react";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { time, interview } = props;

  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  const onAdd = function () {
    transition(CREATE)
  }

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={onAdd} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
        />
      )}
      {mode === CREATE && <Form interviewers={[]} onCancel={back} />}

    </article>
  );
}