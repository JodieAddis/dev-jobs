import DevJobCard from "../components/DevJob/DevJobCard";
import Header from "../components/Header";

const Page = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main>
        <div className="cards_container">
          <DevJobCard />
          <DevJobCard />
          <DevJobCard />
          <DevJobCard />
          <DevJobCard />
          <DevJobCard />
          <DevJobCard />
          <DevJobCard />
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Page;
