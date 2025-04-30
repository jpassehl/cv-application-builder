import { useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/base/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import '../../styles/Form.css';

function PersonalDetails(props) {
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [phoneNumberField, setPhoneNumberField] = useState("");
  const [locationField, setLocationField] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name: nameField,
      email: emailField,
      phoneNumber: phoneNumberField,
      location: locationField,
    };
    formData["isEmpty"] = Object.values(formData).every(
      (x) => x === null || x === ""
    );
    props.handleSaveForm("Personal Details", formData);
  }

  return (
    <>
      <div className="form-details-container">
        <Accordion defaultExpanded className="accordion-container">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className="section-header">
              <PersonIcon />
              <h2>Personal Details</h2>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={handleSubmit}>
              <Box
                className="form-container"
                sx={{ display: "grid", gridTemplateColumns: "auto" }}
              >
                <FormItem
                  label="Full Name"
                  placeholder="Jacqueline Passehl"
                  value={nameField}
                  valueSetter={setNameField}
                ></FormItem>
                <FormItem
                  label="Email"
                  placeholder="jacquelinepassehl@gmail.com"
                  value={emailField}
                  valueSetter={setEmailField}
                ></FormItem>
                <FormItem
                  label="Phone Number"
                  placeholder="111-111-1111"
                  value={phoneNumberField}
                  valueSetter={setPhoneNumberField}
                ></FormItem>
                <FormItem
                  label="Location"
                  placeholder="Chicago, IL"
                  value={locationField}
                  valueSetter={setLocationField}
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

export default PersonalDetails;
