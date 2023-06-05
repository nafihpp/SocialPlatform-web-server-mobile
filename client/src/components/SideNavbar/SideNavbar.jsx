import React from "react";

export const SideNavbar = () => {
    return (
        <div className="max-w-[15%] bg-black min-h-[100vh] relative mr-2 w-[15%]">
            <ul className="text-[#fff] flex items-center flex-col justify-center gap-7 cursor-pointer">
                <li className="my-5">Logo</li>
                <li>Home</li>
                <li>Search</li>
                <li>Explore</li>
                <li>Reels</li>
                <li>Messages</li>
                <li>Notification</li>
                <li>Create</li>
                <li>Profile</li>
                <li className="mt-10 absolute bottom-1">More</li>
            </ul>
        </div>
    );
};
