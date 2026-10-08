/**
 * WINCHESTER PLACE MEN'S HAIRSTYLING
 * Centralized Business Configuration
 * 154 Queen St S, Streetsville, Mississauga, ON
 */

export const BUSINESS_DATA = {
  name: "Winchester Place Men's Hairstyling",
  tagline: "Traditional Barbering in Streetsville",
  category: "Barbershop / Men's Hairstyling",
  
  contact: {
    displayPhone: "905-826-8622",
    internationalPhone: "+1 905-826-8622",
    telLink: "tel:+19058268622",
  },

  location: {
    street: "154 Queen St S",
    area: "Streetsville",
    city: "Mississauga",
    province: "ON",
    postalCode: "L5M 2P4",
    country: "Canada",
    fullAddress: "154 Queen St S, Mississauga, ON L5M 2P4, Canada",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=154+Queen+St+S%2C+Mississauga%2C+ON+L5M+2P4%2C+Canada",
    mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=154+Queen+St+S%2C+Mississauga%2C+ON+L5M+2P4%2C+Canada",
    embedMapUrl: "https://maps.google.com/maps?q=154+Queen+St+S%2C+Mississauga%2C+ON+L5M+2P4%2C+Canada&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },

  policies: {
    walkIns: "Walk-Ins Welcome"
  },

  // Public operating hours confirmed via Google Maps
  hours: [
    { day: "Monday", hours: "Closed", verified: true, isClosed: true, openTime: null, closeTime: null },
    { day: "Tuesday", hours: "9:00 AM – 7:00 PM", verified: true, isClosed: false, openTime: "09:00", closeTime: "19:00" },
    { day: "Wednesday", hours: "9:00 AM – 7:00 PM", verified: true, isClosed: false, openTime: "09:00", closeTime: "19:00" },
    { day: "Thursday", hours: "9:00 AM – 7:00 PM", verified: true, isClosed: false, openTime: "09:00", closeTime: "19:00" },
    { day: "Friday", hours: "9:00 AM – 7:00 PM", verified: true, isClosed: false, openTime: "09:00", closeTime: "19:00" },
    { day: "Saturday", hours: "8:00 AM – 5:00 PM", verified: true, isClosed: false, openTime: "08:00", closeTime: "17:00" },
    { day: "Sunday", hours: "Closed", verified: true, isClosed: true, openTime: null, closeTime: null },
  ],
  hoursNotice: "Holiday hours may vary. Please call ahead.",

  // Publicly listed core services
  pricingNotice: "Call for current pricing.",
  services: [
    {
      id: "haircuts",
      name: "Men's Haircuts",
      description: "Precision haircutting and styling for men, seniors, and boys of all ages tailored to your preference.",
      image: "assets/images/haircut.jpg",
      imageAlt: "Men's haircuts and styling at Winchester Place Men's Hairstyling",
      pricingNote: "Call for current pricing"
    },
    {
      id: "beard-trims",
      name: "Beard Trims & Shaping",
      description: "Neat beard shaping, trimming, and clean line-ups for a sharp, confident appearance.",
      image: "assets/images/beard-trim.jpg",
      imageAlt: "Beard trimming and grooming",
      pricingNote: "Call for current pricing"
    },
    {
      id: "head-shaves",
      name: "Head Shaves",
      description: "A clean, smooth head-shaving service delivered with experienced barbershop care.",
      image: "assets/images/head-shave.jpg",
      imageAlt: "Smooth head shaving service",
      pricingNote: "Call for current pricing"
    },
    {
      id: "hot-towel-shaves",
      name: "Traditional Hot Towel Shaves",
      description: "Classic barbershop hot towel shave for skin comfort and a close finish.",
      image: "assets/images/hot-towel.jpg",
      imageAlt: "Classic hot towel shave treatment",
      pricingNote: "Call for current pricing"
    }
  ],

  // Excerpts from Google reviews with initials instead of stored avatar images
  reviews: [
    {
      author: "Kapil Gupta",
      initials: "KG",
      account: "Google Reviewer",
      rating: 5,
      date: "Google Review",
      quote: "Finally a barbershop that truly understands how to cut men’s hair! Aldo is amazing at his craft. Great cut and conversation!"
    },
    {
      author: "Keith Macwan",
      initials: "KM",
      account: "Google Reviewer",
      rating: 5,
      date: "Google Review",
      quote: "We had an amazing experience with Aldo when he cut my 3-year-old’s hair! He was incredibly patient, gentle, and made my little one feel completely at ease. Fantastic neat cut!"
    },
    {
      author: "Hailey Furster",
      initials: "HF",
      account: "Google Reviewer",
      rating: 5,
      date: "Google Review",
      quote: "We just dropped in to have my son's first haircut and Samir was incredible! He worked so hard to put my son at ease and was so skilled to deliver a quality cut."
    },
    {
      author: "Dan Wolfe",
      initials: "DW",
      account: "Local Guide",
      rating: 5,
      date: "Google Review",
      quote: "Excellent services. I normally request a trim and a shave. Well kept and clean shop. Haircuts and shaving are the main services given. Walk-ins welcome."
    }
  ]
};
