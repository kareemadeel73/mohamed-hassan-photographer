import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">

          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="blog-background">
        <Blog />
      </div>
      <div className="bg-soft-white">
        <Profession />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
