import { Zap, Activity, FileText, Search, BarChart3, Globe } from 'lucide-react';
import { Feature, Testimonial, Question } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Auto-SEO Optimization',
    description: 'Set it and forget it. Our AI rewrites meta tags, alt text, and headers while you sleep.',
    icon: Zap,
    span: 'md:col-span-2',
  },
  {
    id: 'f2',
    title: 'Real-time Rank Tracking',
    description: 'Watch your rise to Page 1 live. No 24h delays. Pure speed.',
    icon: Activity,
    span: 'md:col-span-1',
  },
  {
    id: 'f3',
    title: 'Content Strategy Bot',
    description: 'Generates blog outlines, FAQs, and viral hooks based on competitor gaps.',
    icon: FileText,
    span: 'md:col-span-1',
  },
  {
    id: 'f4',
    title: 'Visual SERP Analysis',
    description: 'See what Google sees. Heatmaps of your search presence.',
    icon: Search,
    span: 'md:col-span-2',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Jaden X.',
    role: 'Growth Hacker',
    avatar: 'https://picsum.photos/100/100?random=1',
    quote: "4Sight is literally a cheat code. My traffic doubled in 3 days. No cap.",
  },
  {
    id: 2,
    name: 'Sarah L.',
    role: 'Content Creator',
    avatar: 'https://picsum.photos/100/100?random=2',
    quote: "The automated blog strategy is wild. It does the heavy lifting so I can vibe.",
  },
  {
    id: 3,
    name: 'Mikey D.',
    role: 'SaaS Founder',
    avatar: 'https://picsum.photos/100/100?random=3',
    quote: "Finally, SEO tools that don't look like an Excel spreadsheet from 2005.",
  }
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Do you have an XML Sitemap submitted to GSC?",
    options: [
      { label: "Yes, fully updated", value: 10 },
      { label: "I think so?", value: 5 },
      { label: "What's a sitemap?", value: 0 },
    ]
  },
  {
    id: 2,
    text: "Is your site mobile-responsive?",
    options: [
      { label: "It's perfect on all devices", value: 10 },
      { label: "It's okay, mostly", value: 5 },
      { label: "It breaks on iPhone", value: 0 },
    ]
  },
  {
    id: 3,
    text: "How often do you publish new content?",
    options: [
      { label: "Daily / Weekly", value: 10 },
      { label: "Monthly", value: 5 },
      { label: "Rarely", value: 0 },
    ]
  }
];
