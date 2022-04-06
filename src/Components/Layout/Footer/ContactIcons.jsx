import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";

const StyledGitHub = styled(GitHubIcon)`
  color: rgb(135, 135, 135) !important;

  & :hover {
    color: #8a2b06 !important;
  }
`;

const StyledLinkedIn = styled(LinkedInIcon)`
  color: rgb(135, 135, 135) !important;

  & :hover {
    color: #8a2b06 !important;
  }
`;

const StyledInsta = styled(InstagramIcon)`
  color: rgb(135, 135, 135) !important;

  & :hover {
    color: #8a2b06 !important;
  }
`;

function ContactIcons() {
  return (
    <div>
      <Link href="https://github.com/Arzzam" target="_blank">
        <StyledGitHub className="icons" />
      </Link>
      <Link href="https://www.linkedin.com/in/arzzam19/" target="_blank">
        <StyledLinkedIn className="icons" />
      </Link>
      <Link href="https://www.instagram.com/arzzam_19/" target="_blank">
        <StyledInsta className="icons" />
      </Link>
    </div>
  );
}

export default ContactIcons;
