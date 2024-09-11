import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [distances, setDistances] = useState([]);
  const [selectedPart, setSelectedPart] = useState('P1'); // 상태 관리
  const canvasRef = useRef(null);

  useEffect(() => {
    const calculateDistance = (x1, y1, x2, y2) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };

    const radius9999Elements = [], nonRadius9999Elements = [], distanceElements = [];

    distanceElements.push(document.getElementById('circle99991'));
    distanceElements.push(document.getElementById('circle99992'));
    distanceElements.push(document.getElementById('circle99993'));
    distanceElements.push(document.getElementById('circle99994'));

    // 선택된 Part에 따라 요소 가져오기
    if (selectedPart === 'P1') {
      for (let i = 1; i <= 13; i++) {
        radius9999Elements.push(document.getElementById('circle' + i));
      }
      for (let i = 1; i <= 4; i++) {
        nonRadius9999Elements.push(document.getElementById('line' + i));
      }
    } else if (selectedPart === 'P2') {
      for (let i = 14; i <= 24; i++) {
        radius9999Elements.push(document.getElementById('circle' + i));
      }
      radius9999Elements.push(document.getElementById('circle222'));
      for (let i = 5; i <= 8; i++) {
        nonRadius9999Elements.push(document.getElementById('line' + i));
      }
    } else if (selectedPart === 'P3') {
      for (let i = 25; i <= 36; i++) {
        radius9999Elements.push(document.getElementById('circle' + i));
      }
      for (let i = 9; i <= 13; i++) {
        nonRadius9999Elements.push(document.getElementById('line' + i));
      }
    } else if (selectedPart === 'P4') {
      for (let i = 37; i <= 47; i++) {
        radius9999Elements.push(document.getElementById('circle' + i));
      }
      for (let i = 14; i <= 17; i++) {
        nonRadius9999Elements.push(document.getElementById('line' + i));
      }
    } else if (selectedPart === 'P5') {
      for (let i = 48; i <= 59; i++) {
        radius9999Elements.push(document.getElementById('circle' + i));
      }
      for (let i = 18; i <= 21; i++) {
        nonRadius9999Elements.push(document.getElementById('line' + i));
      }
    } else if (selectedPart === 'P6') {
      for (let i = 60; i <= 70; i++) {
        radius9999Elements.push(document.getElementById('circle' + i));
      }
      for (let i = 22; i <= 25; i++) {
        nonRadius9999Elements.push(document.getElementById('line' + i));
      }
    } else if (selectedPart === 'P7') {
      for (let i = 71; i <= 80; i++) {
        radius9999Elements.push(document.getElementById('circle' + i));
      }
      for (let i = 26; i <= 29; i++) {
        nonRadius9999Elements.push(document.getElementById('line' + i));
      }
    } else if (selectedPart === 'P8') {
      for (let i = 81; i <= 86; i++) {
        radius9999Elements.push(document.getElementById('circle' + i));
      }
      for (let i = 30; i <= 33; i++) {
        nonRadius9999Elements.push(document.getElementById('line' + i));
      }
    } else if (selectedPart === 'P9') {
      for (let i = 87; i <= 92; i++) {
        radius9999Elements.push(document.getElementById('circle' + i));
      }
      for (let i = 34; i <= 37; i++) {
        nonRadius9999Elements.push(document.getElementById('line' + i));
      }
    } else if (selectedPart === 'P10') {
      for (let i = 93; i <= 98; i++) {
      radius9999Elements.push(document.getElementById('circle' + i));
      }
      for (let i = 38; i <= 41; i++) {
        nonRadius9999Elements.push(document.getElementById('line' + i));
      }
    } else if (selectedPart === 'P11') {
      for (let i = 99; i <= 103; i++) {
          radius9999Elements.push(document.getElementById('circle' + i));
        }
        for (let i = 42; i <= 45; i++) {
          nonRadius9999Elements.push(document.getElementById('line' + i));
        }
    } else if (selectedPart === 'P12') {
      for (let i = 104; i <= 115; i++) {
        radius9999Elements.push(document.getElementById('circle' + i));
      }
      for (let i = 46; i <= 49; i++) {
        nonRadius9999Elements.push(document.getElementById('line' + i));
      }
    }

    const dist = distanceElements.map((e) => {
      const circleRect = e.getBoundingClientRect();
      const circleCenterX = circleRect.left + circleRect.width / 2;
      const circleCenterY = circleRect.top + circleRect.height / 2;
      return [circleCenterX, circleCenterY];
    });

    const distScale1 = calculateDistance(dist[0][0], dist[0][1], dist[1][0], dist[1][1]) / 6400; // 466 / 6400 => 0.0728125
    const distScale2 = calculateDistance(dist[2][0], dist[2][1], dist[3][0], dist[3][1]) / 10800; // 789 / 10800 => 0.07305556
    const distScale = (distScale1 + distScale2) / 2;

    console.log(distScale);

    const distances = radius9999Elements.flatMap((circle) =>
      nonRadius9999Elements.map((line) => {
        const circleRect = circle.getBoundingClientRect();
        const lineRect = line.getBoundingClientRect();

        const circleCenterX = circleRect.left + circleRect.width / 2;
        const circleCenterY = circleRect.top + circleRect.height / 2;
        const lineCenterX = lineRect.left + lineRect.width / 2;
        const lineCenterY = lineRect.top + lineRect.height / 2;

        return {
          id: `${circle.id}-${line.id}`,
          distance: calculateDistance(circleCenterX, circleCenterY, lineCenterX, lineCenterY) / distScale,
        };
      })
    );

    setDistances(distances);
  }, [canvasRef, selectedPart]); // selectedPart가 변경될 때마다 계산 수행

  return (
    <div className="App">
      {/* 드롭다운 메뉴 */}
      <select
        value={selectedPart}
        onChange={(e) => setSelectedPart(e.target.value)}
        style={{ marginBottom: '20px' }}
      >
        <option value="P1">P1</option>
        <option value="P2">P2</option>
        <option value="P3">P3</option>
        <option value="P4">P4</option>
        <option value="P5">P5</option>
        <option value="P6">P6</option>
        <option value="P7">P7</option>
        <option value="P8">P8</option>
        <option value="P9">P9</option>
        <option value="P10">P10</option>
        <option value="P11">P11</option>
        <option value="P12">P12</option>
      </select>

      <div style={{ width: '100vw', height: '100vh', position: 'relative', background: 'white' }}>
        {/* P1 */}
        {selectedPart === 'P1' && (
          <>
            <div id="line1" style={{width: 245, height: 0, left: 113, top: 18, position: 'absolute', border: '10px #FFD4A7 dotted'}}>l1</div>
            <div id="line2" style={{width: 77.10, height: 0, left: 88.44, top: 372.37, position: 'absolute', transform: 'rotate(43.42deg)', transformOrigin: '0 0', border: '10px #FFD4A7 dotted'}}>l2</div>
            <div id="line3" style={{width: 141, height: 0, left: 1298, top: 23, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '10px #FFD4A7 dotted'}}>l3</div>
            <div id="line4" style={{width: 143, height: 0, left: 1704, top: 233, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '10px #FFD4A7 dotted'}}>l4</div>
            <div id="circle1" style={{width: 21, height: 21, left: 0, top: 79, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c1 </div>
            <div id="circle2" style={{width: 21, height: 21, left: 120, top: 154, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c2 </div>
            <div id="circle3" style={{width: 21, height: 21, left: 206, top: 337, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c3 </div>
            <div id="circle4" style={{width: 21, height: 21, left: 1256, top: 79, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c4 </div>
            <div id="circle5" style={{width: 21, height: 21, left: 1550, top: 198, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c5 </div>
            <div id="circle6" style={{width: 21, height: 21, left: 1389, top: 270, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c6 </div>
            <div id="circle7" style={{width: 21, height: 21, left: 1272, top: 348, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c7 </div>
            <div id="circle8" style={{width: 21, height: 21, left: 1646, top: 291, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c8 </div>
            <div id="circle9" style={{width: 21, height: 21, left: 258, top: 270, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c9 </div>
            <div id="circle10" style={{width: 21, height: 21, left: 628, top: 164, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c10 </div>
            <div id="circle11" style={{width: 21, height: 21, left: 563, top: 399, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c11 </div>
            <div id="circle12" style={{width: 21, height: 21, left: 607, top: 326, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c12 </div>
            <div id="circle13" style={{width: 21, height: 21, left: 877, top: 364, position: 'absolute', background: '#FFD4A7', borderRadius: 9999}} > c13 </div>
          </>
        )}

        {/* P2 */}
        {selectedPart === 'P2' && (
          <>
            <div id="line5" style={{width: 145, height: 0, left: 39, top: 54, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '10px #FFD35C solid'}}>l5</div>
            <div id="line6" style={{width: 145, height: 0, left: 103, top: 257, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '10px #FFD35C solid'}}>l6</div>
            <div id="line7" style={{width: 145, height: 0, left: 1279, top: 23, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '10px #FFD35C solid'}}>l7</div>
            <div id="line8" style={{width: 322, height: 0, left: 1615, top: 419, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '10px #FFD35C solid'}}>l8</div>
            <div id="circle14" style={{width: 21, height: 21, left: 1399, top: 100, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} > c14 </div>
            <div id="circle15" style={{width: 21, height: 21, left: 1213, top: 260, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} > c15 </div>
            <div id="circle16" style={{width: 21, height: 21, left: 1590, top: 185, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} > c16 </div>
            <div id="circle17" style={{width: 21, height: 21, left: 827, top: 10, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} > c17 </div>
            <div id="circle18" style={{width: 21, height: 21, left: 970, top: 208, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} > c18 </div>
            <div id="circle19" style={{width: 21, height: 21, left: 649, top: 399, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} > c19 </div>
            <div id="circle20" style={{width: 21, height: 21, left: 120, top: 31, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} > c20 </div>
            <div id="circle21" style={{width: 21, height: 21, left: 432, top: 165, position: 'absolute', background: '#FFD35C', borderRadius: 9999}}> c21 </div>
            <div id="circle22" style={{width: 21, height: 21, left: 325, top: 243, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} > c22 </div>
            <div id="circle23" style={{width: 21, height: 21, left: 304, top: 301, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} > c23 </div>
            <div id="circle24" style={{width: 21, height: 21, left: 776, top: 121, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} > c24 </div>
            <div id="circle222" style={{width: 21, height: 21, left: 1420, top: 305, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} > c222 </div>
            
          </>
        )}

        {/* P3 */}
        {selectedPart === 'P3' && (
          <>
            <div id="line9" style={{width: 57, height: 0, left: 353, top: 314, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D6914A solid'}}>l9</div>
            <div id="line10" style={{width: 119, height: 0, left: 122, top: 376, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D6914A solid'}}>l10</div>
            <div id="line11" style={{width: 28, height: 0, left: 1298, top: 209, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D6914A solid'}}>l11</div>
            <div id="line12" style={{width: 28, height: 0, left: 1822, top: 181, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D6914A solid'}}>l12</div>
            <div id="line13" style={{width: 57, height: 0, left: 71, top: 209, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D6914A solid'}}>l13</div>
            <div  id="circle25" style={{width: 21, height: 21, left: 1246, top: 89, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c25 </div>
            <div  id="circle26" style={{width: 21, height: 21, left: 1225, top: 175, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c26 </div>
            <div  id="circle27" style={{width: 21, height: 21, left: 1213, top: 177, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c27 </div>
            <div  id="circle28" style={{width: 21, height: 21, left: 1234, top: 239, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c28 </div>
            <div  id="circle29" style={{width: 21, height: 21, left: 395, top: 167, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c29 </div>
            <div  id="circle30" style={{width: 21, height: 21, left: 453, top: 209, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c30 </div>
            <div  id="circle31" style={{width: 21, height: 21, left: 358, top: 290, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c31 </div>
            <div  id="circle32" style={{width: 21, height: 21, left: 348, top: 281, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c32 </div>
            <div  id="circle33" style={{width: 21, height: 21, left: 563, top: 233, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c33 </div>
            <div  id="circle34" style={{width: 21, height: 21, left: 797, top: 244, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c34 </div>
            <div  id="circle35" style={{width: 21, height: 21, left: 450, top: 322, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c35 </div>
            <div  id="circle36" style={{width: 21, height: 21, left: 461, top: 311, position: 'absolute', background: '#D6914A', borderRadius: 9999}} > c36 </div> 
          </>
        )}

        {/* P4 */}
        {selectedPart === 'P4' && (
          <>
            <div id="line14" style={{width: 86, height: 0, left: 29, top: 212, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #DDCEFF dotted'}}>l14</div>
            <div id="line15" style={{width: 141, height: 0, left: 1271, top: 164, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #DDCEFF dotted'}}>l15</div>
            <div id="line16" style={{width: 129, height: 0, left: 1561, top: 376, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #DDCEFF dotted'}}>l16</div>
            <div id="line17" style={{width: 90, height: 0, left: 471, top: 13, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '10px #DDCEFF dotted'}}>l17</div>
            <div id="circle37" style={{width: 21, height: 21, left: 432, top: 253, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} > c37 </div>
            <div id="circle38" style={{width: 21, height: 21, left: 596, top: 399, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} > c38 </div>
            <div id="circle39" style={{width: 21, height: 21, left: 949, top: 78, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} > c39 </div>
            <div id="circle40" style={{width: 21, height: 21, left: 884, top: 294, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} > c40 </div>
            <div id="circle41" style={{width: 21, height: 21, left: 395, top: 146, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} > c41 </div>
            <div id="circle42" style={{width: 21, height: 21, left: 314, top: 57, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} > c42 </div>
            <div id="circle43" style={{width: 21, height: 21, left: 237, top: 142, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} > c43 </div>
            <div id="circle44" style={{width: 21, height: 21, left: 1266, top: 78, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} > c44 </div>
            <div id="circle45" style={{width: 21, height: 21, left: 1234, top: 208, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} > c45 </div>
            <div id="circle46" style={{width: 21, height: 21, left: 1420, top: 358, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} > c46 </div>
            <div id="circle47" style={{width: 21, height: 21, left: 1490, top: 295, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} > c47 </div>
          </>
        )}

        {/* P5 */}
        {selectedPart === 'P5' && (
          <>
            <div id="line18" style={{width: 118.56, height: 0, left: 0, top: 96, position: 'absolute', transform: 'rotate(-50.13deg)', transformOrigin: '0 0', border: '10px #8F5CFF solid'}}>l18</div>
            <div id="line19" style={{width: 116, height: 0, left: 94, top: 372, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #8F5CFF solid'}}>l19</div>
            <div id="line20" style={{width: 139, height: 0, left: 1738, top: 383, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #8F5CFF solid'}}>l20</div>
            <div id="line21" style={{width: 67.88, height: 0, left: 1715, top: 182, position: 'absolute', transform: 'rotate(-135deg)', transformOrigin: '0 0', border: '10px #8F5CFF solid'}}>l21</div>
            <div id="circle48" style={{width: 21, height: 21, left: 415, top: 232, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c48 </div>
            <div id="circle49" style={{width: 21, height: 21, left: 406, top: 302, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c49 </div>
            <div id="circle50" style={{width: 21, height: 21, left: 820, top: 364, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c50 </div>
            <div id="circle51" style={{width: 21, height: 21, left: 1125, top: 220, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c51 </div>
            <div id="circle52" style={{width: 21, height: 21, left: 335, top: 10, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c52 </div>
            <div id="circle53" style={{width: 21, height: 21, left: 258, top: 121, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c53 </div>
            <div id="circle54" style={{width: 21, height: 21, left: 370, top: 167, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c54 </div>
            <div id="circle55" style={{width: 21, height: 21, left: 293, top: 323, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c55 </div>
            <div id="circle56" style={{width: 21, height: 21, left: 1268, top: 110, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c56 </div>
            <div id="circle57" style={{width: 21, height: 21, left: 1399, top: 199, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c57 </div>
            <div id="circle58" style={{width: 21, height: 21, left: 1399, top: 304, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c58 </div>
            <div id="circle59" style={{width: 21, height: 21, left: 1667, top: 372, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} > c59 </div>
          </>
        )}

        {/* P6 */}
        {selectedPart === 'P6' && (
          <>
            <div id="line22" style={{width: 105.65, height: 0, left: 154, top: 145, position: 'absolute', transform: 'rotate(-72.94deg)', transformOrigin: '0 0', border: '10px #5C37AD solid'}}>l22</div>
            <div id="line23" style={{width: 97, height: 0, left: 141, top: 383, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #5C37AD solid'}}>l23</div>
            <div id="line24" style={{width: 69.30, height: 0, left: 1291, top: 62, position: 'absolute', transform: 'rotate(-135deg)', transformOrigin: '0 0', border: '10px #5C37AD solid'}}>l24</div>
            <div id="line25" style={{width: 67, height: 0, left: 1810, top: 219, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #5C37AD solid'}}>l25</div>
            <div id="circle60" style={{width: 21, height: 21, left: 1242, top: 46, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} > c60 </div>
            <div id="circle61" style={{width: 21, height: 21, left: 1242, top: 144, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} > c61 </div>
            <div id="circle62" style={{width: 21, height: 21, left: 1221, top: 223, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} > c62 </div>
            <div id="circle63" style={{width: 21, height: 21, left: 1694, top: 167, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} > c63 </div>
            <div id="circle64" style={{width: 21, height: 21, left: 1114, top: 167, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} > c64 </div>
            <div id="circle65" style={{width: 21, height: 21, left: 1093, top: 21, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} > c65 </div>
            <div id="circle66" style={{width: 21, height: 21, left: 493, top: 265, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} > c66 </div>
            <div id="circle67" style={{width: 21, height: 21, left: 493, top: 347, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} > c67 </div>
            <div id="circle68" style={{width: 21, height: 21, left: 443, top: 189, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} > c68 </div>
            <div id="circle69" style={{width: 21, height: 21, left: 327, top: 166, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} > c69 </div>
            <div id="circle70" style={{width: 21, height: 21, left: 325, top: 285, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} > c70 </div>
          </>
        )}

        {/* P7 */}
        {selectedPart === 'P7' && (
          <>
            <div id="line26" style={{width: 101, height: 0, left: 0, top: 195, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FFCEDB dotted'}}>l26</div>
            <div id="line27" style={{width: 101, height: 0, left: 294, top: 134, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FFCEDB dotted'}}>l27</div>
            <div id="line28" style={{width: 115.97, height: 0, left: 1338, top: 82, position: 'absolute', transform: 'rotate(-135deg)', transformOrigin: '0 0', border: '10px #FFCEDB dotted'}}>l28</div>
            <div id="line29" style={{width: 150, height: 0, left: 1724, top: 383, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FFCEDB dotted'}}>l29</div>
            <div id="circle71" style={{width: 21, height: 21, left: 443, top: 290, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} > c71 </div>
            <div id="circle72" style={{width: 21, height: 21, left: 474, top: 253, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} > c72 </div>
            <div id="circle73" style={{width: 21, height: 21, left: 797, top: 338, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} > c73 </div>
            <div id="circle74" style={{width: 21, height: 21, left: 981, top: 420, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} > c74 </div>
            <div id="circle75" style={{width: 21, height: 21, left: 194, top: 241, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} > c75 </div>
            <div id="circle76" style={{width: 21, height: 21, left: 169, top: 369, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} > c76 </div>
            <div id="circle77" style={{width: 21, height: 21, left: 421, top: 42, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} > c77 </div>
            <div id="circle78" style={{width: 21, height: 21, left: 426, top: 99, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} > c78 </div>
            <div id="circle79" style={{width: 21, height: 21, left: 1236, top: 317, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} > c79 </div>
            <div id="circle80" style={{width: 21, height: 21, left: 1236, top: 275, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} > c80 </div>
          </>
        )}

        {/* P8 */}
        {selectedPart === 'P8' && (
          <>
            <div id="line30" style={{width: 61, height: 0, left: 401, top: 244, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FF5C86 solid'}}>l30</div>
            <div id="line31" style={{width: 82, height: 0, left: 236, top: 352, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FF5C86 solid'}}>l31</div>
            <div id="line32" style={{width: 62.23, height: 0, left: 1337, top: 206, position: 'absolute', transform: 'rotate(-135deg)', transformOrigin: '0 0', border: '10px #FF5C86 solid'}}>l32</div>
            <div id="line33" style={{width: 77, height: 0, left: 1341, top: 349, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FF5C86 solid'}}>l33</div>
            <div id="circle81" style={{width: 21, height: 21, left: 520, top: 300, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} > c81 </div>
            <div id="circle82" style={{width: 21, height: 21, left: 1102, top: 189, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} > c82 </div>
            <div id="circle83" style={{width: 21, height: 21, left: 279, top: 295, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} > c83 </div>
            <div id="circle84" style={{width: 21, height: 21, left: 328, top: 325, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} > c84 </div>
            <div id="circle85" style={{width: 21, height: 21, left: 464, top: 174, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} > c85 </div>
            <div id="circle86" style={{width: 21, height: 21, left: 1225, top: 208, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} > c86 </div>
          </>
        )}

        {/* P9 */}
        {selectedPart === 'P9' && (
          <>
            <div id="line34" style={{width: 135, height: 0, left: 227, top: 168, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D64A6E solid'}}>l34</div>
            <div id="line35" style={{width: 69, height: 0, left: 416, top: 244, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D64A6E solid'}}>l35</div>
            <div id="line36" style={{width: 108, height: 0, left: 1234, top: 275, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D64A6E solid'}}>l36</div>
            <div id="line37" style={{width: 150, height: 0, left: 1454, top: 383, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D64A6E solid'}}>l37</div>
            <div id="circle87" style={{width: 21, height: 21, left: 1203, top: 132, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} > c87 </div>
            <div id="circle88" style={{width: 21, height: 21, left: 1210, top: 286, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} > c88 </div>
            <div id="circle89" style={{width: 21, height: 21, left: 1204, top: 264, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} > c89 </div>
            <div id="circle90" style={{width: 21, height: 21, left: 405, top: 70, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} > c90 </div>
            <div id="circle91" style={{width: 21, height: 21, left: 261, top: 327, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} > c91 </div>
            <div id="circle92" style={{width: 21, height: 21, left: 549, top: 344, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} > c92 </div>
          </>
        )}

        {/* P10 */}
        {selectedPart === 'P10' && (
          <>
            <div id="line38" style={{width: 75, height: 0, left: 13, top: 194, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #C0CEFF dotted'}}>l38</div>
            <div id="line39" style={{width: 145, height: 0, left: 103, top: 402, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #C0CEFF dotted'}}>l39</div>
            <div id="line40" style={{width: 58, height: 0, left: 1279, top: 199, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #C0CEFF dotted'}}>l40</div>
            <div id="line41" style={{width: 142, height: 0, left: 1691, top: 375, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #C0CEFF dotted'}}>l41</div>
            <div id="circle93" style={{width: 21, height: 21, left: 665, top: 328, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} > c93 </div>
            <div id="circle94" style={{width: 21, height: 21, left: 606, top: 177, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} > c94 </div>
            <div id="circle95" style={{width: 21, height: 21, left: 419, top: 179, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} > c95 </div>
            <div id="circle96" style={{width: 21, height: 21, left: 314, top: 271, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} > c96 </div>
            <div id="circle97" style={{width: 21, height: 21, left: 1215, top: 106, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} > c97 </div>
            <div id="circle98" style={{width: 21, height: 21, left: 1646, top: 357, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} > c98 </div>
          </>
        )}

        {/* P11 */}
        {selectedPart === 'P11' && (
          <>
            <div id="line42" style={{width: 73.50, height: 0, left: 371, top: 193, position: 'absolute', transform: 'rotate(-33.91deg)', transformOrigin: '0 0', border: '10px #5C80FF solid'}}>l42</div>
            <div id="line43" style={{width: 83, height: 0, left: 269, top: 358, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #5C80FF solid'}}>l43</div>
            <div id="line44" style={{width: 128, height: 0, left: 1501, top: 372, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #5C80FF solid'}}>l44</div>
            <div id="line45" style={{width: 102.55, height: 0, left: 1738, top: 175, position: 'absolute', transform: 'rotate(-133.81deg)', transformOrigin: '0 0', border: '10px #5C80FF solid'}}>l45</div>
            <div id="circle99" style={{width: 21, height: 21, left: 1235, top: 301, position: 'absolute', background: '#5C80FF', borderRadius: 9999}} > c99 </div>
            <div id="circle100" style={{width: 21, height: 21, left: 454, top: 165, position: 'absolute', background: '#5C80FF', borderRadius: 9999}} > c100 </div>
            <div id="circle101" style={{width: 21, height: 21, left: 336, top: 302, position: 'absolute', background: '#5C80FF', borderRadius: 9999}} > c101 </div>
            <div id="circle102" style={{width: 21, height: 21, left: 464, top: 351, position: 'absolute', background: '#5C80FF', borderRadius: 9999}} > c102 </div>
            <div id="circle103" style={{width: 21, height: 21, left: 1093, top: 90, position: 'absolute', background: '#5C80FF', borderRadius: 9999}} > c103 </div>
          </>
        )}

        {/* P12 */}
        {selectedPart === 'P12' && (
          <>
            <div id="line46" style={{width: 100, height: 0, left: 72, top: 75.61, position: 'absolute', transform: 'rotate(-41deg)', transformOrigin: '0 0', background: '#3350B8', border: '10px #3350B8 solid'}}>l46</div>
            <div id="line47" style={{width: 150, height: 0, left: 105, top: 424, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#3350B8', border: '10px #3350B8 solid'}}>l47</div>
            <div id="line48" style={{width: 120, height: 0, left: 1856, top: 269, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#3350B8', border: '10px #3350B8 solid'}}>l48</div>
            <div id="line49" style={{width: 60, height: 0, left: 1335, top: 202, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#3350B8', border: '10px #3350B8 solid'}}>l49</div>
            <div id="circle104" style={{width: 21, height: 21, left: 436, top: 141, position: 'absolute', background: '#3350B8', borderRadius: 9999, visibility: 'hidden'}} > c104 </div>
            <div id="circle105" style={{width: 21, height: 21, left: 460, top: 77, position: 'absolute', background: '#3350B8', borderRadius: 9999, visibility: 'hidden'}} > c105 </div>
            <div id="circle106" style={{width: 21, height: 21, left: 345, top: 255, position: 'absolute', background: '#3350B8', borderRadius: 9999, visibility: 'hidden'}} > c106 </div>
            <div id="circle107" style={{width: 21, height: 21, left: 360, top: 271, position: 'absolute', background: '#3350B8', borderRadius: 9999}} > c107 </div>
            <div id="circle108" style={{width: 21, height: 21, left: 877, top: 195, position: 'absolute', background: '#3350B8', borderRadius: 9999, visibility: 'hidden'}} > c108 </div>
            <div id="circle109" style={{width: 21, height: 21, left: 1242, top: 120, position: 'absolute', background: '#3350B8', borderRadius: 9999, visibility: 'hidden'}} > c109 </div>
            <div id="circle110" style={{width: 21, height: 21, left: 456, top: 161, position: 'absolute', background: '#3350B8', borderRadius: 9999}} > c110 </div>
            <div id="circle111" style={{width: 21, height: 21, left: 480, top: 97, position: 'absolute', background: '#3350B8', borderRadius: 9999}} > c111 </div>
            <div id="circle112" style={{width: 21, height: 21, left: 365, top: 275, position: 'absolute', background: '#3350B8', borderRadius: 9999, visibility: 'hidden'}} > c112 </div>
            <div id="circle113" style={{width: 21, height: 21, left: 380, top: 291, position: 'absolute', background: '#3350B8', borderRadius: 9999}} > c113 </div>
            <div id="circle114" style={{width: 21, height: 21, left: 897, top: 215, position: 'absolute', background: '#3350B8', borderRadius: 9999}} > c114 </div>
            <div id="circle115" style={{width: 21, height: 21, left: 1262, top: 140, position: 'absolute', background: '#3350B8', borderRadius: 9999}} > c115 </div>
          </>
        )}

        <div id="circle99991" style={{ width: 21, height: 21, left: -11, top: 434, position: 'absolute', background: 'black', borderRadius: 9999, visibility: 'hidden' }} />
        <div id="circle99992" style={{ width: 21, height: 21, left: -11, top: -32, position: 'absolute', background: 'black', borderRadius: 9999, visibility: 'hidden' }} />
        <div id="circle99993" style={{ width: 21, height: 21, left: 1036, top: 410, position: 'absolute', background: 'black', borderRadius: 9999, visibility: 'hidden' }} />
        <div id="circle99994" style={{ width: 21, height: 21, left: 1825, top: 410, position: 'absolute', background: 'black', borderRadius: 9999, visibility: 'hidden' }} />

      </div>

      <div style={{ position: 'absolute', top: '550px'}}>
        <h2>Distances</h2>
        <ul>
          {distances.map((distance) => (
            <li key={distance.id}>
              {distance.id}: {(distance.distance / 1000).toFixed(2)} m
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
