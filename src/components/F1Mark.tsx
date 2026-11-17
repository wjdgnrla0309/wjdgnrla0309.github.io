// 열(heat) 로고: 불꽃 + 열기 파동, 뜨거움(주황)→차가움(파랑) 그라데이션과 KJH 워드마크
export function F1Mark() {
  return <svg viewBox="0 0 120 40" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="heat-g" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stopColor="#ff3d2e" /><stop offset=".55" stopColor="#ff6b35" /><stop offset="1" stopColor="#ffc15a" />
      </linearGradient>
      <linearGradient id="cool-g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#ff6b35" /><stop offset="1" stopColor="#4a9eff" />
      </linearGradient>
    </defs>
    <path d="M18 2c1 7-6 10-6 18 0 4 2 7 5 8-1-3 0-6 3-8 0 3 2 4 3 6 1-3 0-7-2-10 4 2 7 6 7 11 0 6-5 11-11 11S5 35 5 28c0-9 11-12 13-26z" fill="url(#heat-g)" />
    <path d="M17 38c-3 0-5-2-5-5 0-3 3-5 5-8 2 3 5 5 5 8 0 3-2 5-5 5z" fill="#fff" fillOpacity=".85" />
    <text x="38" y="26" fontFamily="Inter,'Wanted Sans Variable',sans-serif" fontWeight="800" fontSize="22" letterSpacing="1.5" fill="currentColor">KJH</text>
    <path d="M38 33q5-4 10 0t10 0 10 0 10 0" fill="none" stroke="url(#cool-g)" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
}
