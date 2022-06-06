import React, { FormEventHandler } from "react";

interface Props {
  titleValue: string;
  bodyValue: string;
  handleCreatePost: FormEventHandler<HTMLFormElement>;
  inputTitleOnChange: (e: React.FormEvent<HTMLInputElement>) => void;
  inputBodyOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Form = ({
  titleValue,
  bodyValue,
  handleCreatePost,
  inputTitleOnChange,
  inputBodyOnChange,
}: Props): JSX.Element => {
  return (
    <>
      <div className="py-10 px-10 bg-zinc-800 mx-auto rounded mb-6 desktop:w-1/3 ">
        <form
          className="container mx-auto flex flex-col w-auto"
          action="
      "
          onSubmit={handleCreatePost}
        >
          <input
            type="text"
            placeholder="Write a title"
            value={titleValue}
            onChange={(e) => inputTitleOnChange(e)}
            className="border py-2 px-3 text-black"
          />
          <textarea
            placeholder="Write a body"
            value={bodyValue}
            onChange={(e) => inputBodyOnChange(e)}
            className="border py-2 px-3 mt-4 text-black"
          />

          <button
            type="submit"
            className=" mt-4  uppercase text-lg  p-2 justify-center bg-gradient-to-r from-indigo-600 to-pink-500 text-gray-100 rounded-sm ring-2 ring-purple-400 px-6 py-2
            hover:bg-white  hover:text-white hover:ring-slate-300  shadow-lg
            "
          >
            POST
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
