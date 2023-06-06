import React from "react";

export const SideNavbar = () => {
    return (
        <div className="max-w-[15%] bg-black min-h-[100vh] relative mr-2 w-[15%] ">
            <ul className="text-[#fff] flex items-center flex-col justify-center gap-7 cursor-pointer ">
                <li className="my-5 text-left">
                    <p className="text-left">Logo</p>
                </li>
                <li>
                    <p className="text-left">Home</p>
                </li>
                <li>
                    <p className="text-left">Search</p>
                </li>
                <li>
                    <p className="text-left">Explore</p>
                </li>
                <li>
                    <p className="text-left">Reels</p>
                </li>
                <li>
                    <p className="text-left">Messages</p>
                </li>
                <li>
                    <p className="text-left">Notification</p>
                </li>
                <li>
                    <p className="text-left">Create</p>
                </li>
                <li>Profile</li>
                <li className="mt-10 absolute bottom-1">More</li>
            </ul>
        </div>
    );
};
