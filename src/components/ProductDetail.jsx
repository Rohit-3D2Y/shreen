import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

// Mock product database
const productData = {
  sofa: {
    title: "Sofa",
    heroImage: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Spacious and stylish sofas that redefine comfort in your living space.",
    variants: [
      {
        name: "Modern Gray Sofa",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
        description: "A spacious L-shaped sofa with plush cushions and a modern silhouette — perfect for family lounges and open living areas.",
      },
      {
        name: "Velvet Blue Sofa",
        image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZmF8ZW58MHx8MHx8fDA%3D",
        description: "Rich velvet upholstery and tufted backrest — this 3-seater adds elegance and comfort to any contemporary space.",
      },
      {
        name: "Beige Sectional",
        image: "https://images.unsplash.com/photo-1491926626787-62db157af940?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZmF8ZW58MHx8MHx8fDA%3D",
        description: "Reclining seats, padded armrests, and premium faux leather — designed for movie nights and ultimate relaxation.",
      },
      {
        name: "Compact Sofa Bed",
        image: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvZmF8ZW58MHx8MHx8fDA%3D",
        description: "A dual-function design that unfolds into a cozy bed — ideal for small apartments and guest rooms.",
      },
      {
        name: "Tufted Leather Sofa",
        image: "https://plus.unsplash.com/premium_photo-1683121701422-11cdf74c48a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
        description: "Timeless Chesterfield design with deep button tufting and rolled arms — a statement piece for luxury interiors.",
      },
      {
        name: "Sofa Chaise Lounge",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
        description: "A stylish chaise lounge with a sleek profile and soft upholstery — perfect for reading nooks or as an accent piece.",
      },
    ],
    whatsappNumber: "919999999999",
  },

  chairs: {
    title: "Chairs",
    heroImage: "https://images.unsplash.com/photo-1512324725833-abbc95d06090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNoYWlycyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
    description: "Comfort meets design in versatile chairs perfect for dining, lounging, or accenting any room.",
    variants: [
      {
        name: "VelvetHug Accent Chair",
        image: "https://images.unsplash.com/photo-1692216709296-f698ed0ff17d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlycyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
        description: "A plush velvet chair with curved arms and golden legs — ideal for adding a luxurious touch to any corner.",
      },
      {
        name: "ScandiCurve Lounge Chair",
        image: "https://images.unsplash.com/photo-1748975026911-b4f5db432a54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlycyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D ",
        description: "Inspired by Nordic simplicity, this lounge chair features smooth curves, wooden legs, and breathable fabric for cozy comfort.",
      },
      {
        name: "IronFrame Industrial Chair",
        image: "https://plus.unsplash.com/premium_photo-1723200799033-5ec309586df3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNoYWlycyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
        description: "turdy metal frame with a raw wood seat — built for modern lofts, studios, and industrial-themed interiors..",
      },
      {
        name: "CloudNest Dining Chair",
        image: "https://images.unsplash.com/photo-1728585239383-33407de71903?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNoYWlycyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
        description: "Cushioned and upholstered with soft linen — lightweight yet supportive, perfect for long dinners and conversations.",
      },
      {
        name: "RattanWeave Boho Chair",
        image: "https://plus.unsplash.com/premium_photo-1705169612410-50d9576035f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNoYWlycyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
        description: "Handwoven rattan with a natural finish — adds a breezy, earthy feel to patios, balconies, or relaxed living spaces.",
      },
      {
        name: "Classic Leather Armchair",
        image: "https://plus.unsplash.com/premium_photo-1673282248916-31daec36675e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "A timeless leather armchair with deep seating and classic design — perfect for reading nooks or as a statement piece in any room.",
      },
    ],
    whatsappNumber: "919999999999",
  },

  diningtables: {
    title: "Dining Table",
    heroImage: "https://images.unsplash.com/photo-1633424375095-b48faeb97c21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpbmluZyUyMHRhYmxlJTIwZm9yJTIwaW50ZXJpb3IlMjB3ZWJzaXRlJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Beautifully crafted tables that bring people together for everyday meals and special moments.",
    variants: [
      {
        name: "StoneCraft Dining Table",
        image: "https://images.unsplash.com/photo-1721614663078-3ab318dcd0ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpbmluZyUyMHRhYmxlJTIwZm9yJTIwaW50ZXJpb3IlMjB3ZWJzaXRlJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
        description: "A bold blend of natural stone top and wooden legs — adds a premium touch to any modern dining room.",
      },
      {
        name: "OakNest Extendable Table",
        image: "https://images.unsplash.com/photo-1740402065437-4edddd2932bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nJTIwdGFibGUlMjBmb3IlMjBpbnRlcmlvciUyMHdlYnNpdGUlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
        description: "Crafted from solid oak with extendable features — perfect for both everyday meals and family gatherings.",
      },
      {
        name: "GlassAura Dining Table",
        image: "https://images.unsplash.com/photo-1624870701178-fcb7b1226f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRpbmluZyUyMHRhYmxlJTIwZm9yJTIwaW50ZXJpb3IlMjB3ZWJzaXRlJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Sleek tempered glass with chrome legs — brings elegance and a light, airy feel to contemporary dining spaces.",
      },
      {
        name: "Rustica Farmhouse Table",
        image: "https://images.unsplash.com/photo-1545842331-61e95e91763c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRpbmluZyUyMHRhYmxlJTIwZm9yJTIwaW50ZXJpb3IlMjB3ZWJzaXRlJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
        description: "A warm, rustic-style wooden table with a distressed finish — ideal for cozy farmhouse or vintage interiors.",
      },
      {
        name: "ScandiLeaf Round Table",
        image: "https://plus.unsplash.com/premium_photo-1701163818441-27c39b781acd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGRpbmluZyUyMHRhYmxlJTIwZm9yJTIwaW50ZXJpb3IlMjB3ZWJzaXRlJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Scandinavian-inspired round table with a compact design — great for apartments and small dining corners.",
      },
      {
        name: "Robin Round Table",
        image: "https://images.unsplash.com/photo-1615803796379-b4cda8e9c09c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "A modern round table with a sleek design and sturdy base — perfect for casual dining or coffee breaks.",
      },
    ],
    whatsappNumber: "919999999999",
  },

  consoletables: {
    title: "Console Tables",
    heroImage: "https://images.unsplash.com/photo-1580813464570-f36c6aaa0859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uc29sZXRhYmxlcyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
    description: "Elegant and functional, our console tables enhance entryways, hallways, and living spaces effortlessly.",
    variants: [
      {
        name: "LuxeLine Console",
        image: "https://images.unsplash.com/photo-1746136608657-47c3fffbe2c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnNvbGV0YWJsZXMlMjBmb3IlMjBpbnRlcmlvciUyMHdlYnNpdGUlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
        description: "A slim, gold-accented console table with a marble top — perfect for elevating entryways and hallways with a touch of glamour.",
      },
      {
        name: "RustEdge Console",
        image: "https://images.unsplash.com/photo-1608181204104-5b49c215fcba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbnNvbGV0YWJsZXMlMjBmb3IlMjBpbnRlcmlvciUyMHdlYnNpdGUlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
        description: "A rustic wooden console with distressed finishes and black metal legs — ideal for adding warmth to industrial or farmhouse interiors.",
      },
      {
        name: "MinimalForm Console",
        image: "https://images.unsplash.com/photo-1712668403347-5f545a07245c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNvbnNvbGV0YWJsZXMlMjBmb3IlMjBpbnRlcmlvciUyMHdlYnNpdGUlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
        description: "Clean lines, solid tones, and no-frills design — this console blends seamlessly with modern and minimalist spaces..",
      },
      {
        name: "MirrorGleam Console",
        image: "https://images.unsplash.com/photo-1721523235025-0870962cf842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGNvbnNvbGV0YWJsZXMlMjBmb3IlMjBpbnRlcmlvciUyMHdlYnNpdGUlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
        description: "A mirrored console table that reflects elegance — perfect for adding depth and luxury to small living spaces or dressing areas.",
      },
      {
        name: "NatureNest Console",
        image: "https://plus.unsplash.com/premium_photo-1732730224515-43bd75ebb2b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxjb25zb2xldGFibGVzJTIwZm9yJTIwaW50ZXJpb3IlMjB3ZWJzaXRlJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Crafted from reclaimed wood with a raw, organic look — this eco-chic console brings nature indoors effortlessly.",
      },
      {
        name: "UrbanRust Console",
        image: "https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRhYmxlfGVufDB8fDB8fHww",
        description: "A blend of metal and wood with an urban edge — designed for modern lofts and contemporary spaces.",
      },
    ],
    whatsappNumber: "919999999999",
  },

  wardrobes: {
    title: "Wardrobes",
    heroImage: "https://plus.unsplash.com/premium_photo-1674815329032-421d305ad589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FyZHJvYmVzJTIwZm9yJTIwaW50ZXJpb3IlMjB3ZWJzaXRlJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Stylish wardrobes that combine functionality with modern design.",
    variants: [
      {
        name: "SleekSpace Wardrobe",
        image: "https://images.unsplash.com/photo-1573311392049-4186e3a47e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhcmRyb2JlcyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
        description: " A minimalistic, sliding-door wardrobe with matte finishes and soft-close drawers — ideal for modern urban apartments where elegance meets efficiency.",
      },
      {
        name: "RusticOak Armoire",
        image: "https://images.unsplash.com/photo-1722605895374-1faef3395cd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhcmRyb2JlcyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
        description: "Crafted from rich oak wood with a natural grain finish, this vintage-style wardrobe brings timeless charm to your bedroom space.",
      },
      {
        name: "MirrorEdge Closet",
        image: "https://images.unsplash.com/photo-1611048268330-53de574cae3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdhcmRyb2JlcyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
        description: "A full-length mirrored wardrobe that doubles as a dressing area — perfect for compact rooms and fashion lovers.",
      },
      {
        name: "SmartMod Modular Wardrobe",
        image: "https://images.unsplash.com/photo-1721739225070-5a1d80df82bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHdhcmRyb2JlcyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
        description: "A customizable modular wardrobe system with adjustable shelving, hanging space, and hidden compartments — designed for tech-savvy and organized users.",
      },
      {
        name: "ScandiWhite Wardrobe",
        image: "https://images.unsplash.com/photo-1723257129370-508fb3efbe88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdhcmRyb2JlcyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
        description: "Inspired by Scandinavian design, this all-white wardrobe features clean lines, soft tones, and airy aesthetics for a calming bedroom vibe.",
      },
      {
        name: "NordicBliss Wardrobe",
        image: "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FyZHJvYmVzfGVufDB8fDB8fHww",
        description: "A sleek Nordic-inspired wardrobe with a blend of wood and metal accents — designed for modern minimalists who appreciate simplicity and functionality.",
      },
    ],
    whatsappNumber: "919999999999",
  },

  tvunits: {
    title: "TV Units",
    heroImage: "https://plus.unsplash.com/premium_photo-1664300273542-25faf1e19fbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHR2dW5pdHMlMjBmb3IlMjBpbnRlcmlvciUyMHdlYnNpdGUlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
    description: "TV units that blend functionality with modern design.",
    variants: [
      {
        name: "TV Unit with Storage",
        image: "https://images.unsplash.com/photo-1621431968395-aa88d785ef9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHR2dW5pdHMlMjBmb3IlMjBpbnRlcmlvciUyMHdlYnNpdGUlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
        description: "Sleek design with ample storage space, perfect for modern living rooms.",
      },
      {
        name: "Unit with Floating Shelves",
        image: "https://plus.unsplash.com/premium_photo-1675615667689-40378da89573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHR2dW5pdHMlMjBmb3IlMjBpbnRlcmlvciUyMHdlYnNpdGUlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
        description: "A contemporary TV unit with floating shelves for a minimalist look.",
      },
      {
        name: "Cozy Corner TV Unit",
        image: "https://images.unsplash.com/photo-1678874943647-57adffa7d8da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHR2dW5pdHMlMjBmb3IlMjBpbnRlcmlvciUyMHdlYnNpdGUlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
        description: "A cozy corner TV unit with a rustic finish, ideal for small spaces.",
      },
      {
        name: "A unit with LED Lighting",
        image: "https://images.unsplash.com/photo-1653204280036-c272f16ec7ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHR2dW5pdHMlMjBmb3IlMjBpbnRlcmlvciUyMHdlYnNpdGUlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
        description: "A modern TV unit with integrated LED lighting for a stylish ambiance.",
      },
      {
        name: "Minimal Wooden TV Unit",
        image: "https://plus.unsplash.com/premium_photo-1661777872222-6ff4f83bc914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHR2dW5pdHMlMjBmb3IlMjBpbnRlcmlvciUyMHdlYnNpdGUlMjBob3Jpem9udGFsfGVufDB8fDB8fHww",
        description: "Classic and minimal wooden TV unit that complements any decor style.",
      },
      {
        name: "Classic Wooden TV Unit",
        image: "https://plus.unsplash.com/premium_photo-1681236323432-3df82be0c1b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHYlMjB1bml0c3xlbnwwfHwwfHx8MA%3D%3D",
        description: "This classic wooden TV unit features intricate carvings and a rich finish, adding elegance to your living room. ",
      },
    ],
    whatsappNumber: "919999999999",
  },

  lights: {
    title: "Lights",
    heroImage: "https://images.unsplash.com/photo-1623654803446-df2b3456cccd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMnx8fGVufDB8fHx8fA%3D%3D",
    description: "Lights that illuminate your space with style and warmth.",
    variants: [
      {
        name: "Industrial Glow Lounge",
        image: "https://images.unsplash.com/photo-1680084520830-72d0e5d67796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxpZ2h0cyUyMGZvciUyMGludGVyaW9yJTIwd2Vic2l0ZSUyMGhvcml6b250YWx8ZW58MHx8MHx8fDA%3D",
        description: "A spacious modern hall enhanced with warm pendant lighting and colorful seating — ideal for cafeterias, lobbies, or event spaces",
      },
      {
        name: "Soft Beam Counterlight",
        image: "https://images.unsplash.com/photo-1682789196658-ef1c03fd2110?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
        description: "Sleek dome lights evenly spaced over a minimalist bar-style workspace — perfect for offices, cafes, or co-working lounges.",
      },
      {
        name: "Celestial Cluster Lights",
        image: "https://images.unsplash.com/photo-1706986140142-989f3c07ead5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        description: "A dynamic array of pendant lamps creating a starry-sky effect — great for creative studios, showrooms, or modern lobbies.",
      },
      {
        name: "Boho Lantern Retreat",
        image: "https://images.unsplash.com/photo-1729656607411-127536c561f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
        description: "A cozy, wooden-themed ambiance with woven and glass wall lamps — best suited for homestays, patios, or earthy cafes.",
      },
      {
        name: "Vintage Charm Corner",
        image: "https://images.unsplash.com/photo-1673499137960-3b289a7198d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNXx8fGVufDB8fHx8fA%3D%3D",
        description: "A vintage-inspired corner with a wooden table, a soft glow lamp, and a rustic wall clock — perfect for cafes, reading nooks, or cozy corners.",
      },
      {
        name: "Natural Light Haven",
        image: "https://images.unsplash.com/photo-1743928824407-86b8a5c9e6b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        description: "Reflective surfaces and soft lighting create a serene atmosphere — ideal for yoga studios, wellness centers, or peaceful retreats.",
      },
    ],
    whatsappNumber: "919999999999",
  },

  decorelements: {
    title: "Customized Decorative",
    heroImage: "https://images.unsplash.com/photo-1742544637816-44a0e7f016c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVjb3IlMjBlbGVtZW50cyUyMGZvciUyMGhvbWV8ZW58MHx8MHx8fDA%3D",
    description: "Decorative elements that add a personal touch to your space.",
    variants: [
      {
        name: "Butterfly Bliss Wax Bowl",
        image: "https://images.unsplash.com/photo-1738598527245-ca03a410df25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVjb3IlMjBlbGVtZW50cyUyMGZvciUyMGhvbWV8ZW58MHx8MHx8fDA%3D",
        description: "A handcrafted wax decor bowl featuring delicately molded butterfly motifs, dried petals, and a soothing aesthetic — perfect for adding charm to your space or gifting.",
      },
      {
        name: " Midnight Orchid Elegance",
        image: "https://images.unsplash.com/photo-1598790024451-28fbe2f55374?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        description: "A framed painting of soft white orchids set against a dark backdrop — ideal for creating a serene and luxurious focal point in any room.",
      },
      {
        name: "Rustic Serenity Set",
        image: "https://plus.unsplash.com/premium_photo-1721762724244-8d723940bd50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
        description: "A calming corner featuring dried florals, earthy tones, and modern abstract wall art — a perfect harmony of minimalism and warmth.",
      },
      {
        name: "Green Corner Harmony",
        image: "https://images.unsplash.com/photo-1585676982649-a02348fba46c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        description: "A fresh blend of houseplants beneath a sleek black frame line-art piece — simple, clean, and refreshing for any modern living area.",
      },
      {
        name: "Tulip Glow Reflection",
        image: "https://images.unsplash.com/photo-1738655801817-08ceb640a377?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        description: "An elegant vanity setup with tulip flowers, a soft glow lamp, and a curved mirror — designed to bring natural light and gentle elegance into your room.",
      },
      {
        name: "Soft Glow Vanity",
        image: "https://plus.unsplash.com/premium_photo-1661428922280-3f8dd34341eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
        description: "A serene vanity corner with soft lighting, a round mirror, and delicate decor — perfect for creating a peaceful and stylish personal space.",
      },
    ],
    whatsappNumber: "919999999999",
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id];

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-600 font-bold">
        Product not found.
        <button onClick={() => navigate(-1)} className="ml-4 underline text-blue-600">Go Back</button>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f4ef] min-h-screen brico -tracking-wider">
      {/* Hero Image Section */}
      <div className="relative w-full h-[75vh] overflow-hidden">

        {/* Background Image */}
        <img
          src={product.heroImage}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />

        {/* Centered Content with Backdrop Blur */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center backdrop-blur-sm bg-black/30 rounded-xl p-6 md:p-10 text-white shadow-lg max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
              {product.title}
            </h1>
            <p className="mt-4 text-base md:text-xl text-gray-200 drop-shadow-sm">
              {product.description}
            </p>
          </div>
        </div>
      </div>



      {/* Product Variants Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* <h2 className="text-md sm:text-xl md:text-3xl font-semibold mb-10 text-[#3a2e25] leading-relaxed tracking-wide text-center">
          {product.description}
        </h2> */}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {product.variants.map((variant, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <img
                src={variant.image}
                alt={variant.name}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-[#3a2e25]">{variant.name}</h3>
                <p className="text-sm text-[#6b4f3b]">{variant.description}</p>
                <a
                  href={`https://wa.me/${product.whatsappNumber}?text=Hi, I'm interested in your ${variant.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 mt-3 bg-[#7f5539] text-white rounded-full text-sm hover:bg-[#9c6644] transition"
                >
                  <FaWhatsapp className="text-lg" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
