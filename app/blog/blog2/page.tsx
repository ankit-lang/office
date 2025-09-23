import Foot from "@/components/Footer";
import { NavbarDemo } from "@/components/Navbar";
import React from "react";

export default function MaitreyaDigitalMarketing() {
  return (
    <main className="min-h-screen  bg-gray-50 ">
      <NavbarDemo/>
      <header className=" pt-32 max-w-4xl mx-auto p-2 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
          The Power of SEO: Boost Your Online Visibility
        </h1>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          In today's digital age, having a strong online presence is crucial for the
          success of any business. With millions of websites vying for attention,
          how can you ensure that your brand stands out from the crowd? The answer
          lies in search engine optimization (SEO).
        </p>
      </header>

      <section className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
        <article className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900">Why SEO matters</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Did you know that 93% of online experiences begin with a search engine?
            That's right — the majority of internet users rely on search engines like
            Google to find information, products, and services. By optimizing your
            website for relevant keywords and phrases, you can improve your search
            engine rankings and drive more organic traffic to your site.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            But the benefits of SEO go beyond just increased visibility. Studies show
            that 75% of users never scroll past the first page of search results. By
            securing a top spot on the search engine results page (SERP), you can
            dramatically increase your chances of attracting qualified leads and
            converting them into customers.
          </p>

          <p className="mt-4 text-sm text-gray-600">
            At Maitreya Digital, we understand the power of SEO and its impact on
            your bottom line. With our comprehensive SEO services, we'll help you
            climb the search engine rankings and dominate your industry. From keyword
            research and on-page optimization to link building and content creation,
            we have the expertise and tools to take your online presence to the next
            level.
          </p>

          {/* <div className="mt-6">
            <a
              className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow-sm hover:brightness-95"
              href="#contact"
            >
              Get a Free SEO Audit
            </a> */}
          {/* </div> */}
        </article>

        <article className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900">Harnessing Social Media</h2>

          <p className="mt-3 text-gray-700 leading-relaxed">
            With over 4.2 billion active social media users worldwide, it's no
            secret that social media has become a powerhouse for businesses looking
            to connect with their audience. The key lies in understanding your
            target audience and crafting engaging content that resonates with them.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            Whether you're sharing behind-the-scenes glimpses of your business,
            promoting special offers, or hosting interactive polls and Q&amp;A
            sessions, social media provides endless opportunities to engage with
            your followers and build meaningful relationships.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            Studies show that 71% of consumers who have had a positive experience
            with a brand on social media are likely to recommend it to others. By
            cultivating a strong presence on platforms like Facebook, Instagram,
            and Twitter, you can increase brand loyalty and generate valuable
            word-of-mouth referrals.
          </p>

          <p className="mt-4 text-sm text-gray-600">
            At Maitreya Digital, we specialize in creating dynamic social media
            strategies that drive results. From content creation and community
            management to paid advertising and influencer partnerships, we'll help
            you harness the power of social media to achieve your business goals.
          </p>
        </article>

        <article className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900">The ROI of Email Marketing</h2>

          <p className="mt-3 text-gray-700 leading-relaxed">
            In today's crowded digital landscape, it can be challenging to capture
            your audience's attention and drive meaningful engagement. That's where
            email marketing comes in. With an average ROI of $42 for every $1 spent,
            email marketing remains one of the most effective and cost-efficient
            ways to reach your target audience.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            Email allows you to deliver personalized messages directly to your
            subscribers' inboxes, ensuring that your content gets seen and heard.
            Whether you're sharing promotional offers, announcing new products, or
            providing valuable tips and insights, email lets you tailor your
            messaging to the individual needs and interests of your audience.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            Studies show that 59% of consumers say that marketing emails influence
            their purchase decisions. By nurturing your leads with targeted email
            campaigns, you can move them through the sales funnel and ultimately
            drive conversions.
          </p>

          <p className="mt-4 text-sm text-gray-600">
            At Maitreya Digital, we offer comprehensive email marketing services
            designed to help you achieve your business goals. From building
            responsive email templates and segmenting your audience to tracking
            performance metrics and optimizing campaigns for maximum results, we'll
            help you unlock the full potential of email marketing and drive
            measurable ROI for your business.
          </p>
        </article>
      </section>

      <section id="contact" className="max-w-4xl mb-10  mx-auto mt-12 text-center">
        <div className="inline-block bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">Ready to Grow?</h3>
          <p className="mt-2 text-gray-600">Contact Maitreya Digital and let’s build a strategy that works.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50"
              href="mailto:hello@maitreyadigital.example"
            >
              info@maitreyadigital.com
            </a>
            <a
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:brightness-95"
              href="#"
            >
              Request a Proposal
            </a>
          </div>
        </div>
      </section>
      <Foot/>
    </main>
  );
}
