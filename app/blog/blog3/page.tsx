"use client";
import Foot from "@/components/Footer";
import { NavbarDemo } from "@/components/Navbar";
import React from "react";

export default function DigitalMarketingArticle() {
  return (
      <>
    <article className="min-h-screen bg-gray-50  md:px-4 px-1  sm:px-6 lg:px-8">
      <NavbarDemo/>
      <div className="mx-auto pt-20 max-w-5xl">
        {/* Hero */}
        <header className="mb-10 rounded-2xl bg-white md:p-8  p-4 shadow-lg">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold leading-tight text-gray-900">
                The Digital Marketing Edge: Empowering Your Business in the Modern Age
              </h1>
              <p className="mt-3 max-w-2xl text-gray-600">
                Discover why digital marketing matters and how a specialized agency can
                help elevate your brand online.
              </p>
            </div>

            {/* <div className="mt-4 flex items-center gap-4 lg:mt-0">
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                Maitreya Digital — Delhi NCR
              </span>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Contact Us
              </a>
            </div> */}
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main column */}
          <main className="order-2 lg:order-1 lg:col-span-2">
            <section className="space-y-6 rounded-xl bg-white md:p-6 p-2 shadow">
              <h2 className="text-xl font-bold text-gray-900">Understanding Digital Marketing</h2>
              <p className="text-gray-700">
                <strong>What is Digital Marketing?</strong> Digital marketing
                encompasses all marketing efforts that use the internet or an electronic
                device. Businesses leverage channels such as search engines, social
                media, email, and websites to connect with current and prospective
                customers. Popular strategies include Search Engine Optimization (SEO),
                Social Media Optimization (SMO), Content Marketing, and Email Marketing.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">The Need for Digital Marketing</h3>
              <p className="text-gray-700">
                Consumers are constantly online—digital marketing is no longer optional.
                Below are the core reasons your business should prioritize it.
              </p>

              <ul className="mt-4 space-y-3 pl-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                  <div>
                    <strong>Broader Reach and Visibility:</strong> Techniques like SEO and
                    targeted social campaigns help your brand reach a global audience.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                  <div>
                    <strong>Cost-Effective Solutions:</strong> Data-driven strategies make
                    every marketing rupee count compared with many traditional channels.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                  <div>
                    <strong>Measurable Results:</strong> Analytics allow you to track
                    performance and continuously optimize campaigns.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                  <div>
                    <strong>Enhanced Customer Engagement:</strong> Personalized content
                    fosters loyalty and increases conversions.
                  </div>
                </li>
              </ul>
            </section>

            <section className="mt-6 rounded-xl bg-white md:p-6 p-2 shadow">
              <h2 className="text-xl font-bold text-gray-900">How a Digital Marketing Agency Can Help</h2>
              <p className="text-gray-700">
                Agencies bring experience, tools, and a strategic lens. Here are the
                core services that typically move the needle.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <article className="rounded-lg border border-gray-100 p-4">
                  <h4 className="font-semibold">SEO (Search Engine Optimization)</h4>
                  <p className="mt-2 text-sm text-gray-600">Improve organic visibility and attract qualified traffic.</p>
                </article>

                <article className="rounded-lg border border-gray-100 p-4">
                  <h4 className="font-semibold">SMO (Social Media Optimization)</h4>
                  <p className="mt-2 text-sm text-gray-600">Build and engage your audience on social platforms.</p>
                </article>

                <article className="rounded-lg border border-gray-100 p-4">
                  <h4 className="font-semibold">Content Creation</h4>
                  <p className="mt-2 text-sm text-gray-600">Create content that educates, converts, and retains customers.</p>
                </article>

                <article className="rounded-lg border border-gray-100 p-4">
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="mt-2 text-sm text-gray-600">Build a responsive site that converts visitors into customers.</p>
                </article>

                <article className="rounded-lg border border-gray-100 p-4">
                  <h4 className="font-semibold">Analytics & Reporting</h4>
                  <p className="mt-2 text-sm text-gray-600">Measure performance and iterate using real data.</p>
                </article>

                <article className="rounded-lg border border-gray-100 p-4">
                  <h4 className="font-semibold">Customized Strategies</h4>
                  <p className="mt-2 text-sm text-gray-600">Tailored plans that align with your unique goals and audience.</p>
                </article>
              </div>
            </section>

            <section className="mt-6 rounded-xl bg-white md:p-6 p-2 shadow">
              <h2 className="text-xl font-bold text-gray-900">The Subtle Advantage of Choosing the Right Partner</h2>
              <p className="text-gray-700">
                Choosing an agency that matches your values and vision makes collaboration
                smoother and results more predictable. Look for transparency, past
                results, and a team that listens.
              </p>

              <h3 className="mt-4 text-lg font-semibold">The Maitreya Digital Approach</h3>
              <p className="text-gray-700">
                Based in Delhi NCR and operating since 2022, Maitreya Digital focuses on
                collaboration, innovation, and measurable outcomes. Their client-centric
                approach emphasizes long-term partnerships built on trust and shared
                goals.
              </p>

              <h3 className="mt-4 text-lg font-semibold">Building Lasting Partnerships</h3>
              <p className="text-gray-700">Maitreya Digital prioritizes integrity and mutual success by working closely with clients to craft strategies that actually solve business problems.</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
                >
                  Learn More
                </a>

                <a
                  id="contact"
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  Get in Touch
                </a>
              </div>
            </section>

            <footer className="mt-8 text-sm text-gray-500">
              <p>
                Stay updated by subscribing to industry newsletters and blogs — continuous
                learning is key to maintaining a competitive edge.
              </p>
            </footer>
          </main>

          {/* Sidebar */}
          <aside className="order-1 lg:order-2">
            <div className="sticky top-32 space-y-6 rounded-xl bg-white p-6 shadow">
              <div>
                <h4 className="text-sm font-semibold text-gray-500">About Maitreya Digital</h4>
                <p className="mt-2 text-gray-700 text-sm">
                  Since 2022, Maitreya Digital (Delhi NCR) has delivered tailored digital
                  strategies focused on measurable growth.
                </p>
              </div>

              <div className="border-t pt-4">
                <h5 className="text-sm font-medium text-gray-900">Quick Tips</h5>
                <ul className="mt-2 text-sm text-gray-600">
                  <li className="mt-2">Audit your website quarterly.</li>
                  <li className="mt-2">Prioritize content that answers customer questions.</li>
                  <li className="mt-2">Measure campaigns and pivot fast.</li>
                </ul>
              </div>

              <div className="mt-4">
                <a href="/blog" className="block rounded-md bg-indigo-50 px-4 py-2 text-center text-sm font-semibold text-indigo-700">
                  View Case Studies
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* CTA strip */}
        <div className="mt-10 rounded-2xl mb-10 bg-gradient-to-r from-indigo-600 to-indigo-500 p-6 text-white shadow-lg">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <h3 className="text-lg font-bold">Ready to elevate your digital presence?</h3>
                <p className="mt-1 text-sm">Partner with a team that understands growth, metrics, and creativity.</p>
              </div>

              <div className="mt-3 flex gap-3 lg:mt-0">
                <a className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-600" href="/contact">Contact Maitreya Digital</a>
                <a className="inline-flex items-center rounded-md border border-white px-4 py-2 text-sm font-semibold text-white" href="/services">See Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
      <Foot/>
      </>
  );
}
