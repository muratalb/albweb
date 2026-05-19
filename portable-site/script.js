const io = new IntersectionObserver((entries)=>entries.forEach((e)=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.24});
document.querySelectorAll('.reveal').forEach((el)=>io.observe(el));

const panel = document.getElementById('tiltCard');
const parallaxEls = [...document.querySelectorAll('.parallax')];
const onScroll = ()=>{
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
  const x = (e.clientX/window.innerWidth - .5) * 8;
  const y = (e.clientY/window.innerHeight - .5) * -8;
  panel.style.filter = `drop-shadow(${x}px ${y+30}px 70px rgba(0,0,0,.7))`;
}, { passive:true });
onScroll();
