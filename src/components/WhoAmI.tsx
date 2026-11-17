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
    return <div className="wa-img">{store[id] ?? def ? <img src={store[id] ?? def} alt={def ? '영암 트랙데이에서 트랙을 주행하는 KUMA 포뮬러 차량' : label} /> : <p>{label}</p>}{edit && <label className="wa-btn">이미지 선택<input type="file" accept="image/*" hidden onChange={onFile} /></label>}</div>
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
      {Head(2, "1) 인생곡선")}
      <h4>0세부터 지금까지, 만족도가 높았던 때와 낮았던 때를 곡선으로 그립니다</h4>
      <div className="wa-curve"><i>만족 +</i><i>만족 −</i><i>0세</i><i>현재</i>{Img("curve", "[곡선을 직접 그리거나, 손으로 그린 그림을 사진으로 붙여도 됩니다]")}</div>
      <p className="wa-hint">최고점·최저점에 짧은 이름표를 달아 주세요</p>
      <div className="wa-grid2">
        <div className="wa-card"><b>가장 좋았던 순간</b><p>언제였나요? {E("best1", "[입력]")}</p><p>그때 '내가 한 일'은? {E("best2", "[입력]")}</p></div>
        <div className="wa-card"><b>가장 힘들었던 순간</b><p>언제였나요? {E("low1", "[입력]")}</p><p>그때 '내가 한 일'은? {E("low2", "[입력]")}</p></div>
      </div>
      <div className="wa-card"><b>여기서 찾은 가치어 3개</b>{E("values", "[예] 성취, 인정, 안정, 탐구, 협력")}<p>→ 1장의 키워드와 연결</p></div>
    </>,
    <>
      {Head(3, "2) 직업 관련 검사 결과")}
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
      {Head(4, "3) 나를 설명하는 다섯 가지")}
      <h4>수업 시간에 쓴 자기이해 표를 옮기고, 이유를 한 줄씩 덧붙입니다</h4>
      {[['meaning', '나에게 의미 있는 일', '성장 > 성취 > 협업 순으로 중요합니다. 어제보다 나은 설계를 만들고, 그 결과가 실제 성능으로 확인될 때, 팀과 함께 만들어 낼 때 의미를 느낍니다.'], ['joy', '나에게 즐거움을 주는 일', '설계와 실험, 데이터 해석, 실제 제작을 오가며 공학 문제를 구체적인 시스템으로 구현할 때 즐겁습니다.'], ['skill', '내가 잘할 수 있는 일', '새로운 도구를 빠르게 익혀 직접 만들어 보는 일을 잘합니다. 팀 활동에서 맡은 일은 끝까지 책임지고 마무리합니다.'], ['hard', '내가 어려워하는 일', '처음부터 완벽한 결과를 내려다 시작이 늦어지는 점이 어렵습니다. 작은 단위로 먼저 만들어 검증하고, 팀원의 피드백을 받아 반복하며 보완하고 있습니다.'], ['moment', '가장 기억에 남는 순간', 'KUMA 포뮬러 차량이 트랙을 달리는 모습을 처음 본 순간입니다. 도면과 해석 결과로만 보던 시스템이 실제로 움직이며 성능을 내는 것을 보고 공학의 보람을 느꼈습니다.']].map(([k, t, d]) => <div key={k} className="wa-row"><b>{t}</b>{E(k, d)}</div>)}
    </>,
    <>
      {Head(5, "4) 나를 보여주는 장면, 그리고 다음")}
      <h4>나를 잘 설명해 주는 경험·활동 2~3개와, 지금 관심 있는 방향</h4>
      <div className="wa-grid3">{[1, 2, 3].map(i => <div key={i} className="wa-card">{Img(`ph${i}`, "[사진·이미지] (선택, 얼굴 없이도 OK)", i === 2 ? "/images/whoami/kuma-trackday.jpg" : undefined)}<b>경험 {i}: {E(`ex${i}t`, ["Thermal & Energy Solutions Laboratory 학부연구생", "2026 영암 트랙데이 (KUMA)", "웹 프로젝트 (KUMA 팀 사이트·여행 추천)"][i - 1])}</b>{E(`ex${i}d`, ["수작업 코팅·건조 공정의 편차를 줄이기 위해 직교좌표계 모션 플랫폼 기반 자동화를 검토하고 있습니다. 실험의 재현성을 높이려는 탐구형·실행형 면모를 보여 줍니다.", "KUMA 팀과 함께 영암 트랙데이에 다녀왔고, 포뮬러 차량이 트랙을 주행하는 현장을 직접 경험했습니다. 차량을 시스템 전체로 보려는 관심을 보여 줍니다.", "React·Vite로 팀 웹사이트를, TourAPI·Kakao API로 여행 추천 웹앱을 만들었습니다. 정보를 사용자 흐름에 맞게 구조화하는 구현력을 보여 줍니다."][i - 1])}</div>)}</div>
      <div className="wa-grid3">
        <div className="wa-card"><b>관심 있는 산업·직무</b>{E("field", "진로 목표: 열관리 분야의 연구자·엔지니어. 자동차에서 시작해 공조·히트펌프·데이터센터 냉각까지 배우며 관심 분야를 넓혀 가는 중. (검사 결과표 희망직업: 기계공학기술자, 에너지기술자)")}</div>
        <div className="wa-card"><b>이 수업에서 얻고 싶은 것</b>{E("goal", "검사 결과(RE)와 내 경험을 근거로 열관리 분야 진로 방향을 더 구체적으로 정리하고, 앞으로 무엇을 배울지 계획하는 것.")}</div>
        <div className="wa-card"><b>발표 때 꼭 하고 싶은 한 마디</b>{E("last", "[3분 발표의 마지막 문장]")}</div>
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
