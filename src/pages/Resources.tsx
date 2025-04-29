
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const resourceCategories = [
  {
    title: "Investment Guides",
    description: "Learn the fundamentals of investing and building wealth",
    items: [
      { title: "Beginner's Guide to Investing", link: "/resource/beginners-guide" },
      { title: "Understanding Market Cycles", link: "/resource/market-cycles" },
      { title: "Asset Allocation Strategies", link: "/resource/asset-allocation" },
    ],
    icon: "📚"
  },
  {
    title: "Retirement Planning",
    description: "Prepare for a secure and comfortable retirement",
    items: [
      { title: "Retirement Savings Calculator", link: "/resource/retirement-calculator" },
      { title: "IRA vs 401(k) Comparison", link: "/resource/ira-401k-comparison" },
      { title: "Social Security Benefits Guide", link: "/resource/social-security" },
    ],
    icon: "🏖️"
  },
  {
    title: "Tax Optimization",
    description: "Strategies to minimize your tax burden legally",
    items: [
      { title: "Tax-Loss Harvesting Explained", link: "/resource/tax-loss-harvesting" },
      { title: "Tax-Efficient Investing", link: "/resource/tax-efficient-investing" },
      { title: "Understanding Capital Gains", link: "/resource/capital-gains" },
    ],
    icon: "💰"
  },
  {
    title: "Market Insights",
    description: "Stay informed with our latest market analysis",
    items: [
      { title: "Quarterly Market Outlook", link: "/resource/quarterly-outlook" },
      { title: "Economic Indicators to Watch", link: "/resource/economic-indicators" },
      { title: "Global Market Trends", link: "/resource/global-trends" },
    ],
    icon: "📈"
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-pingup-light-purple to-pingup-soft-blue py-20">
          <div className="section-container">
            <h1 className="heading-lg text-center mb-6">Resource Center</h1>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Explore our collection of guides, calculators, and insights to help you make better financial decisions.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h2 className="heading-md mb-2">{category.title}</h2>
                      <p className="text-muted-foreground mb-6">{category.description}</p>
                      <ul className="space-y-3">
                        {category.items.map((item, i) => (
                          <li key={i}>
                            <a 
                              href={item.link}
                              className="block p-3 border border-gray-100 rounded-lg hover:bg-pingup-light-purple/20 hover:border-pingup-purple transition-all"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="section-container max-w-3xl text-center">
            <h2 className="heading-md mb-4">Need Personalized Guidance?</h2>
            <p className="text-lg mb-8">
              Our financial advisors are ready to help you create a custom plan tailored to your unique goals and circumstances.
            </p>
            <Button className="pingup-button">Schedule a Consultation</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
