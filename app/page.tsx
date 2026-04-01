"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// Header Component
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/96 backdrop-blur-md">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-20 h-16 max-w-[1440px] mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img 
            src="/logo.svg" 
            alt="Evergreen.ai" 
            width={122} 
            height={28}
            className="h-7 w-auto"
          />
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="text-sm text-white/80 hover:text-white transition-colors px-3 py-2"
          >
            Sign In
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-[#111111] bg-white hover:bg-gray-100 transition-colors px-5 py-2 rounded"
          >
            Try Free
          </a>
        </div>
      </nav>
    </header>
  );
}

// Hero heading copy keyed by URL ?type= param (case-insensitive)
const HERO_HEADINGS: Record<string, { main: string; accent: string }> = {
  ISO: {
    main: "Ask Your Hardest Incentive Stock Options Questions.",
    accent: "We're Ready.",
  },
  NSO: {
    main: "Ask Your Hardest Non-Qualified Stock Options Questions.",
    accent: "We're Ready.",
  },
  RSU: {
    main: "Ask Your Hardest Restricted Stock Units Questions.",
    accent: "We're Ready.",
  },
  ESPP: {
    main: "Ask Your Hardest ESPP & Equity Questions.",
    accent: "We're Ready.",
  },
};

const DEFAULT_HEADING = {
  main: "Ask Your Hardest Equity Question.",
  accent: "We're Ready.",
};

// Reads ?type= and returns the matching heading copy
function HeroHeading() {
  const searchParams = useSearchParams();
  const typeParam = (searchParams.get("type") ?? "").toUpperCase();
  const { main, accent } = HERO_HEADINGS[typeParam] ?? DEFAULT_HEADING;

  return (
    <h1 className="font-cormorant text-[48px] leading-[120%] lg:text-[88px] font-light text-white tracking-[-3.36052px] max-w-[815px] mx-auto">
      {main}
      <br />
      <span className="text-[#295CCC]">{accent}</span>
    </h1>
  );
}

// Hero Section Component
function HeroSection() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  
  const questions = [
    "What's a donor-advised fund?",
    "How can I offset large capital gains?",
    "Should I rent or buy in today's market?"
  ];

  return (
    <section className="bg-hero-gradient pt-32 pb-24 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Hero Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[10px] sm:text-xs font-medium tracking-[1.56px] uppercase text-[#9A948C] mb-4">
            Finally, an AI advisor that understands RSUs, ISOs, AMT, and IPO scenarios.
          </p>
          <Suspense
            fallback={
              <h1 className="font-cormorant text-[48px] leading-[120%] lg:text-[88px] font-light text-white tracking-[-3.36052px] max-w-[815px] mx-auto">
                {DEFAULT_HEADING.main}
                <br />
                <span className="text-[#295CCC]">{DEFAULT_HEADING.accent}</span>
              </h1>
            }
          >
            <HeroHeading />
          </Suspense>
        </div>

        {/* Chat Interface - Desktop */}
        <div className="hidden lg:block max-w-[1200px] mx-auto mb-12">
          <div className="bg-white rounded-2xl border border-[rgba(201,168,76,0.2)] overflow-hidden flex min-h-[720px]">
            {/* Left Side - Chat */}
            <div className="w-1/2 p-8 flex flex-col justify-between border-r border-[#D8D8D8]">
              <div className="flex-1 flex flex-col justify-center items-center">
                <h2 className="font-cormorant text-4xl text-black text-center mb-8">
                  Ask me any financial question...
                </h2>
                
                {/* Question Buttons */}
                <div className="flex flex-col gap-4 mb-8">
                  {questions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveQuestion(i)}
                      className={`px-4 py-3 rounded-full border text-sm transition-all ${
                        activeQuestion === i 
                          ? 'border-[#295CCC] text-[#295CCC] bg-blue-50' 
                          : 'border-[#727874] text-[#727874] hover:border-[#295CCC] hover:text-[#295CCC]'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="space-y-4">
                <div className="relative bg-[#F7F7F7] border border-[#ECE8DF] rounded-[27px] p-6 min-h-[120px]">
                  <textarea
                    placeholder="Ask me any financial question..."
                    className="w-full bg-transparent text-[#727874] text-lg placeholder:text-[#727874] resize-none outline-none"
                    rows={3}
                  />
                  <button className="absolute right-4 bottom-4 w-10 h-10 bg-[#B6B9B7] rounded-full flex items-center justify-center text-white text-xl hover:bg-[#295CCC] transition-colors">
                    ↑
                  </button>
                </div>
                <p className="text-xs text-[#727874] text-center">
                  <span className="font-medium">BETA</span> Have feedback? Share it above to help us improve. By messaging evergreen.ai, you agree to our{" "}
                  <a href="#" className="underline">Terms of Use</a> and{" "}
                  <a href="#" className="underline">Privacy Policy</a>.
                </p>
              </div>
            </div>

            {/* Right Side - Avatar */}
            <div className="w-1/2 bg-[#F7F7F7] p-4 flex flex-col">
              <button className="self-start p-2 mb-4">
                <img src="/book.svg" alt="Tools and experts" width={24} height={24} />
              </button>
              
              <div className="flex-1 bg-white rounded-2xl overflow-hidden">
                <div className="h-[329px] relative overflow-hidden">
                  <img 
                    src="/intro.png" 
                    alt="Bill Harris" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-5 flex gap-4">
                  <div className="w-[70px] h-[70px] bg-[#0E0E0E] rounded-[5px] flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[43px] text-white">e</span>
                  </div>
                  <div>
                    <p className="font-helvetica text-[22px] font-bold text-[#0E0E0E] leading-7 mb-1">
                      Bill Harris, Founder, Evergreen
                    </p>
                    <p className="font-helvetica text-[17px] font-light text-[#3B3E3C] leading-5 mb-2">
                      35-year veteran of financial technology startups
                    </p>
                    <p className="font-helvetica text-[13px] font-extralight text-[#575B58] leading-[17px]">
                      This is my AI replica trained to help answer your questions. Outputs are not a substitute for professional advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface - Mobile */}
        <div className="lg:hidden max-w-[360px] mx-auto mb-12">
          <div 
            className="mx-auto"
            style={{
              width: '328.9px',
              height: '674.25px',
              background: '#0E0E0E',
              boxShadow: '0px 0px 0px 1.6445px #2C2C2E, 0px 0px 0px 3.28901px #1C1C1E, 0px 0px 0px 4.11126px #3A3A3C, 0px 32.8901px 65.7802px rgba(0, 0, 0, 0.6), 0px 0px 82.2252px rgba(112, 148, 251, 0.1)',
              borderRadius: '44.4016px',
              padding: '5.76px'
            }}
          >
            <div 
              className="bg-white overflow-hidden flex flex-col"
              style={{
                width: '317.39px',
                height: '662.74px',
                borderRadius: '39.4681px'
              }}
            >
              {/* Top Section - Avatar */}
              <div 
                className="bg-[#F7F5F0] flex flex-col"
                style={{
                  padding: '47.6906px 14.8005px 0px',
                  height: '280.86px'
                }}
              >
                {/* Image Container */}
                <div 
                  className="overflow-hidden"
                  style={{
                    width: '287.79px',
                    height: '161.88px',
                    borderRadius: '8.22252px'
                  }}
                >
                  <img 
                    src="/intro.png" 
                    alt="Bill Harris" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Info Row */}
                <div 
                  className="flex"
                  style={{
                    padding: '9.86702px 1.6445px 0px',
                    gap: '8.22px'
                  }}
                >
                  {/* Avatar Icon */}
                  <div 
                    className="bg-[#0E0E0E] flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '34.53px',
                      height: '34.53px',
                      borderRadius: '2.46676px'
                    }}
                  >
                    <span 
                      className="text-white"
                      style={{
                        fontFamily: 'Georgia, serif',
                        fontSize: '21.3785px',
                        lineHeight: '24px'
                      }}
                    >
                      e
                    </span>
                  </div>
                  
                  {/* Text Info */}
                  <div style={{ width: '241.74px' }}>
                    <p 
                      style={{
                        fontFamily: 'Helvetica Neue, Arial, sans-serif',
                        fontWeight: 700,
                        fontSize: '10.6893px',
                        lineHeight: '14px',
                        color: '#0E0E0E'
                      }}
                    >
                      Bill Harris, Founder, Evergreen
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Helvetica Neue, Arial, sans-serif',
                        fontWeight: 300,
                        fontSize: '8.22252px',
                        lineHeight: '11px',
                        color: '#3B3E3C'
                      }}
                    >
                      35-year veteran of financial technology startups
                    </p>
                    <p 
                      style={{
                        fontFamily: 'Helvetica Neue, Arial, sans-serif',
                        fontWeight: 200,
                        fontSize: '6.57802px',
                        lineHeight: '9px',
                        color: '#575B58'
                      }}
                    >
                      This is my AI replica trained to help answer your
                    </p>
                  </div>
                </div>
              </div>

              {/* Notch Bar */}
              <div 
                className="bg-white flex items-center justify-center"
                style={{
                  width: '317.39px',
                  height: '9.87px'
                }}
              >
                <div 
                  style={{
                    width: '29.6px',
                    height: '4.11px',
                    background: '#D5D0C1',
                    borderRadius: '82.2252px'
                  }}
                />
              </div>

              {/* Bottom Section - Chat */}
              <div 
                className="flex flex-col items-center bg-white"
                style={{
                  padding: '26px 0px 0px',
                  gap: '23.09px',
                  height: '351px'
                }}
              >
                {/* Heading */}
                <p 
                  className="text-center"
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontWeight: 400,
                    fontSize: '23.0231px',
                    lineHeight: '26px',
                    color: '#0E0E0E',
                    width: '211.32px'
                  }}
                >
                  Ask me any financial question...
                </p>
                
                {/* Question Buttons */}
                <div 
                  className="flex flex-col items-center"
                  style={{
                    gap: '6.58px',
                    width: '284.5px'
                  }}
                >
                  {[
                    { text: "When should I exercise my RSUs?"},
                    { text: "How do I plan for early retirement?"},
                    { text: "What's the best strategy for my 401(k)?"}
                  ].map((q, i) => (
                    <button
                      key={i}
                      className="flex items-center justify-center"
                      style={{
                        height: '28.37px',
                        padding: '7.40027px 16.445px',
                        border: '0.822252px solid #E5E5E5',
                        borderRadius: '82.2252px',
                        fontFamily: 'Helvetica Neue, Arial, sans-serif',
                        fontWeight: 300,
                        fontSize: '9.86702px',
                        lineHeight: '12px',
                        textAlign: 'center',
                        color: '#3B3E3C'
                      }}
                    >
                      {q.text}
                    </button>
                  ))}
                </div>

                {/* Input Area */}
                <div 
                  className="flex flex-col"
                  style={{
                    gap: '5.9px',
                    width: '291.08px'
                  }}
                >
                  <div 
                    className="flex items-center justify-between bg-[#F7F5F0]"
                    style={{
                      width: '291.08px',
                      height: '41.11px',
                      padding: '0px 13.156px',
                      border: '0.822252px solid #ECE8DF',
                      borderRadius: '14.8005px'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Helvetica Neue, Arial, sans-serif',
                        fontWeight: 100,
                        fontSize: '9.04477px',
                        lineHeight: '11px',
                        color: '#727874'
                      }}
                    >
                      Ask me any financial question...
                    </span>
                    <button 
                      className="flex items-center justify-center"
                      style={{
                        width: '19.73px',
                        height: '19.73px',
                        background: '#B6B9B7',
                        borderRadius: '9.86702px'
                      }}
                    >
                      <span 
                        className="text-white"
                        style={{
                          fontFamily: 'Helvetica Neue, Arial, sans-serif',
                          fontWeight: 400,
                          fontSize: '15.7232px',
                          lineHeight: '11px'
                        }}
                      >
                        ↑
                      </span>
                    </button>
                  </div>
                  <p 
                    className="text-center"
                    style={{
                      fontFamily: 'Helvetica Neue, Arial, sans-serif',
                      fontWeight: 300,
                      fontSize: '8px',
                      lineHeight: '7px',
                      color: '#727874',
                    }}
                  >
                    By messaging evergreen.ai, you agree to our Terms of Use and Privacy Policy.
                  </p>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="flex-1 bg-white flex justify-center items-end pb-2">
                <div 
                  style={{
                    width: '121.69px',
                    height: '4.11px',
                    background: 'rgba(255, 255, 255, 0.25)',
                    borderRadius: '3.28901px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Below Chat */}
        <div className="text-center mb-16">
          <p className="text-white/80 text-base sm:text-lg max-w-[580px] mx-auto mb-6">
            Want guidance even more tailored to your situation? Connect your accounts so Evergreen.ai can work from your actual financial picture.
          </p>
          <button className="btn-primary inline-flex items-center gap-2 px-6 py-4 text-white font-medium">
            <span>Register Free</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Features Grid - Mobile Optimized */}
        <div 
          className="flex flex-col md:grid md:grid-cols-3 md:gap-0 mx-auto"
          style={{ maxWidth: '760px' }}
        >
          {/* Free */}
          <div 
            className="flex flex-col items-center"
            style={{
              padding: '20px 0px',
              gap: '4px',
              width: '100%',
              maxWidth: '358px',
              height: '110px'
            }}
          >
            <p 
              className="text-center"
              style={{
                fontFamily: 'var(--font-heebo), Heebo, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '45px',
                letterSpacing: '-0.75px',
                color: '#FFFFFF',
                width: '100%',
                height: '45px'
              }}
            >
              Free
            </p>
            <p 
              className="text-center"
              style={{
                fontFamily: 'var(--font-heebo), Heebo, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '21px',
                letterSpacing: '0.3px',
                color: 'rgba(255, 255, 255, 0.9)',
                width: '100%',
                height: '21px'
              }}
            >
              Financial guidance
            </p>
          </div>
          
          {/* Video, voice, & chat */}
          <div 
            className="flex flex-col items-center border-t md:border-t-0 md:border-x border-white/10"
            style={{
              padding: '20px 0px 32px',
              gap: '4px',
              width: '100%',
              maxWidth: '358px',
              height: '124px'
            }}
          >
            <p 
              className="text-center"
              style={{
                fontFamily: 'var(--font-heebo), Heebo, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '33px',
                letterSpacing: '-0.55px',
                color: '#FFFFFF',
                width: '100%',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Video, voice, & chat
            </p>
            <p 
              className="text-center"
              style={{
                fontFamily: 'var(--font-heebo), Heebo, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '21px',
                letterSpacing: '0.3px',
                color: 'rgba(255, 255, 255, 0.9)',
                width: '100%',
                height: '21px'
              }}
            >
              Whichever feels natural
            </p>
          </div>
          
          {/* 24/7 */}
          <div 
            className="flex flex-col items-center border-t md:border-t-0 border-white/10"
            style={{
              padding: '20px 0px',
              gap: '4px',
              width: '100%',
              maxWidth: '358px',
              height: '110px'
            }}
          >
            <p 
              className="text-center"
              style={{
                fontFamily: 'var(--font-heebo), Heebo, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '45px',
                letterSpacing: '-0.75px',
                color: '#FFFFFF',
                width: '100%',
                height: '45px'
              }}
            >
              24/7
            </p>
            <p 
              className="text-center"
              style={{
                fontFamily: 'var(--font-heebo), Heebo, sans-serif',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '21px',
                letterSpacing: '0.3px',
                color: 'rgba(255, 255, 255, 0.9)',
                width: '100%',
                height: '21px'
              }}
            >
              Available when you need it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      number: "01",
      title: "Vetted Financial Knowledge Base",
      description: "Our AI advice engine draws from a curated knowledge base that includes investment research, tax strategies, and planning frameworks reviewed for accuracy and compliance."
    },
    {
      number: "02",
      title: "Advanced Modeling in Seconds",
      description: "Simulate thousands of equity outcomes, including exercises, vesting, IPO scenarios, and tax impacts, in milliseconds. Get a secure, continuously updated view of your financial life as your client profile evolves."
    },
    {
      number: "03",
      title: "Instant Access, Tailored Guidance",
      description: "Your personal AI advisor is available 24/7 by chat, voice, or video. Ask any financial question—spanning investing, taxes, equity, retirement, and more—and receive advice customized to your situation."
    }
  ];

  return (
    <section className="bg-[#111111] py-24 lg:py-[120px] px-4 sm:px-6 lg:px-28">
      <div className="max-w-[1216px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Side - Heading */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <h2 
              className="font-cormorant text-center lg:text-left"
              style={{
                fontSize: '40px',
                lineHeight: '120%',
                fontWeight: 300,
                color: '#FFFFFF',
                letterSpacing: '-1.6px'
              }}
            >
              Meet Expert Advice for Tech Professionals
            </h2>
            <button className="btn-primary inline-flex items-center gap-2 px-6 py-4 text-white font-medium">
              <span>Ask your questions now</span>
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Right Side - Features List */}
          <div className="space-y-0">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-7 py-0">
                <div className="flex-shrink-0 w-7 pt-1.5">
                  <span className="font-lekton text-xs font-bold tracking-[0.96px] text-white/55">
                    {feature.number}
                  </span>
                </div>
                <div className={`flex-1 pt-5 ${index > 0 ? 'border-t border-white/[0.08]' : ''} pb-0`}>
                  <h3 className="font-cormorant text-2xl lg:text-[28px] leading-[30px] text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[17px] leading-[30px] font-light text-white/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Equity Insight Section
function EquityInsightSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      question: "When should I exercise my stock options?",
      answer: "Exercise timing can determine whether you trigger AMT or capture favorable tax treatment. Evergreen.ai models multiple exercise years so you can see potential outcomes before acting."
    },
    {
      question: "How much company stock is too much?",
      answer: "Concentration risk is real. We'll help you understand your exposure and diversification strategies."
    },
    {
      question: "What happens if my company IPOs?",
      answer: "IPO scenarios can dramatically change your financial picture. We model various outcomes to help you prepare."
    },
    {
      question: "Are my RSU taxes fully covered?",
      answer: "Withholding rates often don't match actual tax liability. We help you plan for the difference."
    },
    {
      question: "Could my shares qualify for QSBS?",
      answer: "Qualified Small Business Stock offers significant tax advantages. We can help determine if you qualify."
    }
  ];

  return (
    <section className="bg-[#FDFCFA] py-24 lg:py-[120px] px-4 sm:px-6 lg:px-[360px]">
      <div className="max-w-[720px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-11">
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[58px] lg:leading-[63px] font-light text-[#1A1510] tracking-[-1.45px] mb-6">
            Equity Insight at Your Fingertips
          </h2>
          <p className="text-base lg:text-[17px] leading-[30px] font-light text-[#7A7268]">
            For many tech professionals, equity compensation can represent 30–60% of total net worth. It can create life-changing wealth, or unexpected tax bills and concentration risk. Most financial tools weren&apos;t built for this complexity. Evergreen.ai was. Once we understand your unique financial picture, we give you personalized insight into all your equity compensation questions.
          </p>
        </div>

        {/* Accordion */}
        <div className="mb-11">
          {questions.map((item, index) => (
            <div 
              key={index}
              className="border-t border-[#EDE9E0]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <div className="flex-1 pr-4">
                  <p className="text-[17px] leading-6 text-[#1A1510]">{item.question}</p>
                  {openIndex === index && (
                    <p className="text-sm leading-5 text-[#7A7268] mt-3">
                      {item.answer}
                    </p>
                  )}
                </div>
                <span className="text-[22px] font-light text-[#7A7268] w-5 text-center flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
            </div>
          ))}
          <div className="border-t border-[#EDE9E0]"></div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary inline-flex items-center gap-2 px-6 py-4 text-white font-medium">
            <span>Try the AI advisor</span>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// Bill Harris Section
function BillHarrisSection() {
  return (
    <section className="bg-[#F7F7F7] py-24 lg:py-28 px-4 sm:px-6 lg:px-[220px]">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[88px] items-center">
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[68px] lg:leading-[80px] font-light text-[#1A1510] tracking-[-2px]">
              Built by Fintech Pioneer Bill Harris
            </h2>
            <p className="text-base lg:text-lg leading-[27px] font-light text-[#5A5248]">
              Bill Harris has founded nine companies in the financial technology space including investment firm Personal Capital, which he grew to $23B in assets. A 35-year industry veteran, he&apos;s also the former CEO of PayPal and Intuit where he ran TurboTax, the leading tax software.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[302.5px] flex-shrink-0">
            <div className="aspect-square rounded overflow-hidden relative">
              <img 
                src="/avatar.png" 
                alt="Bill Harris" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="bg-cta-gradient py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center gap-11 max-w-[580px] mx-auto">
        {/* Frame 10 - Text Content */}
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Frame 9 - Heading + Description */}
          <div className="flex flex-col items-start gap-6 w-full">
            {/* Heading */}
            <h2 
              className="font-cormorant w-full text-center"
              style={{
                fontWeight: 300,
                fontSize: '40px',
                lineHeight: '120%',
                letterSpacing: '-2px',
                color: '#FFFFFF'
              }}
            >
              Get Clarity About Your Equity
            </h2>
            
            {/* Description */}
            <p 
              className="font-heebo text-center"
              style={{
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: '120%',
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              Financial advice shouldn&apos;t be slow, generic, or confusing. Evergreen.ai sees your complete financial picture and delivers expert financial guidance powered by AI, instantly personalized to you.
            </p>
          </div>
          
          {/* Frame 11 - Button + Disclaimer */}
          <div className="flex flex-col items-center gap-4">
            {/* Button */}
            <button 
              className="flex items-center justify-center"
              style={{
                padding: '8px 20px',
                gap: '8.68px',
                background: '#295CCC',
                boxShadow: '0px 0px 40.4927px rgba(112, 148, 251, 0.35), 0px 2.89234px 10.1232px rgba(0, 0, 0, 0.3)',
                borderRadius: '7230.12px'
              }}
            >
              <span 
                className="font-heebo"
                style={{
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '21px',
                  letterSpacing: '-0.188002px',
                  color: '#FFFFFF'
                }}
              >
                Get started now
              </span>
              <span 
                style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: '15.9079px',
                  lineHeight: '19px',
                  letterSpacing: '-0.188002px',
                  color: '#FFFFFF'
                }}
              >
                →
              </span>
            </button>
            
            {/* Frame 12 - Disclaimer */}
            <div 
              className="flex flex-col items-start gap-3"
              style={{ width: '256px' }}
            >
              <p 
                className="font-heebo text-center"
                style={{
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '22px',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                Ask your first question and see the difference. Use it for free, no credit card required.
              </p>
              <p 
                className="font-heebo text-center"
                style={{
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '22px',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                Your financial data is encrypted, never sold, and never used to train external AI models.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-[1200px] mx-auto text-center">
        <div className="max-w-[580px] mx-auto">
          <h2 className="font-cormorant text-[80px] leading-[80px] font-light text-white tracking-[-2px] mb-6">
            Get Clarity About Your Equity
          </h2>
          <p className="text-[21px] leading-[34px] font-light text-white/80 mb-8">
            Financial advice shouldn&apos;t be slow, generic, or confusing. Evergreen.ai understands your unique financial picture and delivers expert-backed financial guidance powered by AI, personalized to you.<br /><span className="inline-block py-2"></span><br />Ask your first question and see the difference. Use it for free, no account or credit card required.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <button className="btn-primary inline-flex items-center gap-2 px-6 py-4 text-white font-medium">
              <span>Get started now</span>
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto mt-8 space-y-4 text-center">
          <p className="text-xs text-white/80 leading-[22px]">
            Evergreen.ai values your privacy. Your financial data is encrypted and is never sold.
          </p>
          <p className="text-xs text-white/80 leading-[22px]">
            Evergreen.ai is an artificial intelligence tool offered through Evergreen Wealth Corporation. The capabilities of Evergreen.ai are evolving and may be limited by data inputs, user configuration, and system permissions. Outputs are for informational purposes only and are not a substitute for advice from a qualified, licensed professional. Do not rely on outputs from Evergreen.ai or an AI advisor as the sole basis for any financial decision. Historical returns, expected returns, and probability projections are illustrative and do not reflect actual future performance.
          </p>
          <p className="text-xs text-white/80 leading-[22px]">
            Nothing herein should be construed as an offer, recommendation, or solicitation to buy or sell any security. All investing involves risk, including the possible loss of principal, and past performance does not guarantee future results.
          </p>
          <p className="text-xs text-white/80 leading-[22px]">
            Use of this tool does not create an advisory relationship; investment advisory services are offered separately through Evergreen Wealth Advisors a wholly-owned subsidiary of Evergreen Wealth Corporation.
          </p>
          <p className="text-xs text-white/80 leading-[22px]">
            By using this website and evergreen.ai you understand the information being presented is provided for informational purposes only and agree to our{" "}
            <a href="#" className="underline hover:text-white">Terms of Use</a> and{" "}
            <a href="#" className="underline hover:text-white">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-[#080806] py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo Column */}
          <div>
            <a href="/" className="inline-block mb-6">
              <img 
                src="/logo.svg" 
                alt="Evergreen.ai" 
                width={122} 
                height={28}
                className="h-7 w-auto"
              />
            </a>
          </div>

          {/* Site Navigation */}
          <div>
            <p className="text-[11px] leading-4 tracking-[0.88px] uppercase text-white/80 mb-4">Site</p>
            <nav className="space-y-2">
              {['Home', 'Evergreen.ai', 'Register for Evergreen.ai', 'Evergreen Wealth', 'Resources', 'About'].map((link) => (
                <a key={link} href="#" className="block text-[13px] leading-[18px] text-white/90 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal & Support */}
          <div>
            <p className="text-[11px] leading-4 tracking-[0.88px] uppercase text-white/80 mb-4">Legal & support</p>
            <nav className="space-y-2">
              {['FAQs', 'Privacy Center', 'Legal', 'Form CRS', 'Terms of Use'].map((link) => (
                <a key={link} href="#" className="block text-[13px] leading-[18px] text-white/90 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Client Service */}
          <div className="space-y-8">
            <div>
              <p className="text-[11px] leading-4 tracking-[0.88px] uppercase text-white/80 mb-4">Contact us</p>
              <nav className="space-y-2">
                {['LinkedIn', 'Instagram', 'Facebook'].map((link) => (
                  <a key={link} href="#" className="block text-[13px] leading-[18px] text-white/90 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-[11px] leading-4 tracking-[0.88px] uppercase text-white/80 mb-4">Client service</p>
              <nav className="space-y-2">
                <a href="tel:+18888840557" className="block text-[13px] leading-[18px] text-white/90 hover:text-white transition-colors">
                  +1 (888) 884-0557
                </a>
                <a href="mailto:clientservice@evergreenwealth.com" className="block text-[13px] leading-[18px] text-white/90 hover:text-white transition-colors">
                  clientservice@evergreenwealth.com
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10">
          <div className="space-y-4 text-[12px] leading-[21px] text-white/80">
            <p>
              Evergreen.ai is an artificial intelligence tool offered through Evergreen Wealth Corporation. The capabilities of Evergreen.ai are evolving and may be limited by data inputs, user configuration, and system permissions. Outputs are for informational purposes only and are not a substitute for advice from a qualified, licensed professional. Do not rely on outputs from Evergreen.ai or an AI advisor as the sole basis for any financial decision. Historical returns, expected returns, and probability projections are illustrative and do not reflect actual future performance.
            </p>
            <p>
              Nothing herein should be construed as an offer, recommendation, or solicitation to buy or sell any security. All investing involves risk, including the possible loss of principal, and past performance does not guarantee future results.
            </p>
            <p>
              Use of this tool does not create an advisory relationship; investment advisory services are offered separately through Evergreen Wealth Advisors a wholly-owned subsidiary of Evergreen Wealth Corporation.
            </p>
            <p>
              By using this website and evergreen.ai you understand the information being presented is provided for informational purposes only and agree to our{" "}
              <a href="#" className="underline hover:text-white">Terms of Use</a> and{" "}
              <a href="#" className="underline hover:text-white">Privacy Policy</a>.
            </p>
            <p>
              5540 Centerview Dr Ste 204, PMB 48153 · Raleigh, NC 27606
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <EquityInsightSection />
        <BillHarrisSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
