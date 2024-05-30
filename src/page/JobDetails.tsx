import DevJobDetails from "../components/DevJob/DevJobDetails";
import Header from "../components/Header";

const Page = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="job_ads_container">
        <DevJobDetails />
      </main>
      <footer></footer>
    </>
  );
};

export default Page;
