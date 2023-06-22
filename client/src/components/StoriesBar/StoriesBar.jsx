import React from "react";
import { StoryCard } from "../StoryCard";

export const StoriesBar = () => {
    return (
        <div className="h-[150px] bg-[#fafafa] border-t-1 border-b overflow-y-hidden">
            <div className="py-5 flex justify-between items-center">
                {" "}
                <StoryCard
                    image={
                        "https://cdn.pixabay.com/photo/2014/10/31/17/41/dancing-dave-minion-510835_1280.jpg"
                    }
                />
                <StoryCard
                    image={
                        "https://wallpapers.com/images/featured/3wxim1i2egqb5my9.jpg"
                    }
                />
                <StoryCard
                    image={"https://wallpaperaccess.com/full/305936.jpg"}
                />
                <StoryCard
                    image={
                        "https://yt3.googleusercontent.com/9cfVXMWRqo6KGLMIKt7sc7k6AeFUHE-Rj034WlaFTQCRXUM2YBOQUXhQ20YQgOPz8MDfilcceQ=s900-c-k-c0x00ffffff-no-rj"
                    }
                />
                <StoryCard
                    image={
                        "https://i.pinimg.com/originals/0c/9c/a0/0c9ca06c106749d7ad564b95ba525ad6.jpg"
                    }
                />
                <StoryCard
                    image={
                        "https://cdn.pixabay.com/photo/2014/10/31/17/41/dancing-dave-minion-510835_1280.jpg"
                    }
                />
                <StoryCard
                    image={
                        "https://wallpapers.com/images/featured/3wxim1i2egqb5my9.jpg"
                    }
                />
                <StoryCard
                    image={"https://wallpaperaccess.com/full/305936.jpg"}
                />
                <StoryCard
                    image={
                        "https://yt3.googleusercontent.com/9cfVXMWRqo6KGLMIKt7sc7k6AeFUHE-Rj034WlaFTQCRXUM2YBOQUXhQ20YQgOPz8MDfilcceQ=s900-c-k-c0x00ffffff-no-rj"
                    }
                />
                <StoryCard
                    image={
                        "https://i.pinimg.com/originals/0c/9c/a0/0c9ca06c106749d7ad564b95ba525ad6.jpg"
                    }
                />
            </div>
        </div>
    );
};
