import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import Button from "../../Button";

const Component = () => {
  return (
    <>
      <section className="heading_job_page">
        <div className="job_page_company_logo">logo</div>
        <div className="job_page_company_details">
          <Heading kind="h2" content="scoot" css="company_details_name" />
          <Paragraph content="scoot.com" css="company_details_site" />
          <Button
            content={
              <>
                <a href="#" className="button_site">
                  company site
                </a>
              </>
            }
            onclick={() => {}}
            css="company_details_button"
          />
        </div>
      </section>
      <section className="content_job_page">
        <div className="job_page_content">
          <Paragraph
            content="1w ago Part Time"
            css="content_contract_details"
          />
          <Heading
            kind="h2"
            content="senior software engineer"
            css="content_job_name"
          />
          <Paragraph
            content={
              <>
                <a href="#" className="content_job_location">
                  united kingdom
                </a>
              </>
            }
            css=""
          />
          <Button
            content={
              <>
                <a href="#">apply now</a>
              </>
            }
            onclick={() => {}}
            css="content_job_button"
          />
        </div>
        <div>
          <div>
            <Paragraph content={undefined} css="" />
          </div>
          <div>
            <Heading kind="h3" content="requirements" css="" />
            <Paragraph content="" css="" />
          </div>
          <div>
            <Heading kind="h3" content="" css="" />
            <Paragraph content="what you will do" css="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Component;
