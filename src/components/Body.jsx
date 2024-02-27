import LoadingCOmp from "./LoadingCOmp";

const Body = () => {
  return (
    <section className="h-full">
      {/* <section className="h-full w-full flex justify-center items-center text-primary tracking-wider text-2xl">
              <h1>No websites found!</h1>
            </section> */}
      <LoadingCOmp />
    </section>
  );
};

export default Body;
