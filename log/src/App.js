// import './App.css';
// // import Nav from "./compaunant/nav";
// // import Body from "./compaunant/body";
// // import Footer from "./compaunant/footer";
// import Todo from './compaunant/toDoList';

// function App() {
//   return (
//     <div>
//       <Todo />
        
//     </div>
//   );
// }

// export default App;

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./compaunant/Layout";
import Home from "./compaunant/Home";
import Blogs from "./compaunant/Blogs";
import Contact from "./compaunant/Contact";
// import NoPage from "./compaunant/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);