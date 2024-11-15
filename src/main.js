$('.bxslider').bxSlider({
  auto: false,
  adaptiveHeight: true,
  autoControls: false,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600
});


$('.access-solicitation').on('click', () => Swal.fire({
  title: "Solicitar Acesso",
  text: "Solicite o acesso ao repositorio via linkedin",
  icon: "info",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Solicitar"
})
  .then((result)=>{
    
    if(result.isConfirmed) {
      window.location = 'https://www.linkedin.com/in/fernando-linhares-7037651b6/' 
    }
  }))

async function writeTitle() {
  let title = document.querySelector('#title');
  let name = '< Fernando L. Silvestre Fullstack />';

  let wait = (time) => new Promise((resolve, reject)=>setTimeout(()=> resolve(), time));

  let c = cursor();
  c.start();

  for(let char of name.split('')) {
    await wait(100)
    title.innerHTML += char;
  }

  c.end();
}

function cursor() {
  let el = document.querySelector('#cursor');
  let interval = null;
  let flag = true;
  return {
    start: () => {
      $(el).removeClass('opacity-0');

      interval = setInterval(() => {
      if (flag) {
        $(el).addClass('opacity-0');
      } else {
        $(el).removeClass('opacity-0');
      }
      
      flag = !flag;
    } , 378)
  },
    end: () => {
      $(el).addClass('opacity-0');
      clearInterval(interval);
    }
  };
}


const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: true,
  autoplay: false
})
.add({
  translateX: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  ],
  translateY: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  ],
  duration: 1000,
  scale: .5,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  translateX: () => anime.random(-10, 10),
  translateY: () => anime.random(-10, 10),
  delay: anime.stagger(8, {from: 'last'})
})
.add({
  translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  scaleX: 2.5,
  scaleY: .25,
  delay: anime.stagger(4, {from: 'center'})
})
.add({
  rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
  delay: anime.stagger(50, {grid: grid, from: 'center'})
})
.add({
  translateX: 0,
  translateY: 0,
  scale: .5,
  scaleX: 1,
  rotate: 180,
  duration: 1000,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  scaleY: 1,
  scale: 1,
  delay: anime.stagger(20, {grid: grid, from: 'center'})
})

staggersAnimation.play();


setTimeout(()=> {
$('.overlay').css({
  background: 'rgba(0,0,0,0)'
})
}, 2000);

setTimeout(()=>{
  $('.overlay').hide(500);
  $('#description').toggleClass('opacity-0', 'opacity-1')
  $('#header').removeClass('pb-80')
  document.querySelectorAll('img').forEach(img => {
    window.location.href + 'assets/';
    if($(img).hasClass('opacity-0')) {
      $(img).toggleClass('opacity-0', 'opacity-1')
    }
  });
  
  writeTitle();
},4000);


$('#see-more').on('click', ()=>{

  let text = `
  infraestrutura, trabalhando com Docker, AWS e Azure, o que me permite entregar soluções robustas e escaláveis.
                  Ao longo da minha trajetória, desenvolvi sistemas web para empresas, pequenos negócios e projetos pessoais, sempre com foco em inovação, boas
                  práticas de desenvolvimento, Design Driven Development (DDD), padrões de projeto (Design Patterns) e Test Driven Development (TDD). Contribuí em projetos
                    relevantes, como integrações com sistemas governamentais, incluindo o Sistema de Protocolo Único (SPU) e o AssineJá, criando soluções seguras para assinatura digital.
                  Tenho também experiência em projetos pessoais voltados para blockchain, sistemas de e-commerce com ERPs integrados e alta capacidade de processamento. 
                  Minha maestria em Laravel, ASP.NET, Angular, Vue e Ruby on Rails me permite criar soluções de ponta, sempre impulsionando a inovação e buscando 
                  resultados que transformam negócios.
  `
  document.querySelector('#experience').innerHTML += text;
  $('#see-more').hide()

})
