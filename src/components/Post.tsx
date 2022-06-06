import { RiDeleteBin6Line } from "react-icons/ri";

export interface IPost {
  id?: number;
  userId?: number;
  title: string;
  body: string;
}

interface Props {
  posts: IPost[];
  handleDelete(
    id: number | undefined,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void;
}

const Post = ({ posts, handleDelete }: Props): JSX.Element => {
  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-center ">
        {posts &&
          posts.length > 0 &&
          [...posts].reverse().map((post, index) => (
            <div className=" m-2 p-6 w-96  px-10 bg-zinc-800  rounded-lg ">
              <button
                className="float-right flex  mr-0 
                text-gray-100 rounded-sm ring-2 ring-purple-400 px-3 py-2 
                hover:bg-gray-200  hover:text-black hover:ring-slate-300 mx-8 shadow-lg "
                onClick={(e) => handleDelete(post.id, e)}
              >
                <RiDeleteBin6Line />
              </button>
              <ul key={index}>
                <li>
                  <h1 className="text-xl font-bold">{post.title}</h1>
                  <p className="text-sm mt-4">{post.body}</p>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </>
  );
};

export default Post;
