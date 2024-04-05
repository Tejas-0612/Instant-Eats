export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`absolute z-10 bg-gray-200 md:-mt-2 -mx-2 rounded-2xl top-0 right-0 transform -translate-y-full cursor-pointer `}
      onClick={onClick}
      style={{ right: "35px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        stroke="#333333"
      >
        <path
          d="M6 12H18M18 12L13 7M18 12L13 17"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`absolute z-10 bg-gray-200 mx-4 md:-mt-2 rounded-2xl top-0 md:right-0 transform -translate-y-full cursor-pointer `}
      onClick={onClick}
      style={{ right: "60px" }} // Adjust this to move it left or right from the Next arrow
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        stroke="#333333"
      >
        <path
          d="M6 12H18M6 12L11 7M6 12L11 17"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
