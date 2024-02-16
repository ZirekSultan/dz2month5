import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate()

  const postTitle = async () => {
    try {
        const resp = await axios.post("https://dummyjson.com/posts/add", {title: title, userId: 1}, {headers: {
            "Content-Type": "application/json"
        }})
        const data = resp.data
        console.log(data, resp);
        navigate("/")
    } catch (e) {
        console.log(e);
    }
  }

  return (
    <div>
      <Link to={"/"}>posts</Link>
      <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
      <button onClick={postTitle}>post</button>
    </div>
  );
}
