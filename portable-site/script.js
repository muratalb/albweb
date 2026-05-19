const io = new IntersectionObserver((entries)=>{
  entries.forEach((e)=>{ if(e.isIntersecting) e.target.classList.add('visible') })
},{threshold:.28})

document.querySelectorAll('.reveal').forEach((el)=>io.observe(el))

const card = document.getElementById('tiltCard')
window.addEventListener('scroll',()=>{
  const rect = card.getBoundingClientRect()
  const vh = window.innerHeight
  const p = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)))
  card.style.transform = `translateY(${(0.5-p)*50}px) rotateX(${(0.5-p)*8}deg)`
},{passive:true})
