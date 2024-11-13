$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600
});

function handleScroll() {
  let scrollbar = Math.ceil(window.scrollY);

  let sideBarBlur = [];

  if(scrollbar == 0) {
    sideBarBlur = []
  }
  else if(scrollbar > 420) {
    sideBarBlur = ['bg-slate-800', 'shadow-zinc-800', 'shadow-sm']
  }
  else {

    sideBarBlur = ['bg-slate-800/40', 'shadow-zinc-800', 'shadow-sm']
  }

  document.querySelector('#navbar').classList = []

  let classList = [...sideBarBlur, 'w-full', 'flex', 'justify-end', 'items-center', 'py-2', 'fixed'];

  classList.forEach(cl => {
    document.querySelector('#navbar').classList.add(cl);
  });
}

window.addEventListener('scroll', handleScroll)

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

window.onload = async () =>{
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