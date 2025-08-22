// app/about/page.jsx
import { FaBullseye, FaEye, FaUsers, FaUserTie, FaUserFriends, FaUserAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            About <span className="text-teal-600">UrbanFit</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A modern clothing brand redefining comfort and style for everyone.
          </p>
        </div>

        {/* Brand Story */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Our Story
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            UrbanFit started with a mission to bring high-quality, stylish,
            and comfortable clothing to modern individuals. From casual wear
            to premium collections, we focus on making fashion accessible for
            everyone.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Every piece is designed with care, blending urban trends with
            timeless comfort. UrbanFit is not just about clothing — it’s a
            lifestyle.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 text-center mb-20">
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition">
            <FaBullseye className="w-12 h-12 mx-auto text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              To create stylish and sustainable clothing that empowers people to
              look good and feel confident every day.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition">
            <FaEye className="w-12 h-12 mx-auto text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              To become a global leader in urban fashion, known for innovation,
              comfort, and eco-conscious designs.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { name: "Abdul Al Roman", role: "Founder & CEO", icon: FaUserTie },
              { name: "Sarah Khan", role: "Creative Director", icon: FaUserFriends },
              { name: "John Doe", role: "Lead Designer", icon: FaUserAlt },
            ].map((member, i) => {
              const Icon = member.icon;
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition"
                >
                  <Icon className="w-16 h-16 mx-auto text-teal-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {member.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
