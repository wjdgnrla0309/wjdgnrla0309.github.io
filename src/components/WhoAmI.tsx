import { useEffect, useState, type ChangeEvent } from 'react'
const KEY = 'whoami-slides'
type Store = Record<string, string>
const load = (): Store => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {} } }
const save = (s: Store) => { try { localStorage.setItem(KEY, JSON.stringify(s)) } catch { alert('저장 공간이 부족합니다. 이미지 크기를 줄여 주세요.') } }
// 직업선호도검사(S형) 결과표 값 (R·I·A·S·E·C 순서)
const SCORES = [['현실형 R', 18, 73], ['탐구형 I', 11, 58], ['예술형 A', 6, 39], ['사회형 S', 8, 41], ['진취형 E', 14, 54], ['관습형 C', 9, 46]] as const
const JOBS = '건설 및 광업기계 설치 및 정비원, 건축시공기술자, 경기감독 및 코치, 금융관리자, 기술영업원, 네트워크관리자, 데이터베이스 개발자, 도선사, 보일러 설치 및 정비원, 사회학연구원, 사회복지학연구원, 정치학연구원, 행정학연구원, 경영학연구원, 언론학연구원, 경제학연구원, 생산관리 사무원, 선장 및 항해사, 소방공학기술자, 스포츠강사, 웹엔지니어, 인쇄기조작원, 장학사, 철도기관차 및 전동차정비원, 측량 및 지리정보기술자, 토목감리기술자, 항공기조종사, 헬리콥터조종사'
const NOTICE = "※ 이름·학번·얼굴 사진은 넣지 않습니다. 공개하기 싫은 칸은 '비공개'라고 적어도 됩니다."

export function WhoAmI({ onClose }: { onClose: () => void }) {
  const [store, setStore] = useState<Store>(load)
  const [edit, setEdit] = useState(false)
  const [page, setPage] = useState(0)
  const set = (k: string, v: string) => setStore(s => { const n = { ...s, [k]: v }; save(n); return n })
  // 편집 가능한 칸: 저장값이 없으면 템플릿 안내문을 흐리게 보여 준다
  const E = (id: string, d: string) => {
    const v = store[id]
    return <span className={`wa-ed${v === undefined && d.startsWith('[') ? ' ph' : ''}`} contentEditable={edit} suppressContentEditableWarning
      onFocus={e => { if (v === undefined) getSelection()?.selectAllChildren(e.currentTarget) }}
      onBlur={e => { const t = e.currentTarget.innerText.trim(); if (t !== (v ?? d)) set(id, t) }}>{v ?? d}</span>
  }
  const Img = (id: string, label: string, def?: string) => {
    const onFile = (e: ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0]; if (!f) return
      const r = new FileReader(); r.onload = () => set(id, String(r.result)); r.readAsDataURL(f)
    }
    return <div className="wa-img">{store[id] ?? def ? <img src={store[id] ?? def} alt={def ? '영암 트랙데이에서 KUMA 팀원들과 포뮬러 차량 앞에서 찍은 단체사진' : label} /> : <p>{label}</p>}{edit && <label className="wa-btn">이미지 선택<input type="file" accept="image/*" hidden onChange={onFile} /></label>}</div>
  }
  const Head = (_n: number, t: string) => <header className="wa-head"><div><h3>{t}</h3><p>열관리 분야를 향해 성장 중</p></div><small>KIM JEONGHU · 기계·자동차공학</small></header>
  const slides = [
    <>
      {Head(1, "나는 누구인가?")}
      <p className="technical-label">KIM JEONGHU · 기계·자동차공학 · 열관리 분야를 향해 성장 중</p>
      <h4>나를 한 문장으로 소개한다면</h4>
      <blockquote>{E("intro", '"설계·실험·데이터를 오가며 열관리 분야를 배우고 도전하는, 가능성을 키워 가는 기계·자동차공학도"')}</blockquote>
      <div className="wa-grid3">{[1, 2, 3].map(i => <div key={i} className="wa-card"><b>키워드 {i}</b>{E(`kw${i}`, ["탐구", "구현", "시스템적 사고"][i - 1])}</div>)}</div>
      <div className="wa-card"><b>꼭 담을 내용</b>
        <p>① 인생곡선: 가장 좋았던 순간과 힘들었던 순간, 그때 내가 한 일 (2장)</p>
        <p>② 직업 관련 검사 결과: 고용24 직업선호도검사 S형 결과와 나의 해석 (3장)</p>
        <p>③ 나를 잘 설명하는 내용: 자기이해 다섯 가지, 나를 보여주는 경험 (4~5장)</p>
        <p>→ 발표는 1인 3분. 이 다섯 장만 보고도 '어떤 사람인지' 알 수 있게 써 주세요.</p></div>
    </>,
    <>
      {Head(2, "인생곡선")}
      <h4>0세부터 지금까지, 만족도가 높았던 때와 낮았던 때를 곡선으로 그립니다</h4>
      <div className="wa-curve">{store.curve ? Img("curve", "인생곡선") : <LifeCurve />}</div>
      <p className="wa-hint">최고점·최저점에 짧은 이름표를 달아 주세요</p>
      <div className="wa-grid2">
        <div className="wa-card"><b>가장 좋았던 순간</b><p>언제였나요? {E("best1", "대학 입학 후 성적장학금을 받았을 때입니다. 재수와 군 복무를 거쳐 노력이 결과로 확인된 순간이라 가장 행복했습니다. (중학교 시절도 마음 편히 행복했던 때입니다.)")}</p><p>그때 '내가 한 일'은? {E("best2", "수업을 빠짐없이 듣고, 모르는 부분은 끝까지 찾아보고 복습하며 꾸준히 공부했습니다.")}</p></div>
        <div className="wa-card"><b>가장 힘들었던 순간</b><p>언제였나요? {E("low1", "2022년 재수 시절. 원하던 결과가 나오지 않아 한 해를 더 준비하던 때입니다.")}</p><p>그때 '내가 한 일'은? {E("low2", "공부 계획을 매일 점검하며 끝까지 버텼고, 그 결과 공주대학교 기계·자동차공학과에 입학했습니다.")}</p></div>
      </div>
      <div className="wa-card"><b>여기서 찾은 가치어 3개</b>{E("values", "끈기, 성장, 책임감")}<p>→ 1장의 키워드와 연결</p></div>
    </>,
    <>
      {Head(3, "직업 관련 검사 결과")}
      <div className="wa-grid2">
        <div className="wa-card"><b>흥미 육각형 · 검사일 2026.11.17</b><Hex /><div className="wa-type"><span>나의 유형</span><strong>RE형</strong><p>현실형(R) 73 + 진취형(E) 54</p></div></div>
        <div className="wa-card"><b>직업 흥미 유형별 점수</b>
          <table className="wa-table"><thead><tr><th>유형</th><th>원점수</th><th>표준점수</th></tr></thead><tbody>{SCORES.map(([n, r, s]) => <tr key={n}><td>{n}</td><td>{r}</td><td>{s}</td></tr>)}</tbody></table>
          <p className="wa-hint">표준점수 60 이상 높음 · 41–59 중간 · 40 이하 낮음 (결과표 기준)</p></div>
      </div>
      <div className="wa-grid2">
        <div className="wa-card"><b>나의 흥미 코드</b><strong className="wa-code">RE</strong><p>현실형 + 진취형 (결과표 대표 흥미 코드)</p></div>
        <div className="wa-card"><b>추천 직업 중 끌리는 것 3개</b>{[1, 2, 3].map(i => <p key={i}>{i}. {E(`job${i}`, ["소방공학기술자 (배터리 열폭주·열안전 연구와 연결)", "기술영업원 (열관리 부품·시스템 기술 제안)", "철도기관차 및 전동차정비원 (구동계·냉각 시스템 이해)"][i - 1])}</p>)}</div>
      </div>
      <details className="wa-card"><summary>결과표의 추천 직업 전체 보기</summary><p>{JOBS}</p></details>
      <div className="wa-grid2">
        <div className="wa-card"><b>결과가 나와 맞는 점</b>{E("fit", "현실형(표준점수 73)이 가장 높은 것은 KUMA Formula Student에서 차량 시스템을 다루고, 연구실에서 실험 장치 자동화를 검토하는 내 경험과 맞습니다.")}</div>
        <div className="wa-card"><b>의외였던 점</b>{E("odd", "연구 지향이라 탐구형(I)이 가장 높을 줄 알았는데 58점으로 중간이었고, 진취형(E)이 대표 코드로 나온 점입니다. 설계·해석에 그치지 않고 기술을 직접 제안하고 실행하는 성향으로 해석했습니다.")}</div>
      </div>
    </>,
    <>
      {Head(4, "나를 설명하는 다섯 가지")}
      <h4>수업 시간에 쓴 자기이해 표를 옮기고, 이유를 한 줄씩 덧붙입니다</h4>
      {[['meaning', '나에게 의미 있는 일', '성장 > 성취 > 협업 순으로 중요합니다. 어제보다 나은 설계를 만들고, 그 결과가 실제 성능으로 확인될 때, 팀과 함께 만들어 낼 때 의미를 느낍니다.'], ['joy', '나에게 즐거움을 주는 일', '설계와 실험, 데이터 해석, 실제 제작을 오가며 공학 문제를 구체적인 시스템으로 구현할 때 즐겁습니다.'], ['skill', '내가 잘할 수 있는 일', '새로운 도구를 빠르게 익혀 직접 만들어 보는 일을 잘합니다. 팀 활동에서 맡은 일은 끝까지 책임지고 마무리합니다.'], ['hard', '내가 어려워하는 일', '처음부터 완벽한 결과를 내려다 시작이 늦어지는 점이 어렵습니다. 작은 단위로 먼저 만들어 검증하고, 팀원의 피드백을 받아 반복하며 보완하고 있습니다.'], ['moment', '가장 기억에 남는 순간', 'KUMA 포뮬러 차량이 트랙을 달리는 모습을 처음 본 순간입니다. 도면과 해석 결과로만 보던 시스템이 실제로 움직이며 성능을 내는 것을 보고 공학의 보람을 느꼈습니다.']].map(([k, t, d]) => <div key={k} className="wa-row"><b>{t}</b>{E(k, d)}</div>)}
    </>,
    <>
      {Head(5, "나를 보여주는 장면, 그리고 다음")}
      <h4>나를 잘 설명해 주는 경험·활동 2~3개와, 지금 관심 있는 방향</h4>
      <div className="wa-grid3">{[1, 2, 3].map(i => <div key={i} className="wa-card">{(i === 2 || edit || store[`ph${i}`]) && Img(`ph${i}`, "사진 추가 (선택)", i === 2 ? "/images/whoami/kuma-team.jpg" : undefined)}<b>경험 {i}: {E(`ex${i}t`, ["바이브코딩으로 만든 KUMA 동아리 홈페이지", "2026 영암 트랙데이 (KUMA)", "재수·군 복무 후 성적장학금"][i - 1])}</b>{E(`ex${i}d`, ["AI와 함께 코딩하는 바이브코딩으로 KUMA 동아리 홈페이지를 직접 만들었습니다. 코드를 처음부터 다 아는 건 아니지만, 필요한 기능을 정하고 결과를 확인하며 고쳐 가는 과정에서 만들고 싶은 것을 실제로 구현해 내는 힘을 키웠습니다.", "KUMA 팀과 영암 트랙데이에서 포뮬러 차량이 실제로 주행하는 모습을 직접 확인했습니다. 설계가 실제 성능으로 이어지는 과정을 보며 차량을 시스템 전체로 이해하고 싶다는 목표가 더 분명해졌습니다.", "재수와 군 복무를 거쳐 대학에 돌아온 뒤, 꾸준히 공부해 성적장학금을 받았습니다. 돌아가는 길이 길었지만 끝까지 해내는 힘이 생겼고, 이것이 제가 가진 가장 큰 강점입니다."][i - 1])}</div>)}</div>
      <div className="wa-grid3">
        <div className="wa-card"><b>관심 있는 산업·직무</b>{E("field", "전동화 시대의 핵심 과제인 열관리(Thermal Management)에 관심이 있습니다. 자동차에서 출발해 공조·히트펌프, 데이터센터 냉각까지 적용 범위를 넓혀 가며 에너지 효율을 높이는 기계·에너지 엔지니어를 목표로 합니다. (검사 결과표 희망직업: 기계공학기술자, 에너지기술자)")}</div>
        <div className="wa-card"><b>이 수업에서 얻고 싶은 것</b>{E("goal", "현실형·진취형(RE) 검사 결과와 제 경험을 근거로 진로 방향을 구체화하고, 이를 학습·연구·프로젝트 계획으로 연결하는 것입니다.")}</div>
        <div className="wa-card"><b>발표 때 꼭 하고 싶은 한 마디</b>{E("last", "돌아온 길이 길었던 만큼, 앞으로는 더 단단하게 배우고 도전하겠습니다.")}</div>
      </div>
    </>,
  ]
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k) }
  }, [onClose])
  const go = (n: number) => setPage(Math.min(4, Math.max(0, n)))
  return <div className="wa-overlay" role="dialog" aria-modal="true" aria-label="Who am I"><div className="wa-panel">
    <div className="wa-top"><h2>Who am I</h2><button className="wa-btn" onClick={onClose} aria-label="닫기">✕ 닫기</button></div>
    <div className="wa-bar">
      <div>{[0, 1, 2, 3, 4].map(i => <button key={i} className={`wa-tab${i === page ? ' on' : ''}`} onClick={() => go(i)}>{i + 1}</button>)}</div>
      <div>
        <button className={`wa-btn${edit ? ' on' : ''}`} onClick={() => setEdit(v => !v)}>{edit ? '편집 완료' : '편집 모드'}</button>
        <button className="wa-btn" onClick={() => { if (confirm('입력한 내용을 모두 지울까요?')) { try { localStorage.removeItem(KEY) } catch { /* 저장소 접근 불가 시 화면 상태만 초기화 */ } setStore({}) } }}>초기화</button>
      </div>
    </div>
    <div className={`wa-slide${edit ? ' editing' : ''}`}>{slides[page]}<footer className="wa-foot">{NOTICE}</footer></div>
    <div className="wa-bar"><button className="wa-btn" onClick={() => go(page - 1)} disabled={page === 0}>← 이전</button><small>{edit ? '편집 모드: 점선 칸을 클릭해 바로 수정하세요. 내용은 이 브라우저에 자동 저장됩니다.' : '내용 수정은 편집 모드를 켜세요. 흐린 기울임 칸은 직접 작성할 칸입니다.'}</small><button className="wa-btn" onClick={() => go(page + 1)} disabled={page === 4}>다음 →</button></div>
  </div></div>
}

function Hex() {
  const c = 110, R = 80, pt = (i: number, r: number) => `${c + r * Math.sin(i * Math.PI / 3)},${c - r * Math.cos(i * Math.PI / 3)}`
  const poly = SCORES.map(([, , s], i) => pt(i, R * s / 80)).join(' ')
  return <svg viewBox="0 0 220 220" className="wa-hex" role="img" aria-label="흥미 육각형: 현실형 73, 탐구형 58, 예술형 39, 사회형 41, 진취형 54, 관습형 46">
    {[.25, .5, .75, 1].map(k => <polygon key={k} points={SCORES.map((_, i) => pt(i, R * k)).join(' ')} fill="none" stroke="currentColor" strokeOpacity=".2" />)}
    <polygon points={poly} fill="#4a9eff" fillOpacity=".35" stroke="#4a9eff" strokeWidth="2" />
    {SCORES.map(([n, , s], i) => { const [x, y] = pt(i, R + 18).split(',').map(Number); return <text key={n} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="currentColor">{n.slice(-1)} {s}</text> })}
  </svg>
}

// 인생곡선: 2003년생 · 2021 수능 · 2022 재수 · 2023.3 입대 · 이후 복학·연구 활동
const LC = [
  { y: 2003, v: 0, t: '' }, { y: 2010, v: 1.5, t: '' }, { y: 2016, v: 4, t: '' },
  { y: 2017.5, v: 4.5, t: '행복' }, { y: 2019, v: 1.5, t: '' },
  { y: 2021.9, v: -2, t: '수능' }, { y: 2022.5, v: -4, t: '재수' },
  { y: 2023.0, v: 1, t: '대학 합격' }, { y: 2023.3, v: -1.5, t: '입대' },
  { y: 2024, v: 0, t: '군 복무' }, { y: 2024.75, v: 2, t: '전역' },
  { y: 2025.2, v: 2.5, t: '복학' }, { y: 2025.8, v: 5, t: '성적장학금' }, { y: 2026.8, v: 4, t: '현재' },
]
// 가로축: 최근이 더 중요하므로 어린 시절은 압축하고 현재에 가까울수록 넓게 배치 (연도 → 0~1)
const ANCH: [number, number][] = [[2003, 0], [2010, .07], [2016.2, .19], [2019.2, .3], [2022.2, .47], [2023, .58], [2026.8, 1]]
const pos = (y: number) => { for (let i = 1; i < ANCH.length; i++) { const [y0, p0] = ANCH[i - 1], [y1, p1] = ANCH[i]; if (y <= y1) return p0 + ((y - y0) / (y1 - y0)) * (p1 - p0) } return 1 }
const MILE: [number, string][] = [[2019.2, '고등학교 입학']]
function LifeCurve() {
  const W = 1000, H = 340, L = 70, R = 30, T = 70, B = 44
  const x = (y: number) => L + pos(y) * (W - L - R)
  const yy = (v: number) => T + ((5 - v) / 10) * (H - T - B)
  const pts = LC.map(p => [x(p.y), yy(p.v)] as const)
  let d = `M${pts[0][0]} ${pts[0][1]}`
  for (let i = 1; i < pts.length; i++) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], mx = (x0 + x1) / 2; d += ` C${mx} ${y0} ${mx} ${y1} ${x1} ${y1}` }
  return <svg viewBox={`0 0 ${W} ${H}`} className="wa-lc" role="img" aria-label="인생곡선">
    <g stroke="#c4ccd5" strokeWidth="2.5" strokeLinecap="round" fill="none">
      <line x1={L} x2={L} y1={T - 14} y2={H - B} /><line x1={L} x2={W - R + 8} y1={yy(0)} y2={yy(0)} />
      <path d={`M${L - 6} ${T - 6} L${L} ${T - 16} L${L + 6} ${T - 6}`} /><path d={`M${W - R + 2} ${yy(0) - 6} L${W - R + 12} ${yy(0)} L${W - R + 2} ${yy(0) + 6}`} />
    </g>
    {MILE.map(([yr, n]) => <g key={n}><line x1={x(yr)} x2={x(yr)} y1={T - 14} y2={H - B} stroke="var(--muted)" strokeDasharray="3 5" opacity=".6" />
      <text x={x(yr) + 6} y={T - 18} fill="var(--text)" fontSize="15" fontWeight="600">{n} · {Math.floor(yr)}</text>
      </g>)}
    <text x={x(2003)} y={H - 16} textAnchor="start" fill="#c4ccd5" fontSize="15" fontWeight="600">2003 출생</text>
    <text x={x(2026.8)} y={H - 16} textAnchor="middle" fill="#c4ccd5" fontSize="15" fontWeight="600">2026</text>
    <path d={d} fill="none" stroke="var(--blue)" strokeWidth="3.5" strokeLinecap="round" />
    {LC.map((p, i) => p.t && <g key={i}><circle cx={x(p.y)} cy={yy(p.v)} r="6" fill="var(--bg)" stroke="var(--blue)" strokeWidth="3" />
      <text x={x(p.y)} y={yy(p.v) + (p.v >= 0 ? -14 : 24)} textAnchor="middle" fill="var(--text)" fontSize="16" fontWeight="600">{p.t}</text></g>)}
  </svg>
}
