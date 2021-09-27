import cover from "../images/pic1.png";
import building from "../images/pic2.png";
import line from "../images/line.png";

const cards = [
  {
    id: 1,
    image: building,
    text: "Lorem ipsum dolor sit amet, consectetur adipisc.",
  },
  {
    id: 2,
    image: building,
    text: "Lorem ipsum dolor sit amet, consectetur adipisc.",
  },
  {
    id: 3,
    image: building,
    text: "Lorem ipsum dolor sit amet, consectetur adipisc.",
  },
  {
    id: 4,
    image: building,
    text: "Lorem ipsum dolor sit amet, consectetur adipisc.",
  },
];
const HomePage = () => {
  return (
    <section className="bg-globallisBlue pt-20 lg:pt-40 pb-20">
      <h1 className="text-left text-[101.44px] text-white leading-[100.12px] lg:ml-40 hidden lg:block">
        The quick brown <br /> fox jumps over the <br /> lazy dog.
      </h1>
      <h1 className="text-center text-[40px] text-white leading-[53.32px] mx-3 font-bold lg:hidden">
        The quick brown fox jumps over the lazy dog.
      </h1>
      <p className="text-white text-2xl text-center mt-12 lg:hidden mx-3">
        Lorem ipsum dolor sit amet, consectetur adipi scing elit. Cras ultrices,
        augue quis ege stas pretium, diam tellus consectetur ligula, nec aliquet
        mauris.
      </p>
      <div className="mt-32">
        <img src={cover} alt="cover" className="object-fill w-[100vw]" />
      </div>
      <div className="mt-20 mx-4 lg:mx-40">
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-20">
            <div>
              <img src={line} alt="cover" className="object-fill" />
              <p className="text-white mt-3 text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisc.
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-white font-bold text-[40px] leading-[53.32px]">
                Lorem ipsum dolor sit amet, consectetur adipi scing elit. Cras
                ultrices, augue quis ege stas pretium, diam tellus consectetur
                ligula, nec aliquet mauris.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20">
          <div></div>
          <div>
            <h1 className="text-white font-bold text-[30px] leading-[37.71px] text-center lg:text-left mb-20 lg:mb-0">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-white text-2xl mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices, augue quis egestas pretium, diam tellus consectetur
              ligula, nec aliquet mauris sem non dui. Vestibulum id sodales
              massa. Sed venenatis quam non felis rhoncus tempor.
            </p>
            <p className="text-white text-2xl mt-5">
              Nulla condimentum ac urna quis tempus. In vel justo in urna
              ullamcorper blandit. Curabitur vitae iaculis eros, ac dictum
              sapien. Nulla sit amet lectus sit amet nunc consequat molestie eu
              vel orci. Donec vitae fringilla eros, egestas cursus dolor.
              Suspendisse potenti. Etiam pretium arcu vitae placerat commodo.
              Pellentesque non leo vitae nunc dictum interdum id ac sapien.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-40">
          {cards.map((card) => (
            <div key={card.id}>
              <div className="relative">
                <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-lightWhite duration-300">
                  <h1 className="font-bold text-globallisBlue text-[40px]">
                    Hover Over Effect
                  </h1>
                </div>
                <div className="flex flex-wrap content-center">
                  <img
                    src={card.image}
                    alt="buildings"
                    className="object-fill"
                  />
                </div>
              </div>
              <img
                src={line}
                alt="cover"
                className="object-fill mt-5 hidden lg:block"
              />
              <p className="text-white text-2xl mt-5 mb-10 mx-10 lg:mx-0">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
