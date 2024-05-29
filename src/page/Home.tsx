import DevJobCard from "../components/DevJob/DevJobCard";
import Header from "../components/Header";

const Page = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="job_ads_container">
        <DevJobCard />
        <DevJobCard />
      </main>
      <footer></footer>
    </>
  );
};

export default Page;
