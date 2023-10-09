
const Heading = ({ header }) => {
    return (
        <div className="max-w-[1401px] mx-auto flex items-center justify-between cursor-pointer">
            <h1 className="text-base mx-4 lg:mx-0  lg:text-[26px] font-medium text-[#2E2E2E]">
                {header}
            </h1>
            <div className="hidden lg:flex gap-x-[18px]">
                <p className="text-[#757575] font-medium">View more</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default Heading;