import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/sandesh6636")
  //     .then((respose) => respose.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    // <div className="text-center m-5 p-4 bg-gray-500 text-3xl flex justify-center flex-col w-80s">
    //   <img src={data.avatar_url} alt="git hub " className="w-25" />
    //   Github followers {data.followers}
    // </div>
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={data.avatar_url} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Username :{data.name}
            </h2>
            <p className="mt-6 text-gray-600">{data.bio}</p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sandesh6636");
  return response.json();
};
