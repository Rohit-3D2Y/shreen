import React from 'react';

const HeroStats = () => {
  return (
    <div className=" px-4 sm:px-6 lg:px-12 py-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className='-tracking-wider brico text-6xl text-left'>Designing Spaces, <br />Defining Styles</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Feature 1 - Personalized approach */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-4xl sm:text-5xl font-light text-gray-800">50+</span>
              <div className="flex-1 pt-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#a57151] mb-4">
                  Projects Completed
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  We completed more than 40+ projects with seamless experience and fulfilled needs.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <img 
                src="https://5.imimg.com/data5/SELLER/Default/2024/1/375795246/KD/JZ/EU/94492609/interior-design-turnkey-projects.jpg"
                alt="Family discussing home plans with real estate agent"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Feature 2 - Expert guidance */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-4xl sm:text-5xl font-light text-gray-800">08</span>
              <div className="flex-1 pt-2">
                <h3 className="text-xl sm:text-2xl font-semibold  text-[#a57151] mb-4">
                  Years experience
                </h3>
              </div>
            </div>
            <div className="mb-6">
              <img 
                src="https://www.brabbu.com/en/inspiration-and-ideas/wp-content/uploads/2021/03/Surprising-Mumbai-Interior-Design-Projects-VRATIKA.jpg"
                alt="Real estate professionals working with documents and house models"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              with more than 14+ years of experience, our team works continuously so you get desired results.
            </p>
          </div>

          {/* Feature 3 - Seamless experience */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-4xl sm:text-5xl font-light text-gray-800">150</span>
              <div className="flex-1 pt-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#a57151] mb-4">
                  Happy Customers
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Customers are everything for us so we make sure that they get what they want and go back satisfied with our results.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <img 
                src="https://images.adsttc.com/media/images/634e/5c9b/eb99/d038/7eb2/b3a7/newsletter/interior-focus-curves_8.jpg?1666079905"
                alt="Happy family signing documents with real estate agent"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroStats;