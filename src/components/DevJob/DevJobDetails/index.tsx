import { BgForLogos } from "../../../utils/swtichValue";
import Button from "../../Button";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  return (
    <>
      <section className="content_job_page">
        <div className="job_page_content">
          <Paragraph
            content={
              <>
                {id.postedAt} • {id.contract}
              </>
            }
            css="content_contract_details"
          />
          <Heading kind="h2" content={id.position} css="content_job_name" />
          <Paragraph content={id.location} css="content_job_location" />
          <Button
            content={
              <>
                <a href={id.apply}>apply now</a>
              </>
            }
            onclick={() => {}}
            css="content_job_button"
          />
        </div>
        <div>
          <div>
            <Paragraph content={id.description} css="job_text_elem" />
          </div>
          <div>
            <Heading kind="h3" content="requirements" css="job_heading_elem" />
            <Paragraph content={id.requirements.content} css="job_text_elem" />
            <Paragraph content={id.requirements.items} css="job_text_elem" />
          </div>
          <div>
            <Heading
              kind="h3"
              content="what you will do"
              css="job_heading_elem"
            />
            <Paragraph content={id.role.content} css="job_text_elem" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Component;
