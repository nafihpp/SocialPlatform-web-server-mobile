import Profile from "../../assets/Profile.jpg";

export const BottomNavbar = () => {
    return (
        <div className="hidden ok sm:flex sm:items-center w-[100%] h-[50px] bg-[#fff] absolute bottom-0">
            <div className="w-[90%] mx-auto">
                <ul className="flex justify-between items-center">
                    <li>
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"></path>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="32"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></path>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div>
                            <svg
                                aria-label="Explore"
                                class="_ab6-"
                                color="rgb(0, 0, 0)"
                                fill="rgb(0, 0, 0)"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <polygon
                                    fill="none"
                                    points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></polygon>
                                <polygon
                                    fill-rule="evenodd"
                                    points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                                ></polygon>
                                <circle
                                    cx="12.001"
                                    cy="12.005"
                                    fill="none"
                                    r="10.5"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></circle>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div>
                            <svg
                                aria-label="New post"
                                class="_ab6-"
                                color="rgb(0, 0, 0)"
                                fill="rgb(0, 0, 0)"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path
                                    d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                ></path>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    x1="6.545"
                                    x2="17.455"
                                    y1="12.001"
                                    y2="12.001"
                                ></line>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    x1="12.003"
                                    x2="12.003"
                                    y1="6.545"
                                    y2="17.455"
                                ></line>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div>
                            <svg
                                aria-label="Messenger"
                                class="_ab6-"
                                color="rgb(0, 0, 0)"
                                fill="rgb(0, 0, 0)"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path
                                    d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-miterlimit="10"
                                    stroke-width="1.739"
                                ></path>
                                <path
                                    d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img
                                src={Profile}
                                className="w-8 h-8 rounded-full"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
