import * as htmlToImage from "html-to-image";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

const MergedImage = ({
  setDragElement,
  setDragFile,
  setDropElement,
  dragElement,
  dropElement,
  dragFile,
  className,
  file2,
  file1,
  id,
}: any) => {
  const dragStart = ({ target }) => {
    setDragFile(target.src);
    setDragElement(target);
  };

  const dragEnter = (event) => {
    event.preventDefault();

    setDropElement(event.target);
  };

  const dragEnd = (event) => {
    event.preventDefault();

    dragElement.src = dropElement.src;
    dropElement.src = dragFile;
  };

  return (
    <div className={className} id={id}>
      <img
        className="w-full cursor-move"
        onDragStart={dragStart}
        onDragEnter={dragEnter}
        onDragEnd={dragEnd}
        src={file1}
        alt=""
      />
      <img
        className="w-full cursor-move"
        onDragStart={dragStart}
        onDragEnter={dragEnter}
        onDragEnd={dragEnd}
        src={file2}
        alt=""
      />
    </div>
  );
};

export default function Home() {
  const [isDone, setIsDone] = useState(false);
  const [files, setFiles] = useState([]);
  const [dragFile, setDragFile] = useState("");
  const [dragElement, setDragElement] = useState({ src: "" });
  const [dropElement, setDropElement] = useState({ src: "" });

  const change = ({ target }: any) => {
    setFiles([...target.files].map((file: any) => URL.createObjectURL(file)));
  };

  useEffect(() => {
    if (isDone) {
      setTimeout(
        () =>
          document
            .querySelectorAll("[id^=mergedImage]")
            .forEach(async (element: any) => {
              const dataUrl = await htmlToImage.toJpeg(element);
              const link = document.createElement("a");
              link.download = element.id + ".jpg";
              link.href = dataUrl;
              link.click();
            }),
        500
      );
    }
  }, [isDone]);

  return (
    <div className={styles.container + " bg-gray-200"}>
      <Head>
        <title>Generate Amazon Images</title>
        <meta name="description" content="Generate amazon images" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-5xl font-thin">Generate Amazon Images</h1>

        <label
          htmlFor="inputFile"
          className="border-dashed border-2 w-full max-w-5xl h-52 my-5 rounded-lg flex justify-center items-center relative bg-gray-100"
        >
          <input
            type="file"
            id="inputFile"
            onChange={change}
            className="opacity-0 w-full h-full absolute"
            multiple
          />
          <svg
            version="1.1"
            className="h-8 text-grey mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
          >
            <g>
              <path
                d="M50.975,20.694c-0.527-9-7.946-16.194-16.891-16.194c-5.43,0-10.688,2.663-13.946,7.008
		c-0.074-0.039-0.153-0.065-0.228-0.102c-0.198-0.096-0.399-0.188-0.605-0.269c-0.115-0.045-0.23-0.086-0.346-0.127
		c-0.202-0.071-0.406-0.133-0.615-0.19c-0.116-0.031-0.231-0.063-0.349-0.09c-0.224-0.051-0.452-0.09-0.683-0.124
		c-0.102-0.015-0.202-0.035-0.305-0.047C16.677,10.523,16.341,10.5,16,10.5c-4.962,0-9,4.037-9,9c0,0.129,0.007,0.255,0.016,0.381
		C2.857,22.148,0,26.899,0,31.654C0,38.737,5.762,44.5,12.845,44.5H18c0.552,0,1-0.447,1-1s-0.448-1-1-1h-5.155
		C6.865,42.5,2,37.635,2,31.654c0-4.154,2.705-8.466,6.432-10.253L9,21.13V20.5c0-0.123,0.008-0.249,0.015-0.375l0.009-0.175
		l-0.012-0.188C9.007,19.675,9,19.588,9,19.5c0-3.859,3.14-7,7-7c0.309,0,0.614,0.027,0.917,0.067
		c0.078,0.01,0.155,0.023,0.232,0.036c0.268,0.044,0.532,0.102,0.792,0.177c0.034,0.01,0.069,0.016,0.102,0.026
		c0.286,0.087,0.565,0.198,0.838,0.322c0.069,0.031,0.137,0.065,0.205,0.099c0.242,0.119,0.479,0.251,0.707,0.399
		C21.72,14.875,23,17.039,23,19.5c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.754-1.246-5.219-3.2-6.871
		C24.666,8.879,29.388,6.5,34.084,6.5c7.744,0,14.178,6.135,14.848,13.887c-1.022-0.072-2.553-0.109-4.083,0.125
		c-0.546,0.083-0.921,0.593-0.838,1.139c0.075,0.495,0.501,0.85,0.987,0.85c0.05,0,0.101-0.004,0.152-0.012
		c2.224-0.336,4.543-0.021,4.684-0.002C54.49,23.372,58,27.661,58,32.472C58,38.001,53.501,42.5,47.972,42.5H44
		c-0.552,0-1,0.447-1,1s0.448,1,1,1h3.972C54.604,44.5,60,39.104,60,32.472C60,26.983,56.173,22.06,50.975,20.694z"
              />
              <path
                d="M31.708,30.794c-0.092-0.093-0.203-0.166-0.326-0.217c-0.244-0.101-0.52-0.101-0.764,0
		c-0.123,0.051-0.233,0.124-0.326,0.217l-7.999,7.999c-0.391,0.391-0.391,1.023,0,1.414C22.488,40.402,22.744,40.5,23,40.5
		s0.512-0.098,0.707-0.293L30,33.914V54.5c0,0.553,0.448,1,1,1s1-0.447,1-1V33.914l6.293,6.293C38.488,40.402,38.744,40.5,39,40.5
		s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L31.708,30.794z"
              />
            </g>
          </svg>

          <span className="block text-grey">Drop your files here</span>
        </label>

        <div
          className={
            isDone
              ? "max-w-5xl mx-auto my-12"
              : "grid gap-2 grid-cols-5 mx-auto"
          }
        >
          {files.map((file, i) => {
            if (i % 2 == 0)
              return (
                <MergedImage
                  id={"mergedImage" + i}
                  isDone={isDone}
                  className={
                    isDone
                      ? "mb-12 border-b-2 bg-white"
                      : "rounded-lg shadow-lg overflow-hidden"
                  }
                  file1={file}
                  file2={files[i + 1]}
                  dragFile={dragFile}
                  dragElement={dragElement}
                  dropElement={dropElement}
                  setDragElement={setDragElement}
                  setDragFile={setDragFile}
                  setDropElement={setDropElement}
                />
              );
          })}
        </div>
        <button
          className="rounded bg-pink-500 text-white px-3 py-1 mt-3"
          onClick={() => setIsDone(!isDone)}
        >
          Done
        </button>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
