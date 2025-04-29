
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
    // Here you would typically handle the form submission
  };

  return (
    <section className="bg-white py-20">
      <div className="section-container max-w-4xl">
        <div className="bg-gradient-to-r from-pingup-light-purple to-pingup-soft-blue rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Financial Insights Delivered</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get expert financial tips, market updates, and exclusive investment opportunities directly in your inbox.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              required
              className="bg-white h-12 flex-grow"
            />
            <Button type="submit" className="pingup-button h-12 sm:flex-shrink-0">
              Subscribe
            </Button>
          </form>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
