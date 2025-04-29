
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-pingup-light-purple">
      <div className="section-container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="heading-lg mb-6">
              Check in on friends, <br />
              <span className="text-pingup-purple">Stay connected</span>
            </h1>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              Pingup helps you build meaningful connections by making it easy to check in on friends and loved ones regularly.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="pingup-button">
                Get Started Free
              </Button>
              <Button variant="outline" className="border-pingup-purple text-pingup-purple hover:bg-pingup-light-purple">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-pingup-soft-blue rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pingup-soft-green rounded-full opacity-60"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 z-10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pingup-light-purple mb-4">
                    <span className="text-pingup-purple text-2xl font-bold">👋</span>
                  </div>
                  <h3 className="text-xl font-semibold">Time to check in!</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="font-medium">How's Sarah doing today?</p>
                    <p className="text-sm text-muted-foreground">Last ping: 7 days ago</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="font-medium">Check in on Mike</p>
                    <p className="text-sm text-muted-foreground">Last ping: 14 days ago</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full pingup-button">
                    Send a Ping
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
