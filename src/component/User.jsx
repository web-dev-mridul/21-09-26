import { useState } from "react";
import { IconBrandFacebookFilled } from "@tabler/icons-react";
const User = (props) => {
  const [name, setName] = useState("");
  return (
    <div className="px-13 flex border w-full h-170">
      <div className="w-[52%] border-r py-13 relative">
        <p className="rounded-full size-15 flex justify-center pt-3 bg-blue-600">
          <IconBrandFacebookFilled className="size-14 text-white" />
        </p>
        <p className="text-[58px]/[1] font-semibold absolute bottom-40 left-0">
          Explore
          <br />
          the things
          <br />
          <span className="text-blue-600">you love</span>.
        </p>
        <img
          src="user.webp"
          alt="Facebook Image"
          className="inline-block size-135 absolute right-0 top-0 mt-5"
        />
      </div>
      <div className="w-[48%] ps-13 py-73 flex flex-col justify-center">
        <div>
          <h1 className="text-3xl font-semibold mb-1">
            Choose a cool <span className="text-blue-600">user</span> name
          </h1>
          <p className="mb-10">
            This how will people know you. So, make sure to pick a cool name.
          </p>
          <input
            type="text"
            placeholder="Enter username"
            className="border border-gray-300 p-4 rounded-2xl w-full mb-5"
            onChange={(e) => setName(e.target.value)}
          />

          <button
            onClick={() => props.UserName(name)}
            className="w-full bg-blue-600 text-white font-semibold rounded-full py-2"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
