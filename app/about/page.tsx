import Image from "next/image";
import Container from "../components/Container";
import Heading from "../components/Heading";

const page = () => {
  return (
    <Container>
      <div className="flex flex-row items-center">
        <div className="flex items-start flex-col-reverse lg:flex-row">
          <div className="flex flex-col items-start justify-center lg:w-1/2 mt-10 lg:mt-0">
            <Heading title="About us" />
            <div className="flex  mt-2">
              <p>
                We started in 2024 during the height of the environmental crisis. We are focused on providing a platform for
                people to rent items from each other and add to the circular
                economy. With the amount of waste produced in the world we aim
                to reduce waste and create communities of people who rent items
                from each other.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/images/wanaka-tree.jpg"
              alt="About us"
              width={800}
              height={700}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  mt-24 mb-36  flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <Image
            src="/images/about-us-3.jpg"
            alt="People looking at EcoRenter on their phones"
            width={800}
            height={700}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start mt-10 lg:mt-0 lg:ml-10 lg:w-1/2">
          <div className="flex items-start flex-col">
            <Heading title="Where we are going" />
            <div className="flex  mt-2">
              <p>
                We want to shift the focus from ridged ownership to an open
                sharing economy. We want to create a world where people can rent
                items from each other and reduce waste. We want to create a
                world where people can rent items from each other and reduce
                waste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
