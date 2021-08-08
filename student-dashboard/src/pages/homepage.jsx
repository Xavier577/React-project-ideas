import Style from "../styles/pages.module.css";

const HomePage = () => {
  return (
    <main className={Style["homepage"]}>
      <div className={Style["central-text"]}>
        <h1>Hello and welcome to the student dashboard</h1>
      </div>
    </main>
  );
};

export default HomePage;
