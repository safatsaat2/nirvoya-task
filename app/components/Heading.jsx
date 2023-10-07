
const Heading = ({ header }) => {
    return (
        <div className="max-w-[1401px] mx-auto flex items-center justify-between cursor-pointer">
            <h1 className="text-[26px] font-medium text-[#2E2E2E]">
                {header}
            </h1>
            <div className="flex gap-x-[18px]">
                <p className="text-[#757575] font-medium">View more</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default Heading;