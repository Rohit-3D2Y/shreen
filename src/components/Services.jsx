import React from 'react';

const services = [
  {
    title: 'Interior Designing',
    description: 'Creating functional and aesthetically pleasing indoor spaces.',
    icon: '/flaticons/sofa.png'
  },
  {
    title: 'Exterior Designing',
    description: 'Enhancing curb appeal with elegant and practical outdoor designs.',
    icon: '/flaticons/fence.png'
  },
  {
    title: 'Residential Designing',
    description: 'Tailored solutions for apartments, villas, and homes.',
    icon: '/flaticons/house.png'
  },
  {
    title: 'Commercial Designing',
    description: 'Functional and attractive spaces for offices, shops, and businesses.',
    icon: '/flaticons/malls.png'
  },
  {
    title: 'Civil Work',
    description: 'Structural and foundational work for all types of projects.',
    icon: '/flaticons/worker.png'
  },
  {
    title: 'Carpentry',
    description: 'Custom woodwork solutions for furniture and interiors.',
    icon: '/flaticons/carpentry.png'
  },
  {
    title: 'Electrical',
    description: 'Safe and efficient electrical installations and systems.',
    icon: '/flaticons/plug.png'
  },
  {
    title: 'Automation',
    description: 'Smart home and office automation solutions.',
    icon: '/flaticons/settings.png'
  },
  {
    title: 'Plumbing',
    description: 'Reliable water systems and sanitary fittings.',
    icon: '/flaticons/plumbing.png'
  },
  {
    title: 'POP',
    description: 'False ceiling and decorative gypsum/plaster works.',
    icon: '/flaticons/plastering.png'
  },
  {
    title: 'Painting',
    description: 'Professional painting services for every surface.',
    icon: '/flaticons/paint-roller.png'
  }
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 text-black mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <h2 className="text-4xl md:text-6xl brico -tracking-wider leading-tight mb-6 lg:mb-0">
            Tailored Interior <br /> Solutions
          </h2>
          <div className="max-w-md">
            <p className="uppercase text-sm -tracking-wider brico text-gray-500 mb-2">
              Our Services
            </p>
            <p className="text-lg text-gray-700">
              Whether you’re dreaming of a cozy home retreat or a bold, modern workspace, our expert designers bring your vision to life.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
  key={index}
  className="bg-[#e7daca] rounded-xl px-6 py-8 flex flex-col cursor-pointer"
>
  <img
    src={service.icon}
    alt={service.title}
    className="w-24 h-24"
  />
  <h3 className="text-4xl text-[#a85f31] mt-10 font-semibold brico tracking-tight">
    {service.title}
  </h3>
  <p className="text-[#b07c5c] text-base tracking-tight">
    {service.description}
  </p>

  <a
  href={`https://wa.me/919876543210?text=Hi, I would like to know more about your "${encodeURIComponent(
    service.title
  )}" service.`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center justify-start gap-2 bg-[#a85f31] text-white brico py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
>
  Buy Now {">"}
</a>

</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
