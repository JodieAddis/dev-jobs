import { BgForLogos } from "../../../utils/swtichValue";
import data from "../../../data/data.json";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import { Link, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../Button";

const Component = () => {
  let { jobId } = useParams();

  const [jobName, setJobName] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchClick = () => {
    if (searchValue === "") {
      setJobName(data);
      // Affiche toutes les données si la recherche est vide
    } else {
      const filterBySearch = data.filter((item) =>
        item.position.toLowerCase().includes(searchValue.toLowerCase())
      );
      setJobName(filterBySearch);
      // Met à jour jobName avec les données filtrées
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button content="search" onclick={handleSearchClick} css={""} />
      </div>
      {jobName.map((item, key) => {
        return (
          <Link className="company_job" key={key} to={`/${item.id}`}>
            <div
              className={`company_logo ${BgForLogos(
                item.company.toLowerCase()
              )}`}
            >
              <img
                src={item.logo}
                alt={`Logo of the company ${item.company}`}
              />
            </div>
            <div>
              <Paragraph
                content={
                  <>
                    {item.postedAt} • {item.contract}
                  </>
                }
                css="job_contract"
              />
            </div>
            <Heading kind="h2" content={item.position} css={"job_name"} />
            <Paragraph content={item.company} css="job_company_name" />
            <Paragraph content={item.location} css="job_location" />
          </Link>
        );
      })}
    </>
  );
};

export default Component;
