"use client";
import { useRef, useState } from "react";
import { Tweet } from "react-tweet";
import tweetsData from './GCRClassic.json'; // Import statement for JSON file

export default function Home() {
  // create a ref to store the textInput DOM element
  const textInput = useRef(null);
  const [tweetId, setTweetId] = useState("");
  const [tweetUrl, setTweetUrl] = useState("");

  const onsubmit = (value: string) => {
    if (value) {
      // check is url or id
      if (value.includes("https://twitter.com")) {
        // get the id
        const id = value.split("/")[5];
        setTweetId(id);
      } else {
        setTweetId(value);
      }
    }
  };

  return (
    <main className="flex h-screen flex-col items-center relative w-screen  justify-between p-10">
      <div>
        <TwitterXSvg styles="w-24 fill-white" />
      </div>
      <div className="flex flex-col  gap-10 xl:gap-0 xl:flex-row min-h-screen xl:min-w-[80%] xl:max-h-[50rem]">
        <div className="h-full  xl:w-1/2 flex items-center xl:items-start justify-center">
          <div className="flex flex-col items-center xl:items-start gap-4 w-full">
            <div className="flex flex-col w-full  items-center  xl:items-start  justify-center">
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Find Your Tweet{" "}
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  (URL or Tweet Id)
                </span>
              </label>
              <div className="flex w-9/12">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <TwitterXSvg styles="w-4 fill-white" />
                </span>
                <input
                  type="text"
                  id="website-admin"
                  className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Tweet Id or URL"
                  // use ref to store the DOM element
                  ref={textInput}
                />
              </div>
            </div>
            <button
              className="bg-white hover:bg-white hover:text-black text-black font-bold py-2 px-4 rounded max-w-[10rem] w-full xl:w-auto"
              //@ts-ignore
              onClick={() => onsubmit(textInput?.current?.value)}
            >
              Search
            </button>
          </div>
        </div>
        <div className="h-full  min-h-[60rem] w-full  xl:w-1/2 flex  items-start   justify-center">
          {tweetId == "" ? (
            <div className="flex flex-col items-center h-1/4 justify-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                Welcome to Tweet Viewer
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-center px-20">
                To view any tweet video or image in fill the input above with a
                tweet url or id
              </p>
            </div>
          ) : (
            <Tweet id={tweetId} />
          )}
        </div>
      </div>
    </main>
  );
}

const TwitterXSvg = ({ styles }: { styles: string }) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles}>
      <g>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </g>
    </svg>
  );
};
const TwitterSvg = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M21.999 4.572c-.81.36-1.68.602-2.592.71a4.526 4.526 0 001.984-2.496 9.037 9.037 0 01-2.866 1.095A4.513 4.513 0 0014.4 3.99a4.49 4.49 0 00-4.5 4.5c0 .352.04.696.112 1.028C7.63 8.29 4.066 6.1 1.66 3.04a4.46 4.46 0 00-.61 2.262c0 1.56.784 2.942 1.984 3.75a4.54 4.54 0 01-2.04-.56v.056a4.49 4.49 0 003.616 4.406 4.52 4.52 0 01-2.032.08c.576 1.848 2.24 3.192 4.216 3.23A9.05 9.05 0 010 19.5a12.73 12.73 0 006.928 2.032c8.32 0 12.864-6.9 12.864-12.864 0-.192 0-.384-.016-.572.88-.64 1.64-1.44 2.24-2.344l-.048-.02z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
