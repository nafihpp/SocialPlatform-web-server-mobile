export const StoryCard = ({ image }) => {
    return (
        <div className="flex-shrink-0 mr-4 w-20 h-[100px] ml-2">
            <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 rounded-[50%] block cursor-pointer">
                <img
                    src={image}
                    style={{ objectFit: "cover" }}
                    className="rounded-[50%] w-20 h-20 border-[4px] border-[#fff] overflow-hidden"
                />
            </div>
            <p className="w-[100%] truncate text-center">nafih888888</p>
        </div>
    );
};
