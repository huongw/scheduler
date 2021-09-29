import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import { useState } from "react";
import React from "react";

export default function Form(props) {
  const { name, interviewers, onSave, onCancel } = props;

  const [interviewer, setInterviewer] = useState(props.interviewer);

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
          />
        </form>
        <InterviewerList interviewers={interviewers} value={interviewer} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={onCancel}>Cancel</Button>
          <Button confirm onClick={onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
}