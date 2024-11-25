"use client";

import React from "react";
import winnie from "../../../../public/winnie.jpg"
import Image from "next/image";


const Dev = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-purple-400 to-pink-200 text-white py-12 rounded-lg shadow-md">
        <Image
          src={winnie}
          alt="Developer"
          width={100}
          height={100}
          className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg border-4 border-white"
        />
        <h1 className="text-4xl font-bold mt-4">Hi, I'm [Your Name]</h1>
        <p className="mt-2 text-lg">
          A passionate <span className="font-semibold">Frontend Web Developer</span> with expertise in building engaging and dynamic web applications.
        </p>
      </section>

      {/* About Me Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          I'm a highly motivated web developer with a strong foundation in JavaScript, React, Next.js, and CSS. Over the years, I've developed projects that focus on responsive designs, seamless user experiences, and clean, maintainable code. My goal is to deliver impactful solutions that make a difference.
        </p>
      </section>

      {/* About the Recipe App */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">About the Recipe App</h2>
        <div className="bg-pink-200 shadow-lg rounded-lg overflow-hidden p-6">
          
          <h3 className="text-2xl font-semibold mb-2">The Ultimate Recipe App</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            This Recipe App is designed to provide a delightful experience for food enthusiasts, featuring:
          </p>
          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
            <li>Beautifully crafted UI for a seamless user experience.</li>
            <li>Extensive database of recipes categorized by type, such as vegan, desserts, and local dishes.</li>
            <li>Interactive features like saving favorite recipes, submitting your own dishes, and exploring chef profiles.</li>
            <li>Powered by  <span className="font-semibold">Next.js</span>,<span className="font-semibold">Typescript</span>,<span className="font-semibold">Tailwind CSS</span> and <span className="font-semibold">Firebase</span> for real-time data updates and persistence.</li>
            <li>Fully responsive and optimized for all devices.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            The goal of this app is to connect people with their passion for cooking while offering a space to learn, share, and grow as a food enthusiast.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "CSS",
            "Tailwind CSS",
            "Bootstrap CSS",
            " CSS Liberies",
            "HTML",
            "Git",
            "Firebase",
            "Responsive Design",
            "Unit Testing",
            "Storybook",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-purple-100 text-purple-700 font-medium rounded-full shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-6">
          Feel free to reach out if you’d like to collaborate or just say hi!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="mailto:davisbeulah07@gmail.com"
            className="text-lg font-semibold text-purple-500 hover:underline"
          >
            Davisbeulah07@gmail.com
          </a>
          <a
            href="https://github.com/tamuno777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-gray-600 hover:text-purple-500"
          >
            GitHub Profile
          </a>
          <a
            href="https://winnie-rose.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-gray-600 hover:text-purple-500"
          >
            Portfolio
          </a>
        </div>
      </section>
    </div>
  );
};

export default Dev;
