import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  span: string; // Tailwind col-span class
}

export interface Question {
  id: number;
  text: string;
  options: { label: string; value: number }[];
}