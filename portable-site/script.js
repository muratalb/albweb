document.querySelectorAll('img[data-fallback]').forEach((img)=>{
  img.addEventListener('error', ()=>{
    const fb = img.dataset.fallback;
    if (fb && img.src.indexOf(fb) === -1) img.src = fb;
  }, { once: true });
});

const io = new IntersectionObserver((entries)=>entries.forEach((e)=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.24});
document.querySelectorAll('.reveal').forEach((el)=>io.observe(el));

const chapters = [...document.querySelectorAll('.chapter')];
const chapterObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      chapters.forEach((c)=>c.classList.remove('depth-active','depth-pass'));
      entry.target.classList.add('depth-active');
      const i = chapters.indexOf(entry.target);
      if (i > 0) chapters[i-1].classList.add('depth-pass');
    }
  })
},{threshold:.52});
chapters.forEach((ch)=>chapterObserver.observe(ch));

const panel = document.getElementById('tiltCard');
const parallaxEls = [...document.querySelectorAll('.parallax')];
const onScroll = ()=>{
  if(!panel) return;
  const vh = window.innerHeight;
  const r = panel.getBoundingClientRect();
  const p = Math.max(0,Math.min(1,(vh-r.top)/(vh+r.height)));
  panel.style.transform = `translateY(${(0.5-p)*48}px) rotateX(${(0.5-p)*9}deg) rotateY(${(p-0.5)*6}deg)`;
  parallaxEls.forEach((el)=>{
    const speed = Number(el.dataset.speed || 0.2);
    el.style.transform = `translateY(${(0.5-p)*160*speed}px)`;
  });
};
window.addEventListener('scroll', onScroll, { passive:true });
window.addEventListener('mousemove', (e)=>{
  if(!panel) return;
  const x = (e.clientX/window.innerWidth - .5) * 8;
  const y = (e.clientY/window.innerHeight - .5) * -8;
  panel.style.filter = `drop-shadow(${x}px ${y+30}px 70px rgba(0,0,0,.7))`;
}, { passive:true });
onScroll();
