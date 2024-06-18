import { BgForLogos } from "../../../utils/swtichValue";
import data from "../../../data/data.json";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import FilterDesktop from "../../Filter/FilterDesktop";
import IconFilter from "../../../icons/IconFilter";

const Component = () => {
  let { jobId } = useParams();

  const [devJob, setDevJob] = useState(data);

  // const handleSearchSubmit = (searchValue: string) => {
  //   if (searchValue === "") {
  //     setJobName(data);
  //     // Affiche toutes les données si la recherche est vide
  //   } else {
  //     const filterByJob = data.filter((item) =>
  //       item.position.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //     const filterByLocation = data.filter((item) =>
  //       item.location.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //     // Met à jour jobName avec les données filtrées
  //     setJobName(filterByJob);
  //     setLocation(filterByLocation);
  //   }
  // };

  const handleSearchSubmit = (
    searchPosition: string,
    searchLocation: string
  ) => {
    // Filtrer par position
    let filteredData = data.filter((item) =>
      item.position.toLowerCase().includes(searchPosition.toLowerCase())
    );
    // Filtrer à nouveau par location si searchLocation n'est pas vide
    if (searchLocation !== "") {
      filteredData = filteredData.filter((item) =>
        item.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }
    // Mettre à jour jobName avec les données filtrées
    setDevJob(filteredData);
  };

  return (
    <>
      <div className="filter_container">
        <FilterDesktop
          onSearch={handleSearchSubmit}
          iconSearch={<IconFilter kind="search" />}
          iconLocation={<IconFilter kind="location" />}
        />
      </div>
      {devJob.map((item, key) => {
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
