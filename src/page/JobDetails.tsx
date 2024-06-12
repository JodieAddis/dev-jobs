import DevJobDetails from "../components/DevJob/DevJobDetails";
import Layout from "../layout/Layout";

const Page = () => {
  return (
    <>
      <Layout>
        <div className="job_ads_container">
          <DevJobDetails />
        </div>
      </Layout>
    </>
  );
};

export default Page;
