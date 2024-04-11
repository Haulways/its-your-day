import Benefits from "../components/Benefits";
import EventTracking from "../components/EventTracking";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home(){
    return(
        <>
          <Header />
          <Features />
          <Benefits />
          <EventTracking />
          <Footer />
        </>
    )
}