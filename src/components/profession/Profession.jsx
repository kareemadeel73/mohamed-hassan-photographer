import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "📸 Portrait Sessions",
    description:
      "Professional personal and lifestyle photography sessions that highlight your personality and style.",
  },
  {
    id: 2,
    title: "💍 Wedding Photography",
    description:
      "Capturing your most special moments with cinematic and emotional storytelling.",
  },
  {
    id: 3,
    title: "🏷️ Brand & Commercial",
    description:
      "High-quality product and brand photography to elevate your business identity.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I Capture?</p>

        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in capturing timeless moments through professional photography.
            From personal sessions to weddings and brand shoots, I create visuals that tell your story.
          </p>

          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity, lighting expertise, and attention to detail
            to deliver high-quality images that leave a lasting impression.
          </p>
        </div>

        <a
          href="mailto:Mohhamed_HassaN99@gmail.com?subject=Photography%20Booking&body=Hello%20I%20want%20to%20book%20a%20photography%20session"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Contact Me
        </a>
      </div>

      <div>
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;