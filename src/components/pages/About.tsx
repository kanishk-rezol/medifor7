import React, { memo } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const AboutSection = memo(() => (
  <div className="border border-gray-300 rounded-xl p-6 shadow-md">
    <h1 className="text-3xl font-bold mb-4">About</h1>
    <p className="text-gray-700 leading-relaxed">
      At <strong>MediFor7</strong>, we are dedicated to solving a common yet critical problem—medication management.
      Inspired by the challenges faced by elderly relatives, hospital patients, and busy professionals,
      we developed an innovative solution to ensure no dose is missed or taken incorrectly.
      With a perfect blend of hardware and software, MediFor7 is designed to make medication adherence simple and hassle-free.
    </p>
  </div>
));

const FeaturesSection = memo(() => (
  <div className="border border-gray-300 rounded-xl p-6 shadow-md">
    <h1 className="text-3xl font-bold mb-4">Features Of Our Device</h1>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      <li><strong>28 Weekly Medicine Containers</strong> — Allows daily 4 doses for a week.</li>
      <li><strong>4 Special Purpose Containers</strong> — For additional medications.</li>
      <li><strong>LED Alerts For Liquid Medications</strong> — Ensures timely consumption.</li>
      <li><strong>LED Alerts For Insulin</strong> — Ideal for diabetes patients.</li>
      <li><strong>Voice Alerts With LED Indicators</strong> — Clear and timely reminders for every dose.</li>
    </ul>
  </div>
));

const HowItWorksSection = memo(() => (
  <div className="border border-gray-300 rounded-xl p-6 shadow-md">
    <h1 className="text-3xl font-bold mb-4">How It Works</h1>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">1. Load Medicines In The Device</h2>
      <p className="text-gray-700">Organize medications into dedicated containers.</p>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">2. Set Schedules Through The App</h2>
      <p className="text-gray-700">Use the mobile app to program alerts and reminders.</p>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-semibold">3. Get Alerts On Time</h2>
      <p className="text-gray-700">LED indicators and voice alerts notify you when it’s time to take your medication.</p>
    </div>
    <div>
      <h2 className="text-xl font-semibold">4. Track Usage</h2>
      <p className="text-gray-700">Monitor medicine counts and refills conveniently through the app.</p>
    </div>
  </div>
));

const WhyChooseSection = memo(() => (
  <div className="border border-gray-300 rounded-xl p-6 shadow-md">
    <h1 className="text-3xl font-bold mb-4">Why Choose MediFor7?</h1>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      <li><strong>Elderly Care Made Easy</strong> — Reliable Assistance For Managing Complex Medication Schedules.</li>
      <li><strong>Hospital Efficiency</strong> — Helps Nurses Manage Patient Medications Seamlessly.</li>
      <li><strong>For Busy Professionals</strong> — No More Forgetting Daily Medications Amid A Busy Lifestyle.</li>
    </ul>
  </div>
));

export default function About() {
  return (
    <section id='about'>
    <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-8">
      {/* Left Column - narrower */}
       <SmoothCursor />
      <div className="flex flex-col w-full md:w-4/12 gap-8">
        <AboutSection />
        <FeaturesSection />
      </div>

      {/* Right Column - narrower */}
      <div className="flex flex-col w-full md:w-4/12 gap-8">
        <HowItWorksSection />
        <WhyChooseSection />
      </div>
    </div>
    </section>
  );
}
