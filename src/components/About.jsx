import React from "react";

function About() {
  return (
    <div
      name="about"
      className="about h-100 w-full flex items-center justify-center bg-gradient-to-b from-slate-700 via-slate-900 to-black text-white"
    >
      <div className="max-w-screen-lg h-full px-4 flex flex-col justify-center">
        <h1 className="text-5xl underline">About</h1>
        <h1 className="mt-8 text-xl">
          I'm a versatile web developer proficient in both backend and frontend
          programming. I thrive on enhancing my skills and embracing new
          technologies, I am open to work with any web technology.
          <br />
          <br />I like to code matters from scratch and love the idea of
          bringing thoughts to life. Connect with me to get your project done.
          <br />
          <br />
          With a keen eye for minimalistic design and strategic branding, I
          focus on creating user-centric experiences that resonate with your
          audience. Let's collaborate to optimize your project for better
          conversion rates.
          <br />
          <br />I specialize in crafting unique identities for products and
          services, optimizing for increased visibility on search engines and
          social media platforms. Let's work together to elevate your online
          presence and drive more traffic to your brand.
        </h1>
      </div>
    </div>
  );
}

export default About;
