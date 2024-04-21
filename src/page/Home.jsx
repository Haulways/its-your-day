import Benefits from "../components/Benefits";
import EventTracking from "../components/EventTracking";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Header from "../components/Header";

export default function Home(){
    return(
        <>
          <Header />
          <Features />
          <Benefits />
          <EventTracking />
          <FAQ />
        </>
    )
}