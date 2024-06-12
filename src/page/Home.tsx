import DevJobCard from "../components/DevJob/DevJobCard";
import Layout from "../layout/Layout";

const Page = () => {
  return (
    <>
      <Layout>
        <div className="cards_container">
          <DevJobCard />
        </div>
      </Layout>
    </>
  );
};

export default Page;
