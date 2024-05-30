import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import data from "../../../data/data.json";
import { BgForLogos } from "../../../utils/swtichValue";

const Component = () => {
  return (
    <>
      {data.map((job, key) => {
        return (
          <div className="company_job" key={key}>
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
            <a href="/details" className="job_location">
              {job.location}
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Component;
