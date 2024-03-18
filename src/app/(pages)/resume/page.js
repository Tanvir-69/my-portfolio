import React from "react";
import "./resume.css";
import Image from "next/image";
import CvPic from "@/app/public/cvpic.jpg";

const ResumePage = () => {
  return (
    <div className="resumeMainContainer">
      <div className="resumeHeaderContainer">
        <div className="headerCon">
          <Image
            className="image"
            src={CvPic}
            alt="profile picture of resume"
          />
          <div>
            <h1 className="text-4xl uppercase text-orange-700">
              Tanvirul Hasan
            </h1>
            <span className="text-sm">Software Developer</span>
            <p className="uppercase pt-4">
              to pursue a challenging career and be part of progressive
              organization that gives scope to enhance my knowledge, skills and
              to reach the pinnacle in the computing and research field with
              sheet determination, dedication and hard-work.
            </p>
          </div>
        </div>
      </div>
      <div className="resumeSideBarContainer">sidebar</div>
      <div className="resumeMainBodyContainer">mainbody</div>
    </div>
  );
};

export default ResumePage;
