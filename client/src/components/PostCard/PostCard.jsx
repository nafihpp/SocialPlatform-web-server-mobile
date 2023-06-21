import { Skeleton } from "@mui/material";
import { Picker } from "emoji-mart";
import React, { useState } from "react";

export const PostCard = ({ image }) => {
    const [loading, setLoading] = useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const [comment, setComment] = useState("");

    const handleEmojiSelect = (emoji) => {
        const newComment = comment + emoji.native;
        setComment(newComment);
    };

    const inititalContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae, totam eos nihil optio veniam, nam enim quo repellat aperiam asperiores praesentium sint voluptatem ullam dicta ipsa? Consectetur facere dignissimos eos praesentium, error dolorem, neque est, beatae voluptatibus tenetur maxime?";
    const [showMore, setShowMore] = useState(false);
    const maxVisibleChars = 80;

    const truncatedContent = inititalContent.slice(0, maxVisibleChars);
    const remainingContent = inititalContent.slice(maxVisibleChars);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="width-[100%] md:width-[98%] md:mx-auto">
            <div className="w-[90%]">
                <div className="mt-5 border-b rounded-sm mb-2">
                    <div className="top flex justify-between">
                        <div className="profile-pic-container flex">
                            <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 rounded-full cursor-pointer w-[70px] h-[50px] flex items-center justify-center">
                                <a className="profile-pic-img border-[2px] border-[#fff] overflow-hidden rounded-[50%]">
                                    <img
                                        src={image}
                                        className="block w-[100%]"
                                        style={{ objectFit: "cover" }}
                                    />
                                </a>
                            </div>
                            <div className="name flex flex-col ml-3">
                                <div>
                                    <strong>dr.heba_youshra</strong>
                                </div>
                                <div>
                                    <p>Guruvyoor Temple, Thrissur</p>
                                </div>
                            </div>
                        </div>
                        <div className="options font-bold">...</div>
                    </div>
                    <div className="middle my-3">
                        <img
                            src={image}
                            className="block w-[100%] max-h-[500px]"
                            style={{ objectFit: "fill" }}
                        />
                    </div>
                    <div className="bottom flex justify-between mb-5">
                        <div className="bottom-actions flex">
                            <span className="love mr-3">
                                <svg
                                    aria-label="Like"
                                    class="x1lliihq x1n2onr6"
                                    color="rgb(38, 38, 38)"
                                    fill="rgb(38, 38, 38)"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Like</title>
                                    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                                </svg>
                            </span>
                            <span className="comment mr-3">
                                <svg
                                    aria-label="Comment"
                                    class="x1lliihq x1n2onr6"
                                    color="rgb(0, 0, 0)"
                                    fill="rgb(0, 0, 0)"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Comment</title>
                                    <path
                                        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    ></path>
                                </svg>
                            </span>
                            <span className="send">
                                <svg
                                    aria-label="Share Post"
                                    class="x1lliihq x1n2onr6"
                                    color="rgb(0, 0, 0)"
                                    fill="rgb(0, 0, 0)"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Share Post</title>
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        x1="22"
                                        x2="9.218"
                                        y1="3"
                                        y2="10.083"
                                    ></line>
                                    <polygon
                                        fill="none"
                                        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                        stroke="currentColor"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    ></polygon>
                                </svg>
                            </span>
                        </div>
                        <div className="bottom-save">
                            <span>
                                <svg
                                    aria-label="Save"
                                    class="x1lliihq x1n2onr6"
                                    color="rgb(0, 0, 0)"
                                    fill="rgb(0, 0, 0)"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Save</title>
                                    <polygon
                                        fill="none"
                                        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    ></polygon>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>Liked by</span>
                        &nbsp;
                        <strong>niss</strong>
                        &nbsp;
                        <span>and</span>
                        &nbsp;
                        <strong>others</strong>
                    </div>
                    <div>
                        <span className="font-semibold">dr.heba_youshra</span>{" "}
                        &nbsp;
                        <span>
                            {truncatedContent}{" "}
                            {remainingContent.length > 0 && "... "}
                        </span>
                        {showMore ? (
                            <div>
                                {remainingContent}
                                <button
                                    onClick={handleShowMore}
                                    className="text-blue-500 font-medium"
                                >
                                    ShowLess
                                </button>
                            </div>
                        ) : (
                            <div>
                                <button
                                    onClick={handleShowMore}
                                    className="text-[#8a738a] font-normal"
                                >
                                    more
                                </button>
                            </div>
                        )}
                        <span className="font-medium text-xs">
                            See Translation
                        </span>
                        <p>View 1 Comment</p>
                        <div className="relative">
                            <input
                                placeholder="Comment"
                                type="text"
                                className="outline-none w-[100%]"
                            />
                            <button
                                className="absolute right-0 top-0 p-2"
                                onClick={() => setShowPicker(!showPicker)}
                            >
                                😃
                            </button>
                            {showPicker && (
                                <Picker
                                    onSelect={handleEmojiSelect}
                                    style={{
                                        position: "absolute",
                                        bottom: "100%",
                                        right: 0,
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

//loading

// if (loading) {
//     return (
//         <div className="w-[100%]">
//             <div className="w-[90%] mx-auto">
//                 <div className="top ">
//                     <div className="profile-pic-container flex">
//                         <div className="">
//                             <Skeleton
//                                 variant="circle"
//                                 animation="wave"
//                                 width={50}
//                                 height={50}
//                                 className="rounded-full mb-3 mr-4"
//                             />
//                         </div>
//                         <div className="name">
//                             <div>
//                                 <Skeleton
//                                     variant="text"
//                                     animation="wave"
//                                     className=" mb-3"
//                                     width={200}
//                                 />
//                                 <Skeleton
//                                     variant="text"
//                                     animation="wave"
//                                     className=" mb-3"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="middle my-3 w-[100%]">
//                     <Skeleton
//                         variant="rectangular"
//                         animation="wave"
//                         width={400}
//                         height={322}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }
