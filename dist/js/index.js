(()=>{"use strict";const e=document.querySelector(".hambu"),t=document.querySelectorAll(".menuLink__link"),o=document.querySelector(".containMobile");function i(){e.classList.contains("active")?(e.classList.remove("active"),o.style.display="none",setTimeout((()=>{o.classList.remove("active")}),10)):(e.classList.add("active"),o.style.display="flex",setTimeout((()=>{o.classList.add("active")}),10))}const a=[{img:"./assets/img/images/lugarAccesible.jpg",github:"https://github.com/Mod8124/LugarAccesible",url:"https://lugar-accesible.vercel.app",icons:["React","Redux","tailwindcss","React-testing-library"],title:{EN:"LugarAccesible",ES:"LugarAccesible"},info:{EN:"Web platform focused on accessibility, which allows people with reduced mobility to obtain information about the accessibility of public and private spaces based on their location. Third-party APIs will be used to gather geolocation information and accessibility details from various places.",ES:"Plataforma web enfocada a la accesibilidad, que permite a las personas con movilidad reducida obtener información sobre la accesibilidad de los espacios públicos y privados en función de su ubicación. Se utilizarán API de terceros para recopilar información de geolocalización y detalles de accesibilidad de varios lugares."},serverHosting:!0},{img:"./assets/img/images/appstudent.jpg",github:"https://github.com/Mod8124/AppStudent",url:"https://app-student.vercel.app",icons:["React","Redux","Sass"],title:{EN:"AppStudent",ES:"AppEstudiantes"},info:{EN:"A web platform that consists to provide tools for students such as todo-list, dictionary to look for English words, Pomodoro, calendar, calculator and wiki searches. All this in only place.",ES:"Una plataforma web que consiste en proporcionar herramientas para los estudiantes como lista de tareas, diccionario para buscar palabras en inglés, pomodoro, calendario, calculadora y búsquedas en wiki. Todo esto en un solo lugar."}},{img:"./assets/img/images/rock.jpg",github:"https://github.com/Mod8124/Classic-Rock-paper-scissors.git",url:"https://classic-rock-paper-scissors.vercel.app",icons:["NextJs","MongoDB","Styled-components","React-testing-library"],title:{EN:"Rock-Paper-Scissors Game",ES:"Piedra-papel-tijera Juego"},info:{EN:"Created a classic game App to enable users to play rock-paper-scissors or rock-lizard-Spock in NextJS, and save names for records by saving them in MongoDB. Implemented good practices, state management with redux, and test the code with unit testing.",ES:"Cree una aplicación de juego clásico para permitir al usuario jugar piedra-papel-tijeras o piedra-lagarto-Spock en NextJS, y guarde los nombres para clasificación, guardándolos en MongoDB. Implementado buenas prácticas, gestiónde estados con redux, y testeé el código con unit-test."}},{img:"./assets/img/images/ecommerce.jpg",github:"https://github.com/Mod8124/ecommerce-vue.git",url:"https://ecommerce-vue-seven.vercel.app",icons:["Vue","Vuex","Vue-Router","TypeScript","Sass"],title:{EN:"Shoes E-commerce",ES:"Zapatos E-commerce"},info:{EN:"Developed an e-commerce app ,and built API for providing all the products, utilizing NodeJs on the server-side, and the client-side with Vue via an API. Implemented design features, state management, router, and CSS methodology like BEM in SASS.",ES:"Desarrolle un e-commerce app, y construí una API para proveer todos los productos, utilizando NodeJs en el lado del servidor, y en el lado del cliente con Vue através de una API. implementado principio de diseño, gestión de estados(vuex), rutas, y aplicando metodologías de CSS como Bem en Sass."}},{img:"./assets/img/images/AnimeBlog.jpg",github:"https://github.com/Mod8124/blogAnime-node.git",url:"https://bloganime-node-production.up.railway.app",icons:["Nodejs","MongoDB","Ejs","Webpack"],title:{EN:"Blog-App",ES:"Blog-App"},info:{EN:"Developed and designed a blog app with authenticating, utilizing NodeJs by storing all the data on MongoDB, And the client-side ejs, while implementing MVC. Improved user experience during app by using things like dark mode to improve the usability.",ES:"Desarrolle y Diseñe un blog app con autenticación, utilizando NodeJs, almacenando todos los datos en MongoDB, y en lado del cliente el template Ejs mientras implemento MVC. Mejorando la ux durante la app, usando modo oscuro para la accesibilidad."},serverHosting:!0},{img:"./assets/img/images/moon.jpg",github:"https://github.com/Mod8124/space-tourism-nextjs-typescript.git",url:"https://space-tourism-nextjs-typescript.vercel.app",icons:["NextJs","TypeScript","RTK Query","Styled-Components"],title:{EN:"Space-tourism",ES:"Turismo-Espacial"},info:{EN:"Developed a Space tourism multi-page website(spa) based on NextJs + TypeScript, Framer-Motion, and Styled-Components. Implemented Eslint for formatting the code, preventing bugs by using Unit Test (React-Testing-Library) in NextJs, and Sending all the data necessary by NodeJs + TypeScript.",ES:"Desarrollé un sitio web (spa) de varias páginas de turismo espacial basado en NextJs + TypeScript, Framer-Motion, y Styled-Components. Se implementó Eslint para formatear el código, evitar errores mediante el uso de Unit Test (React-Testing-Library) en NextJs y enviar todos los datos necesarios mediante NodeJs + TypeScript."}},{img:"./assets/img/images/rest-country.jpg",github:"https://github.com/Mod8124/rest-countries-vue.git",url:"https://rest-countries-mv56ciqhj-mod8124.vercel.app",icons:["Vue","Vue-Router","Sass"],title:{EN:"Rest-Country",ES:"Resto-País"},info:{EN:"Developed a REST Countries API with a dark mode switcher, showing all necessary countries and seeing country details by Vue Router, consuming the API via Vue.js, and styling with Sass using the Single File Component pattern in Vue.js.",ES:"Desarrollé una API de países REST con un conmutador de modo oscuro, mostrando todos los países necesarios y viendo los detalles de los países por Vue Router, consumiendo la API a través de Vue.js y diseñando con Sass usando el patrón de componente de archivo único en Vue.js."}},{img:"./assets/img/images/clone-netflix.jpg",github:"https://github.com/Mod8124/Netflix-clone-with-next-js.git",url:"https://netflix-clone-three-ochre.vercel.app",icons:["NextJs","NodeJs","Css-Modules"],title:{EN:"Netflix-Clone",ES:"Netflix-Clon"},info:{EN:"Developed a Netflix clone with select users based on NextJs, CSS Modules, and NodeJs by consuming the movie DB API to implement a Responsive layout to adapt to users's screens, and adding styles with CSS Modules.",ES:"Desarrollé un clon de Netflix con usuarios seleccionados basado en NextJs, Módulos CSS y NodeJs al consumir la API de base de datos de películas para implementar un diseño receptivo para adaptarse a las pantallas de los usuarios y agregar estilos con módulos CSS."}},{img:"./assets/img/images/jhonny.jpg",github:"https://github.com/Mod8124/jhonny_webSite.git",url:"https://mod8124.github.io/jhonny_webSite",icons:["HTML","Css","JavaScript"],title:{EN:"Jhonny-WebSite",ES:"Jhonny-sitioWeb"},info:{EN:"Developed and Designed a four pages website for Jhonny Toval(Artis based on Costa Rica), based on HTML5, CSS3, and JavaScript to expand the jhonny's business while implemented the optimal layout depending on their device's screen size, and Mobile-First.",ES:"Desarrollé y diseñé cuatro páginas de sitios web para Jhonny Toval (Artista de Costa Rica), basadas en HTML5, CSS3 y JavaScript para expandir el negocio de jhonny mientras implementaba el diseño óptimo según el tamaño de pantalla de su dispositivo y Mobile -Primero."}},{img:"./assets/img/images/ajedrez.jpg",github:"https://github.com/Mod8124/ChessWebsite.git",url:"https://chess-website.vercel.app",icons:["TypeScript","CSS","GSAP"],title:{EN:"Chess-WebSite",ES:"Ajedrez-sitioWeb"},info:{EN:"Developed and Designed a unique website about Ajedrez, based on HTML5, Css3, and JavaScript. to implement things like SlideShow(carousel), parallax-effect Css-flexbox, CSS-Grid, optimizing Images and logo, Mobile-first, and Responsive Design.",ES:"Desarrollé y diseñé un sitio web único sobre Ajedrez, basado en HTML5, Css3 y JavaScript. para implementar cosas como SlideShow (carrusel), efecto-paralax Css-flexbox, CSS-Grid, optimización de imágenes y logotipo, Mobile-first y Responsive Design."}},{img:"./assets/img/images/food.jpg",github:"https://github.com/Mod8124/Food_webSite.git",url:"https://food-web-site.vercel.app",icons:["HTML","CSS","JavaScript"],title:{EN:"Food-WebSite",ES:"Comida-sitioWeb"},info:{EN:"Developed and Designed a website specializing in desserts, based on HTML5, Css3, and JavaScript. to implement things like SlideShow(carousel), Css-flexbox, CSS-Grid, optimizing Images and logo, Mobile-first, and Responsive Design.",ES:"Desarrollé y Diseñé un sitio web especializado en postres, basado en HTML5, Css3 y JavaScript. para implementar cosas como SlideShow (carrusel), Css-flexbox, CSS-Grid, optimización de imágenes y logotipo, Mobile-first y Diseño Responsivo."}},{img:"./assets/img/images/calculator.jpg",github:"https://github.com/Mod8124/Calculator-React-TypeScript.git",url:"https://calculator-react-type-script.vercel.app",icons:["React","TypeScript","Framer-Motion","Styled-Components"],title:{EN:"Calculator-App",ES:"Calculadora-App"},info:{EN:"Developed the classic calculator with three different themes switches and animations, based on React + TypeScript, Framer-motion, Styled-Components. Implemented Unit-test(react-testing-library) and apply reset CSS with Normalize.css for making look good on all the browsers.",ES:"Desarrollé la calculadora clásica con tres interruptores de temas diferentes y animaciones, basada en React + TypeScript, Framer-motion, Styled-Componets. Se implementó Unit-test (react-testing-library) y se aplicó el reinicio de CSS con normalize.css para que se viera bien en todos los navegadores."}}],s=[{github:"https://github.com/Mod8124/LugarAccesible-back",url:"https://lugaraccesible-back-production.up.railway.app",title:{EN:"LugarAccesibleAPI",ES:"LugarAccesibleAPI"},info:{EN:"A simple API that provide accessibility information based on location for people with reduced mobility",ES:"Simple API que proporciona información de accesibilidad según la ubicación para personas con movilidad reducida"},icons:["NodeJs","Fastify","Zod","TypeScript","Swagger","MongoDB"]},{github:"https://github.com/Mod8124/freeShoesApi",url:"https://freeshoesapi-production.up.railway.app",title:{EN:"FreeShoesAPI",ES:"ZapatosGratisAPI"},info:{EN:"A simple free API that provides a curated collection of 30 shoe collections for e-commerce websites.",ES:"Simple API y gratuita que proporciona una colección de 30 colecciones de zapatos para sitios web de comercio electrónico."},icons:["NodeJs","TypeScript","Jest","Swagger","MongoDB"]},{github:"https://github.com/Mod8124/blogAnime-node",url:"https://bloganime-node-production.up.railway.app",title:{EN:"Blog-Anime",ES:"Blog-Anime"},info:{EN:"A RESTful API following MVC design pattern, Implemented authentication and user-friendly features.",ES:"API RESTful siguiendo el patrón de diseño MVC, autenticación implementada y características fáciles de usar."},icons:["NodeJs","MongoDB","Webpack","EJS"]}],n=s,{EN:r,ES:c}={EN:{nav:["Home","About","Skills","Projects","Contact"],hero:{hello:"Hi,",im:"I'm",web:"Front End Developer & Web designer"},accesibilty:{main:{title:"Main Color"},secondary:{title:"Secondary Color"},restart:"Restart Color"},about:{title:"About Me",para:["I'm a self-taught Front end Developer who started as a Web Designer, based in Costa Rica. Currently, I don't work the IT industry. In my free time, I like to do code things like <strong class='about__focus'><</strong>freelance projects | personal projects | or just code<strong class='about__focus'>></strong>. I hope one day to work as a full-time front end developer.",'I like to challenge myself and improve my tech skills so, I\'m starting my journey as <span class="about__focus">software engineer student</span> in september also, I participated in the <a target="_blank" href="https://worldskills.org">WorldSkills</a> competition 2021.'],link:"Download Resume "},skills:{title:"Technical Skills"},projects:{title:"Projects",btn:"Games"},contant:{title:"Contact me",sub_title:"Wow, look who's here!",number:"Phone Number"},footer:{links:["Projects","About","Contact"],others:["Term","Privacy"],repo:" Designed & built by <strong>Denis Muñoz</strong>"}},ES:{nav:["Inicio","Sobre mí","Habilidades","Proyectos","Contacto"],hero:{hello:"Hola,",im:"Soy",web:"Desarrollador Front End & Diseñador Web"},accesibilty:{main:{title:"Color Primario"},secondary:{title:"Color Secondario"},restart:"Restaurar color"},about:{title:"Sobre mí",para:["Soy un desarrollador front-end autodidacta que comenzó como diseñador web, ubicado en Costa Rica. Actualmente, no trabajo en la industria de IT. En mi tiempo libre, me gusta programar cosas como proyectos  <strong class='about__focus'><</strong>freelance | personales<strong class='about__focus'>></strong> o simplemente código. Espero algún día trabajar como desarrollador front-end a tiempo completo.",'Me gusta desafiarme a mí mismo y mejorar mis habilidades tecnológicas, así que estoy comenzando mi viaje como <span class="about__focus">estudiante de ingeniería de software</span> en septiembre y también participé en la competencia <a target="_blank" href="https://worldskills.org">WorldSkills</a> 2021.'],link:"Descargar Curriculum"},skills:{title:"Habilidades técnicas"},projects:{title:"Proyectos",btn:"Juegos"},contant:{title:"Contáctame",sub_title:"Wow, Mira quién esta aqui!",number:"Número"},footer:{links:["Proyectos","Sobre mí","Contacto"],others:["Términos","Privacidad"],repo:" Diseñado y construido por <strong>Denis Muñoz</strong>"}}},l=document.querySelectorAll(".btn__language"),d=document.querySelectorAll(".menuLink__link"),u=document.querySelectorAll(".navBarLinks"),p=document.querySelector("#hello"),m=document.querySelector("#im"),g=document.querySelector(".cta__para"),b=document.querySelectorAll(".colorSelect__title"),h=document.querySelectorAll(".colorSelect__over"),y=document.querySelector(".about__title"),S=document.querySelectorAll(".about__para"),v=document.querySelector(".btnDownload"),f=document.querySelector(".mainButton"),_=document.querySelector(".skills__title"),w=document.querySelector(".title__title"),E=document.querySelector(".projectBtn-game"),L=document.querySelector(".tittleTwo__title h2"),k=document.querySelector(".tittleTwo__title h3"),M=document.querySelector(".textRedNumber"),T=document.querySelectorAll(".footer__link"),C=document.querySelectorAll(".footer__link2"),A=document.querySelector(".footer__linkRepo"),q=document.querySelector(".btn__language"),j=e=>{const{target:t}=e;t.classList.contains("btn__language--en")?(l[1].classList.remove("active"),t.classList.add("active")):(l[0].classList.remove("active"),t.classList.add("active"));const o=q.classList.contains("active");x(o)},x=e=>{if(e){d.forEach(((e,t)=>e.innerHTML=r.nav[t])),u.forEach(((e,t)=>e.innerHTML=r.nav[t])),p.innerHTML=r.hero.hello,m.innerHTML=r.hero.im,g.innerHTML=r.hero.web,y.innerHTML=r.about.title,S.forEach(((e,t)=>e.innerHTML=r.about.para[t])),v.textContent=r.about.link,f.href="./assets/img/resume_Denis_p.pdf",_.innerHTML=r.skills.title,b[0].innerHTML=r.accesibilty.main.title,b[1].innerHTML=r.accesibilty.secondary.title,h.forEach((e=>e.innerHTML=r.accesibilty.restart));const e=document.querySelectorAll(".project__backTitle"),t=document.querySelectorAll(".project__backParagraph");w.innerHTML=r.projects.title,E.innerHTML=r.projects.btn,e.forEach(((e,t)=>e.innerHTML=n[t].title.EN)),t.forEach(((e,t)=>e.innerHTML=n[t].info.EN)),L.innerHTML=r.contant.title,k.innerHTML=r.contant.sub_title,M.innerHTML=r.contant.number,T.forEach(((e,t)=>e.innerHTML=r.footer.links[t])),C.forEach(((e,t)=>e.innerHTML=r.footer.others[t])),A.innerHTML=r.footer.repo}else{d.forEach(((e,t)=>e.innerHTML=c.nav[t])),u.forEach(((e,t)=>e.innerHTML=c.nav[t])),p.innerHTML=c.hero.hello,m.innerHTML=c.hero.im,g.innerHTML=c.hero.web,y.innerHTML=c.about.title,S.forEach(((e,t)=>e.innerHTML=c.about.para[t])),v.textContent=c.about.link,f.href="./assets/img/resume_denisSP.pdf",_.innerHTML=c.skills.title,b[0].innerHTML=c.accesibilty.main.title,b[1].innerHTML=c.accesibilty.secondary.title,h.forEach((e=>e.innerHTML=c.accesibilty.restart));const e=document.querySelectorAll(".project__backTitle"),t=document.querySelectorAll(".project__backParagraph");w.innerHTML=c.projects.title,E.innerHTML=c.projects.btn,e.forEach(((e,t)=>e.innerHTML=n[t].title.ES)),t.forEach(((e,t)=>e.innerHTML=n[t].info.ES)),L.innerHTML=c.contant.title,k.innerHTML=c.contant.sub_title,M.innerHTML=c.contant.number,T.forEach(((e,t)=>e.innerHTML=c.footer.links[t])),C.forEach(((e,t)=>e.innerHTML=c.footer.others[t])),A.innerHTML=c.footer.repo}},H=document.querySelector(".accesibilty"),N=document.querySelector(".accesibility__modal"),I=document.querySelector(".navScroll"),D=document.querySelectorAll(".wrap"),P=document.querySelectorAll(".navBarLinks");let J=window.pageYOffset;const R=(e,t)=>{e>t?I.classList.add("active"):I.classList.remove("active")},z=document.querySelector(".loading"),B=document.querySelectorAll(".btn__language"),$=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("show")}))})),V=document.querySelectorAll(".hidden"),W=document,F=document.querySelector(".btn__language"),G=a,Y=document.querySelector(".modalImg"),O=document.querySelector(".navScroll"),U=document.querySelector(".btn__language"),Z=document.querySelectorAll(".work__imgContainer"),K=document.querySelector(".modalImg__img"),Q=document.querySelector(".modalImg__linkSvg"),X=document.querySelector(".modalImg__linkLink"),ee=document.querySelector(".modalImg__skills"),te=document.querySelector(".modalImg__infoShow--name"),oe=document.querySelector(".modalImg__infoShow--para"),ie=a,ae=(e,t)=>{e.preventDefault();const o=e.currentTarget.href;return t?(()=>{const e=new Date(2023,5,15),t=new Date;let o=1.25,i=Math.ceil((t.getTime()-e.getTime())/864e5);for(;o<5;)i++,o+=.104;const a=new Date;return a.setDate(a.getDate()+i),a.getTime()>new Date(2023,7,30).getTime()})()?(()=>{const e=W.createElement("article"),t=W.createElement("div"),o=W.createElement("div");o.classList.add("alert__content"),t.classList.add("alert__bar"),e.classList.add("alert"),e.appendChild(o),e.appendChild(t),o.innerHTML="😝 Not working due to unpaid server fees",F.classList.contains("active")||(o.innerHTML="😋 No funciona, pagos pendientes del servidor"),W.body.appendChild(e),setTimeout((()=>{e.classList.add("show")}),100),setTimeout((()=>{e.classList.remove("show"),setTimeout((()=>W.body.removeChild(e)),100)}),4120)})():void window.open(o,"_blank"):window.open(o,"_blank")};X.addEventListener("click",(e=>{const t="true"===e.target.dataset.hosting&&!0;ae(e,t)}));const se={particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#00ffff"},shape:{type:"circle",stroke:{width:0,color:"#00ffff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:5,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};function ne(e){se.particles.color.value=e,particlesJS("particles-js",se)}const re=document.querySelector(".accesibilty"),ce=document.querySelector('[data-color="--water_green"]'),le=document.querySelector('[data-color="--orange"]'),de=document.querySelector(".colorSelect__main"),ue=document.querySelector(".colorSelect__secondary"),pe=document.querySelector(".accesibility__modal"),me=document.querySelector(":root");function ge(e){const t="#00ffff",o="#ff8e31",i=e.target.dataset.color;me.style.setProperty(`${i}`,`${"--water_green"===e.target.dataset.color?t:o}`),"--water_green"===i?(ne(t),de.value=t):ue.value=o}function be(e){const[t,o]=[e.target.dataset.key,e.target.value];"--water_green"===t&&ne(o),me.style.setProperty(`${t}`,`${o}`)}const he=document.querySelector(".btn__language"),ye=document.querySelectorAll(".projects__btnOption"),Se=(document.querySelectorAll(".project__back--demo"),document.querySelector(".projects__back")),ve=document.querySelector(".work__container"),fe=e=>{const t=e.target,o=t.dataset.filter,i=s;"game"!==o&&(ye.forEach((e=>e.classList.remove("active"))),t.classList.add("active"),"back"===o&&(ve.classList.remove("active"),Se.classList.add("active"),Se.innerHTML=(e=>e.map((e=>`${(e=>{const{github:t,icons:o,info:i,title:a,url:s}=e,n=(e=>e.map((e=>{let t=e.toLowerCase();return`\n             <figure class="modalImg__skill">\n                                <img\n                                    class="modalImg__skillImg"\n                                    src="./assets/img/icons/icons__stack/icon-${t}.svg"\n                                    alt="icon-${t}"\n                                />\n                                <p class="skills__paragraph">${e}</p>\n            </figure>\n    `})).join(""))(o),r=he.classList.contains("active")?"EN":"ES";return`<article class="project__back">\n                  <div class="project__back--links">\n                        <?xml version="1.0" ?><svg\n            height="30"\n            id="svg8"\n            version="1.1"\n            viewBox="0 0 24 24"\n            xmlns="http://www.w3.org/2000/svg"\n            xmlns:cc="http://creativecommons.org/ns#"\n            xmlns:dc="http://purl.org/dc/elements/1.1/"\n            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n            xmlns:svg="http://www.w3.org/2000/svg"\n        >\n            <defs id="defs2" />\n            <g\n                id="g1483"\n                style="display: inline"\n                transform="translate(0,-290.65037)"\n            >\n                <path\n                    d="m 5.17969,293.65039 c -1.68144,0 -3.12891,1.31249 -3.12891,2.98828 v 12.02344 c 0,1.67579 1.4485,2.98828 3.12891,2.98828 h 13.64062 c 1.68041,0 3.12891,-1.31249 3.12891,-2.98828 v -9.12695 c 0,-1.06833 -0.92053,-1.88477 -1.94922,-1.88477 h -6.6543 c -0.24023,0 -0.43227,-0.13369 -0.50586,-0.28125 -0.342,-0.77582 -0.68815,-1.55988 -1.02929,-2.33206 -0.43367,-0.86959 -1.33514,-1.38672 -2.29688,-1.38672 z m 4.33398,2 c 0.24023,0 0.43229,0.13177 0.50586,0.2793 0.34149,0.77614 0.68761,1.55979 1.0293,2.33201 0.43367,0.8696 1.33515,1.38867 2.29687,1.38867 h 6.60352 v 9.01172 c 0,0.52699 -0.44942,0.98828 -1.12891,0.98828 H 5.17969 c -0.67949,0 -1.12891,-0.46129 -1.12891,-0.98828 v -12.02344 c 0,-0.52699 0.45045,-0.98828 1.12891,-0.98828 1.44462,4e-5 2.88933,2e-5 4.33398,2e-5 z"\n                    id="rect1461"\n                    fill="#a8b2d1"\n                />\n            </g>\n        </svg>\n                    <div class="project__code">\n                        <a href="${t}" target="_blank">\n                             <svg\n                    enable-background="new 0 0 512 512"\n                    height="25px"\n                    id="Layer_1"\n                    version="1.1"\n                    viewBox="0 0 512 512"\n                    xml:space="preserve"\n                    xmlns="http://www.w3.org/2000/svg"\n                    xmlns:xlink="http://www.w3.org/1999/xlink"\n                >\n                    <g>\n                        <path\n                            clip-rule="evenodd"\n                            d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"\n                            fill="#a8b2d1"\n                            fill-rule="evenodd"\n                        />\n                    </g>\n                </svg>\n                        </a>\n\n                        <a\n                            href="${s}"\n                            target="_blank"\n                            class="project__back--demo"\n                        >\n                        \n     <svg\n                    class="feather feather-external-link"\n                    fill="none"\n                    height="25px"\n                    stroke="#a8b2d1"\n                    stroke-width="2"\n                    viewBox="0 0 24 24"\n                    xmlns="http://www.w3.org/2000/svg"\n                >\n                    <path\n                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"\n                    />\n                    <polyline points="15 3 21 3 21 9" />\n                    <line x1="10" x2="21" y1="14" y2="3" />\n                </svg>\n\n                        </a>\n                    </div>\n                </div>\n                  <h3 class="project__backTitle">${a[r]}</h3>\n                   <p class="project__backParagraph">\n                        ${i[r]}\n                   </p>\n                      <div class="project__backSkills">\n                      ${n}\n                      </div>\n            </article>\n    `})(e)}`)).join(""))(i),Se.querySelectorAll(".project__back--demo").forEach((e=>e.addEventListener("click",(e=>ae(e,!0)))))),"front"===o&&(Se.classList.remove("active"),ve.classList.add("active")))};window.addEventListener("load",(function(){const e=sessionStorage.getItem("load");let t=window.pageYOffset,o=I.offsetHeight;(navigator.language||navigator.userLanguage).includes("es")&&(x(!1),B[0].classList.remove("active"),B[1].classList.add("active")),e?(z.style.display="none",z.style.animationPlayState="paused"):sessionStorage.setItem("load",!0),R(t,o)})),window.addEventListener("scroll",(()=>{let e=window.pageYOffset,t=I.offsetHeight;window.scrollY>60?H.classList.add("active"):(H.classList.remove("active"),N.classList.contains("active")&&(N.classList.remove("active"),H.style.right="0px",H.querySelector(".accesibility__img").src="./assets/img/icons/icons/icon__acebi.svg")),R(e,t),I.style.top=J>e?"0":`-${t+8}px`,J=e,D.forEach((e=>{let t=window.scrollY,o=e.offsetTop,i=e.offsetHeight,a=e.dataset.id;var s;t>=o&&t<o+i&&(s=document.querySelector(`.navBar [href='#${a}']`),P.forEach((e=>e.classList.remove("active"))),s.classList.add("active"))}))})),Y.addEventListener("click",(function(e){(e.target.classList.contains("modalImg__github")||e.target.classList.contains("modalImg__imgContainer"))&&(document.body.style.overflow="auto",Y.style.display="none")})),Z.forEach(((e,t)=>{e.addEventListener("click",(()=>function(e){let t=O.offsetHeight;"0px"===O.style.top&&(O.style.top=`-${t+8}px`),document.documentElement.style.setProperty("--modal__heigth",`${window.innerHeight}px`),document.body.style.overflow="hidden",Y.style.display="block",K.src=`${ie[e].img}`,Q.href=`${ie[e].github}`,X.textContent=`${ie[e].url}`,X.href=`${ie[e].url}`,ee.innerHTML=function(e){return G[e].icons.map((e=>{let t=e.toLowerCase();return"rtk query"===t&&(t="redux"),"vue-router"===t&&(t="vue"),`\n      <span class="modalImg__skill">\n      <img class="modalImg__skillImg" src="./assets/img/icons/icons__stack/icon-${t}.svg" alt="icons + ${t}">\n      <h5>${e}</h5>\n      </span>\n    `})).join("")}(e),ie[e].serverHosting?X.setAttribute("data-hosting",!0):X.setAttribute("data-hosting",!1),U.classList.contains("active")?(oe.innerHTML=ie[e].info.EN,te.innerHTML=ie[e].title.EN):(oe.innerHTML=ie[e].info.ES,te.innerHTML=ie[e].title.ES)}(t)))})),particlesJS.load("particles-js","./particle.json"),de.addEventListener("input",be),ue.addEventListener("input",be),re.addEventListener("click",(function(e){e.target.classList.contains("accesibility__img")&&(pe.classList.toggle("active"),re.style.right=`${pe.clientWidth}px`,pe.classList.contains("active")?re.querySelector(".accesibility__img").src="./assets/img/icons/icons/icon__close.svg":(re.querySelector(".accesibility__img").src="./assets/img/icons/icons/icon__acebi.svg",re.style.right="0px"))})),ce.addEventListener("click",ge),le.addEventListener("click",ge),l.forEach((e=>e.addEventListener("click",j))),e.addEventListener("click",i),t.forEach((e=>{e.addEventListener("click",i)})),V.forEach((e=>$.observe(e))),ye.forEach((e=>e.addEventListener("click",fe)))})();