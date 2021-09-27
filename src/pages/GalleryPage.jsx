import building from "../images/pic2.png";
import line from "../images/line1.png";
import pic from "../images/pic3.png";

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

const GalleryPage = () => {
  return (
    <section className="py-12 lg:py-20 bg-globallisBlue lg:bg-globallisSvetia">
      <div className="lg:mx-32">
        <h1 className="text-white text-[40px] leading-[53.32px] font-bold text-center mb-10 lg:hidden">
          Gallery
        </h1>
        <div className="grid grid-cols-none lg:grid-cols-2 gap-4">
          {cards.map((card) => (
            <div key={card.id}>
              <div className="relative">
                <div className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-temma duration-300">
                  <h1 className="font-bold text-white text-[40px]">
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
              <p className="text-white lg:text-globallisBlue text-2xl mt-5 mb-10 mx-10 lg:mx-0">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-32 hidden lg:block">
          <div className="grid grid-cols-2 gap-5">
            <div className="pr-10">
              <h1 className="text-globallisBlue text-[54px] leading-[71.98px]">
                Lorem ipsum dolor sit amet, cons.
              </h1>
              <p className="text-globallisBlue text-2xl leading-[31.43px] mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                ultrices, augue quis egestas pretium, diam tellus consectetur
                ligula, nec aliquet mauris sem non dui. Vestibulum id sodales
                massa.
              </p>
            </div>
            <div>
              <img src={pic} alt="sofa" className="object-fill" />
            </div>
          </div>
        </div>
        <div className="mt-28 hidden lg:block">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <img src={pic} alt="sofa" className="object-fill" />
            </div>
            <div className="pl-10">
              <h1 className="text-globallisBlue text-[54px] leading-[71.98px]">
                Lorem ipsum dolor sit amet, cons.
              </h1>
              <p className="text-globallisBlue text-2xl leading-[31.43px] mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                ultrices, augue quis egestas pretium, diam tellus consectetur
                ligula, nec aliquet mauris sem non dui. Vestibulum id sodales
                massa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
