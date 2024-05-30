import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import Button from "../../Button";
import data from "../../../data/data.json";
import { BgForLogos } from "../../../utils/swtichValue";

const Component = () => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <section className="heading_job_page" key={index}>
            <div
              className={`job_page_company_logo ${BgForLogos(
                item.company.toLowerCase()
              )}`}
            >
              <img
                src={item.logo}
                alt={`Logo of the company ${item.company}`}
              />
            </div>
            <div className="job_page_company_details">
              <Heading
                kind="h2"
                content={item.company}
                css="company_details_name"
              />
              <Paragraph content="scoot.com" css="company_details_site" />
              <Button
                content={
                  <>
                    <a
                      href={item.website}
                      className="button_site"
                      target="_blank"
                    >
                      company site
                    </a>
                  </>
                }
                onclick={() => {}}
                css="company_details_button"
              />
            </div>
          </section>
        );
      })}
      {data.map((item, index) => {
        return (
          <section className="content_job_page" key={index}>
            <div className="job_page_content">
              <Paragraph
                content={
                  <>
                    {item.postedAt} • {item.contract}
                  </>
                }
                css="content_contract_details"
              />
              <Heading
                kind="h2"
                content={item.position}
                css="content_job_name"
              />
              <Paragraph content={item.location} css="content_job_location" />
              <Button
                content={
                  <>
                    <a href={item.apply}>apply now</a>
                  </>
                }
                onclick={() => {}}
                css="content_job_button"
              />
            </div>
            <div>
              <div>
                <Paragraph content={item.description} css="job_text_elem" />
              </div>
              <div>
                <Heading
                  kind="h3"
                  content="requirements"
                  css="job_heading_elem"
                />
                <Paragraph
                  content={item.requirements.content}
                  css="job_text_elem"
                />
                <Paragraph
                  content={item.requirements.items}
                  css="job_text_elem"
                />
              </div>
              <div>
                <Heading
                  kind="h3"
                  content="what you will do"
                  css="job_heading_elem"
                />
                <Paragraph content={item.role.content} css="job_text_elem" />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Component;
