import * as React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import { FormControl } from "@mui/base/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import "./Education.css";
import SchoolIcon from '@mui/icons-material/School';

function Education(props) {

  const [studyField, setStudyField] = useState('');
  const [schoolField, setSchoolField] = useState('');
  const [datesField, setDatesField] = useState('');
  const [locationField, setLocationField] = useState('');

  function handleSubmit (event){
    event.preventDefault();
    const formMap = new Map();

    const formData = {
      study: studyField,
      school: schoolField,
      datesAttended: datesField,
      location: locationField,
    };
    formMap.set('Education',formData);
    props.handleSaveForm(formMap);
  }

  return (
    <>
      <div className="education-details-container">
      <div className="section-header">
        <SchoolIcon />
        <h2>Education</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Box
          className="form-container"
          sx={{ display: "grid", gridTemplateColumns: "auto" }}
        >
          <FormItem label="Field of Study" placeholder="Computer Science" value={studyField} valueSetter={setStudyField}></FormItem>
          <FormItem label="School Name" placeholder="Depaul University" value={schoolField} valueSetter={setSchoolField} ></FormItem>
          <FormItem label="Dates Attended" placeholder="Sept 2013 - June 2017" value={datesField} valueSetter={setDatesField} ></FormItem>
          <FormItem label="Location" placeholder="Chicago, IL" value={locationField} valueSetter={setLocationField}></FormItem>
        </Box>
        <div className="section-footer">
        <Button variant="contained" size="medium" type="submit">
          Save
        </Button>
        </div>
        </form>
      </div>
    </>
  );
}

function FormItem({ label, placeholder, value, valueSetter }) {
  return (
    <FormControl variant="standard">
      <InputLabel>{label}</InputLabel>
      <Input placeholder={placeholder} value={value} onChange={(event) => valueSetter(event.target.value)} />
    </FormControl>
  );
}

export default Education;
