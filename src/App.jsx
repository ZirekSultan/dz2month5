import { Routes, Route } from "react-router-dom";
import "./App.css";
import PostsPage from "./pages/PostsPage";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostsPage/>}/>
        <Route path="/create" element={<CreatePost/>}/>
      </Routes>
    </div>
  );
}

export default App;
