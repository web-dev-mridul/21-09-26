import { IconUserCircle } from "@tabler/icons-react";
import { IconThumbUp } from "@tabler/icons-react";
import { IconMessageCircle } from "@tabler/icons-react";
import { IconShare3 } from "@tabler/icons-react";
import { IconAi } from "@tabler/icons-react";
import { IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
const Newsfeed = (props) => {
  return (
    <div className="p-13 w-full flex">
      <div className="w-[20%]">
        <button
          onClick={props.LogOut}
          className="border border-red-600 bg-red-600 text-white font-semibold text-center px-3 py-1 rounded-full"
        >
          Logout
        </button>
      </div>
      <div className="w-[60%]">
        <div>
          <h1 className="text-2xl mt-5">
            Welcome, <span className="font-semibold">{props.UserName}</span>
          </h1>
          <div className="flex gap-5 my-5">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="w-full border border-gray-500 px-3 py-1 rounded-full"
            />
            <button className="border border-blue-600 bg-blue-600 text-white font-semibold text-center px-3 py-1 rounded-full">
              Post
            </button>
          </div>
          <div className="border border-gray-200 rounded-xl shadow-xl">
            <span className="flex items-center gap-2 px-2 pt-2">
              <IconUserCircle stroke={1.5} className="size-14" />
              <span>
                <h1 className="text-lg font-semibold m-0">
                  Khalid ibn al-Walid
                </h1>
                <p className="m-0 text-sm">23/09/2026</p>
              </span>
            </span>
            <p className="px-2 py-4">
              Although Islamic culture had long developed in Bengal, it was
              after the Mughal Conquest of Bengal in the early 17th century and
              their subsequent attempt to expand cultivation in the
              still-forested eastern part of Bengal that a majority of Bengal
              would develop an Islamic identity. Mughal revenue policies
              encouraged Muslim adventurers to organise the development of
              agricultural societies among indigenous peoples with weak ties to
              Hinduism, who increasingly blended aspects of Islamic cosmology
              with folk religious worldviews and practices.
            </p>
            <img src="prayer.jpg" alt="Prayer Photo" />
            <div className="flex items-center gap-5 px-3 py-2">
              <IconThumbUp stroke={1} />
              <IconMessageCircle stroke={1} />
              <IconShare3 stroke={1} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[20%] px-15">
        <h1 className="text-lg font-semibold mb-5">Contacts</h1>
        <span className="flex items-center gap-4">
          <i className="rounded-full size-8 flex justify-center items-center bg-purple-800">
            <IconAi stroke={2} className="text-white cursor-pointer" />
          </i>
          <p className="cursor-pointer">
            Meta AI
            <IconRosetteDiscountCheckFilled className="size-4 inline-block ms-1 mb-1 text-blue-600" />
          </p>
        </span>
      </div>
    </div>
  );
};

export default Newsfeed;
