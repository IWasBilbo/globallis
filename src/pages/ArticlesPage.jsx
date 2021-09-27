import pic from "../images/pic3.png";

const ArticlesPage = () => {
  return (
    <section className="py-16 bg-globallisSvetia">
      <div className="lg:pl-5 lg:pr-32">
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-5">
            <div></div>
            <div className="col-span-2 pr-40">
              <h1 className="text-globallisBlue text-[36px] leading-[45.5px] font-bold">
                Lorem ipsum dolor sit amet, consectetur adipi scing elit. Cras
                ultrices, augue quis ege stas pretium, diam tellus consectetur
                ligula, nec aliquet mauris.
              </h1>
            </div>
          </div>
        </div>

        <h1 className="text-globallisBlue text-[40px] leading-[53.32px] font-bold text-center lg:hidden">
          Articles
        </h1>

        <div className="grid grid-cols-none lg:grid-cols-2 lg:gap-10 mt-32">
          <div className="order-2 lg:order1 mt-10 lg:mt-0">
            <img src={pic} alt="sofa" className="object-fill px-5 lg:px-0" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="hidden lg:block">
              <h1 className="text-globallisBlue text-[30px] leading-[37.71px] font-bold">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-2xl text-globallisBlue mt-10">
                Lorem ipsum dolor sit amet, consectetur adipi scing elit. Cras
                ultrices, augue quis ege stas pretium, diam tellus consectetur
                ligula, nec aliquet mauris.
              </p>
            </div>
            <h1 className="text-globallisBlue text-[30px] leading-[37.71px] font-bold lg:mt-20 text-center lg:text-left">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-2xl text-globallisBlue mt-10 mx-8 lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Cras
              ultrices, augue quis ege stas pretium, diam tellus consectetur
              ligula, nec aliquet mauris.
            </p>
            <p className="text-2xl text-globallisBlue mt-8 mx-8 lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices, augue quis egestas pretium, diam tellus consectetur
              ligula, nec aliquet mauris sem non dui. Vestibulum id sodales
              massa. Sed venenatis quam non felis rhoncus tempor. Nulla
              condimentum ac urna quis tempus. In vel justo in urna ullamcorper
              blandit. Curabitur vitae iaculis eros, ac dictum sapien. Nulla sit
              amet lectus sit amet nunc consequat molestie eu vel orci. Donec
              vitae fringilla eros, egestas cursus dolor. Suspendisse potenti.
              Etiam pretium arcu vitae placerat commodo. Pellentesque non leo
              vitae nunc dictum interdum id ac sapien.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-32 mt-32 hidden lg:block">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-globallisBlue text-[40px] leading-[53.32px] font-bold">
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Cras
              ultrices, augue quis ege stas pretium, diam tellus consectetur
              ligula, nec aliquet mauris.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p className="text-2xl text-globallisBlue mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices, augue quis egestas pretium, diam tellus consectetur
              ligula, nec aliquet mauris sem non dui. Vestibulum id sodales
              massa. Sed venenatis quam non felis rhoncus tempor. Nulla
              condimentum ac urna quis tempus.
            </p>
            <p className="text-2xl text-globallisBlue mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices, augue quis egestas pretium, diam tellus consectetur
              ligula, nec aliquet mauris sem non dui. Vestibulum id sodales
              massa. Sed venenatis quam non felis rhoncus tempor. Nulla
              condimentum ac urna quis tempus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesPage;
