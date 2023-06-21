export const StoryCard = ({ image }) => {
    return (
        <div className="flex-shrink-0 ml-2 w-[100px] h-[100px]">
            <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 rounded-full cursor-pointer w-[85px] h-[85px] flex items-center justify-center">
                <a className="">
                    <img
                        src={image}
                        style={{ objectFit: "cover" }}
                        className="rounded-[50%] w-20 h-20 border-[3px] border-[#fff]"
                    />
                </a>
            </div>
            <p className="w-[100%] truncate text-center">nafih888888</p>
        </div>
    );
};
