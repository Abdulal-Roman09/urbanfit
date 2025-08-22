// app/services/page.jsx
import { FaTshirt, FaLeaf, FaShippingFast, FaDraftingCompass, FaGem, FaUsers } from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      title: "Premium Quality",
      description:
        "We ensure every outfit is crafted with top-notch materials and attention to detail.",
      icon: FaGem,
    },
    {
      title: "Eco-Friendly Fabrics",
      description:
        "Sustainable and eco-conscious fabrics to make fashion more responsible.",
      icon: FaLeaf,
    },
    {
      title: "Custom Designs",
      description:
        "Tailored clothing options for individuals who want something unique.",
      icon: FaDraftingCompass,
    },
    {
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery so you can wear your favorite styles sooner.",
      icon: FaShippingFast,
    },
    {
      title: "Trendy Collections",
      description:
        "Stay ahead of trends with our ever-updating seasonal collections.",
      icon: FaTshirt,
    },
    {
      title: "Customer Support",
      description:
        "Our dedicated support team is always ready to assist you anytime.",
      icon: FaUsers,
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-teal-600">Services</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover what makes <span className="font-semibold">UrbanFit</span>{" "}
            special and why our customers love us.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <Icon className="w-12 h-12 text-teal-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
