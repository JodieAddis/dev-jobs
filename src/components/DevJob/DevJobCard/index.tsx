import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  return (
    <>
      <div className="company_job">
        <div className="company_logo">logo</div>
        <div>
          <Paragraph content="5h ago * Full Time" css="job_contract" />
        </div>
        <Heading
          kind="h2"
          content="senior software engineer"
          css={"job_name"}
        />
        <Paragraph content="Scoot" css="job_company_name" />
        <a href="/details" className="job_location">
          United Kingdom
        </a>
      </div>
    </>
  );
};

export default Component;
