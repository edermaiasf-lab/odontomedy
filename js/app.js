document.addEventListener('DOMContentLoaded', () => {
    // 1. Atualizar Título e Slogan
    const siteTitle = document.querySelector('title');
    if (siteTitle) siteTitle.textContent = `${CLINICA_DADOS.identidade.nome} | ${CLINICA_DADOS.identidade.slogan}`;

    // 2. Renderizar Serviços (Tratamentos)
    const tratamentosGrid = document.getElementById('tratamentos-grid');
    if (tratamentosGrid) {
        tratamentosGrid.innerHTML = '';
        const isSubDir = window.location.pathname.match(/\/(sobre|contato|especialidades|equipe)\//);
        const prefixoLink = isSubDir ? '../equipe/' : 'equipe/';

        CLINICA_DADOS.servicos.forEach(servico => {
            const card = `
                <div class="treatment-card p-10 rounded-xl bg-background-light border border-slate-100 hover:border-primary/20 transition-all cursor-pointer">
                    <div class="w-14 h-14 bg-primary text-white rounded-lg flex items-center justify-center mb-6 icon-bg shadow-lg shadow-primary/20">
                        <span class="material-symbols-outlined">${servico.icone}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-3">${servico.titulo}</h3>
                    <p class="text-slate-600 text-sm mb-6">${servico.descricao}</p>
                    <a class="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="${prefixoLink}index.html?categoria=${servico.categoria}">Ver Profissionais <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
                </div>
            `;
            tratamentosGrid.innerHTML += card;
        });
    }

    // 3. Renderizar Corpo Clínico
    const equipeGrid = document.getElementById('equipe-grid');
    if (equipeGrid) {
        // Se estiver na Home Page, mostra apenas os destaques e corta para 3
        const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
        const isEquipeFolder = window.location.pathname.includes('equipe');

        let profissionaisParaMostrar = CLINICA_DADOS.profissionais;

        if (isHomePage && !isEquipeFolder) {
            // Pega os que têm destaque = true, se não der 3, pega os primeiros
            let destaques = CLINICA_DADOS.profissionais.filter(p => p.destaque);
            if (destaques.length < 3) {
                const outros = CLINICA_DADOS.profissionais.filter(p => !p.destaque).slice(0, 3 - destaques.length);
                destaques = [...destaques, ...outros];
            }
            profissionaisParaMostrar = destaques.slice(0, 3);
        }

        equipeGrid.innerHTML = '';
        profissionaisParaMostrar.forEach(prof => {
            const destaqueClass = prof.destaque ? 'border-primary ring-2 ring-primary/20 bg-primary/5' : 'border-slate-100 bg-white';

            // Use explicitly defined slug to match exact file names
            const slug = prof.slug || prof.nome.toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove acentos
                .replace(/[^a-z0-9 ]/g, "") // remove caracteres especiais (como o ponto)
                .trim()
                .replace(/\s+/g, '-'); // troca espaço por hífen

            // O caminho muda dependendo de onde o script está sendo rodado
            const prefixoLink = isEquipeFolder ? '' : 'equipe/';

            const cardHtml = `
                <a href="${prefixoLink}${slug}.html" class="block p-6 rounded-xl border shadow-sm relative transition-all hover:-translate-y-1 hover:shadow-md ${destaqueClass} group">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                            <span class="material-symbols-outlined text-primary group-hover:text-white text-2xl">${prof.icone}</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">${prof.nome}</h4>
                            <p class="text-xs font-semibold text-primary mt-1">${prof.especialidade} ${prof.descricao ? `- ${prof.descricao}` : ''}</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mt-4">
                        <p class="text-slate-500 text-sm font-medium">Registro: ${prof.registro}</p>
                        <span class="material-symbols-outlined text-transparent group-hover:text-primary transition-colors">arrow_forward</span>
                    </div>
                </a>
            `;
            equipeGrid.innerHTML += cardHtml;
        });
    }

    // 4. Atualizar Links de Contato
    const waNumber = CLINICA_DADOS.contato.whatsapp[0].replace(/\D/g, ''); // 64984126400

    // NOTA: A rotina que sobrescrevia .dynamic-wa-link foi removida 
    // porque agora utilizamos links diretos da API do WhatsApp (wa.me/message/...)
    // com mensagens personalizadas em cada página, conforme definido no HTML.

    const phoneDisplayContainers = document.querySelectorAll('.dynamic-phone-display');
    phoneDisplayContainers.forEach(container => {
        container.innerHTML = CLINICA_DADOS.contato.telefones.join('<br/>') + '<br/>' + CLINICA_DADOS.contato.whatsapp.map(w => w + ' (WhatsApp)').join('<br/>');
    });

    // 5. Build dynamic footer links for Especialidades
    const footerEspecialidades = document.getElementById('footer-especialidades');
    if (footerEspecialidades) {
        const isEquipeOrOutros = window.location.pathname.includes('equipe') || window.location.pathname.includes('sobre') || window.location.pathname.includes('especialidades') || window.location.pathname.includes('contato');
        // Calculate relative prefix to 'equipe/' depending on depth
        // If we are in essentially any subdirectory (depth 1), the path to equipe is '../equipe/index.html'
        // If we are in depth 0, it's 'equipe/index.html'
        const isSubDir = window.location.pathname.match(/\/(sobre|contato|especialidades|equipe)\//);
        const prefixLink = isSubDir ? '../equipe/' : 'equipe/';

        footerEspecialidades.innerHTML = `
            <li><a href="${prefixLink}index.html?categoria=dentista" class="hover:text-white transition-colors inline-block w-full py-1">Odontologia Especializada</a></li>
            <li><a href="${prefixLink}index.html?categoria=tec-radiologia" class="hover:text-white transition-colors inline-block w-full py-1">Radiologia Digital 3D</a></li>
            <li><a href="${prefixLink}index.html?categoria=medico" class="hover:text-white transition-colors inline-block w-full py-1">Clínica Médica</a></li>
            <li><a href="${prefixLink}index.html?categoria=saude-mental" class="hover:text-white transition-colors inline-block w-full py-1">Psiquiatria e Psicologia</a></li>
            <li><a href="${prefixLink}index.html?categoria=medico" class="hover:text-white transition-colors inline-block w-full py-1">Dermatologia</a></li>
            <li><a href="${prefixLink}index.html?categoria=nutricionista" class="hover:text-white transition-colors inline-block w-full py-1">Nutrição</a></li>
        `;
    }

    // 6. Cookie Consent Banner (LGPD)
    const cookieConsentKey = "odontomedy_cookie_consent";
    const hasConsent = localStorage.getItem(cookieConsentKey);

    if (!hasConsent) {
        // Calculate path to root or specific legal pages
        const isSubDirLegal = window.location.pathname.match(/\/(sobre|contato|especialidades|equipe|privacidade|termos|politica-de-cookies)\//);
        const prefixLinkCookies = isSubDirLegal ? '../' : '';

        // Define banner HTML
        const bannerHTML = `
            <div id="lgpd-banner" class="fixed bottom-0 left-0 w-full bg-[#0A1F5C] text-white p-4 md:py-4 md:px-8 z-[9999] shadow-2xl transition-transform duration-400 ease-in-out transform translate-y-full flex flex-col md:flex-row items-center justify-between gap-4 font-display text-[14px]">
                <div class="flex-1 text-center md:text-left leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa 
                    <a href="${prefixLinkCookies}politica-de-cookies/index.html" class="text-[#2DB34A] font-bold hover:underline">Política de Cookies</a>.
                </div>
                <div class="flex items-center gap-3 w-full md:w-auto">
                    <button id="btn-recusar-cookies" class="flex-1 md:flex-none px-5 py-2.5 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition-colors">
                        Recusar
                    </button>
                    <button id="btn-aceitar-cookies" class="flex-1 md:flex-none px-5 py-2.5 rounded-full bg-[#2DB34A] text-white font-bold hover:bg-green-600 transition-colors shadow-lg">
                        Aceitar Cookies
                    </button>
                </div>
            </div>
        `;

        // Append to body
        document.body.insertAdjacentHTML('beforeend', bannerHTML);
        const bannerEl = document.getElementById('lgpd-banner');

        // Slide up after 1.5s
        setTimeout(() => {
            bannerEl.classList.remove('translate-y-full');
            bannerEl.classList.add('translate-y-0');
        }, 1500);

        // Handle clicks
        const closeBanner = (consentValue) => {
            localStorage.setItem(cookieConsentKey, consentValue);
            bannerEl.classList.remove('translate-y-0');
            bannerEl.classList.add('translate-y-full');
            setTimeout(() => bannerEl.remove(), 400); // Wait for transition
        };

        document.getElementById('btn-aceitar-cookies').addEventListener('click', () => closeBanner('true'));
        document.getElementById('btn-recusar-cookies').addEventListener('click', () => closeBanner('false'));
    }

    // 7. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">close</span>';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">menu</span>';
            }
        });

        // Close menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">menu</span>';
            });
        });
    }
});
