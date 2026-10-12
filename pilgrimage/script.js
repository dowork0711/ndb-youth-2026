const boxes = [...document.querySelectorAll('.checks input')];
boxes.forEach(box => box.addEventListener('change', () => { document.querySelector('#check-status').textContent = `${boxes.filter(b => b.checked).length} / ${boxes.length} 준비 완료`; }));
document.querySelector('#print').addEventListener('click', () => window.print());
