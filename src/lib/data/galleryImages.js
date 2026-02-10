// Default gallery image list for GridMotion and MagicBento.
// Update these URLs if you want to use a different Cloudinary path.
const CLOUDINARY_BASE = 'https://res.cloudinary.com/drxvzwtfr/image/upload/';

// export const galleryImages = [

// ];

export const galleryImages = [
  `https://res.cloudinary.com/drxvzwtfr/image/upload/v1745769158/paridhi-2025/images/Gallery/2024/scaled_img-20231117-wa0017.jpg_2025-04-28_49673073`,
  `https://res.cloudinary.com/drxvzwtfr/image/upload/v1745769158/paridhi-2025/images/Gallery/2024/scaled_1000197437.jpg_2025-04-28_3F33495F.jpg`,
  `https://res.cloudinary.com/drxvzwtfr/image/upload/v1745769158/paridhi-2025/images/Gallery/2024/scaled_20240512_101121.jpg_2025-04-27_B7F85D44.jpg`,
  `https://res.cloudinary.com/drxvzwtfr/image/upload/v1745769158/paridhi-2025/images/Gallery/2024/20240512_103739.webp_2025-04-21_5996114E.webp`,
  `https://res.cloudinary.com/drxvzwtfr/image/upload/v1745769158/paridhi-2025/images/Gallery/2024/20240512_101445.webp_2025-04-21_855F5913.webp`,

  `${CLOUDINARY_BASE}v1769931657/IMG_5974_cy0vdy.jpg`,
  `${CLOUDINARY_BASE}v1769931652/IMG_5958_sayaod.jpg`,
  `${CLOUDINARY_BASE}v1769931651/IMG_5937_dnweuu.jpg`,
  `${CLOUDINARY_BASE}v1769931650/IMG_5933_sd3is0.jpg`,
  `${CLOUDINARY_BASE}v1769931649/IMG_5929_wpdcmr.jpg`,
  `${CLOUDINARY_BASE}v1769931648/IMG_5927_cu8r9s.jpg`,
  `${CLOUDINARY_BASE}v1769931647/IMG_5915_dydxjj.jpg`,
  `${CLOUDINARY_BASE}v1769931646/IMG_5909_d2ayjw.jpg`,
  `${CLOUDINARY_BASE}v1769931645/IMG_5833_f5kbdz.jpg`,
  `${CLOUDINARY_BASE}v1769931644/IMG_5778_nwaz7h.jpg`,
  `${CLOUDINARY_BASE}v1769931642/IMG_5690_vz6qlm.jpg`,
  `${CLOUDINARY_BASE}v1769931641/IMG_5677_ofshzk.jpg`,
  `${CLOUDINARY_BASE}v1769931640/12_zmncse.jpg`,
  `${CLOUDINARY_BASE}v1769931639/11_f01qru.jpg`,
  `${CLOUDINARY_BASE}v1769931638/10_pzpktz.jpg`,
  `${CLOUDINARY_BASE}v1769931637/9_hnydev.jpg`,
  `${CLOUDINARY_BASE}v1769931636/8_oivhp8.jpg`,
  `${CLOUDINARY_BASE}v1769931614/4_ackhw0.jpg`,
  `${CLOUDINARY_BASE}v1769931609/3_oltfyn.jpg`,
  `${CLOUDINARY_BASE}v1769931605/6_tkk0nz.jpg`,
  `${CLOUDINARY_BASE}v1769931603/7_kyyfn2.jpg`,
  `${CLOUDINARY_BASE}v1769931603/2_sdx7lv.jpg`,
  `${CLOUDINARY_BASE}v1769931603/5_qrhu2z.jpg`,
  `${CLOUDINARY_BASE}v1769931696/1_nzlyo4.jpg`,
];

export const getGridItems = (total = 5) => {
  return Array.from({ length: total }, (_, i) => galleryImages[i % galleryImages.length]);
};

export default galleryImages;
