import "./App.css";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";
import Footer from "./components/Footer";

import geoImg from "./assets/img/GOPR2429.jpg";
import Pic from "./assets/img/image2.jpeg";
import milfordImg from "./assets/img/milfordTrack.jpg";

function App(props) {
  return (
    <>
      <Header />
      <NavigationMenu />
      <Content
        classNameMain="mainContent"
        title="Fiordland"
        subtitle="The Dusky Track "
        picture={Pic}
        description="Is the Dusky Track the hardest trail in New Zealand? Good question. For some, that’s enough to get them to go and for others, it’s enough to stop them.
         You can’t really go much further south on the South Island of New Zealand than the Dusky Track. It is set deep in Fiordland, further south than its famous neighbour, the Milford Track, the Dusky Track is hardly even known by New Zealanders. So remote you have to either boat or fly into the trailhead."
        classNameSide="sidecontent"
        titleSide="About Me"
        pictureSide={geoImg}
        descriptionSide="I’ve been extensively hiking over 3 continents, where I demonstrated my capability to adapt myself and apply my bush skill."
      />
      <Content
        classNameMain="mainContent"
        title="Fiordland"
        subtitle="Milford Track"
        picture={milfordImg}
        description="Around 100 years ago, in an article that appeared in the London Spectator, the poet Blanche Baughan declared the Milford Track to be the finest walk in the world. 
        Arguably New Zealand’s most famous walk, the 53 kilometre journey begins at the head of Lake Te Anau, and leads you across suspension bridges, board walks and a mountain pass."
      />
      <Footer />
    </>
  );
}

export default App;
