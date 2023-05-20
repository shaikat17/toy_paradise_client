import toybackground from "../assets/toybackground.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-2">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row  items-center">
        <div className="w-1/2 p-2">
          <h2 className="text-3xl font-bold mb-6">
            About Toy Paradise - Your Online Toy Store
          </h2>
          <p className="text-gray-700">
            Welcome to Toy Paradise - your one-stop destination for all your toy
            shopping needs! We are a leading online toy store, offering a vast
            collection of toys for children of all ages. With a focus on
            quality, safety, and fun, we strive to bring joy and excitement to
            kids and families everywhere.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src={toybackground}
            alt="Toy Paradise"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
