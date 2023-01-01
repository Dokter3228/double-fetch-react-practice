import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [firstData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);

  return (
    <>
      <main className="flex justify-center items-center mt-32">
        {/* button container */}
        <div className="container flex justify-center items-center space-x-10">
          <button
            className="p-4 bg-red-500 rounded-md hover:bg-red-600"
            onClick={() => {
              fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => {
                  setFirstData(data);
                  setSecondData(null);
                  setLoading(false);
                });
            }}
          >
            Fetch First API
          </button>
          <button
            className="p-4 bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={() => {
              fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((data) => {
                  setSecondData(data);
                  setFirstData(null);
                  setLoading(false);
                });
            }}
          >
            Fetch Second API
          </button>
        </div>
        {/* data containter */}
      </main>
      <div className="flex flex-col justify-center items-center mt-10">
        {loading && (
          <h1 className="text-xl">
            fetch the data pressing on on of the buttons above
          </h1>
        )}
        {firstData ? (
          <>
            <h1 className="text-3xl mb-4 underline">First API rendered</h1>
            {firstData.map((user) => {
              return (
                <div key={user.id}>
                  <h1>{user.name}</h1>
                </div>
              );
            })}
          </>
        ) : secondData ? (
          <>
            <h1 className="text-3xl mb-4 underline">Second API rendered</h1>
            {secondData.map((post) => {
              return (
                <div key={post.id}>
                  <h1>{post.title}</h1>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </>
  );
}
