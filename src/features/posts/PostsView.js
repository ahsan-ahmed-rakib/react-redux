import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

const PostsView = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, errors } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <p>Loading...</p>}
      {posts.length > 0 &&
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        ))}
      {errors && <p style={{ color: "red" }}>{errors}</p>}
    </div>
  );
};

export default PostsView;
