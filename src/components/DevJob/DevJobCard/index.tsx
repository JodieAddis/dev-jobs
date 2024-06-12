import { BgForLogos } from "../../../utils/swtichValue";
import data from "../../../data/data.json";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import { Link, useParams } from "react-router-dom";

const Component = () => {
  let { jobId } = useParams();
  return (
    <>
      {data.map((job, key) => {
        return (
          <Link className="company_job" key={key} to={`/${job.id}`}>
            <div
              className={`company_logo ${BgForLogos(
                job.company.toLowerCase()
              )}`}
            >
              <img src={job.logo} alt={`Logo of the company ${job.company}`} />
            </div>
            <div>
              <Paragraph
                content={
                  <>
                    {job.postedAt} • {job.contract}
                  </>
                }
                css="job_contract"
              />
            </div>
            <Heading kind="h2" content={job.position} css={"job_name"} />
            <Paragraph content={job.company} css="job_company_name" />
            <Paragraph content={job.location} css="job_location" />
          </Link>
        );
      })}
    </>
  );
};

export default Component;
