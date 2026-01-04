const btn = document.getElementById('top');

window.addEventListener('scroll', ()=>{
  btn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

function goTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
