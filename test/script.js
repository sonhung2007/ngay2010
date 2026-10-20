/**
 * TIỆM HOA 20/10 - SCRIPT LOGIC
 * Tương tác cắm hoa, âm thanh, hiệu ứng cánh hoa rơi & bức thư gửi chị
 */

// ==========================================
// 1. DATA DEFINITIONS & FLOWER ASSETS (SVG)
// ==========================================
const FLOWERS_DATA = [
  {
    id: 'tulip',
    name: 'Hoa Tulip Hồng',
    meaning: 'Tượng trưng cho sự dịu dàng, thanh nhã và một trái tim luôn được nâng niu, trân trọng.',
    svg: `
      <svg viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="tStem" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#4a6f52"/>
            <stop offset="50%" stop-color="#699472"/>
            <stop offset="100%" stop-color="#44654b"/>
          </linearGradient>
          <linearGradient id="tLeaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#7aa584"/>
            <stop offset="100%" stop-color="#4e7556"/>
          </linearGradient>
          <linearGradient id="tPetalBack" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#be185d"/>
            <stop offset="70%" stop-color="#e11d48"/>
            <stop offset="100%" stop-color="#fda4af"/>
          </linearGradient>
          <linearGradient id="tPetalMid" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#db2777"/>
            <stop offset="60%" stop-color="#f472b6"/>
            <stop offset="100%" stop-color="#ffe4e6"/>
          </linearGradient>
          <linearGradient id="tPetalFront" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#e11d48"/>
            <stop offset="50%" stop-color="#fb7185"/>
            <stop offset="100%" stop-color="#fff1f2"/>
          </linearGradient>
        </defs>
        <path d="M50 75 Q26 70 20 45 Q28 60 50 78 Z" fill="url(#tLeaf)"/>
        <path d="M50 82 Q74 72 78 40 Q70 62 50 85 Z" fill="url(#tLeaf)"/>
        <path d="M50 48 Q49 85 50 118" stroke="url(#tStem)" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M50 12 C44 26, 42 40, 50 48 C58 40, 56 26, 50 12 Z" fill="url(#tPetalBack)"/>
        <path d="M50 48 C32 46, 26 30, 36 18 C45 28, 48 40, 50 48 Z" fill="url(#tPetalMid)"/>
        <path d="M50 48 C68 46, 74 30, 64 18 C55 28, 52 40, 50 48 Z" fill="url(#tPetalMid)"/>
        <path d="M50 49 C39 49, 36 34, 43 20 C48 18, 52 18, 57 20 C64 34, 61 49, 50 49 Z" fill="url(#tPetalFront)"/>
        <path d="M50 46 Q50 32 49 23" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" opacity="0.6" fill="none"/>
      </svg>
    `
  },
  {
    id: 'sunflower',
    name: 'Hoa Hướng Dương',
    meaning: 'Biểu tượng của nụ cười rực rỡ, nguồn năng lượng tích cực và luôn tỏa sáng như ánh mặt trời.',
    svg: `
      <svg viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="sStem" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#4d6f46"/>
            <stop offset="100%" stop-color="#698f60"/>
          </linearGradient>
          <linearGradient id="sLeaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#739e6a"/>
            <stop offset="100%" stop-color="#47693f"/>
          </linearGradient>
          <linearGradient id="sPetalBack" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#d97706"/>
            <stop offset="100%" stop-color="#f59e0b"/>
          </linearGradient>
          <linearGradient id="sPetalFront" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#f59e0b"/>
            <stop offset="70%" stop-color="#fbbf24"/>
            <stop offset="100%" stop-color="#fef08a"/>
          </linearGradient>
          <radialGradient id="sCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3e1a06"/>
            <stop offset="60%" stop-color="#5a290a"/>
            <stop offset="85%" stop-color="#854d0e"/>
            <stop offset="100%" stop-color="#ca8a04"/>
          </radialGradient>
        </defs>
        <path d="M50 82 Q20 74 16 52 Q34 56 50 78 Z" fill="url(#sLeaf)"/>
        <path d="M50 80 Q32 68 22 56" stroke="#92b88a" stroke-width="1.5" fill="none"/>
        <path d="M50 48 Q49 85 50 118" stroke="url(#sStem)" stroke-width="6" stroke-linecap="round" fill="none"/>
        <g transform="translate(50, 44)">
          <g fill="url(#sPetalBack)">
            <polygon points="0,-38 5,-20 -5,-20"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(22.5)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(45)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(67.5)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(90)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(112.5)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(135)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(157.5)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(180)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(202.5)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(225)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(247.5)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(270)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(292.5)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(315)"/>
            <polygon points="0,-38 5,-20 -5,-20" transform="rotate(337.5)"/>
          </g>
          <g fill="url(#sPetalFront)">
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(11.25)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(33.75)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(56.25)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(78.75)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(101.25)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(123.75)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(146.25)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(168.75)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(191.25)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(213.75)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(236.25)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(258.75)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(281.25)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(303.75)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(326.25)"/>
            <polygon points="0,-35 6,-18 -6,-18" transform="rotate(348.75)"/>
          </g>
          <circle cx="0" cy="0" r="19" fill="url(#sCenter)"/>
          <circle cx="0" cy="0" r="17" fill="none" stroke="#eab308" stroke-width="1.2" stroke-dasharray="2 3"/>
          <circle cx="0" cy="0" r="13" fill="none" stroke="#ca8a04" stroke-width="1.2" stroke-dasharray="2 2.5"/>
          <circle cx="0" cy="0" r="8" fill="none" stroke="#78350f" stroke-width="1.2" stroke-dasharray="1.5 2"/>
          <circle cx="-3" cy="-3" r="1.2" fill="#d97706"/>
          <circle cx="3" cy="2" r="1.2" fill="#d97706"/>
          <circle cx="2" cy="-4" r="1" fill="#fde047"/>
        </g>
      </svg>
    `
  },
  {
    id: 'daisy',
    name: 'Hoa Cúc Họa Mi',
    meaning: 'Đại diện cho nét đẹp thuần khiết, trong trẻo, an yên và sự an nhiên trong từng khoảnh khắc.',
    svg: `
      <svg viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="dStem" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#4d6f46"/>
            <stop offset="100%" stop-color="#698f60"/>
          </linearGradient>
          <linearGradient id="dPetal" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#ecd8e4"/>
            <stop offset="40%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#ffffff"/>
          </linearGradient>
          <radialGradient id="dCenter" cx="45%" cy="45%" r="50%">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="45%" stop-color="#facc15"/>
            <stop offset="85%" stop-color="#eab308"/>
            <stop offset="100%" stop-color="#ca8a04"/>
          </radialGradient>
        </defs>
        <path d="M50 78 Q30 72 26 56 Q38 64 50 75 Z" fill="#698f60"/>
        <path d="M50 88 Q72 82 76 66 Q64 74 50 85 Z" fill="#698f60"/>
        <path d="M50 46 Q49 82 50 118" stroke="url(#dStem)" stroke-width="4.2" stroke-linecap="round" fill="none"/>
        <g transform="translate(50, 42)">
          <g fill="url(#dPetal)" stroke="#e4d2dc" stroke-width="0.6">
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(22.5)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(45)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(67.5)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(90)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(112.5)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(135)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(157.5)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(180)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(202.5)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(225)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(247.5)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(270)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(292.5)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(315)"/>
            <path d="M0 -10 C-4 -20, -3 -33, 0 -36 C3 -33, 4 -20, 0 -10 Z" transform="rotate(337.5)"/>
          </g>
          <circle cx="0" cy="0" r="13" fill="url(#dCenter)"/>
          <circle cx="0" cy="0" r="10" fill="none" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="1.5 2"/>
          <circle cx="-2" cy="-2" r="1.5" fill="#fff" opacity="0.6"/>
        </g>
      </svg>
    `
  },
  {
    id: 'rose',
    name: 'Hoa Hồng Phấn',
    meaning: 'Biểu trưng cho vẻ đẹp quý phái, lòng kiêu hãnh và hương sắc ngọt ngào khiến ai cũng mến mộ.',
    svg: `
      <svg viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="rStem" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#3d5a3f"/>
            <stop offset="100%" stop-color="#567d58"/>
          </linearGradient>
          <linearGradient id="rLeaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#608d64"/>
            <stop offset="100%" stop-color="#355337"/>
          </linearGradient>
          <radialGradient id="rPetal1" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#fff1f2"/>
            <stop offset="40%" stop-color="#fecdd3"/>
            <stop offset="85%" stop-color="#f43f5e"/>
            <stop offset="100%" stop-color="#be123c"/>
          </radialGradient>
          <linearGradient id="rPetal2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fda4af"/>
            <stop offset="100%" stop-color="#e11d48"/>
          </linearGradient>
        </defs>
        <path d="M50 78 Q22 68 18 48 Q34 52 50 74 Z" fill="url(#rLeaf)"/>
        <path d="M50 76 Q30 62 24 50" stroke="#87af8b" stroke-width="1.2" fill="none"/>
        <path d="M50 88 Q76 80 82 62 Q68 66 50 84 Z" fill="url(#rLeaf)"/>
        <path d="M50 50 Q49 84 50 118" stroke="url(#rStem)" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M50 96 Q56 94 57 91 Q53 93 50 98 Z" fill="#3d5a3f"/>
        <path d="M50 50 Q36 48 30 38 Q42 46 50 50 Z" fill="#4d7450"/>
        <path d="M50 50 Q64 48 70 38 Q58 46 50 50 Z" fill="#4d7450"/>
        <g transform="translate(50, 38)">
          <path d="M-30 6 C-34 -18, -12 -34, 0 -34 C12 -34, 34 -18, 30 6 C24 24, -24 24, -30 6 Z" fill="url(#rPetal1)"/>
          <path d="M-26 -4 C-28 -24, 0 -28, 0 -28 C0 -28, 28 -24, 26 -4 C20 18, -20 18, -26 -4 Z" fill="url(#rPetal2)" opacity="0.95"/>
          <path d="M-22 4 C-30 -12, -10 -24, 0 -24 C10 -24, 30 -12, 22 4 C14 16, -14 16, -22 4 Z" fill="#fb7185"/>
          <path d="M-16 -2 C-20 -16, 0 -20, 8 -16 C16 -12, 16 0, 8 4 C0 8, -12 8, -16 -2 Z" fill="#f43f5e"/>
          <path d="M-10 -4 C-14 -12, 0 -15, 6 -11 C12 -7, 10 2, 4 3 C-2 4, -8 2, -10 -4 Z" fill="#fda4af"/>
          <path d="M-6 -5 C-6 -10, 2 -11, 4 -8 C6 -5, 2 0, -2 0 C-4 0, -6 -2, -6 -5 Z" fill="#be123c"/>
          <circle cx="-1" cy="-6" r="1.8" fill="#ffe4e6"/>
        </g>
      </svg>
    `
  },
  {
    id: 'hydrangea',
    name: 'Cẩm Tú Cầu',
    meaning: 'Tượng trưng cho sự chân thành, lòng biết ơn sâu sắc và ước mong mọi điều vẹn tròn viên mãn.',
    svg: `
      <svg viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="hStem" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#4d6f46"/>
            <stop offset="100%" stop-color="#698f60"/>
          </linearGradient>
          <linearGradient id="hLeaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#669165"/>
            <stop offset="100%" stop-color="#3d5e3c"/>
          </linearGradient>
          <linearGradient id="floretBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#bfdbfe"/>
            <stop offset="100%" stop-color="#60a5fa"/>
          </linearGradient>
          <linearGradient id="floretPink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fbcfe8"/>
            <stop offset="100%" stop-color="#f472b6"/>
          </linearGradient>
          <linearGradient id="floretPurple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ddd6fe"/>
            <stop offset="100%" stop-color="#a855f7"/>
          </linearGradient>
        </defs>
        <path d="M50 70 Q16 68 12 44 Q32 50 50 68 Z" fill="url(#hLeaf)"/>
        <path d="M50 72 Q84 68 88 44 Q68 50 50 70 Z" fill="url(#hLeaf)"/>
        <path d="M50 50 Q49 84 50 118" stroke="url(#hStem)" stroke-width="5" stroke-linecap="round" fill="none"/>
        <g transform="translate(50, 36)">
          <circle cx="0" cy="0" r="28" fill="#e0e7ff" opacity="0.6"/>
          <g transform="translate(-16, -14)">
            <circle cx="-5" cy="0" r="4.5" fill="url(#floretBlue)"/><circle cx="5" cy="0" r="4.5" fill="url(#floretBlue)"/>
            <circle cx="0" cy="-5" r="4.5" fill="url(#floretBlue)"/><circle cx="0" cy="5" r="4.5" fill="url(#floretBlue)"/>
            <circle cx="0" cy="0" r="1.6" fill="#ffffff"/>
          </g>
          <g transform="translate(16, -14)">
            <circle cx="-5" cy="0" r="4.5" fill="url(#floretPurple)"/><circle cx="5" cy="0" r="4.5" fill="url(#floretPurple)"/>
            <circle cx="0" cy="-5" r="4.5" fill="url(#floretPurple)"/><circle cx="0" cy="5" r="4.5" fill="url(#floretPurple)"/>
            <circle cx="0" cy="0" r="1.6" fill="#ffffff"/>
          </g>
          <g transform="translate(0, -18)">
            <circle cx="-5" cy="0" r="4.5" fill="url(#floretPink)"/><circle cx="5" cy="0" r="4.5" fill="url(#floretPink)"/>
            <circle cx="0" cy="-5" r="4.5" fill="url(#floretPink)"/><circle cx="0" cy="5" r="4.5" fill="url(#floretPink)"/>
            <circle cx="0" cy="0" r="1.6" fill="#ffffff"/>
          </g>
          <g transform="translate(-15, 12)">
            <circle cx="-5" cy="0" r="4.5" fill="url(#floretPurple)"/><circle cx="5" cy="0" r="4.5" fill="url(#floretPurple)"/>
            <circle cx="0" cy="-5" r="4.5" fill="url(#floretPurple)"/><circle cx="0" cy="5" r="4.5" fill="url(#floretPurple)"/>
            <circle cx="0" cy="0" r="1.6" fill="#ffffff"/>
          </g>
          <g transform="translate(15, 12)">
            <circle cx="-5" cy="0" r="4.5" fill="url(#floretBlue)"/><circle cx="5" cy="0" r="4.5" fill="url(#floretBlue)"/>
            <circle cx="0" cy="-5" r="4.5" fill="url(#floretBlue)"/><circle cx="0" cy="5" r="4.5" fill="url(#floretBlue)"/>
            <circle cx="0" cy="0" r="1.6" fill="#ffffff"/>
          </g>
          <g transform="translate(-6, -2)">
            <circle cx="-5" cy="0" r="5" fill="url(#floretPink)"/><circle cx="5" cy="0" r="5" fill="url(#floretPink)"/>
            <circle cx="0" cy="-5" r="5" fill="url(#floretPink)"/><circle cx="0" cy="5" r="5" fill="url(#floretPink)"/>
            <circle cx="0" cy="0" r="1.8" fill="#ffffff"/>
          </g>
          <g transform="translate(8, 2)">
            <circle cx="-5" cy="0" r="5" fill="url(#floretBlue)"/><circle cx="5" cy="0" r="5" fill="url(#floretBlue)"/>
            <circle cx="0" cy="-5" r="5" fill="url(#floretBlue)"/><circle cx="0" cy="5" r="5" fill="url(#floretBlue)"/>
            <circle cx="0" cy="0" r="1.8" fill="#ffffff"/>
          </g>
        </g>
      </svg>
    `
  },
  {
    id: 'baby',
    name: 'Hoa Baby Trắng',
    meaning: 'Biểu hiện sự tinh khôi, vĩnh cửu và sự sẻ chia dịu êm, luôn đồng hành bên người bạn trân quý.',
    svg: `
      <svg viewBox="0 0 100 120" width="100%" height="100%">
        <defs>
          <linearGradient id="bStem" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#84a98c"/>
            <stop offset="100%" stop-color="#52796f"/>
          </linearGradient>
          <radialGradient id="bBud" cx="40%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="70%" stop-color="#fdfbf7"/>
            <stop offset="100%" stop-color="#d1e3d6"/>
          </radialGradient>
        </defs>
        <path d="M50 48 Q49 84 50 118" stroke="url(#bStem)" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M50 78 Q36 62 26 44" stroke="url(#bStem)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <path d="M50 68 Q64 54 74 36" stroke="url(#bStem)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
        <path d="M50 56 Q44 38 48 20" stroke="url(#bStem)" stroke-width="2" stroke-linecap="round" fill="none"/>
        <path d="M26 44 Q18 36 14 26" stroke="url(#bStem)" stroke-width="1.6" stroke-linecap="round" fill="none"/>
        <path d="M26 44 Q32 34 36 24" stroke="url(#bStem)" stroke-width="1.6" stroke-linecap="round" fill="none"/>
        <path d="M74 36 Q82 28 86 18" stroke="url(#bStem)" stroke-width="1.6" stroke-linecap="round" fill="none"/>
        <path d="M74 36 Q66 26 62 18" stroke="url(#bStem)" stroke-width="1.6" stroke-linecap="round" fill="none"/>
        <g transform="translate(14, 26)">
          <circle cx="0" cy="0" r="6" fill="url(#bBud)" stroke="#c6d8cb" stroke-width="0.8"/>
          <circle cx="0" cy="0" r="4" fill="#ffffff"/>
          <circle cx="0" cy="0" r="1.5" fill="#facc15"/>
        </g>
        <g transform="translate(26, 44)">
          <circle cx="0" cy="0" r="5.5" fill="url(#bBud)" stroke="#c6d8cb" stroke-width="0.8"/>
          <circle cx="0" cy="0" r="3.5" fill="#ffffff"/>
          <circle cx="0" cy="0" r="1.4" fill="#facc15"/>
        </g>
        <g transform="translate(36, 24)">
          <circle cx="0" cy="0" r="6.5" fill="url(#bBud)" stroke="#c6d8cb" stroke-width="0.8"/>
          <circle cx="0" cy="0" r="4.2" fill="#ffffff"/>
          <circle cx="0" cy="0" r="1.5" fill="#facc15"/>
        </g>
        <g transform="translate(48, 20)">
          <circle cx="0" cy="0" r="7" fill="url(#bBud)" stroke="#c6d8cb" stroke-width="0.8"/>
          <circle cx="0" cy="0" r="4.8" fill="#ffffff"/>
          <circle cx="0" cy="0" r="1.6" fill="#facc15"/>
        </g>
        <g transform="translate(44, 38)">
          <circle cx="0" cy="0" r="5.5" fill="url(#bBud)" stroke="#c6d8cb" stroke-width="0.8"/>
          <circle cx="0" cy="0" r="3.5" fill="#ffffff"/>
          <circle cx="0" cy="0" r="1.3" fill="#facc15"/>
        </g>
        <g transform="translate(62, 18)">
          <circle cx="0" cy="0" r="6" fill="url(#bBud)" stroke="#c6d8cb" stroke-width="0.8"/>
          <circle cx="0" cy="0" r="4" fill="#ffffff"/>
          <circle cx="0" cy="0" r="1.5" fill="#facc15"/>
        </g>
        <g transform="translate(74, 36)">
          <circle cx="0" cy="0" r="6.5" fill="url(#bBud)" stroke="#c6d8cb" stroke-width="0.8"/>
          <circle cx="0" cy="0" r="4.2" fill="#ffffff"/>
          <circle cx="0" cy="0" r="1.5" fill="#facc15"/>
        </g>
        <g transform="translate(86, 18)">
          <circle cx="0" cy="0" r="6" fill="url(#bBud)" stroke="#c6d8cb" stroke-width="0.8"/>
          <circle cx="0" cy="0" r="3.8" fill="#ffffff"/>
          <circle cx="0" cy="0" r="1.4" fill="#facc15"/>
        </g>
      </svg>
    `
  }
];

// Preset arrangements for up to 8 bouquet flowers (positions, angles, scale, z-index)
const BOUQUET_SLOTS = [
  { left: 80, bottom: 48, rotate: 0, scale: 1.05, z: 5 },
  { left: 35, bottom: 40, rotate: -15, scale: 0.98, z: 4 },
  { left: 125, bottom: 40, rotate: 15, scale: 0.98, z: 4 },
  { left: 60, bottom: 82, rotate: -8, scale: 0.92, z: 2 },
  { left: 100, bottom: 82, rotate: 8, scale: 0.92, z: 2 },
  { left: 15, bottom: 28, rotate: -24, scale: 0.9, z: 6 },
  { left: 145, bottom: 28, rotate: 24, scale: 0.9, z: 6 },
  { left: 80, bottom: 102, rotate: 0, scale: 0.88, z: 1 }
];

// App State
const state = {
  selectedFlowers: [], // list of flower objects picked
  ribbonColor: 'pink',
  isAudioPlaying: false,
  activeScene: 'scene-store'
};

// ==========================================
// 2. SYNTHESIZED SOUND EFFECTS (WEB AUDIO API)
// ==========================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Soft Chime Tone (Door opened or milestone)
  playChime(notes = [523.25, 659.25, 783.99, 1046.50]) {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.85);
    });
  }

  // Soft Pop/Plop Tone when picking a flower
  playPop() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(840, now + 0.12);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Ribbon Tie Sparkle
  playSparkle() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const freqs = [880, 1108.73, 1318.51, 1760];
    freqs.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);

      gain.gain.setValueAtTime(0.1, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.45);
    });
  }
}

const sfx = new SoundFX();

// ==========================================
// 3. BACKGROUND MUSIC & AUDIO CONTROLLER
// ==========================================
const bgm = document.getElementById('bgm');
const audioWidget = document.getElementById('audioWidget');
const musicDisc = document.getElementById('musicDisc');
const musicToggle = document.getElementById('musicToggle');

function startAudio() {
  sfx.init();
  const playPromise = bgm.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      state.isAudioPlaying = true;
      audioWidget.classList.add('playing');
      musicDisc.classList.add('playing');
    }).catch((err) => {
      state.isAudioPlaying = false;
      console.log('Autoplay deferred until user gesture:', err);
    });
  }
}

// Bật nhạc ngay khi người dùng chạm hoặc click bất kỳ đâu trên màn hình nếu trình duyệt chặn autoplay ban đầu
const enableAudioOnGesture = () => {
  if (!state.isAudioPlaying) {
    startAudio();
  }
  window.removeEventListener('pointerdown', enableAudioOnGesture);
  window.removeEventListener('touchstart', enableAudioOnGesture);
  window.removeEventListener('click', enableAudioOnGesture);
  window.removeEventListener('keydown', enableAudioOnGesture);
};
window.addEventListener('pointerdown', enableAudioOnGesture);
window.addEventListener('touchstart', enableAudioOnGesture);
window.addEventListener('click', enableAudioOnGesture);
window.addEventListener('keydown', enableAudioOnGesture);

function toggleAudio() {
  sfx.init();
  if (bgm.paused) {
    startAudio();
  } else {
    bgm.pause();
    state.isAudioPlaying = false;
    audioWidget.classList.remove('playing');
    musicDisc.classList.remove('playing');
  }
}

musicToggle.addEventListener('click', toggleAudio);

// ==========================================
// 4. SCENE NAVIGATION SYSTEM
// ==========================================
function switchScene(sceneId) {
  const currentScene = document.getElementById(state.activeScene);
  const nextScene = document.getElementById(sceneId);

  if (currentScene) currentScene.classList.remove('active');
  if (nextScene) {
    nextScene.classList.add('active');
    state.activeScene = sceneId;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scene 1 -> 2: Open Door and Enter
const enterShopTrigger = document.getElementById('enterShopTrigger');
const enterShopBtn = document.getElementById('enterShopBtn');
const shopDoor = document.getElementById('shopDoor');

function enterShop() {
  sfx.playChime();
  startAudio();

  shopDoor.style.transform = 'rotateY(-75deg)';
  setTimeout(() => {
    switchScene('scene-flower-bar');
  }, 600);
}

enterShopTrigger.addEventListener('click', enterShop);
enterShopBtn.addEventListener('click', enterShop);

// ==========================================
// 5. FLOWER BAR & BOUQUET CRAFTING LOGIC
// ==========================================
const flowerGrid = document.getElementById('flowerGrid');
const meaningText = document.getElementById('meaningText');
const meaningBox = document.getElementById('meaningBox');
const pickedSummary = document.getElementById('pickedSummary');
const bloomsLayer = document.getElementById('bloomsLayer');
const emptyHint = document.getElementById('emptyHint');
const goToRibbonBtn = document.getElementById('goToRibbonBtn');
const clearBouquetBtn = document.getElementById('clearBouquetBtn');
const minFlowerHint = document.getElementById('minFlowerHint');

function renderFlowerGrid() {
  flowerGrid.innerHTML = '';
  FLOWERS_DATA.forEach(flower => {
    const card = document.createElement('div');
    card.className = 'flower-card';
    card.dataset.id = flower.id;

    // Count how many of this flower already picked
    const count = state.selectedFlowers.filter(f => f.id === flower.id).length;

    card.innerHTML = `
      <div class="flower-badge ${count > 0 ? 'show' : ''}">${count}</div>
      <div class="flower-visual">${flower.svg}</div>
      <div class="flower-name">${flower.name}</div>
    `;

    card.addEventListener('click', (e) => {
      sfx.init();
      pickFlower(flower, card, e);
    });

    flowerGrid.appendChild(card);
  });
}

function pickFlower(flower, cardElement, event) {
  if (state.selectedFlowers.length >= 8) {
    meaningBox.classList.add('highlight');
    meaningText.textContent = 'Bó hoa đã đầy ắp 8 bông hoa xinh đẹp rồi chị ơi! ✨ Hãy bấm "Thắt nơ" nhé!';
    return;
  }

  sfx.playPop();

  // Highlight meaning
  meaningBox.classList.add('highlight');
  meaningText.innerHTML = `<strong>${flower.name}:</strong> ${flower.meaning}`;

  // Flying flower animation
  createFlyingFlower(flower, cardElement);

  // Add to state
  state.selectedFlowers.push(flower);

  // Update UI
  renderBouquet();
  renderFlowerGrid();
  updateBouquetActionButtons();
}

function createFlyingFlower(flower, originElement) {
  const rect = originElement.getBoundingClientRect();
  const targetRect = bloomsLayer.getBoundingClientRect();

  const flyEl = document.createElement('div');
  flyEl.className = 'flying-flower-particle';
  flyEl.innerHTML = flower.svg;
  flyEl.style.width = '64px';
  flyEl.style.height = '64px';
  flyEl.style.left = `${rect.left + rect.width / 2 - 32}px`;
  flyEl.style.top = `${rect.top + rect.height / 2 - 32}px`;

  document.body.appendChild(flyEl);

  // Trigger smooth flight arc
  requestAnimationFrame(() => {
    flyEl.style.left = `${targetRect.left + targetRect.width / 2 - 32}px`;
    flyEl.style.top = `${targetRect.top + targetRect.height / 2 - 32}px`;
    flyEl.style.transform = 'scale(0.8) rotate(360deg)';
    flyEl.style.opacity = '0.9';
  });

  setTimeout(() => {
    if (flyEl.parentNode) flyEl.parentNode.removeChild(flyEl);
  }, 750);
}

function renderBouquet() {
  bloomsLayer.innerHTML = '';
  const total = state.selectedFlowers.length;

  if (total === 0) {
    emptyHint.classList.remove('hidden');
  } else {
    emptyHint.classList.add('hidden');
  }

  pickedSummary.textContent = `Đã chọn: ${total}/8 bông`;

  state.selectedFlowers.forEach((flower, idx) => {
    const slot = BOUQUET_SLOTS[idx] || BOUQUET_SLOTS[0];
    const stemEl = document.createElement('div');
    stemEl.className = 'bouquet-stem';
    stemEl.title = `Chạm để bỏ ${flower.name}`;
    stemEl.style.left = `${slot.left}px`;
    stemEl.style.bottom = `${slot.bottom}px`;
    stemEl.style.transform = `rotate(${slot.rotate}deg) scale(${slot.scale})`;
    stemEl.style.zIndex = slot.z;

    stemEl.innerHTML = `
      <div class="bloom-head">${flower.svg}</div>
      <div class="stem-graphic"></div>
    `;

    // Click inside bouquet to remove flower
    stemEl.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playPop();
      state.selectedFlowers.splice(idx, 1);
      renderBouquet();
      renderFlowerGrid();
      updateBouquetActionButtons();
    });

    bloomsLayer.appendChild(stemEl);
  });
}

function updateBouquetActionButtons() {
  const count = state.selectedFlowers.length;
  if (count >= 1) {
    goToRibbonBtn.disabled = false;
    if (count >= 3) {
      minFlowerHint.style.color = 'var(--accent-leaf)';
      minFlowerHint.textContent = '✨ Bó hoa đã rất rực rỡ và hài hòa rồi!';
    } else {
      minFlowerHint.style.color = 'var(--text-muted)';
      minFlowerHint.textContent = `(Chị có thể cắm thêm ${3 - count} bông nữa để bó hoa thật sum suê nhé)`;
    }
  } else {
    goToRibbonBtn.disabled = true;
    minFlowerHint.style.color = 'var(--text-muted)';
    minFlowerHint.textContent = '(Hãy chọn ít nhất 1-3 bông hoa để tiếp tục)';
  }
}

clearBouquetBtn.addEventListener('click', () => {
  sfx.init();
  state.selectedFlowers = [];
  renderBouquet();
  renderFlowerGrid();
  updateBouquetActionButtons();
  meaningBox.classList.remove('highlight');
  meaningText.textContent = 'Chạm vào từng bông hoa để xem ý nghĩa ngọt ngào...';
});

// Move from Scene 2 to Scene 3 (Ribbon)
goToRibbonBtn.addEventListener('click', () => {
  sfx.playSparkle();
  syncBouquetToPreview();
  switchScene('scene-ribbon');
});

// ==========================================
// 6. SCENE 3: RIBBON CUSTOMIZATION
// ==========================================
const previewBouquetHolder = document.getElementById('previewBouquetHolder');
const ribbonOpts = document.querySelectorAll('.ribbon-opt');
const backToFlowerBarBtn = document.getElementById('backToFlowerBarBtn');
const finishBouquetBtn = document.getElementById('finishBouquetBtn');
const wrapRibbon = document.getElementById('wrapRibbon');

function syncBouquetToPreview() {
  const bouquetWrapper = document.querySelector('.bouquet-wrapper-graphic');
  const clone = bouquetWrapper.cloneNode(true);
  previewBouquetHolder.innerHTML = '';
  previewBouquetHolder.appendChild(clone);
  applyRibbonColorToPreview(state.ribbonColor);
}

function applyRibbonColorToPreview(color) {
  wrapRibbon.className = `wrap-ribbon ${color}`;
  const previewRibbon = previewBouquetHolder.querySelector('.wrap-ribbon');
  if (previewRibbon) {
    previewRibbon.className = `wrap-ribbon ${color}`;
  }
}

ribbonOpts.forEach(btn => {
  btn.addEventListener('click', () => {
    sfx.playSparkle();
    ribbonOpts.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.ribbonColor = btn.dataset.color;
    applyRibbonColorToPreview(state.ribbonColor);
  });
});

backToFlowerBarBtn.addEventListener('click', () => {
  switchScene('scene-flower-bar');
});

finishBouquetBtn.addEventListener('click', () => {
  sfx.playChime();
  syncBouquetToFinal();
  switchScene('scene-final');
  triggerHeartConfetti(window.innerWidth / 2, window.innerHeight / 2, 25);
});

// ==========================================
// 7. SCENE 4: FINAL GIFT SHOWCASE & LETTER
// ==========================================
const finalBouquetVisual = document.getElementById('finalBouquetVisual');
const openLetterTrigger = document.getElementById('openLetterTrigger');
const letterModal = document.getElementById('letterModal');
const closeLetterBtn = document.getElementById('closeLetterBtn');
const remakeBtn = document.getElementById('remakeBtn');
const burstHeartsBtn = document.getElementById('burstHeartsBtn');

function syncBouquetToFinal() {
  const bouquetWrapper = document.querySelector('.bouquet-wrapper-graphic');
  const clone = bouquetWrapper.cloneNode(true);
  finalBouquetVisual.innerHTML = '';
  finalBouquetVisual.appendChild(clone);
  const finalRibbon = finalBouquetVisual.querySelector('.wrap-ribbon');
  if (finalRibbon) {
    finalRibbon.className = `wrap-ribbon ${state.ribbonColor}`;
  }
}

openLetterTrigger.addEventListener('click', () => {
  sfx.playChime([659.25, 783.99, 1046.50]);
  letterModal.classList.add('open');
});

closeLetterBtn.addEventListener('click', () => {
  letterModal.classList.remove('open');
});

letterModal.addEventListener('click', (e) => {
  if (e.target === letterModal) {
    letterModal.classList.remove('open');
  }
});

remakeBtn.addEventListener('click', () => {
  sfx.init();
  state.selectedFlowers = [];
  renderBouquet();
  renderFlowerGrid();
  updateBouquetActionButtons();
  switchScene('scene-flower-bar');
});

burstHeartsBtn.addEventListener('click', (e) => {
  sfx.playSparkle();
  const rect = burstHeartsBtn.getBoundingClientRect();
  triggerHeartConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);
});

// ==========================================
// 8. HIGH-PERFORMANCE PETAL CANVAS ANIMATION
// ==========================================
const canvas = document.getElementById('petal-canvas');
const ctx = canvas.getContext('2d');

let width, height;
function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const PETAL_COUNT = 32;
const petals = [];

for (let i = 0; i < PETAL_COUNT; i++) {
  petals.push({
    x: Math.random() * width,
    y: Math.random() * height,
    size: 6 + Math.random() * 8,
    speedX: -0.5 + Math.random() * 1.2,
    speedY: 0.8 + Math.random() * 1.4,
    rotation: Math.random() * 360,
    rotSpeed: -1 + Math.random() * 2,
    color: Math.random() > 0.4 ? 'rgba(235, 150, 168, ' : 'rgba(255, 214, 224, ',
    alpha: 0.35 + Math.random() * 0.45
  });
}

function drawPetal(x, y, size, rotation, color, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.beginPath();
  ctx.fillStyle = `${color}${alpha})`;
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(size / 2, -size / 2, size, 0);
  ctx.quadraticCurveTo(size / 2, size / 2, 0, 0);
  ctx.fill();
  ctx.restore();
}

function animatePetals() {
  ctx.clearRect(0, 0, width, height);

  petals.forEach(p => {
    p.x += p.speedX + Math.sin(p.y * 0.01) * 0.4;
    p.y += p.speedY;
    p.rotation += p.rotSpeed;

    if (p.y > height + 20) {
      p.y = -20;
      p.x = Math.random() * width;
    }
    if (p.x > width + 20) p.x = -20;
    if (p.x < -20) p.x = width + 20;

    drawPetal(p.x, p.y, p.size, p.rotation, p.color, p.alpha);
  });

  requestAnimationFrame(animatePetals);
}
requestAnimationFrame(animatePetals);

// ==========================================
// 10. HEART & SPARKLE CONFETTI BURST
// ==========================================
function triggerHeartConfetti(startX, startY, count = 30) {
  const emojis = ['🌸', '✨', '💖', '🌷', '🤍', '🌼'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.left = `${startX}px`;
    el.style.top = `${startY}px`;
    el.style.fontSize = `${14 + Math.random() * 18}px`;
    el.style.zIndex = '9999';
    el.style.pointerEvents = 'none';
    el.style.userSelect = 'none';
    el.style.transition = 'all 1.2s cubic-bezier(0.12, 0.8, 0.32, 1)';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    document.body.appendChild(el);

    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 220;
    const destX = startX + Math.cos(angle) * distance;
    const destY = startY + Math.sin(angle) * distance - 40;

    requestAnimationFrame(() => {
      el.style.left = `${destX}px`;
      el.style.top = `${destY}px`;
      el.style.transform = `scale(${0.5 + Math.random() * 0.8}) rotate(${Math.random() * 360}deg)`;
      el.style.opacity = '0';
    });

    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 1300);
  }
}

// ==========================================
// 10. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderFlowerGrid();
  renderBouquet();
  updateBouquetActionButtons();
  // Tự động phát nhạc ngay khi load
  startAudio();
});
