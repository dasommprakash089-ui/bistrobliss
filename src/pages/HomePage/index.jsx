import HomeComponent from "../../Components/HomeComponent/FirstHome";
import SecondHero from "../../Components/HomeComponent/SecondHome";
import ThirdHero from "../../Components/HomeComponent/ThirdHome";
import FourthHero from "../../Components/HomeComponent/FourthHome";
import FifthHero from "../../Components/HomeComponent/FifthHome";
import SixthHero from "../../Components/HomeComponent/SixthHome";

const HomePage = () => {
  return (
    <>
      <HomeComponent />
      <SecondHero />
      <ThirdHero />
      <FourthHero />
      <FifthHero />
      <SixthHero />
    </>
  );
};

export default HomePage;