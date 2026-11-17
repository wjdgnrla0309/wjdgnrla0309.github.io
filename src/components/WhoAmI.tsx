import { useEffect, useState, type ChangeEvent } from 'react'
const KEY = 'whoami-slides'
type Store = Record<string, string>
const load = (): Store => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {} } }
const save = (s: Store) => { try { localStorage.setItem(KEY, JSON.stringify(s)) } catch { alert('저장 공간이 부족합니다. 이미지 크기를 줄여 주세요.') } }
// 직업선호도검사(S형) 결과표 값 (R·I·A·S·E·C 순서)
const SCORES = [['현실형 R', 18, 73], ['탐구형 I', 11, 58], ['예술형 A', 6, 39], ['사회형 S', 8, 41], ['진취형 E', 14, 54], ['관습형 C', 9, 46]] as const
const JOBS = '건설 및 광업기계 설치 및 정비원, 건축시공기술자, 경기감독 및 코치, 금융관리자, 기술영업원, 네트워크관리자, 데이터베이스 개발자, 도선사, 보일러 설치 및 정비원, 사회학연구원, 사회복지학연구원, 정치학연구원, 행정학연구원, 경영학연구원, 언론학연구원, 경제학연구원, 생산관리 사무원, 선장 및 항해사, 소방공학기술자, 스포츠강사, 웹엔지니어, 인쇄기조작원, 장학사, 철도기관차 및 전동차정비원, 측량 및 지리정보기술자, 토목감리기술자, 항공기조종사, 헬리콥터조종사'

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
  const Head = (_n: number, t: string) => <header className="wa-head"><div><h3>{t}</h3><p>기계·자동차공학 · 열관리에 관심</p></div><small>KIM JEONGHU</small></header>
  const slides = [
    <>
      {Head(1, "나는 누구인가?")}
      <h4>나를 한 문장으로 소개한다면</h4>
      <blockquote>{E("intro", '"재수와 군 복무를 거쳤지만 포기하지 않고, 직접 만들어 보며 배우고 있는 기계·자동차공학도입니다. 최근에는 열관리 분야에 관심을 갖고 있습니다."')}</blockquote>
      <div className="wa-grid3">{[1, 2, 3].map(i => <div key={i} className="wa-card"><b>키워드 {i}</b>{E(`kw${i}`, ["끈기", "구현", "시스템적 사고"][i - 1])}</div>)}</div>

    </>,
    <>
      {Head(2, "인생곡선")}
      <h4>0세부터 지금까지, 만족도가 높았던 때와 낮았던 때를 곡선으로 그립니다</h4>
      <div className="wa-curve">{store.curve ? Img("curve", "인생곡선") : <LifeCurve />}</div>
      <p className="wa-hint">최고점·최저점에 짧은 이름표를 달아 주세요</p>
      <div className="wa-grid2">
        <div className="wa-card"><b>가장 좋았던 순간</b><p>{E("best1", "대학에 입학해 성적장학금을 받았을 때가 가장 행복했습니다. 재수와 군 복무를 거쳐 돌아왔는데, 그 노력이 결과로 확인되어 정말 뿌듯했습니다. 마음 편했던 중학교 시절도 행복한 기억으로 남아 있습니다.")}</p><p>그때 '내가 한 일'은? {E("best2", "수업에 빠지지 않고 참석했고, 모르는 내용은 끝까지 찾아보고 복습했습니다.")}</p></div>
        <div className="wa-card"><b>가장 힘들었던 순간</b><p>{E("low1", "2022년 재수 시절이 가장 힘들었습니다. 원하던 결과가 나오지 않아 한 해를 더 준비해야 했고, 그만큼 많이 지쳐 있었습니다.")}</p><p>그때 '내가 한 일'은? {E("low2", "학습 계획을 매일 점검하며 끝까지 버텼고, 그 결과 공주대학교 기계·자동차공학과에 입학할 수 있었습니다.")}</p></div>
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
        <div className="wa-card"><b>결과가 나와 맞는 점</b>{E("fit", "현실형(73점)이 가장 높게 나온 결과에 공감했습니다. KUMA에서 차량을 다루고 연구실에서 실험 장치를 접하는 현재의 경험과 잘 맞는다고 생각합니다.")}</div>
        <div className="wa-card"><b>의외였던 점</b>{E("odd", "제가 희망하던 기계공학기술자와 에너지기술자가 추천 직업에 없었다는 점이 의외였습니다. 관심 분야와 검사 결과가 반드시 일치하지는 않는다는 것을 알게 되었고, 앞으로 다양한 경험으로 직접 확인해 보고 싶습니다.")}</div>
      </div>
    </>,
    <>
      {Head(4, "나를 설명하는 다섯 가지")}
      {[['meaning', '나에게 의미 있는 일', '저는 성장, 성취, 협업 순으로 중요하게 생각합니다. 어제보다 나은 결과를 만들고 그것이 실제 성과로 확인될 때, 그리고 팀과 함께 해냈을 때 의미를 느낍니다.'], ['joy', '나에게 즐거움을 주는 일', '설계하고 실험하고 직접 만들어 보면서, 공학 문제가 눈에 보이는 결과로 이어질 때 즐거움을 느낍니다. 운동으로 땀을 흘리며 머리를 비우는 시간도 좋아합니다.'], ['skill', '내가 잘할 수 있는 일', '새로운 도구를 직접 써 보며 빠르게 익히는 편입니다. 헬스처럼 정한 일을 꾸준히 이어 가는 편이라, 팀에서 맡은 일도 끝까지 마무리합니다.'], ['hard', '내가 어려워하는 일', '처음부터 완벽하게 하려다 보면 시작이 늦어지는 점이 어렵습니다. 그래서 작게 먼저 만들어 보고, 팀원들의 피드백을 받아 고쳐 나가는 방식으로 보완하고 있습니다.'], ['moment', '가장 기억에 남는 순간', 'KUMA 포뮬러 차량이 트랙을 달리는 모습을 처음 보았을 때입니다. 도면과 자료로만 보던 것이 실제로 움직이는 것을 보며 공학의 보람을 느꼈습니다.']].map(([k, t, d]) => <div key={k} className="wa-row"><b>{t}</b>{E(k, d)}</div>)}
    </>,
    <>
      {Head(5, "나를 보여주는 장면, 그리고 다음")}
      <h4>나를 잘 설명해 주는 경험·활동 2~3개와, 지금 관심 있는 방향</h4>
      <div className="wa-grid3">{[1, 2, 3].map(i => <div key={i} className="wa-card">{(i === 2 || edit || store[`ph${i}`]) && Img(`ph${i}`, "사진 추가 (선택)", i === 2 ? "/images/whoami/kuma-team.jpg" : undefined)}<b>경험 {i}: {E(`ex${i}t`, ["바이브코딩으로 만든 KUMA 동아리 홈페이지", "2026 영암 트랙데이 (KUMA)", "재수·군 복무 후 성적장학금"][i - 1])}</b>{E(`ex${i}d`, ["AI와 함께 코딩하는 바이브코딩으로 KUMA 동아리 홈페이지를 만들었습니다. 코드를 모두 아는 것은 아니지만, 필요한 기능을 정하고 결과를 확인하며 고쳐 가는 과정에서 만들고 싶은 것을 실제로 구현해 내는 힘을 기를 수 있었습니다.", "KUMA 팀과 영암 트랙데이에 참가해 포뮬러 차량이 주행하는 모습을 직접 보았습니다. 설계가 실제 성능으로 이어지는 과정을 지켜보며, 차량을 하나의 시스템으로 이해하고 싶다는 마음이 더 커졌습니다.", "재수와 군 복무를 거쳐 대학에 돌아온 뒤 꾸준히 공부해 성적장학금을 받았습니다. 멀리 돌아왔지만 끝까지 해내는 힘이 생겼고, 이것이 저의 가장 큰 강점이라고 생각합니다."][i - 1])}</div>)}</div>
      <div className="wa-grid3">
        <div className="wa-card"><b>관심 있는 산업·직무</b>{E("field", "전동화 시대에 꼭 필요한 열관리(Thermal Management)에 관심이 있습니다. 자동차에서 시작해 공조, 히트펌프, 데이터센터 냉각까지 분야를 넓혀 가며 에너지 효율을 높이는 엔지니어가 되고 싶습니다. (검사 결과표 희망직업: 기계공학기술자, 에너지기술자)")}</div>
        <div className="wa-card"><b>이 수업에서 얻고 싶은 것</b>{E("goal", "검사 결과(RE)와 제 경험을 바탕으로 진로 방향을 더 구체적으로 정하고, 앞으로 무엇을 배우고 도전할지 계획으로 이어 가고 싶습니다.")}</div>
        <div className="wa-card"><b>발표 때 꼭 하고 싶은 한 마디</b>{E("last", "멀리 돌아왔지만, 그만큼 더 단단하게 배우고 도전하겠습니다. 지켜봐 주시면 감사하겠습니다.")}</div>
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
    <div className={`wa-slide${edit ? ' editing' : ''}`}>{slides[page]}</div>
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
