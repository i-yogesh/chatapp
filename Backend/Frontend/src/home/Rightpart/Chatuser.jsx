import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  // console.log(selectedConversation.fullname);
  return (
    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300">
        <div className="avatar online">
          <div className="w-16 rounded-full">
          <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20fill%3D%22none%22%20shape-rendering%3D%22auto%22%20width%3D%22512%22%20height%3D%22512%22%3E%3Cmetadata%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Axsi%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema-instance%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Adcterms%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%3E%3Crdf%3ARDF%3E%3Crdf%3ADescription%3E%3Cdc%3Atitle%3EFun%20Emoji%20Set%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3EDavis%20Uche%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F968125295144990435%3C%2Fdc%3Asource%3E%3Cdcterms%3Alicense%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F%3C%2Fdcterms%3Alicense%3E%3Cdc%3Arights%3ERemix%20of%20%E2%80%9EFun%20Emoji%20Set%E2%80%9D%20(https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F968125295144990435)%20by%20%E2%80%9EDavis%20Uche%E2%80%9D%2C%20licensed%20under%20%E2%80%9ECC%20BY%204.0%E2%80%9D%20(https%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F)%3C%2Fdc%3Arights%3E%3C%2Frdf%3ADescription%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Crect%20fill%3D%22%23f6d594%22%20width%3D%22200%22%20height%3D%22200%22%20x%3D%220%22%20y%3D%220%22%20%2F%3E%3Cg%20transform%3D%22matrix(1.5625%200%200%201.5625%2037.5%20110.94)%22%3E%3Cpath%20d%3D%22M40.77%2031C24.27%2031%205.8%2021.8%204%201.63A1.4%201.4%200%200%201%205.21.07a1.38%201.38%200%200%201%201.55%201.21c1.6%2018.47%2018.74%2026.89%2034%2026.89%2021.58%200%2032.38-13.53%2033.52-26.89A1.38%201.38%200%200%201%2075.73%200%201.45%201.45%200%200%201%2077%201.47C75.34%2021.84%2057.08%2031%2040.8%2031h-.03Z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(1.5625%200%200%201.5625%2031.25%2059.38)%22%3E%3Cpath%20d%3D%22M16.41%2026.96H9.82c-9.7%200-9.7.08-9.7-9.7v-4.09A12.2%2012.2%200%200%201%2012.32.97h1.6a12.2%2012.2%200%200%201%2012.2%2012.2v4.16c-.03%209.7-.03%209.63-9.7%209.63Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M8.87%2010.5a2.29%202.29%200%201%200%200-4.58%202.29%202.29%200%200%200%200%204.58Z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20opacity%3D%22.1%22%20d%3D%22M13.11%2019.31a5.32%205.32%200%201%200%200-10.64%205.32%205.32%200%200%200%200%2010.64Z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M62.7%2019.96a1.68%201.68%200%200%201-1.5-.93%201.75%201.75%200%200%201-.12-1.32%2013.54%2013.54%200%200%201%204.85-7.09A13.1%2013.1%200%200%201%2074%207.97c2.9-.03%205.73.9%208.06%202.66a13.63%2013.63%200%200%201%204.87%207.08c.13.44.08.92-.13%201.32a1.72%201.72%200%200%201-2.3.73%201.69%201.69%200%200%201-.83-1.03c-.63-2.13-1.91-4-3.66-5.32a9.92%209.92%200%200%200-6.07-2c-2.17%200-4.28.7-6.02%202.02a10.26%2010.26%200%200%200-3.64%205.3c-.1.35-.32.66-.6.88a1.7%201.7%200%200%201-.98.35Z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
          {/* <img src="./Leftpart/image.png" /> */}
          </div>
        </div>
        <div>
          <h1 className="text-xl">{selectedConversation.fullname}</h1>
          <span className="text-sm">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
