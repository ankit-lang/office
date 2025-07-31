import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
      return (
            <div className="max-w-5xl mx-auto px-8">
                  <HoverEffect items={projects} />
            </div>
      );
}
export const projects = [
      {
            title: "Social Media Optimization",
            description:
                  "We amplify your brand's reach on social platforms through tailored content, engagement strategies, and community building. By harnessing social media's potential, we elevate brand awareness, drive traffic, and foster valuable connections to propel your business forward.",
            link: "/services/smo",
      },
      {
            title: "Search Engine Optimization",
            description:
                  "In SEO, we optimize your website to rank higher on search engine results pages, driving organic traffic and boosting your online visibility for increased conversions and business growth.",
            link: "/services/seo",
      },
      {
            title: "Web Design",
            description:
                  "In web design, we create visually stunning and user-friendly websites tailored to your brand's identity and objectives. Our team combines creativity and technical expertise to deliver responsive, intuitive, and engaging digital experiences that captivate your audience and drive convers",
            link: "/services/website-designing",
      },
      {
            title: "Graphic Design",
            description:
                  "Crafting visually compelling assets that effectively communicate your brand's message and values. From logos and branding materials to marketing collateral and digital graphics, our creative team ensures consistency and impact across all touchpoints, enhancing brand recognition and engagement",
            link: "/services/graphic-designing",
      },
      {
            title: "Content Writing",
            description:
                  "In content writing, we create engaging narratives across various platforms to captivate audiences, educate, and inspire action, enhancing your brand's online presence and driving meaningful connections.", 
            link: "/services/content-writing",
      },
      {
            title: "Video Editing",
            description:
                  "We refine and enhance your footage to create captivating visual stories. Our expertise lies in crafting seamless transitions, adding effects, and optimizing audio to produce professional-quality videos that engage and inspire your audience, effectively conveying your message and driving results.",
            link: "/services/video-editing",
      },
];
