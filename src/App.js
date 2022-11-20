import { Routes, Route } from "react-router-dom";

// IMPORTING REDUX PROVIDER AND STORE
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Explore from "./pages/Explore/Explore";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import Blogs from "./pages/Blogs/Blogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import FAQs from "./pages/FAQs/FAQs";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { profileApi } from "./redux/profile/actions";

function App({ profileApi }) {
  const navigate = useNavigate();

  useEffect(() => {
    profileApi(navigate);
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/leader-board" element={<LeaderBoard />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/faqs" element={<FAQs />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

const mapDispatchtoProps = (dispatch) => {
  return {
    profileApi: function (navigate) {
      dispatch(profileApi(navigate));
    },
  };
};

export default connect(null, mapDispatchtoProps)(App);
