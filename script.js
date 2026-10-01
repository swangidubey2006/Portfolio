const projects = [
  {title:'Employee Portal',subtitle:'GYANYUG · Backend & Database',desc:'Secure employee and admin workflows backed by REST APIs, MongoDB, role-based access, JWT and Microsoft Entra ID / OAuth 2.0.',tech:['Node.js','Express.js','MongoDB','JWT','OAuth 2.0'],code:'https://github.com/swangidubey2006?tab=repositories&q=employee',live:null},
  {title:'Orbito',subtitle:'Full Stack Web Application',desc:'A modern full-stack product experience focused on responsive UI, application workflows and scalable web architecture.',tech:['React.js','Node.js','REST APIs','MongoDB'],code:'https://github.com/swangidubey2006?tab=repositories&q=orbito',live:null},
  {title:'ThinkBotX',subtitle:'AI Assistant',desc:'AI-powered assistant interface designed for real-time user queries, conversational interaction and a polished responsive experience.',tech:['React.js','JavaScript','AI/API','CSS'],code:'https://github.com/swangidubey2006?tab=repositories&q=thinkbot',live:null},
  {title:'LinkedIn Clone',subtitle:'Full Stack Social Platform',desc:'Professional networking application with React frontend, Node/Express backend and MongoDB persistence.',tech:['React.js','Node.js','Express.js','MongoDB','Tailwind'],code:'https://github.com/swangidubey2006?tab=repositories&q=linkedin',live:null},
  {title:'IPL Match Win Predictor',subtitle:'Machine Learning Project',desc:'Machine-learning web application using historical match data, preprocessing and model training for outcome prediction visualization.',tech:['Python','Jupyter','ML','JavaScript'],code:'https://github.com/swangidubey2006/ipl-win-predictor',live:null},
  {title:'KeyGenX',subtitle:'Password Generator',desc:'Responsive browser-based key generation tool with configurable uppercase, lowercase, numeric and special-character options.',tech:['HTML','CSS','JavaScript'],code:'https://github.com/swangidubey2006/KeyGenX',live:null}
];

const certifications = [
  {title:'Theory of Computation',org:'NPTEL · IIT Hyderabad · Jan–Apr 2026',note:'12-week course · consolidated score 52%',file:'assets/certificates/nptel-theory-of-computation.jpeg',type:'image'},
  {title:'BuildVerse Hackathon 2026',org:'LNCT Group of Colleges · Team Cyborg',note:'Certificate of Participation · Grand Finale 6–7 June 2026',file:'assets/certificates/buildverse-hackathon.jpeg',type:'image'},
  {title:'Data Science Master Virtual Internship',org:'AICTE · EduSkills · Altair',note:'10-week virtual internship · October–December 2025',file:'assets/certificates/virtual-internship-certificate.pdf',type:'pdf'},
  {title:'Introduction to Artificial Intelligence',org:'Jai Narain College of Technology',note:'Certificate dated 31 October 2025',file:'assets/certificates/introduction-to-ai.pdf',type:'pdf'},
  {title:'Google for Education: Gemini',org:'Google for Education',note:'AI & Productivity for Educators · 2025',file:'assets/certificates/google-for-education-gemini.pdf',type:'pdf'},
  {title:'Applications & Use Cases Professional',org:'RapidMiner · An ALTAIR Company',note:'Machine Learning & Data Science · CRISP-DM · Altair Engineering Inc.',file:'file:///C:/Users/swang/.gemini/antigravity-ide/brain/5e3c21c5-7041-4b7b-ab85-c549aec78bc7/.user_uploaded/media_1790805795768.pdf',type:'pdf'}
];

const projectGrid=document.getElementById('projectsGrid');
projectGrid.innerHTML=projects.map((p,i)=>`
  <article class="project-card interactive-card reveal" tabindex="0" data-project="${i}" aria-label="${p.title} project card">
    <div class="project-inner">
      <!-- FRONT FACE -->
      <div class="project-face project-front">
        <div class="card-header project-top">
          <span class="project-number">0${i+1}</span>
          <span class="project-live-dot">FEATURED</span>
        </div>
        <div class="project-icon">✦</div>
        <h3 class="project-title">${p.title}</h3>
        <div class="project-subtitle">${p.subtitle}</div>
        <p class="project-description">${p.desc}</p>
        <div class="tech-stack tech">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
        <div class="card-actions project-actions">
          <a class="action-btn code-btn" href="${p.code}" target="_blank" rel="noopener" onclick="event.stopPropagation()">⌘ Code</a>
          ${p.live
            ? `<a class="action-btn live-btn live" href="${p.live}" target="_blank" rel="noopener" onclick="event.stopPropagation()">↗ Live</a>`
            : `<button class="action-btn live-btn live disabled local-note" type="button" title="No public deployment added yet" onclick="event.stopPropagation()">↗ Live</button>`
          }
        </div>
      </div>
      
      <!-- BACK FACE (180° FLIP) -->
      <div class="project-face project-back">
        <div class="card-header project-top">
          <span class="project-number">0${i+1} · REPO &amp; STACK</span>
          <span class="project-live-dot flip-badge">180° FLIP</span>
        </div>
        <div class="project-icon project-back-icon">⌘</div>
        <h3 class="project-title">${p.title}</h3>
        <div class="project-subtitle">${p.subtitle}</div>
        <p class="project-description project-back-desc">${p.desc}</p>
        <div class="tech-stack tech">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
        <div class="card-actions project-actions">
          <a class="action-btn code-btn" href="${p.code}" target="_blank" rel="noopener" onclick="event.stopPropagation()">⌘ Code</a>
          ${p.live
            ? `<a class="action-btn live-btn live" href="${p.live}" target="_blank" rel="noopener" onclick="event.stopPropagation()">↗ Live</a>`
            : `<button class="action-btn live-btn live disabled local-note" type="button" title="No public deployment added yet" onclick="event.stopPropagation()">↗ Live</button>`
          }
        </div>
      </div>
    </div>
  </article>`).join('');

function pulseCard(card){card.classList.remove('touch-pulse');void card.offsetWidth;card.classList.add('touch-pulse');}

function updatePointerGlow(el,e){
  const r=el.getBoundingClientRect();
  el.style.setProperty('--mx',`${((e.clientX-r.left)/r.width)*100}%`);
  el.style.setProperty('--my',`${((e.clientY-r.top)/r.height)*100}%`);
}

document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('pointerenter',()=>card.classList.add('is-hovered'));
  card.addEventListener('pointerleave',()=>{
    card.classList.remove('is-hovered');
    card.style.removeProperty('--mx');
    card.style.removeProperty('--my');
  });
  card.addEventListener('pointermove',e=>updatePointerGlow(card,e));
  card.addEventListener('click',e=>{
    if(e.target.closest('.card-actions') || e.target.closest('.project-actions') || e.target.closest('a') || e.target.closest('button')) return;
    card.classList.toggle('is-flipped');
  });
  card.addEventListener('focus',()=>card.classList.add('is-hovered'));
  card.addEventListener('blur',()=>card.classList.remove('is-hovered'));
});

document.querySelectorAll('.card-actions a, .card-actions button, .project-actions a, .project-actions button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
  });
});

document.querySelectorAll('.local-note').forEach(btn=>btn.addEventListener('click',e=>{
  e.stopPropagation();
  showToast('No public Live Demo yet — localhost works only on the computer running the project.');
}));

const certGrid=document.getElementById('certGrid');
certGrid.innerHTML=certifications.map((c,i)=>`<article class="cert-card glass reveal ${c.file?'':'pending'}"><div class="cert-icon">✦</div><h3>${c.title}</h3><p>${c.org}<br>${c.note}</p><button class="btn ghost cert-view" data-index="${i}">${c.file?'View Certificate':'Credential Info'}</button></article>`).join('');

const modal=document.getElementById('certModal'),modalTitle=document.getElementById('modalTitle'),modalText=document.getElementById('modalText'),modalLink=document.getElementById('modalLink'),certificatePreview=document.getElementById('certificatePreview');
document.querySelectorAll('.cert-view').forEach(btn=>btn.addEventListener('click',()=>{const c=certifications[+btn.dataset.index];modalTitle.textContent=c.title;certificatePreview.innerHTML='';if(c.file){modalText.textContent='Your uploaded certificate is connected. Open the full-resolution version below.';modalLink.href=c.file;modalLink.style.display='inline-flex';if(c.type==='image'){certificatePreview.innerHTML=`<img src="${c.file}" alt="${c.title} certificate preview">`}else{certificatePreview.innerHTML=`<iframe src="${c.file}" title="${c.title} certificate preview"></iframe>`}}else{modalText.textContent='This credential is listed in your resume, but its certificate file was not uploaded in this chat yet.';modalLink.style.display='none'}modal.classList.add('open');modal.setAttribute('aria-hidden','false')}));
document.querySelectorAll('[data-close]').forEach(x=>x.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');certificatePreview.innerHTML=''}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');certificatePreview.innerHTML=''}});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
document.querySelectorAll('.glass').forEach(el=>el.addEventListener('pointermove',e=>updatePointerGlow(el,e)));
document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.12,y=(e.clientY-r.top-r.height/2)*.12;el.style.transform=`translate(${x}px,${y}px) translateY(-2px)`});el.addEventListener('pointerleave',e=>e.currentTarget.style.transform='')});

const themeBtn=document.getElementById('themeBtn');const themeIcon=themeBtn.querySelector('.theme-icon');function applyTheme(mode){const light=mode==='light';document.body.classList.toggle('light',light);document.documentElement.style.colorScheme=light?'light':'dark';themeIcon.textContent=light?'☀':'☾';themeBtn.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme');localStorage.setItem('swangi-theme',light?'light':'dark')}themeBtn.addEventListener('click',()=>{applyTheme(document.body.classList.contains('light')?'dark':'light');pulseCard(themeBtn)});applyTheme(localStorage.getItem('swangi-theme')==='light'?'light':'dark');

const menuToggle=document.getElementById('menuToggle'),nav=document.getElementById('navLinks');menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.interactive-card').forEach(el=>{
  if(el.classList.contains('project-card')) return;
  el.addEventListener('pointerdown',()=>{
    pulseCard(el);
    el.classList.remove('click-focus');void el.offsetWidth;el.classList.add('click-focus');setTimeout(()=>el.classList.remove('click-focus'),700);
  });
  el.addEventListener('pointermove',e=>updatePointerGlow(el,e));
});

const sdCore=document.getElementById('sdCore');
if(sdCore){sdCore.addEventListener('click',()=>{sdCore.classList.remove('sd-wiggle');void sdCore.offsetWidth;sdCore.classList.add('sd-wiggle');setTimeout(()=>sdCore.classList.remove('sd-wiggle'),760)});}
const toast=document.getElementById('toast');function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}
document.querySelectorAll('.copy-btn').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.copy);showToast('Email copied to clipboard')}catch{showToast('Email: '+btn.dataset.copy)}}));

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const contactSubmitBtn = document.getElementById('contactSubmitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = (formData.get('name') || '').trim();
    const email = (formData.get('email') || '').trim();
    const message = (formData.get('message') || '').trim();

    if (!email || !message) {
      if (formStatus) {
        formStatus.className = 'error';
        formStatus.textContent = 'Please fill out your email and message.';
      }
      return;
    }

    const originalBtnContent = contactSubmitBtn ? contactSubmitBtn.innerHTML : 'Send Message ➤';
    if (contactSubmitBtn) {
      contactSubmitBtn.disabled = true;
      contactSubmitBtn.innerHTML = 'Sending Message… ⏳';
    }
    if (formStatus) {
      formStatus.className = 'loading';
      formStatus.textContent = 'Delivering your message to Swangi Dubey…';
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/swangi.dubey2006@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name || 'Portfolio Visitor',
          email: email,
          message: message,
          _subject: `New Portfolio Message from ${name || 'Visitor'} (${email})`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        if (formStatus) {
          formStatus.className = 'success';
          formStatus.textContent = '✓ Message sent successfully! Swangi will get back to you soon.';
        }
        showToast('✓ Message sent successfully to Swangi Dubey!');
        contactForm.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX notice, opening email fallback:', err);
      if (formStatus) {
        formStatus.className = 'error';
        formStatus.textContent = 'Opening your email client fallback…';
      }
      showToast('Opening email client fallback…');
      const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'Visitor'}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:swangi.dubey2006@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      if (contactSubmitBtn) {
        contactSubmitBtn.disabled = false;
        contactSubmitBtn.innerHTML = originalBtnContent;
      }
      setTimeout(() => {
        if (formStatus && formStatus.classList.contains('success')) {
          formStatus.textContent = '';
          formStatus.className = '';
        }
      }, 7500);
    }
  });
}

