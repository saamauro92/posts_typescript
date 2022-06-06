import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import Form from "./Form";
import ErrorBox from "./ErrorBox";
import Loading from "./Loading";

export interface IPost {
  id?: number;
  userId?: number;
  title: string;
  body: string;
}

export interface IForm {
  title: string;
  body: string;
}

const Main = (): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [error, setError]: [string, (error: string) => void] = useState("");
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [form, setForm] = useState<IForm>({
    title: "",
    body: "",
  });

  useEffect(() => {
    /*  FETCHING DATA */
    axios
      .get<IPost[]>("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  /*  DELETE POST */
  const handleDelete = (
    id: number | undefined,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (window.confirm("Are you sure you wish to delete this post?")) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "DELETE",
        })
        .then(() => setPosts(posts.filter((post) => post.id !== id)));
    }
  };

  /* CREATE POST */
  const inputTitleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({ ...form, title: e.currentTarget.value });
  };
  const inputBodyOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, body: e.currentTarget.value });
  };

  const handleCreatePost: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (form.body.length === 0 && form.title.length === 0)
      return alert("please complete all inputs");
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: form.title,
        body: form.body,
        userId: 1,
      })
      .then((response) => setPosts(posts.concat(response.data)));
    setForm({ title: "", body: "" });
  };
  return (
    <>
      <Form
        titleValue={form.title}
        bodyValue={form.body}
        handleCreatePost={handleCreatePost}
        inputTitleOnChange={inputTitleOnChange}
        inputBodyOnChange={inputBodyOnChange}
      />
      <ErrorBox error={error} />
      <Loading loading={loading} />
      <Post posts={posts} handleDelete={handleDelete} />
    </>
  );
};

export default Main;
