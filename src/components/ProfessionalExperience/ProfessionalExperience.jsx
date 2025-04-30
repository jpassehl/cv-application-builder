import * as React from "react";
import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/base/FormControl";
import Input from "@mui/material/Input";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkIcon from '@mui/icons-material/Work';
import '../../styles/Form.css';


function ProfessionalExperience(props) {
  const [jobTitleField, setjobTitleField] = React.useState("");
  const [companyField, setCompanyField] = useState("");
  const [datesField, setDatesField] = useState("");
  const [locationField, setLocationField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      jobTitle: jobTitleField,
      company: companyField,
      datesWorked: datesField,
      location: locationField,
      description:descriptionField,
    };
    formData["isEmpty"] = Object.values(formData).every(
        (x) => x === null || x === ""
      );
      props.handleSaveForm("Professional Experience", formData);
    }
      return (
        <>
          <div className="form-details-container">
          <Accordion className="accordion-container">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <div className="section-header">
                <WorkIcon />
                <h2>Professional Experience</h2>
              </div>
            </AccordionSummary>
            <AccordionDetails>
            <form onSubmit={handleSubmit}>
              <Box
                className="form-container"
                sx={{ display: "grid", gridTemplateColumns: "auto" }}
              >
                <FormItem
                  label="Job Title"
                  placeholder="Software Engineer"
                  value={jobTitleField}
                  valueSetter={setjobTitleField}
                ></FormItem>
                <FormItem
                  label="Company"
                  placeholder="Slalom Build"
                  value={companyField}
                  valueSetter={setCompanyField}
                ></FormItem>
                <FormItem
                  label="Dates Worked"
                  placeholder="Oct 2020 - present"
                  value={datesField}
                  valueSetter={setDatesField}
                ></FormItem>
                <FormItem
                  label="Location"
                  placeholder="Chicago, IL"
                  value={locationField}
                  valueSetter={setLocationField}
                ></FormItem>
                  <FormItem
                  label="Description"
                  placeholder="Job Description"
                  value={descriptionField}
                  valueSetter={setDescriptionField}
                ></FormItem>
              </Box>
              <div className="section-footer">
                <Button variant="contained" size="medium" type="submit">
                  Save
                </Button>
              </div>
            </form>
            </AccordionDetails>
          </Accordion>
          </div>
        </>
      );
  }

function FormItem({ label, placeholder, value, valueSetter }) {
    return (
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(event) => valueSetter(event.target.value)}
        />
      </FormControl>
    );
  }

export default ProfessionalExperience;
