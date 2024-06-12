import Button from "../../Button";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import { useParams } from "react-router-dom";
import dataJob from "../../../data/data.json";

const Component = () => {
  const { jobId } = useParams();
  const jobIdNum = Number(jobId); //conversion en nombre de l'id string
  const job = dataJob.find((job) => job.id === jobIdNum);

  if (!job) {
    return <div>Offre d'emploi non trouvée</div>;
  }
  return (
    <>
      <section className="content_job_page">
        <div className="job_page_content">
          <Paragraph
            content={
              <>
                {job.postedAt} • {job.contract}
              </>
            }
            css="content_contract_details"
          />
          <Heading kind="h2" content={job.position} css="content_job_name" />
          <Paragraph content={job.location} css="content_job_location" />
          <Button
            content={
              <>
                <a href={job.apply}>apply now</a>
              </>
            }
            onclick={() => {}}
            css="content_job_button"
          />
        </div>
        <div>
          <div>
            <Paragraph content={job.description} css="job_text_elem" />
          </div>
          <div>
            <Heading kind="h3" content="requirements" css="job_heading_elem" />
            <Paragraph content={job.requirements.content} css="job_text_elem" />
            <Paragraph content={job.requirements.items} css="job_text_elem" />
          </div>
          <div>
            <Heading
              kind="h3"
              content="what you will do"
              css="job_heading_elem"
            />
            <Paragraph content={job.role.content} css="job_text_elem" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Component;
