import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [distances, setDistances] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const calculateDistance = (x1, y1, x2, y2) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };

    const radius9999Elements = [
      document.getElementById('circle1'),
      document.getElementById('circle2'),
      document.getElementById('circle3'),
      document.getElementById('circle4'),
      document.getElementById('circle5'),
      document.getElementById('circle6'),
      document.getElementById('circle7'),
      document.getElementById('circle8'),
      document.getElementById('circle9'),
      document.getElementById('circle10'),
      document.getElementById('circle11'),
      document.getElementById('circle12'),
      document.getElementById('circle13'),
    ];
    
    const nonRadius9999Elements = [
      document.getElementById('line1'),
      document.getElementById('line2'),
      document.getElementById('line3'),
      document.getElementById('line4'),
    ];

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
          distance: calculateDistance(circleCenterX, circleCenterY, lineCenterX, lineCenterY),
        };
      })
    );

    setDistances(distances);
  }, [canvasRef]);

  return (
    <div className="App">
      <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
      {/* P1 */}
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
      {/* P2 */}
        {/* <div id="line5" style={{width: 145, height: 0, left: 39, top: 54, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '10px #FFD35C solid'}}></div>
        <div id="line6" style={{width: 145, height: 0, left: 103, top: 257, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '10px #FFD35C solid'}}></div>
        <div id="line7" style={{width: 145, height: 0, left: 1279, top: 23, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '10px #FFD35C solid'}}></div>
        <div id="line8" style={{width: 57, height: 0, left: 353, top: 314, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D6914A solid'}}></div>
        <div id="line9" style={{width: 119, height: 0, left: 122, top: 376, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D6914A solid'}}></div>
        <div id="line10" style={{width: 28, height: 0, left: 1298, top: 209, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D6914A solid'}}></div>
        <div id="line11" style={{width: 28, height: 0, left: 1822, top: 181, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D6914A solid'}}></div>
        <div id="line12" style={{width: 86, height: 0, left: 29, top: 212, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #DDCEFF dotted'}}></div>
        <div id="line13" style={{width: 141, height: 0, left: 1271, top: 164, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #DDCEFF dotted'}}></div>
        <div id="line14" style={{width: 129, height: 0, left: 1561, top: 376, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #DDCEFF dotted'}}></div>
        <div id="line15" style={{width: 118.56, height: 0, left: 0, top: 96, position: 'absolute', transform: 'rotate(-50.13deg)', transformOrigin: '0 0', border: '10px #8F5CFF solid'}}></div>
        <div id="line16" style={{width: 116, height: 0, left: 94, top: 372, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #8F5CFF solid'}}></div>
        <div id="line17" style={{width: 139, height: 0, left: 1738, top: 383, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #8F5CFF solid'}}></div>
        <div id="line18" style={{width: 67.88, height: 0, left: 1715, top: 182, position: 'absolute', transform: 'rotate(-135deg)', transformOrigin: '0 0', border: '10px #8F5CFF solid'}}></div>
        <div id="line19" style={{width: 105.65, height: 0, left: 154, top: 145, position: 'absolute', transform: 'rotate(-72.94deg)', transformOrigin: '0 0', border: '10px #5C37AD solid'}}></div>
        <div id="line20" style={{width: 97, height: 0, left: 141, top: 383, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #5C37AD solid'}}></div>
        <div id="line21" style={{width: 69.30, height: 0, left: 1291, top: 62, position: 'absolute', transform: 'rotate(-135deg)', transformOrigin: '0 0', border: '10px #5C37AD solid'}}></div>
        <div id="line22" style={{width: 67, height: 0, left: 1810, top: 219, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #5C37AD solid'}}></div>
        <div id="line23" style={{width: 101, height: 0, left: 0, top: 195, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FFCEDB dotted'}}></div>
        <div id="line24" style={{width: 101, height: 0, left: 294, top: 134, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FFCEDB dotted'}}></div>
        <div id="line25" style={{width: 115.97, height: 0, left: 1338, top: 82, position: 'absolute', transform: 'rotate(-135deg)', transformOrigin: '0 0', border: '10px #FFCEDB dotted'}}></div>
        <div id="line26" style={{width: 150, height: 0, left: 1724, top: 383, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FFCEDB dotted'}}></div>
        <div id="line27" style={{width: 61, height: 0, left: 401, top: 244, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FF5C86 solid'}}></div>
        <div id="line28" style={{width: 82, height: 0, left: 236, top: 352, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FF5C86 solid'}}></div>
        <div id="line29" style={{width: 62.23, height: 0, left: 1337, top: 206, position: 'absolute', transform: 'rotate(-135deg)', transformOrigin: '0 0', border: '10px #FF5C86 solid'}}></div>
        <div id="line30" style={{width: 77, height: 0, left: 1341, top: 349, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #FF5C86 solid'}}></div>
        <div id="line31" style={{width: 135, height: 0, left: 227, top: 168, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D64A6E solid'}}></div>
        <div id="line32" style={{width: 69, height: 0, left: 416, top: 244, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D64A6E solid'}}></div>
        <div id="line33" style={{width: 108, height: 0, left: 1234, top: 275, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D64A6E solid'}}></div>
        <div id="line34" style={{width: 150, height: 0, left: 1454, top: 383, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D64A6E solid'}}></div>
        <div id="line35" style={{width: 75, height: 0, left: 13, top: 194, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #C0CEFF dotted'}}></div>
        <div id="line36" style={{width: 145, height: 0, left: 103, top: 402, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #C0CEFF dotted'}}></div>
        <div id="line37" style={{width: 58, height: 0, left: 1279, top: 199, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #C0CEFF dotted'}}></div>
        <div id="line38" style={{width: 142, height: 0, left: 1691, top: 375, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #C0CEFF dotted'}}></div>
        <div id="line39" style={{width: 73.50, height: 0, left: 371, top: 193, position: 'absolute', transform: 'rotate(-33.91deg)', transformOrigin: '0 0', border: '10px #5C80FF solid'}}></div>
        <div id="line40" style={{width: 83, height: 0, left: 269, top: 358, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #5C80FF solid'}}></div>
        <div id="line41" style={{width: 128, height: 0, left: 1501, top: 372, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #5C80FF solid'}}></div>
        <div id="line42" style={{width: 102.55, height: 0, left: 1738, top: 175, position: 'absolute', transform: 'rotate(-133.81deg)', transformOrigin: '0 0', border: '10px #5C80FF solid'}}></div>
        <div style={{width: 21, height: 21, left: 1399, top: 100, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1420, top: 305, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1213, top: 260, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1590, top: 185, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 827, top: 10, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 970, top: 208, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 649, top: 399, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 120, top: 31, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 432, top: 165, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1246, top: 89, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1225, top: 175, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1213, top: 177, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1234, top: 239, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 395, top: 167, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 453, top: 209, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 358, top: 290, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 348, top: 281, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 563, top: 233, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 797, top: 244, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 450, top: 322, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 461, top: 311, position: 'absolute', background: '#D6914A', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 432, top: 253, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 596, top: 399, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 949, top: 78, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 884, top: 294, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 395, top: 146, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 314, top: 57, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 237, top: 142, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1266, top: 78, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1234, top: 208, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1420, top: 358, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1490, top: 295, position: 'absolute', background: '#DDCEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 415, top: 232, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 406, top: 302, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 820, top: 364, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1125, top: 220, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 335, top: 10, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 258, top: 121, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 370, top: 167, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 293, top: 323, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1268, top: 110, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1399, top: 199, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1399, top: 304, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1667, top: 372, position: 'absolute', background: '#8F5CFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1242, top: 46, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1242, top: 144, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1221, top: 223, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1694, top: 167, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1114, top: 167, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1093, top: 21, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 493, top: 265, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 493, top: 347, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 443, top: 189, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 327, top: 166, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 325, top: 285, position: 'absolute', background: '#5C37AD', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 443, top: 290, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 474, top: 253, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 797, top: 338, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 981, top: 420, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 194, top: 241, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 169, top: 369, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 421, top: 42, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 426, top: 99, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1236, top: 317, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1236, top: 275, position: 'absolute', background: '#FFCEDB', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 325, top: 243, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 304, top: 301, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 776, top: 121, position: 'absolute', background: '#FFD35C', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 520, top: 300, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1102, top: 189, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 279, top: 295, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 328, top: 325, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 464, top: 174, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1225, top: 208, position: 'absolute', background: '#FF5C86', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1203, top: 132, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1210, top: 286, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1204, top: 264, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 405, top: 70, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 261, top: 327, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 549, top: 344, position: 'absolute', background: '#D64A6E', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 665, top: 328, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 606, top: 177, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 419, top: 179, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 314, top: 271, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1215, top: 106, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1646, top: 357, position: 'absolute', background: '#C0CEFF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1235, top: 301, position: 'absolute', background: '#5C80FF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 454, top: 165, position: 'absolute', background: '#5C80FF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 336, top: 302, position: 'absolute', background: '#5C80FF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 464, top: 351, position: 'absolute', background: '#5C80FF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1093, top: 90, position: 'absolute', background: '#5C80FF', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 436, top: 141, position: 'absolute', background: '#3350B8', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 460, top: 77, position: 'absolute', background: '#3350B8', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 345, top: 255, position: 'absolute', background: '#3350B8', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 360, top: 271, position: 'absolute', background: '#3350B8', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 877, top: 195, position: 'absolute', background: '#3350B8', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1242, top: 120, position: 'absolute', background: '#3350B8', borderRadius: 9999}} />
        <div style={{width: 57, height: 0, left: 71, top: 209, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px #D6914A solid'}}></div>
        <div id="line43" style={{width: 90, height: 0, left: 471, top: 13, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '10px #DDCEFF dotted'}}></div>
        <div id="line44" style={{width: 100, height: 0, left: 72, top: 75.61, position: 'absolute', transform: 'rotate(-41deg)', transformOrigin: '0 0', background: '#3350B8', border: '10px #3350B8 solid'}}></div>
        <div id="line45" style={{width: 150, height: 0, left: 105, top: 424, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#3350B8', border: '10px #3350B8 solid'}}></div>
        <div id="line46" style={{width: 120, height: 0, left: 1856, top: 269, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#3350B8', border: '10px #3350B8 solid'}}></div>
        <div style={{width: 21, height: 21, left: 456, top: 161, position: 'absolute', background: '#3350B8', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 480, top: 97, position: 'absolute', background: '#3350B8', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 365, top: 275, position: 'absolute', background: '#3350B8', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 380, top: 291, position: 'absolute', background: '#3350B8', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 897, top: 215, position: 'absolute', background: '#3350B8', borderRadius: 9999}} />
        <div style={{width: 21, height: 21, left: 1262, top: 140, position: 'absolute', background: '#3350B8', borderRadius: 9999}} /> */}
        <canvas ref={canvasRef} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none'}}></canvas>
      </div>

      <div style={{position: 'absoulte', top: 1000, left: 0, paddingTop: '500px'}}>
        <h2>Distances:</h2>
        <ul>
          {distances.map(({ id, distance }) => (
            <li key={id}>{id}: {distance}px</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;