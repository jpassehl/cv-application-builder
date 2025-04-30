import "./Resume.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

function Resume({ formMap }) {
  const personalDetails = formMap.get("Personal Details")
    ? formMap.get("Personal Details")
    : "";
  const educationDetails = formMap.get("Education")
    ? formMap.get("Education")
    : "";
    const professionalExperience = formMap.get("Professional Experience")
    ? formMap.get("Professional Experience")
    : "";

  return (
    <>
      <div className="resume-container">
        <div className="resume-header">
          <PersonalDetailsSection sectionData={personalDetails} />
          <EducationDetailsSection sectionData={educationDetails} />
          <ProfessionalExperienceSection sectionData={professionalExperience} />
        </div>
      </div>
    </>
  );
}

function PersonalDetailsSection({ sectionData }) {
  if (sectionData && !sectionData.isEmpty) {
    return (
      <section>
        <div className="personal-info-section">
          <Grid container spacing={2} minHeight={160}>
            <Grid xs display="flex" justifyContent="center" alignItems="center">
              <Box
                sx={{
                  width: "100%",
                  alignSelf: "flex-start",
                  padding: "16px",
                  bgcolor: "#a4003f",
                  color: "white",
                }}
              >
                {sectionData.name && (
                  <h1 className="resume-name">{sectionData.name}</h1>
                )}
                <div className="contact-info-section">
                  {sectionData.email && (
                    <>
                      <EmailIcon fontSize="small" className="header-icon" />
                      <span>{sectionData.email}</span>
                    </>
                  )}
                  {sectionData.phoneNumber && (
                    <>
                      <PhoneIcon fontSize="small" className="header-icon" />
                      <span>{sectionData.phoneNumber}</span>
                    </>
                  )}
                  {sectionData.location && (
                    <>
                      <PlaceIcon fontSize="small" className="header-icon" />
                      <span>{sectionData.location}</span>
                    </>
                  )}
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

function EducationDetailsSection({ sectionData }) {
  if (sectionData && !sectionData.isEmpty) {
    return (
      <section>
        <div className="education-info-section">
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              bgcolor: "#FFEBEE",
              marginBottom: "13px",
              color: "#a4003f",
            }}
          >
            <h3> Education</h3>
          </Box>
          <div className="section-items-container">
            <div className="section-items-info-group">
              {sectionData.datesAttended && <span>{sectionData.datesAttended}</span>}
              {sectionData.location && <span>{sectionData.location}</span>}
            </div>
            <div className="section-items-info-group">
              {sectionData.school && (
                <span className="info-header">{sectionData.school}</span>
              )}
              {sectionData.fieldOfStudy && <span>{sectionData.fieldOfStudy}</span>}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function ProfessionalExperienceSection({ sectionData }) {
  if (sectionData && !sectionData.isEmpty) {
    return (
      <section>
        <div className="professional-experience-section">
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              bgcolor: "#FFEBEE",
              marginBottom: "13px",
              color: "#a4003f",
            }}
          >
            <h3> Professional Experience </h3>
          </Box>
          <div className="section-items-container">
            <div className="section-items-info-group">
              {sectionData.datesWorked && <span>{sectionData.datesWorked}</span>}
              {sectionData.location && <span>{sectionData.location}</span>}
            </div>
            <div className="section-items-info-group">
              {sectionData.company && (
                <span className="info-header">{sectionData.company}</span>
              )}
              {sectionData.jobTitle && <span>{sectionData.jobTitle}</span>}
              {sectionData.description && <span style={{ marginTop: "4px" }}>{sectionData.description}</span>}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
