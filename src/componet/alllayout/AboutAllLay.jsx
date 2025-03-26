import AboutBanner from "../about/AboutBanner";
import AboutBig from "../about/AboutBig";
import AboutCatgory from "../about/AboutCatgory";
import AboutHero from "../about/AboutHero";
import GelatoFlavor from "../about/GelatoFlavor";
import OurArtisan from "../about/OurArtisan";


function AboutAllLay() {
   return (
      <>
         
         <AboutBanner />
         
         <AboutHero />

         <OurArtisan />

         <AboutCatgory />
         <AboutBig />
         <GelatoFlavor/>
         
      </>
   );
}

export default AboutAllLay;