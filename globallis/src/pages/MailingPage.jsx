const Mailing = () => {
  return (
    <section className="bg-globallisSvetia">
      <div className="flex h-screen">
        <div className="mx-auto mt-40 text-center">
          <h1 className="text-[40px] lg:text-[54px] leading-[50px] lg:leading-[71.98px] text-globallisBlue mx-5">
            Kindly sign up to our mailing list.
          </h1>
          <p className="text-xl lg:text-2xl leading-[31.43px] text-globallisBlue mt-5 mx-5">
            Be the first to receive the latest news, reviews and event details.
          </p>
          <button className="rounded-md bg-globallisBlue hover:bg-gray-800 text-white font-bold lg:text-[48px] mt-10 px-10 py-2">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mailing;
