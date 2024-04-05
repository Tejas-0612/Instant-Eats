export const ShimmerCard = () => {
  return (
    <div className=" animate-pulse w-[250px] h-[280px] mx-5  mb-4 rounded-xl">
      <div className="w-[99%] mx-auto h-[170px] bg-gray-400 mb-3 rounded-xl p-3"></div>
      <div className="h-3/6 ml-[10px] mx-auto">
        <div className="w-[97%] pt-3 text-lg  h-4 bg-gray-400 mb-3"></div>

        <div className="flex  w-[97%]  h-5  gap-3 my-4 ">
          <div className="w-[30%] bg-gray-400 rounded-sm"></div>
          <div className="w-[30%] bg-gray-400"></div>
          <div className="w-[30%] bg-gray-400"></div>
        </div>
        <div className="w-[97%] h-3 bg-gray-400 mb-1 "></div>
      </div>
    </div>
  );
};

export const Shimmer = () => {
  return (
    <div className="Shimmer-con flex flex-wrap mt-6 justify-center">
      {Array(20)
        .fill("")
        .map((index) => {
          return <ShimmerCard key={index} />;
        })}
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="flex flex-col justify-center my-12">
      <div className="animate-pulse flex w-7/12 mx-auto">
        <div className="ml-6 w-3/12  h-[170px]">
          <div className="bg-gray-300 w-[80%] h-full"></div>
        </div>
        <div className="w-7/12 h-full">
          <div className="h-7 w-[55%] bg-gray-300 my-4"></div>
          <div className="w-[25%] bg-gray-300 h-4  my-1"></div>
          <div className="w-[23%] bg-gray-300 h-4 my-1"></div>
          <div className="w-[20%] bg-gray-300 h-4 my-1"></div>
        </div>
        <div className="w-2/12 px-5 h-[170px] ">
          <div className="w-[80%] h-[50%] bg-white  "></div>
          <div className="w-[80%] h-[50%] bg-gray-300"></div>
        </div>
      </div>
      <div className="animate-pulse w-9/12 p-4 my-4 mx-auto flex justify-center gap-4">
        {Array(4)
          .fill(" ")
          .map((index) => (
            <div key={index} className="w-[200px] h-[55px] bg-gray-300"></div>
          ))}
      </div>
      <div className="w-7/12 p-4 mx-auto my-4">
        <div className="h-5 w-[25%] bg-gray-300 ml-4 mb-4"></div>
        <div className="m-auto ">
          {Array(5)
            .fill("")
            .map((index) => {
              return (
                <>
                  <div
                    className=" flex animate-pulse items-center justify-center h-44 my-4"
                    key={index}
                  >
                    <div className="h-4/5 w-3/4">
                      <p className="h-5 w-3/6 bg-gray-300 mb-2"></p>
                      <p className="h-5 w-2/12 bg-gray-300 mb-2"></p>
                      <p className="h-3 w-5/6 bg-gray-300 mb-1"></p>
                      <p className="h-3 w-5/6 bg-gray-300 mb-1"></p>
                      <p className="h-3 w-5/6 bg-gray-300 mb-1"></p>
                    </div>

                    <div className="h-4/5 w-1/6 bg-gray-300"></div>
                  </div>
                  <hr className="w-[90%] mx-auto border-3 border-gray-400" />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export const CategoryShimmer = () => {
  const isSmallDevice = window.innerWidth <= 768;

  return (
    <div className="md:ml-5 w-full mx-auto items-center flex justify-self-auto gap-14 my-12">
      {isSmallDevice
        ? Array(2)
            .fill("")
            .map((index) => (
              <div
                key={index}
                className="w-28 h-24 rounded-full bg-gray-200 animate-pulse"
              ></div>
            ))
        : Array(7)
            .fill("")
            .map((index) => (
              <div
                key={index}
                className="w-28 h-24 rounded-full bg-gray-400 animate-pulse"
              ></div>
            ))}
    </div>
  );
};

export const TopChainShimmer = () => {
  const isSmallDevice = window.innerWidth <= 768;
  return (
    <div className="flex justify-evenly">
      {isSmallDevice ? (
        <ShimmerCard />
      ) : (
        Array(4)
          .fill("")
          .map((index) => <ShimmerCard key={index + Math.random()} />)
      )}
    </div>
  );
};

export const CollectionsShimmer = () => {
  return (
    <>
      <div className="animate-pulse w-[15%] ml-6 bg-gray-400 h-12 m-4"></div>
      <p></p>
      <div className="animate-pulse w-[40%] ml-6 bg-gray-400 h-5 mb-12 "></div>
    </>
  );
};

export const Fallback = () => {
  return (
    <div className="w-[95vw] h-[90vh] mx-auto animate-pulse bg-gray-200"></div>
  );
};
