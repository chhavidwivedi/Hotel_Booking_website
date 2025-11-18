// src/assets/offers.js
// Import offer images
import offer1 from "./exclusiveOfferCardImg1.png";
import offer2 from "./exclusiveOfferCardImg2.png";
import offer3 from "./exclusiveOfferCardImg3.png";

export const exclusiveOffers = [
  {
    _id: "offer-1",
    title: "Luxury Suite Deal",
    description: "Enjoy 2 nights + free breakfast with premium room access.",
    priceOff: 20,
    expiryDate: "2025-12-31",
    image: offer1
  },
  {
    _id: "offer-2",
    title: "Romantic Escape",
    description: "Perfect for couples — candlelight dinner included.",
    priceOff: 25,
    expiryDate: "2025-11-30",
    image: offer2
  },
  {
    _id: "offer-3",
    title: "Family Package",
    description: "Kids stay free + complimentary breakfast for the family.",
    priceOff: 15,
    expiryDate: "2025-10-15",
    image: offer3
  }
];
