import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            About This Project
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            This e-commerce website is a personal project built to enhance my
            skills in web development. It&apos;s not a commercial platform, but a
            learning tool that demonstrates my understanding of front-end development technologies.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/400"
              alt="Project Screenshot"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Who Am I?
            </h2>
            <p className="text-gray-700 mb-6">
              Hi! I&apos;m Ganiyu Mubarak, a web developer and enthusiast learning and
              experimenting with the latest technologies to build impactful
              projects. This e-commerce site is a step towards mastering front-end
              development using React.js, Tailwind CSS, and other modern tools.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Project Purpose
            </h3>
            <p className="text-gray-700 mb-6">
              The purpose of this project is not to sell products, but to create a
              functional e-commerce platform that mimics the key features of a real-world
              shopping experience. From handling product listings to filtering and sorting
              items, this site is designed to demonstrate practical knowledge of web
              development.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Skills and Technologies Used
            </h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>React.js for the front-end interface</li>
              <li>Tailwind CSS for styling and layout</li>
              <li>Context API for state management</li>
              <li>React Router for navigation</li>
              <li>Responsive design for mobile-first approach</li>
            </ul>

            <div className="mt-8 text-center">
              <Link
                to="/"
                className="text-indigo-600 hover:text-indigo-500 font-semibold"
              >
                Go back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Ganiyu Mubarak. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
