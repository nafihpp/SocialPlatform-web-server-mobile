import React from "react";
import { StoryCard } from "../StoryCard";

export const StoriesBar = () => {
    return (
        <div className="bg-[#f9f9f9] w-full h-28 flex justify-between items-center px-4 overflow-x-auto">
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
        </div>
    );
};
