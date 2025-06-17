export interface Sword {
  id: string;
  name: string;
  type: string;
  images: string[];
  description: string;
  specifications: {
    length: string;
    weight: string;
    blade: string;
    handle: string;
    guard: string;
  };
  materials: {
    steel: string;
    handle: string;
    fittings: string;
  };
  forgeTime: string;
  price?: string;
}

export const swords: Sword[] = [
  {
    id: "medieval-longsword",
    name: "Medieval Longsword",
    type: "European Longsword",
    images: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
    ],
    description: "A masterfully crafted medieval longsword featuring traditional European design elements. This blade embodies the pinnacle of medieval sword-making techniques with its perfect balance between cutting power and thrusting capability.",
    specifications: {
      length: "120cm (47 inches)",
      weight: "1.4kg (3.1 lbs)",
      blade: "90cm double-edged",
      handle: "25cm leather wrapped",
      guard: "Steel crossguard"
    },
    materials: {
      steel: "High carbon steel 1084",
      handle: "Oak core with leather wrap",
      fittings: "Mild steel pommel and guard"
    },
    forgeTime: "6 weeks",
    price: "Contact for pricing"
  },
  {
    id: "katana-folded",
    name: "Traditional Katana",
    type: "Japanese Katana",
    images: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
    ],
    description: "A traditionally forged katana following ancient Japanese techniques. The blade features a beautiful hamon (temper line) and has been folded multiple times to achieve exceptional strength and flexibility.",
    specifications: {
      length: "103cm (40.5 inches)",
      weight: "1.2kg (2.6 lbs)",
      blade: "73cm curved single-edge",
      handle: "28cm silk wrapped",
      guard: "Iron tsuba"
    },
    materials: {
      steel: "Tamahagane steel",
      handle: "Magnolia wood with silk ito",
      fittings: "Traditional iron and bronze"
    },
    forgeTime: "8 weeks",
    price: "Contact for pricing"
  },
  {
    id: "viking-sword",
    name: "Viking War Sword",
    type: "Viking Age Sword",
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop"
    ],
    description: "A fierce Viking war sword inspired by archaeological finds from the 9th century. This blade carries the spirit of Norse warriors with its distinctive fuller and pattern-welded construction.",
    specifications: {
      length: "95cm (37.4 inches)",
      weight: "1.1kg (2.4 lbs)",
      blade: "78cm pattern-welded",
      handle: "15cm carved wood",
      guard: "Simple steel crossguard"
    },
    materials: {
      steel: "Pattern-welded construction",
      handle: "Ash wood with leather grip",
      fittings: "Bronze and iron details"
    },
    forgeTime: "10 weeks",
    price: "Contact for pricing"
  },
  {
    id: "celtic-sword",
    name: "Celtic Warrior Blade",
    type: "Celtic Sword",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop"
    ],
    description: "An elegant Celtic sword featuring intricate knotwork patterns on the blade and traditional Celtic design elements. This piece represents the artistry of ancient Celtic metalworking.",
    specifications: {
      length: "85cm (33.5 inches)",
      weight: "0.9kg (2.0 lbs)",
      blade: "68cm leaf-shaped",
      handle: "15cm carved bone",
      guard: "Bronze decorated"
    },
    materials: {
      steel: "Spring steel 5160",
      handle: "Carved antler with bronze wire",
      fittings: "Bronze with Celtic knotwork"
    },
    forgeTime: "7 weeks",
    price: "Contact for pricing"
  },
  {
    id: "rapier-spanish",
    name: "Spanish Rapier",
    type: "Renaissance Rapier",
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop"
    ],
    description: "An elegant Spanish rapier from the Renaissance period, featuring an intricate swept hilt and razor-sharp thrusting blade. Perfect balance of form and deadly function.",
    specifications: {
      length: "130cm (51.2 inches)",
      weight: "1.3kg (2.9 lbs)",
      blade: "105cm narrow thrusting",
      handle: "22cm wire wrapped",
      guard: "Complex swept hilt"
    },
    materials: {
      steel: "High carbon steel 1075",
      handle: "Steel with silver wire wrap",
      fittings: "Steel with brass accents"
    },
    forgeTime: "9 weeks",
    price: "Contact for pricing"
  },
  {
    id: "claymore-scottish",
    name: "Scottish Claymore",
    type: "Highland Claymore",
    images: [
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop"
    ],
    description: "A mighty Scottish claymore, the legendary two-handed sword of Highland warriors. This massive blade strikes fear into enemies and commands respect on any battlefield.",
    specifications: {
      length: "140cm (55.1 inches)",
      weight: "2.2kg (4.9 lbs)",
      blade: "110cm double-edged",
      handle: "28cm leather bound",
      guard: "Angled steel quillons"
    },
    materials: {
      steel: "Spring steel 9260",
      handle: "Oak with leather binding",
      fittings: "Forged steel throughout"
    },
    forgeTime: "12 weeks",
    price: "Contact for pricing"
  },
  {
    id: "norman-kite-shield",
    name: "Norman Kite Shield",
    type: "Medieval Shield",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop"
    ],
    description: "A traditional Norman kite shield crafted with authentic medieval techniques. This defensive masterpiece features hand-painted heraldry and steel reinforcements, offering both protection and prestige on the battlefield.",
    specifications: {
      length: "120cm (47 inches)",
      weight: "3.2kg (7.1 lbs)",
      blade: "N/A - Shield",
      handle: "Leather grip with steel enarmes",
      guard: "Steel rim reinforcement"
    },
    materials: {
      steel: "Steel rim and boss",
      handle: "Layered hardwood with leather",
      fittings: "Hand-forged steel reinforcements"
    },
    forgeTime: "4 weeks",
    price: "Contact for pricing"
  },
  {
    id: "viking-round-shield",
    name: "Viking Round Shield",
    type: "Norse Shield",
    images: [
      "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop"
    ],
    description: "An authentic Viking round shield based on archaeological finds from the 9th century. Features traditional lime wood construction with iron boss and authentic Norse patterns painted with natural pigments.",
    specifications: {
      length: "90cm (35 inches)",
      weight: "2.8kg (6.2 lbs)",
      blade: "N/A - Shield",
      handle: "Single iron grip",
      guard: "Central iron boss"
    },
    materials: {
      steel: "Hand-forged iron boss and rim",
      handle: "Lime wood planks with linen backing",
      fittings: "Traditional iron and leather"
    },
    forgeTime: "5 weeks",
    price: "Contact for pricing"
  }
];

export const getSwordById = (id: string): Sword | undefined => {
  return swords.find(sword => sword.id === id);
};
