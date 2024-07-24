import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SvgIcon from '@mui/material/SvgIcon';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import "./FormAccordion.css";

function FormAccordion(headerIcon, headerName, formData) {

    return (
        <>
            <div className="form-container-2">
                <Accordion className="accordion-container-2">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <div className="section-header">
                            {renderHeaderIcon(headerIcon)}
                            <h2>{headerName}</h2>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        {formData}
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}

const renderHeaderIcon = (iconName) => {
    switch (iconName) {
        case "Personal Details":
            return <SvgIcon component={PersonIcon} />
        case "Education":
            return <SvgIcon component={SchoolIcon} />
        default:
            return <SvgIcon component={InfoIcon} />;
    }
};

export default FormAccordion;
