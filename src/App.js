import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import UnderGrad from "./Components/UnderGrad/UnderGrad";
import PTE from "./Components/PTE/PTE";
import IELTS from "./Components/IELTS/IELTS";
import Articles from "./Components/Articles/Articles";
import Blog from "./Components/Blog/Blog";
import StudentGuide from "./Components/StudentGuide/StudentGuide";
import Scholarship from "./Components/Scholarship/Scholarship";
import Scholars from "./Components/Scholars/Scholars";
import USA from "./Components/Schools/USA/USA";
import HowToApply from "./Components/UnderGrad/HowToApply/HowToApply";
import ProgramType from "./Components/ProgramType/ProgramType";
import About from './Components/About/About.js';

// import { CommentAction } from "semantic-ui-react";
import Contact from "./Components/contact/Contact";
import UK from "./Components/Schools/UK/UK";
import Newzeeland from "./Components/Schools/Newzeeland/Newzeeland";
import Australia from "./Components/Schools/Australia/Australia";
import CANADA from "./Components/Schools/CANADA/CANADA";
import ASIA from "./Components/Schools/ASIA/ASIA";
import Documents from "./Components/Documents/Documents";
import Test from "./Components/Test";
import Materials from "./Components/Materials/Materials";

function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setisOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div>
      <BrowserRouter>
        <Navbar toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/programtype" component={ProgramType} />
          <Route exact path="/undergrad" component={UnderGrad} />
          <Route exact path="/usa" component={USA} />
          <Route exact path="/uk" component={UK} />
          <Route exact path="/newzeeland" component={Newzeeland} />
          <Route exact path="/canada" component={CANADA} />
          <Route exact path="/asia" component={ASIA} />
          <Route exact path="/australia" component={Australia} />
          <Route exact path="/how-to-apply" component={HowToApply} />
          <Route exact path="/documents" component={Documents} />
          <Route exact path="/pte" component={PTE} />
          <Route exact path="/about" component={About} />
          <Route exact path="/ielts" component={IELTS} />
          <Route exact path="/articles" component={Articles}/>
          <Route exact path="/blogs" component={Blog}/>
          <Route exact path="/student-guide" component={StudentGuide}/>
          <Route exact path="/scholarship" component={Articles}/>
          <Route exact path="/scholar" component={Scholars}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/materials" component={Materials}/>
          <Route exact path="/scholarships" component={Scholarship}/>
          <Route exact path="/test" component={Test}/>
          
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
