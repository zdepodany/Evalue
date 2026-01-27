// Language switcher functionality
const translations = {
    cs: {
        // Navigation
        'nav.home': 'Domů',
        'nav.services': 'Služby',
        'nav.products': 'Produkty',
        'nav.about': 'O nás',
        'nav.contact': 'Kontakt',
        
        // Hero
        'hero.title1': 'Dáváme život',
        'hero.title2': 'vašemu podnikání',
        'hero.subtitle': 'Tvoříme digitální produkty a aplikace, které pomáhají firmám růst a fungovat efektivněji.',
        'hero.contact': 'Kontaktovat',
        'hero.services': 'Naše služby',
        
        // Services
        'services.label': 'Naše služby',
        'services.title': 'Služby',
        'services.description': 'Vytváříme vlastní software a rozšiřujeme vaše týmy o zkušené vývojáře pro vývoj aplikací.',
        'services.agile.title': 'eValue Agile Team',
        'services.agile.description': 'Agilní tým pro vývoj vlastního softwaru na míru. Spolupracujeme podle vašich preferencí – Time & Material nebo Fixed Price.',
        'services.bodyShopping.title': 'eValue Body Shopping',
        'services.bodyShopping.description': 'Rychlé rozšíření vašeho týmu o zkušené specialisty pro vývoj softwaru. Projektoví manažeři, architekti a vývojáři pro krátkodobé i střednědobé projekty.',
        'services.development.title': 'Vývoj aplikací',
        'services.development.description': 'Vytváříme moderní aplikace a systémy na různých technologiích (PHP, .NET, JAVA, React), které zvyšují efektivitu vašeho podnikání.',
        'services.cta.text': 'Chcete probrat konkrétní projekt?',
        'services.cta.button': 'Pojďme se domluvit',
        
        // Products
        'products.label': 'Produkty',
        'products.title': 'Produkty',
        'products.description': 'Softwarový vývoj je nejen naší prací, ale také naší vášní, proto se nebojíme investovat do vlastních řešení.',
        'products.category.all': 'Vše',
        'products.category.fire': 'Hasičské',
        'products.category.sport': 'Sportovní',
        'products.category.business': 'Business',
        'products.fireAlarm.title': 'FireAlarm',
        'products.fireAlarm.description': 'Sledování výjezdů hasičů v šesti krajích ČR. Detailní rozpis vyslané techniky.',
        'products.firePlan.title': 'FirePlan',
        'products.firePlan.description': 'Nejpohodlnější plánování směn pro jednotku hasičů. Neomezený počet hasičů, nastavení odbornosti, mailové upozornění.',
        'products.statif.title': 'StatiF',
        'products.statif.description': 'Rychlá evidence událostí na florbalovém hřišti. Statistika hráčů v reálném čase.',
        'products.challengeMe.title': 'ChallengeMe',
        'products.challengeMe.description': 'Vytvářejte, spravujte a účastněte se nejrůznějších výzev se svým týmem kolegů či přátel.',
        'products.easyERP.title': 'EasyERP',
        'products.easyERP.description': 'Mějte pod kontrolou celý svůj výrobní proces, od objednávání materiálů až po expedici.',
        'products.timeWise.title': 'TimeWise',
        'products.timeWise.description': 'Organizace času a úkolů pro jednotlivce či celé skupiny. Přehled splněných, probíhajících a budoucích úkolů.',
        'products.evHard.title': 'EvHard',
        'products.evHard.description': 'Komplexní přehled vašeho firemního vybavení v jednoduchém kabátu. Vyzkoušení do 10 kusů vybavení zcela zdarma.',
        'products.eCms.title': 'eCms',
        'products.eCms.description': 'Jednoduché řešení a správa proměnných dat pro vás i vaše klienty. Tvorba a editace proměnných, generace API odkazů.',
        'products.duverujProveruj.title': 'DůvěřujPrověřuj',
        'products.duverujProveruj.description': 'Důkladná kontrola stavu (nejen) nemovitostí, pro kupující i prodejce, budoucí nájemníky či pronájemce.',
        'products.cta.text': 'Zaujali jsme vás?',
        'products.cta.button': 'Kontaktovat',
        
        // References
        'references.label': 'Reference',
        'references.title': 'Reference',
        'references.description': 'Přečtěte si, jak hodnotí spolupráci s eValue naši klienti.',
        'references.carvago': 'Setkali jsme se s lidmi z eValue na startu našeho nového ambiciózního projektu. Jelikož již někteří z našich investorů se společností eValue v minulosti úspěšně spolupracovali, dali jsme jim důvěru i tentokrát. Oceňujeme nejen dobré technické znalosti a zkušenosti zapojených vývojářů, ale hlavně to, že cokoliv, na čem se dohodneme, vždy beze zbytku platí.',
        'references.finshape': 'Naše společnost má se spoluprácí s eValue dobré zkušenosti, a proto se na ně vždy rádi obracíme jako např. při projektu redesignu internetového bankovnictví pro našeho významného klienta, kdy jsme potřebovali navýšit naše kapacity a eValue nám dodala vhodné kodéry přes bodyshopping. Dlouhodobě také spolupracujeme v oblasti Java vývoje. Díky eValue jsme také získali do interního stavu schopného Solution architekta nebo také Angular a Java vývojáře.',
        'references.griffteam': 'Naše společnost je zaměřena na vývoj rozsáhlých databázových řešení pro vnitřní užití u našich klientů. V projektech, kde je nutné implementovat a na B/O část napojovat i webové portály pro retailové uživatele, se obracíme na společnost eValue. Jejich zkušený tým vždy dodal výsledný produkt v požadované kvalitě i čase a navíc se zřejmým důrazem na potřeby zákazníka.',
        'references.inventi': 'eValue je pro nás nyní již strategickým partnerem, který nás nenechal nikdy „ve štychu". Řešili jsme společně mnoho velkých projektů na různých technologiích (PHP, .NET, JAVA, React) a vždy vše probíhalo v souladu s očekáváním.',
        'references.kosik': 'Vznikali jsme klasickým startupovým stylem – byl to velký „punk". :) V určité chvíli jsme si ale uvědomili, že je nutné se již z důvodu možnosti budoucího rozvoje zaměřit také na kvalitu a udržitelnost kódu. eValue dostalo za úkol přepsat celé UI do LESS a vše se podařilo. Následovalo spoustu dalších projektů – mailové šablony, přístupnost, nové marketingové microsite apod. Tým z eValue vždy odvedl a odvádí i nadále skutečně profesionální služby.',
        'references.nanoEnergies': 'Stáli jsme před velkou výzvou. Náš zastaralý backoffice systém již neumožňoval flexibilní reakci na potřeby trhu, a tak jsme se rozhodli implementovat systém nový na moderních technologiích. V tom okamžiku jsme se spojili s eValue. Sice jsme měli na začátku pouze pár wireframů, jak bychom si to představovali, ale eValue nám dokázalo kromě schopného vývojářského týmu také nabídnout konzultační služby na základě jejich zkušeností z energetiky. Byl to náročný projekt, ale výsledek stál za to. Díky zkušenosti s týmem eValue z tohoto velkého projektu jsme pak naše partnery požádali i o vytvoření portálu pro sdílení energií mezi výrobci energií, kteří využívají obnovitelné zdroje, a spotřebiteli.',
        'references.protankDynamics': 'V rámci zkvalitňování našeho produktu PROTANK DYNAMICS, který je zaměřen na Fleet Resource Management, jsme mimo jiné připravili i projekt komplexního redesignu aplikace. Vzhledem ke značnému rozsahu projektu jsme na několik měsíců potřebovali rozšířit naše kapacity. Firma eValue nám již během 14 dnů dodala vhodné vývojáře a po skončení první vlny zadaných úprav flexibilně upravila počet vývojářů tak, aby byly maximálně využity naše kapacity. Spolupráce s eValue je příjemná jak díky jejich profesionálnímu přístupu, tak díky schopným vývojářům.',
        'references.refresh': 'Při přípravě internetové samoobsluhy pro našeho významného klienta UPC jsme v relativně krátkém termínu potřebovali vyvinout frontendovou část projektu podle našich designů, na což nám chyběly potřebné kapacity. eValue nám byla schopna rychle dodat celý tým kodérů včetně projektového manažera a testera a po dokončení projektu jsme se dohodli na úpravě počtu developerů pro zpracování dodatečných úprav. S lidmi z eValue se dobře komunikuje a těšíme se na závěrečné zhodnocení projektu v moravském sklípku.',
        'references.summit': 'Se společností eValue spolupracujeme již delší dobu. Díky našemu neustálému růstu potřebujeme stále více externě pokrývat realizaci našich projektů. eValue je pro nás partnerem, který dodává služby v požadované kvalitě a předem definovaném čase.',
        
        // About
        'about.label': 'O nás',
        'about.title': 'Tým individuálů, který táhne za stejný konec lana',
        'about.description1': 'Jsme tým zkušených profesionálů zabývající se vývojem aplikací, kde každý z nás je individualista, každý z nás má jiný pohled na svět a každý z nás má jiné cesty k dosažení cíle, ale vždy táhneme za stejný konec lana. Každá překážka je pro nás výzva, kterou umíme společně pokořit, a tak jsme pružným motorem pro růst našich klientů.',
        'about.description2': 'V naší pražské kanceláři najdete především skvělé backendové vývojáře, zatímco náš frontendový tým sídlí v Marešově vile, která je významnou kulturní památkou v krásném jihomoravském městě Znojmě, kde nás inspirativní prostředí každý den nabíjí novou energií pro naši kreativní práci. Součástí naší společnosti je i tým vývojářů z Bulharska.',
        'about.stats.years': 'Let zkušeností',
        'about.stats.clients': 'Spokojených klientů',
        'about.stats.users': 'Uživatelů našich produktů',
        
        // Team
        'team.label': 'Tým',
        'team.title': 'Tým',
        'team.description': 'Seznamte se s týmem, který stojí za úspěchem našich projektů.',
        'team.roles.founder': 'Zakladatel a leader',
        'team.roles.productManager': 'Produktová manažerka',
        'team.roles.bgBusinessDeveloper': 'BG business developer',
        'team.roles.devopsLeader': 'DevOps specialista a Fullstack team leader',
        'team.roles.mobileDeveloper': 'Mobile App Developer',
        'team.roles.fullstackDeveloper': 'Fullstack developer',
        'team.roles.frontendDeveloper': 'Frontend developer',
        'team.roles.backendDeveloper': 'Backend developer',
        'team.footer': '...a dalších několik externích spolupracovníků, kteří nám vždy rádi pomohou na našich projektech',
        
        // Careers
        'careers.label': 'Koho hledáme',
        'careers.title': 'Přidej se k nám',
        'careers.description': 'Hledáme nové kolegy, kteří se chtějí podílet na zajímavých projektech a růst s námi.',
        'careers.more': 'Více informací →',
        'careers.modal.close': 'Zavřít',
        'careers.sections.requirements': 'Co bys měl/a umět',
        'careers.sections.appreciate': 'Co u tebe oceníme',
        'careers.sections.offer': 'Co nabízíme',
        'careers.cta.role': 'Zaujala tě tahle role?',
        'careers.cta.position': 'Zaujala tě tahle pozice?',
        'careers.cta.contact': 'Napiš nám',
        'careers.nodejs.title': 'Node.js vývojář',
        'careers.nodejs.requirements.1': 'velmi dobrou znalost Node.js a JavaScriptu',
        'careers.nodejs.requirements.2': 'solidní orientaci v PHP a práci s databázemi a knihovnami',
        'careers.nodejs.requirements.3': 'základní přehled v HTML, CSS, Reactu a AWS',
        'careers.nodejs.requirements.4': 'umět si říct o radu, když něco nevíš, a mít chuť se to doučit',
        'careers.nodejs.requirements.5': 'angličtinu na úrovni, která ti umožní číst technickou dokumentaci',
        'careers.nodejs.appreciate.1': 'chuť se neustále učit a sledovat nové technologie',
        'careers.nodejs.appreciate.2': 'týmového ducha a zdravý smysl pro humor',
        'careers.nodejs.appreciate.3': 'zodpovědný přístup a schopnost dotahovat věci do konce',
        'careers.nodejs.offer.1': 'práci na zajímavých projektech pro významné české i zahraniční klienty',
        'careers.nodejs.offer.2': 'možnost práce z našich kanceláří ve Znojmě, Praze (Flora), Sofii nebo Plovdivu, případně remote',
        'careers.nodejs.offer.3': 'spolupráci na HPP i IČO',
        'careers.nodejs.offer.4': 'teambuildingy, sportovní výzvy a společné akce během roku',
        'careers.nodejs.offer.5': 'férové finanční ohodnocení, benefity, odměny za úspěšné projekty a podporu dalšího vzdělávání',
        'careers.nodejs.offer.6': 'kvalitní kávu, příjemné pracovní prostředí',
        'careers.nodejs.offer.7': 'a hlavně dobrý tým a šéfa, se kterým se dá mluvit',
        'careers.htmlcss.title': 'HTML/CSS vývojář',
        'careers.htmlcss.intro': 'Hledáme frontendového vývojáře, kterému záleží na detailech, čistém kódu a konzistentním výstupu. Pokud máš cit pro rozhraní a baví tě ladit věci do posledního pixelu, můžeš se u nás cítit dobře.',
        'careers.htmlcss.requirements.1': 'velmi dobrou znalost HTML5 a CSS3',
        'careers.htmlcss.requirements.2': 'základní orientaci v JavaScriptu',
        'careers.htmlcss.requirements.3': 'přehled v PHP (není nutné být backend specialista)',
        'careers.htmlcss.requirements.4': 'umět si říct o pomoc, když něco nevíš, a mít chuť se to naučit',
        'careers.htmlcss.requirements.5': 'angličtinu na úrovni potřebné pro práci s technickou dokumentací',
        'careers.htmlcss.appreciate.1': 'chuť se dál rozvíjet a sledovat moderní frontendové trendy',
        'careers.htmlcss.appreciate.2': 'smysl pro detail a kvalitu výstupu',
        'careers.htmlcss.appreciate.3': 'týmového ducha a smysl pro humor',
        'careers.htmlcss.offer.1': 'práci na zajímavých projektech pro významné české i zahraniční klienty',
        'careers.htmlcss.offer.2': 'možnost práce z kanceláří ve Znojmě, Praze (Flora), Sofii nebo Plovdivu, případně remote',
        'careers.htmlcss.offer.3': 'spolupráci na HPP i IČO',
        'careers.htmlcss.offer.4': 'teambuildingy, sportovní výzvy a společné akce během roku',
        'careers.htmlcss.offer.5': 'férové finanční ohodnocení, benefity, odměny za úspěšné projekty a podporu dalšího vzdělávání',
        'careers.htmlcss.offer.6': 'kvalitní kávu a příjemné pracovní prostředí',
        'careers.htmlcss.offer.7': 'především dobrý tým a šéfa, se kterým se dá normálně mluvit',
        'careers.react.title': 'React vývojář',
        'careers.react.intro': 'Hledáme React vývojáře, který má rád moderní frontend, čistý kód a práci na projektech, které dávají smysl v reálném provozu – od interních systémů až po aplikace s velkým počtem uživatelů.',
        'careers.react.requirements.1': 'velmi dobrou znalost JavaScriptu',
        'careers.react.requirements.2': 'praktickou zkušenost s Reactem',
        'careers.react.requirements.3': 'dobrou orientaci v HTML a CSS',
        'careers.react.requirements.4': 'umět si říct o radu, když něco nevíš, a mít chuť se dál učit',
        'careers.react.requirements.5': 'angličtinu na úrovni práce s technickou dokumentací',
        'careers.react.appreciate.1': 'chuť se neustále rozvíjet a sledovat moderní frontendové technologie',
        'careers.react.appreciate.2': 'zodpovědný přístup a smysl pro kvalitní kód',
        'careers.react.appreciate.3': 'týmového ducha a smysl pro humor',
        'careers.react.offer.1': 'práci na zajímavých projektech pro významné české i zahraniční klienty',
        'careers.react.offer.2': 'možnost práce z kanceláří ve Znojmě, Praze (Flora), Sofii nebo Plovdivu, případně remote',
        'careers.react.offer.3': 'spolupráci na HPP i IČO',
        'careers.react.offer.4': 'teambuildingy, sportovní výzvy a společné akce během roku',
        'careers.react.offer.5': 'férové finanční ohodnocení, benefity, odměny za úspěšné projekty a podporu dalšího vzdělávání',
        'careers.react.offer.6': 'kvalitní kávu a příjemné pracovní prostředí',
        'careers.react.offer.7': 'především dobrý tým a šéfa, se kterým se dá normálně mluvit',
        
        // Contact
        'contact.label': 'Kontakt',
        'contact.title': 'Kontakt',
        'contact.description': 'Sháníte přesně ty služby, které nabízíme? Tak nám můžete napsat rovnou odtud.',
        'contact.name.placeholder': 'Vaše jméno / firma',
        'contact.email.placeholder': 'Váš email',
        'contact.phone.placeholder': 'Telefonní číslo',
        'contact.subject.placeholder': 'Co potřebujete',
        'contact.message.placeholder': 'Detailní popis vaší žádosti',
        'contact.submit': 'Odeslat',
        'contact.sending': 'Odesílání...',
        'contact.sent': 'Zpráva odeslána! ✓',
        
        // We Support
        'weSupport.label': 'Podporujeme',
        'weSupport.title': 'Podporujeme',
        'weSupport.description': 'Jsme hrdí na to, že můžeme podporovat tyto organizace a jejich důležitou práci.',
        
        // Partners
        'partners.label': 'Partneři',
        'partners.title': 'Partneři',
        
        // Footer
        'footer.navigation': 'Navigace',
        'footer.contact': 'Kontakt',
        'footer.country.czech': 'Česko',
        'footer.country.bulgaria': 'Bulharsko',
        'footer.contact.phone': 'Telefon:',
        'footer.contact.email': 'Email:',
        'footer.contact.cz.headquarters': 'Sídlo - Praha',
        'footer.contact.cz.techCenter': 'Technologické centrum - Znojmo',
        'footer.contact.bg.headquarters': 'Sídlo - Sofia',
        'footer.copyright': '© {YEAR} eValue. Všechna práva vyhrazena.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.products': 'Products',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.title1': 'We give life',
        'hero.title2': 'to your business',
        'hero.subtitle': 'We create digital products and applications that help companies grow and operate more efficiently.',
        'hero.contact': 'Contact us',
        'hero.services': 'Our services',
        
        // Services
        'services.label': 'Our services',
        'services.title': 'Services',
        'services.description': 'We create custom software and expand your teams with experienced developers for application development.',
        'services.agile.title': 'eValue Agile Team',
        'services.agile.description': 'An agile team for custom software development. We collaborate according to your preferences – Time & Material or Fixed Price.',
        'services.bodyShopping.title': 'eValue Body Shopping',
        'services.bodyShopping.description': 'Quick expansion of your team with experienced specialists for software development. Project managers, architects and developers for short-term and medium-term projects.',
        'services.development.title': 'Application Development',
        'services.development.description': 'We create modern applications and systems using various technologies (PHP, .NET, JAVA, React) that increase the efficiency of your business.',
        'services.cta.text': 'Want to discuss a specific project?',
        'services.cta.button': 'Let\'s talk',
        
        // Products
        'products.label': 'Products',
        'products.title': 'Products',
        'products.description': 'Software development is not only our work but also our passion, so we are not afraid to invest in our own solutions.',
        'products.category.all': 'All',
        'products.category.fire': 'Fire',
        'products.category.sport': 'Sports',
        'products.category.business': 'Business',
        'products.fireAlarm.title': 'FireAlarm',
        'products.fireAlarm.description': 'Tracking fire department dispatches in six regions of the Czech Republic. Detailed breakdown of dispatched equipment.',
        'products.firePlan.title': 'FirePlan',
        'products.firePlan.description': 'The most convenient shift planning for fire departments. Unlimited number of firefighters, expertise settings, email notifications.',
        'products.statif.title': 'StatiF',
        'products.statif.description': 'Quick recording of events on the floorball field. Real-time player statistics.',
        'products.challengeMe.title': 'ChallengeMe',
        'products.challengeMe.description': 'Create, manage and participate in various challenges with your team of colleagues or friends.',
        'products.easyERP.title': 'EasyERP',
        'products.easyERP.description': 'Keep control of your entire production process, from material ordering to shipping.',
        'products.timeWise.title': 'TimeWise',
        'products.timeWise.description': 'Time and task organization for individuals or entire groups. Overview of completed, ongoing and future tasks.',
        'products.evHard.title': 'EvHard',
        'products.evHard.description': 'Comprehensive overview of your company equipment in a simple package. Try up to 10 pieces of equipment completely free.',
        'products.eCms.title': 'eCms',
        'products.eCms.description': 'Simple solution and management of variable data for you and your clients. Creation and editing of variables, API link generation.',
        'products.duverujProveruj.title': 'DůvěřujPrověřuj',
        'products.duverujProveruj.description': 'Thorough inspection of the condition of (not only) real estate, for buyers and sellers, future tenants or landlords.',
        'products.cta.text': 'Are you interested?',
        'products.cta.button': 'Contact',
        
        // References
        'references.label': 'References',
        'references.title': 'References',
        'references.description': 'Read how our clients evaluate their cooperation with eValue.',
        'references.carvago': 'We met with the people from eValue at the start of our new ambitious project. Since some of our investors had successfully worked with eValue in the past, we decided to trust them this time as well. We appreciate not only the good technical knowledge and experience of the developers involved, but above all that whatever we agree on, it always holds completely true.',
        'references.finshape': 'Our company has good experience working with eValue, and that\'s why we always like to turn to them, for example, during the project of redesigning internet banking for our significant client, when we needed to increase our capacities and eValue provided us with suitable coders through body shopping. We also cooperate long-term in the field of Java development. Thanks to eValue, we also acquired a capable Solution architect or Angular and Java developers to our internal staff.',
        'references.griffteam': 'Our company focuses on developing extensive database solutions for internal use by our clients. In projects where it is necessary to implement and connect web portals for retail users to the B/O part, we turn to eValue. Their experienced team has always delivered the final product in the required quality and time, with an obvious emphasis on customer needs.',
        'references.inventi': 'eValue is now a strategic partner for us who has never let us down. We have worked together on many large projects using various technologies (PHP, .NET, JAVA, React) and everything has always gone according to expectations.',
        'references.kosik': 'We started in a classic startup style - it was a big "punk". :) At a certain point, however, we realized that it was necessary to focus on code quality and sustainability due to the possibility of future development. eValue was tasked with rewriting the entire UI to LESS and everything succeeded. This was followed by many other projects - email templates, accessibility, new marketing microsites, etc. The eValue team has always delivered and continues to deliver truly professional services.',
        'references.nanoEnergies': 'We faced a great challenge. Our outdated backoffice system no longer allowed flexible response to market needs, so we decided to implement a new system on modern technologies. At that moment, we connected with eValue. Although we only had a few wireframes at the beginning of what we imagined, eValue was able to offer us not only a capable development team but also consulting services based on their experience in the energy sector. It was a demanding project, but the result was worth it. Thanks to the experience with the eValue team from this large project, we then asked our partners to create a portal for sharing energy between energy producers who use renewable sources and consumers.',
        'references.protankDynamics': 'As part of improving our PROTANK DYNAMICS product, which is focused on Fleet Resource Management, we prepared, among other things, a project for a comprehensive redesign of the application. Given the significant scope of the project, we needed to expand our capacities for several months. eValue delivered suitable developers within 14 days and after the end of the first wave of assigned modifications, flexibly adjusted the number of developers so that our capacities were maximally utilized. Cooperation with eValue is pleasant both thanks to their professional approach and capable developers.',
        'references.refresh': 'During the preparation of the internet self-service for our significant client UPC, we needed to develop the frontend part of the project according to our designs in a relatively short time, for which we lacked the necessary capacities. eValue was able to quickly deliver a whole team of coders including a project manager and tester, and after the completion of the project, we agreed on adjusting the number of developers for processing additional modifications. Communication with people from eValue is good and we look forward to the final project evaluation in a Moravian wine cellar.',
        'references.summit': 'We have been cooperating with eValue for a longer time. Due to our constant growth, we need to increasingly cover the implementation of our projects externally. eValue is a partner for us who delivers services in the required quality and predefined time.',
        
        // About
        'about.label': 'About us',
        'about.title': 'A team of individuals pulling in the same direction',
        'about.description1': 'We are a team of experienced professionals developing applications, where each of us is an individual, each of us has a different view of the world and each of us has different paths to achieve goals, but we always pull in the same direction. Every obstacle is a challenge for us that we can overcome together, making us a flexible engine for our clients\' growth.',
        'about.description2': 'In our Prague office, you will find mainly excellent backend developers, while our frontend team is located in Mareš Villa, which is a significant cultural monument in the beautiful South Moravian city of Znojmo, where the inspirational environment charges us with new energy every day for our creative work. Our company also includes a team of developers from Bulgaria.',
        'about.stats.years': 'Years of experience',
        'about.stats.clients': 'Satisfied clients',
        'about.stats.users': 'Users of our products',
        
        // Team
        'team.label': 'Team',
        'team.title': 'Team',
        'team.description': 'Meet the team behind the success of our projects.',
        'team.roles.founder': 'Founder and leader',
        'team.roles.productManager': 'Product Manager',
        'team.roles.bgBusinessDeveloper': 'BG business developer',
        'team.roles.devopsLeader': 'DevOps specialist and Fullstack team leader',
        'team.roles.mobileDeveloper': 'Mobile App Developer',
        'team.roles.fullstackDeveloper': 'Fullstack developer',
        'team.roles.frontendDeveloper': 'Frontend developer',
        'team.roles.backendDeveloper': 'Backend developer',
        'team.footer': '...and several other external collaborators who are always happy to help us on our projects',
        
        // Careers
        'careers.label': 'Who we\'re looking for',
        'careers.title': 'Join us',
        'careers.description': 'We are looking for new colleagues who want to participate in interesting projects and grow with us.',
        'careers.more': 'More information →',
        'careers.modal.close': 'Close',
        'careers.sections.requirements': 'What you should know',
        'careers.sections.appreciate': 'What we appreciate about you',
        'careers.sections.offer': 'What we offer',
        'careers.cta.role': 'Are you interested in this role?',
        'careers.cta.position': 'Are you interested in this position?',
        'careers.cta.contact': 'Write to us',
        'careers.nodejs.title': 'Node.js Developer',
        'careers.nodejs.requirements.1': 'very good knowledge of Node.js and JavaScript',
        'careers.nodejs.requirements.2': 'solid orientation in PHP and work with databases and libraries',
        'careers.nodejs.requirements.3': 'basic overview in HTML, CSS, React and AWS',
        'careers.nodejs.requirements.4': 'be able to ask for advice when you don\'t know something, and have the desire to learn it',
        'careers.nodejs.requirements.5': 'English at a level that allows you to read technical documentation',
        'careers.nodejs.appreciate.1': 'desire to constantly learn and follow new technologies',
        'careers.nodejs.appreciate.2': 'team spirit and healthy sense of humor',
        'careers.nodejs.appreciate.3': 'responsible approach and ability to finish things',
        'careers.nodejs.offer.1': 'work on interesting projects for significant Czech and foreign clients',
        'careers.nodejs.offer.2': 'opportunity to work from our offices in Znojmo, Prague (Flora), Sofia or Plovdiv, or remotely',
        'careers.nodejs.offer.3': 'cooperation on employment contract or as a freelancer',
        'careers.nodejs.offer.4': 'teambuilding, sports challenges and joint events during the year',
        'careers.nodejs.offer.5': 'fair financial compensation, benefits, rewards for successful projects and support for further education',
        'careers.nodejs.offer.6': 'quality coffee, pleasant work environment',
        'careers.nodejs.offer.7': 'and above all, a good team and boss you can talk to',
        'careers.htmlcss.title': 'HTML/CSS Developer',
        'careers.htmlcss.intro': 'We are looking for a frontend developer who cares about details, clean code and consistent output. If you have a feel for interfaces and enjoy fine-tuning things down to the last pixel, you can feel at home with us.',
        'careers.htmlcss.requirements.1': 'very good knowledge of HTML5 and CSS3',
        'careers.htmlcss.requirements.2': 'basic orientation in JavaScript',
        'careers.htmlcss.requirements.3': 'overview in PHP (no need to be a backend specialist)',
        'careers.htmlcss.requirements.4': 'be able to ask for help when you don\'t know something, and have the desire to learn',
        'careers.htmlcss.requirements.5': 'English at a level needed for working with technical documentation',
        'careers.htmlcss.appreciate.1': 'desire to further develop and follow modern frontend trends',
        'careers.htmlcss.appreciate.2': 'attention to detail and quality of output',
        'careers.htmlcss.appreciate.3': 'team spirit and sense of humor',
        'careers.htmlcss.offer.1': 'work on interesting projects for significant Czech and foreign clients',
        'careers.htmlcss.offer.2': 'opportunity to work from offices in Znojmo, Prague (Flora), Sofia or Plovdiv, or remotely',
        'careers.htmlcss.offer.3': 'cooperation on employment contract or as a freelancer',
        'careers.htmlcss.offer.4': 'teambuilding, sports challenges and joint events during the year',
        'careers.htmlcss.offer.5': 'fair financial compensation, benefits, rewards for successful projects and support for further education',
        'careers.htmlcss.offer.6': 'quality coffee and pleasant work environment',
        'careers.htmlcss.offer.7': 'above all, a good team and boss you can talk to normally',
        'careers.react.title': 'React Developer',
        'careers.react.intro': 'We are looking for a React developer who likes modern frontend, clean code and work on projects that make sense in real operation – from internal systems to applications with a large number of users.',
        'careers.react.requirements.1': 'very good knowledge of JavaScript',
        'careers.react.requirements.2': 'practical experience with React',
        'careers.react.requirements.3': 'good orientation in HTML and CSS',
        'careers.react.requirements.4': 'be able to ask for advice when you don\'t know something, and have the desire to continue learning',
        'careers.react.requirements.5': 'English at a level for working with technical documentation',
        'careers.react.appreciate.1': 'desire to constantly develop and follow modern frontend technologies',
        'careers.react.appreciate.2': 'responsible approach and sense for quality code',
        'careers.react.appreciate.3': 'team spirit and sense of humor',
        'careers.react.offer.1': 'work on interesting projects for significant Czech and foreign clients',
        'careers.react.offer.2': 'opportunity to work from offices in Znojmo, Prague (Flora), Sofia or Plovdiv, or remotely',
        'careers.react.offer.3': 'cooperation on employment contract or as a freelancer',
        'careers.react.offer.4': 'teambuilding, sports challenges and joint events during the year',
        'careers.react.offer.5': 'fair financial compensation, benefits, rewards for successful projects and support for further education',
        'careers.react.offer.6': 'quality coffee and pleasant work environment',
        'careers.react.offer.7': 'above all, a good team and boss you can talk to normally',
        
        // Contact
        'contact.label': 'Contact',
        'contact.title': 'Contact',
        'contact.description': 'Looking for exactly the services we offer? You can write to us directly from here.',
        'contact.name.placeholder': 'Your name / company',
        'contact.email.placeholder': 'Your email',
        'contact.phone.placeholder': 'Phone number',
        'contact.subject.placeholder': 'What you need',
        'contact.message.placeholder': 'Detailed description of your request',
        'contact.submit': 'Send',
        'contact.sending': 'Sending...',
        'contact.sent': 'Message sent! ✓',
        
        // We Support
        'weSupport.label': 'We support',
        'weSupport.title': 'We support',
        'weSupport.description': 'We are proud to support these organizations and their important work.',
        
        // Partners
        'partners.label': 'Partners',
        'partners.title': 'Partners',
        
        // Footer
        'footer.navigation': 'Navigation',
        'footer.contact': 'Contact',
        'footer.country.czech': 'Czech Republic',
        'footer.country.bulgaria': 'Bulgaria',
        'footer.contact.phone': 'Phone:',
        'footer.contact.email': 'Email:',
        'footer.contact.cz.headquarters': 'Headquarters - Prague',
        'footer.contact.cz.techCenter': 'Technology Center - Znojmo',
        'footer.contact.bg.headquarters': 'Headquarters - Sofia',
        'footer.copyright': '© {YEAR} eValue. All rights reserved.'
    },
    de: {
        // Navigation
        'nav.home': 'Startseite',
        'nav.services': 'Dienstleistungen',
        'nav.products': 'Produkte',
        'nav.about': 'Über uns',
        'nav.contact': 'Kontakt',
        
        // Hero
        'hero.title1': 'Wir geben Leben',
        'hero.title2': 'Ihrem Geschäft',
        'hero.subtitle': 'Wir erstellen digitale Produkte und Anwendungen, die Unternehmen beim Wachstum und bei der effizienteren Arbeit helfen.',
        'hero.contact': 'Kontaktieren',
        'hero.services': 'Unsere Dienstleistungen',
        
        // Services
        'services.label': 'Unsere Dienstleistungen',
        'services.title': 'Dienstleistungen',
        'services.description': 'Wir entwickeln maßgeschneiderte Software und erweitern Ihre Teams mit erfahrenen Entwicklern für die Anwendungsentwicklung.',
        'services.agile.title': 'eValue Agile Team',
        'services.agile.description': 'Ein agiles Team für die Entwicklung maßgeschneiderter Software. Wir arbeiten nach Ihren Präferenzen zusammen – Time & Material oder Fixed Price.',
        'services.bodyShopping.title': 'eValue Body Shopping',
        'services.bodyShopping.description': 'Schnelle Erweiterung Ihres Teams mit erfahrenen Spezialisten für die Softwareentwicklung. Projektmanager, Architekten und Entwickler für kurzfristige und mittelfristige Projekte.',
        'services.development.title': 'Anwendungsentwicklung',
        'services.development.description': 'Wir erstellen moderne Anwendungen und Systeme mit verschiedenen Technologien (PHP, .NET, JAVA, React), die die Effizienz Ihres Unternehmens steigern.',
        'services.cta.text': 'Möchten Sie ein konkretes Projekt besprechen?',
        'services.cta.button': 'Lassen Sie uns sprechen',
        
        // Products
        'products.label': 'Produkte',
        'products.title': 'Produkte',
        'products.description': 'Softwareentwicklung ist nicht nur unsere Arbeit, sondern auch unsere Leidenschaft, daher scheuen wir nicht davor zurück, in eigene Lösungen zu investieren.',
        'products.category.all': 'Alle',
        'products.category.fire': 'Feuerwehr',
        'products.category.sport': 'Sport',
        'products.category.business': 'Business',
        'products.fireAlarm.title': 'FireAlarm',
        'products.fireAlarm.description': 'Verfolgung von Feuerwehreinsätzen in sechs Regionen der Tschechischen Republik. Detaillierte Aufschlüsselung der eingesetzten Technik.',
        'products.firePlan.title': 'FirePlan',
        'products.firePlan.description': 'Die bequemste Schichtplanung für Feuerwehreinheiten. Unbegrenzte Anzahl von Feuerwehrleuten, Fachkenntnis-Einstellungen, E-Mail-Benachrichtigungen.',
        'products.statif.title': 'StatiF',
        'products.statif.description': 'Schnelle Erfassung von Ereignissen auf dem Floorball-Feld. Spielerstatistiken in Echtzeit.',
        'products.challengeMe.title': 'ChallengeMe',
        'products.challengeMe.description': 'Erstellen, verwalten und nehmen Sie an verschiedenen Herausforderungen mit Ihrem Team von Kollegen oder Freunden teil.',
        'products.easyERP.title': 'EasyERP',
        'products.easyERP.description': 'Behalten Sie die Kontrolle über Ihren gesamten Produktionsprozess, von der Materialbestellung bis zum Versand.',
        'products.timeWise.title': 'TimeWise',
        'products.timeWise.description': 'Zeit- und Aufgabenorganisation für Einzelpersonen oder ganze Gruppen. Übersicht über abgeschlossene, laufende und zukünftige Aufgaben.',
        'products.evHard.title': 'EvHard',
        'products.evHard.description': 'Umfassender Überblick über Ihre Firmenausstattung in einfachem Gewand. Testen Sie bis zu 10 Ausstattungsgegenstände völlig kostenlos.',
        'products.eCms.title': 'eCms',
        'products.eCms.description': 'Einfache Lösung und Verwaltung von variablen Daten für Sie und Ihre Kunden. Erstellung und Bearbeitung von Variablen, API-Link-Generierung.',
        'products.duverujProveruj.title': 'DůvěřujPrověřuj',
        'products.duverujProveruj.description': 'Gründliche Prüfung des Zustands von (nicht nur) Immobilien, für Käufer und Verkäufer, zukünftige Mieter oder Vermieter.',
        'products.cta.text': 'Haben wir Sie überzeugt?',
        'products.cta.button': 'Kontakt',
        
        // References
        'references.label': 'Referenzen',
        'references.title': 'Referenzen',
        'references.description': 'Lesen Sie, wie unsere Kunden die Zusammenarbeit mit eValue bewerten.',
        'references.carvago': 'Wir haben die Menschen von eValue am Start unseres neuen ehrgeizigen Projekts getroffen. Da einige unserer Investoren in der Vergangenheit erfolgreich mit eValue zusammengearbeitet hatten, haben wir ihnen auch dieses Mal Vertrauen geschenkt. Wir schätzen nicht nur das gute technische Wissen und die Erfahrung der beteiligten Entwickler, sondern vor allem, dass alles, worauf wir uns einigen, immer vollständig gilt.',
        'references.finshape': 'Unser Unternehmen hat gute Erfahrungen mit der Zusammenarbeit mit eValue, und deshalb wenden wir uns immer gerne an sie, zum Beispiel bei dem Projekt zur Neugestaltung des Internet-Bankings für unseren bedeutenden Kunden, als wir unsere Kapazitäten erhöhen mussten und eValue uns geeignete Programmierer über Body Shopping bereitgestellt hat. Wir arbeiten auch langfristig im Bereich Java-Entwicklung zusammen. Dank eValue haben wir auch einen fähigen Solution-Architekten oder Angular- und Java-Entwickler in unser internes Team aufgenommen.',
        'references.griffteam': 'Unser Unternehmen konzentriert sich auf die Entwicklung umfangreicher Datenbanklösungen für den internen Einsatz durch unsere Kunden. In Projekten, in denen es notwendig ist, Webportale für Endverbraucher an den B/O-Teil anzubinden, wenden wir uns an eValue. Ihr erfahrenes Team hat immer das Endergebnis in der gewünschten Qualität und Zeit geliefert, mit einem offensichtlichen Fokus auf die Kundenbedürfnisse.',
        'references.inventi': 'eValue ist jetzt ein strategischer Partner für uns, der uns nie im Stich gelassen hat. Wir haben gemeinsam viele große Projekte mit verschiedenen Technologien (PHP, .NET, JAVA, React) durchgeführt und alles verlief immer den Erwartungen entsprechend.',
        'references.kosik': 'Wir sind im klassischen Startup-Stil entstanden - es war ein großer "Punk". :) Zu einem bestimmten Zeitpunkt erkannten wir jedoch, dass es notwendig war, sich aufgrund der Möglichkeit der zukünftigen Entwicklung auch auf die Qualität und Nachhaltigkeit des Codes zu konzentrieren. eValue erhielt die Aufgabe, die gesamte Benutzeroberfläche in LESS umzuschreiben, und alles gelang. Es folgten viele weitere Projekte - E-Mail-Vorlagen, Barrierefreiheit, neue Marketing-Microsites usw. Das eValue-Team hat immer wirklich professionelle Dienstleistungen erbracht und tut dies auch weiterhin.',
        'references.nanoEnergies': 'Wir standen vor einer großen Herausforderung. Unser veraltetes Backoffice-System ermöglichte keine flexible Reaktion auf die Marktbedürfnisse mehr, daher beschlossen wir, ein neues System auf modernen Technologien zu implementieren. In diesem Moment haben wir uns mit eValue verbunden. Obwohl wir am Anfang nur ein paar Wireframes hatten, wie wir es uns vorstellten, konnte eValue uns neben einem fähigen Entwicklungsteam auch Beratungsdienste auf der Grundlage ihrer Erfahrungen im Energiesektor anbieten. Es war ein anspruchsvolles Projekt, aber das Ergebnis hat sich gelohnt. Dank der Erfahrung mit dem eValue-Team aus diesem großen Projekt baten wir dann unsere Partner, ein Portal für den Energiemix zwischen Energieerzeugern, die erneuerbare Quellen nutzen, und Verbrauchern zu erstellen.',
        'references.protankDynamics': 'Im Rahmen der Verbesserung unseres Produkts PROTANK DYNAMICS, das sich auf Fleet Resource Management konzentriert, haben wir unter anderem ein Projekt für eine umfassende Neugestaltung der Anwendung vorbereitet. Angesichts des erheblichen Umfangs des Projekts mussten wir unsere Kapazitäten für mehrere Monate erweitern. eValue hat uns innerhalb von 14 Tagen geeignete Entwickler geliefert und nach Abschluss der ersten Welle zugewiesener Änderungen die Anzahl der Entwickler flexibel angepasst, damit unsere Kapazitäten maximal genutzt wurden. Die Zusammenarbeit mit eValue ist angenehm, sowohl dank ihres professionellen Ansatzes als auch der fähigen Entwickler.',
        'references.refresh': 'Bei der Vorbereitung des Internet-Selbstbedienungsdienstes für unseren bedeutenden Kunden UPC mussten wir in relativ kurzer Zeit den Frontend-Teil des Projekts nach unseren Designs entwickeln, wofür uns die notwendigen Kapazitäten fehlten. eValue war in der Lage, schnell ein ganzes Team von Programmierern einschließlich eines Projektmanagers und Testers zu liefern, und nach Abschluss des Projekts haben wir uns auf eine Anpassung der Anzahl der Entwickler für die Bearbeitung zusätzlicher Änderungen geeinigt. Die Kommunikation mit den Menschen von eValue ist gut und wir freuen uns auf die abschließende Projektevaluierung im mährischen Weinkeller.',
        'references.summit': 'Wir arbeiten bereits seit längerer Zeit mit eValue zusammen. Aufgrund unseres kontinuierlichen Wachstums müssen wir die Umsetzung unserer Projekte zunehmend extern abdecken. eValue ist für uns ein Partner, der Dienstleistungen in der gewünschten Qualität und vordefinierten Zeit liefert.',
        
        // About
        'about.label': 'Über uns',
        'about.title': 'Ein Team von Individuen, die am gleichen Strang ziehen',
        'about.description1': 'Wir sind ein Team erfahrener Fachleute, die Anwendungen entwickeln, wobei jeder von uns ein Individuum ist, jeder von uns eine andere Sicht auf die Welt hat und jeder von uns unterschiedliche Wege zur Zielerreichung hat, aber wir ziehen immer am gleichen Strang. Jedes Hindernis ist eine Herausforderung für uns, die wir gemeinsam meistern können, und so sind wir ein flexibler Motor für das Wachstum unserer Kunden.',
        'about.description2': 'In unserem Prager Büro finden Sie vor allem hervorragende Backend-Entwickler, während unser Frontend-Team in der Mareš Villa ansässig ist, die ein bedeutendes Kulturdenkmal in der schönen südmährischen Stadt Znojmo ist, wo die inspirierende Umgebung uns täglich mit neuer Energie für unsere kreative Arbeit auflädt. Zu unserem Unternehmen gehört auch ein Team von Entwicklern aus Bulgarien.',
        'about.stats.years': 'Jahre Erfahrung',
        'about.stats.clients': 'Zufriedene Kunden',
        'about.stats.users': 'Benutzer unserer Produkte',
        
        // Team
        'team.label': 'Team',
        'team.title': 'Team',
        'team.description': 'Lernen Sie das Team kennen, das hinter dem Erfolg unserer Projekte steht.',
        'team.roles.founder': 'Gründer und Leiter',
        'team.roles.productManager': 'Produktmanagerin',
        'team.roles.bgBusinessDeveloper': 'BG Business Developer',
        'team.roles.devopsLeader': 'DevOps-Spezialist und Fullstack Team Leader',
        'team.roles.mobileDeveloper': 'Mobile App Developer',
        'team.roles.fullstackDeveloper': 'Fullstack-Entwickler',
        'team.roles.frontendDeveloper': 'Frontend-Entwickler',
        'team.roles.backendDeveloper': 'Backend-Entwickler',
        'team.footer': '...und mehrere andere externe Mitarbeiter, die uns immer gerne bei unseren Projekten helfen',
        
        // Careers
        'careers.label': 'Wen wir suchen',
        'careers.title': 'Werden Sie Teil unseres Teams',
        'careers.description': 'Wir suchen neue Kollegen, die an interessanten Projekten teilnehmen und mit uns wachsen möchten.',
        'careers.more': 'Weitere Informationen →',
        'careers.modal.close': 'Schließen',
        'careers.sections.requirements': 'Was Sie können sollten',
        'careers.sections.appreciate': 'Was wir an Ihnen schätzen',
        'careers.sections.offer': 'Was wir anbieten',
        'careers.cta.role': 'Interessiert Sie diese Rolle?',
        'careers.cta.position': 'Interessiert Sie diese Position?',
        'careers.cta.contact': 'Schreiben Sie uns',
        'careers.nodejs.title': 'Node.js Entwickler',
        'careers.nodejs.requirements.1': 'sehr gute Kenntnisse von Node.js und JavaScript',
        'careers.nodejs.requirements.2': 'solide Orientierung in PHP und Arbeit mit Datenbanken und Bibliotheken',
        'careers.nodejs.requirements.3': 'grundlegenden Überblick in HTML, CSS, React und AWS',
        'careers.nodejs.requirements.4': 'um Rat fragen können, wenn Sie etwas nicht wissen, und den Wunsch haben, es zu lernen',
        'careers.nodejs.requirements.5': 'Englisch auf einem Niveau, das es Ihnen ermöglicht, technische Dokumentation zu lesen',
        'careers.nodejs.appreciate.1': 'Wunsch, ständig zu lernen und neuen Technologien zu folgen',
        'careers.nodejs.appreciate.2': 'Teamgeist und gesunden Sinn für Humor',
        'careers.nodejs.appreciate.3': 'verantwortungsvollen Ansatz und die Fähigkeit, Dinge zu Ende zu bringen',
        'careers.nodejs.offer.1': 'Arbeit an interessanten Projekten für bedeutende tschechische und ausländische Kunden',
        'careers.nodejs.offer.2': 'Möglichkeit, von unseren Büros in Znojmo, Prag (Flora), Sofia oder Plovdiv zu arbeiten, oder remote',
        'careers.nodejs.offer.3': 'Zusammenarbeit auf HPP oder als Freelancer',
        'careers.nodejs.offer.4': 'Teambuilding, Sport-Herausforderungen und gemeinsame Veranstaltungen während des Jahres',
        'careers.nodejs.offer.5': 'faires finanzielles Entgelt, Vorteile, Belohnungen für erfolgreiche Projekte und Unterstützung für weitere Bildung',
        'careers.nodejs.offer.6': 'qualitativ hochwertigen Kaffee, angenehmes Arbeitsumfeld',
        'careers.nodejs.offer.7': 'und vor allem ein gutes Team und einen Chef, mit dem man sprechen kann',
        'careers.htmlcss.title': 'HTML/CSS Entwickler',
        'careers.htmlcss.intro': 'Wir suchen einen Frontend-Entwickler, dem Details, sauberer Code und konsistente Ausgabe wichtig sind. Wenn Sie ein Gefühl für Schnittstellen haben und es genießen, Dinge bis zum letzten Pixel zu perfektionieren, können Sie sich bei uns wohlfühlen.',
        'careers.htmlcss.requirements.1': 'sehr gute Kenntnisse von HTML5 und CSS3',
        'careers.htmlcss.requirements.2': 'grundlegende Orientierung in JavaScript',
        'careers.htmlcss.requirements.3': 'Überblick in PHP (muss kein Backend-Spezialist sein)',
        'careers.htmlcss.requirements.4': 'um Hilfe fragen können, wenn Sie etwas nicht wissen, und den Wunsch haben, es zu lernen',
        'careers.htmlcss.requirements.5': 'Englisch auf einem Niveau, das für die Arbeit mit technischer Dokumentation erforderlich ist',
        'careers.htmlcss.appreciate.1': 'Wunsch, sich weiterzuentwickeln und modernen Frontend-Trends zu folgen',
        'careers.htmlcss.appreciate.2': 'Sinn für Detail und Qualität der Ausgabe',
        'careers.htmlcss.appreciate.3': 'Teamgeist und Sinn für Humor',
        'careers.htmlcss.offer.1': 'Arbeit an interessanten Projekten für bedeutende tschechische und ausländische Kunden',
        'careers.htmlcss.offer.2': 'Möglichkeit, von Büros in Znojmo, Prag (Flora), Sofia oder Plovdiv zu arbeiten, oder remote',
        'careers.htmlcss.offer.3': 'Zusammenarbeit auf HPP oder als Freelancer',
        'careers.htmlcss.offer.4': 'Teambuilding, Sport-Herausforderungen und gemeinsame Veranstaltungen während des Jahres',
        'careers.htmlcss.offer.5': 'faires finanzielles Entgelt, Vorteile, Belohnungen für erfolgreiche Projekte und Unterstützung für weitere Bildung',
        'careers.htmlcss.offer.6': 'qualitativ hochwertigen Kaffee und angenehmes Arbeitsumfeld',
        'careers.htmlcss.offer.7': 'vor allem ein gutes Team und einen Chef, mit dem man normal sprechen kann',
        'careers.react.title': 'React Entwickler',
        'careers.react.intro': 'Wir suchen einen React-Entwickler, der modernes Frontend, sauberen Code und die Arbeit an Projekten mag, die im realen Betrieb Sinn ergeben – von internen Systemen bis hin zu Anwendungen mit einer großen Anzahl von Benutzern.',
        'careers.react.requirements.1': 'sehr gute Kenntnisse von JavaScript',
        'careers.react.requirements.2': 'praktische Erfahrung mit React',
        'careers.react.requirements.3': 'gute Orientierung in HTML und CSS',
        'careers.react.requirements.4': 'um Rat fragen können, wenn Sie etwas nicht wissen, und den Wunsch haben, weiter zu lernen',
        'careers.react.requirements.5': 'Englisch auf einem Niveau für die Arbeit mit technischer Dokumentation',
        'careers.react.appreciate.1': 'Wunsch, sich ständig weiterzuentwickeln und modernen Frontend-Technologien zu folgen',
        'careers.react.appreciate.2': 'verantwortungsvollen Ansatz und Sinn für qualitativen Code',
        'careers.react.appreciate.3': 'Teamgeist und Sinn für Humor',
        'careers.react.offer.1': 'Arbeit an interessanten Projekten für bedeutende tschechische und ausländische Kunden',
        'careers.react.offer.2': 'Möglichkeit, von Büros in Znojmo, Prag (Flora), Sofia oder Plovdiv zu arbeiten, oder remote',
        'careers.react.offer.3': 'Zusammenarbeit auf HPP oder als Freelancer',
        'careers.react.offer.4': 'Teambuilding, Sport-Herausforderungen und gemeinsame Veranstaltungen während des Jahres',
        'careers.react.offer.5': 'faires finanzielles Entgelt, Vorteile, Belohnungen für erfolgreiche Projekte und Unterstützung für weitere Bildung',
        'careers.react.offer.6': 'qualitativ hochwertigen Kaffee und angenehmes Arbeitsumfeld',
        'careers.react.offer.7': 'vor allem ein gutes Team und einen Chef, mit dem man normal sprechen kann',
        
        // Contact
        'contact.label': 'Kontakt',
        'contact.title': 'Kontakt',
        'contact.description': 'Suchen Sie genau die Dienstleistungen, die wir anbieten? Sie können uns direkt von hier aus schreiben.',
        'contact.name.placeholder': 'Ihr Name / Firma',
        'contact.email.placeholder': 'Ihre E-Mail',
        'contact.phone.placeholder': 'Telefonnummer',
        'contact.subject.placeholder': 'Was Sie benötigen',
        'contact.message.placeholder': 'Detaillierte Beschreibung Ihrer Anfrage',
        'contact.submit': 'Senden',
        'contact.sending': 'Wird gesendet...',
        'contact.sent': 'Nachricht gesendet! ✓',
        
        // We Support
        'weSupport.label': 'Wir unterstützen',
        'weSupport.title': 'Wir unterstützen',
        'weSupport.description': 'Wir sind stolz darauf, diese Organisationen und ihre wichtige Arbeit zu unterstützen.',
        
        // Partners
        'partners.label': 'Partner',
        'partners.title': 'Partner',
        
        // Footer
        'footer.navigation': 'Navigation',
        'footer.contact': 'Kontakt',
        'footer.country.czech': 'Tschechien',
        'footer.country.bulgaria': 'Bulgarien',
        'footer.contact.phone': 'Telefon:',
        'footer.contact.email': 'E-Mail:',
        'footer.contact.cz.headquarters': 'Hauptsitz - Prag',
        'footer.contact.cz.techCenter': 'Technologiezentrum - Znojmo',
        'footer.contact.bg.headquarters': 'Hauptsitz - Sofia',
        'footer.copyright': '© {YEAR} eValue. Alle Rechte vorbehalten.'
    },
    bg: {
        // Navigation
        'nav.home': 'Начало',
        'nav.services': 'Услуги',
        'nav.products': 'Продукти',
        'nav.about': 'За нас',
        'nav.contact': 'Контакт',
        
        // Hero
        'hero.title1': 'Даваме живот',
        'hero.title2': 'на вашия бизнес',
        'hero.subtitle': 'Създаваме дигитални продукти и приложения, които помагат на компаниите да растат и да работят по-ефективно.',
        'hero.contact': 'Свържете се',
        'hero.services': 'Нашите услуги',
        
        // Services
        'services.label': 'Нашите услуги',
        'services.title': 'Услуги',
        'services.description': 'Създаваме персонализиран софтуер и разширяваме вашите екипи с опитни разработчици за разработка на приложения.',
        'services.agile.title': 'eValue Agile Team',
        'services.agile.description': 'Гъвкав екип за разработка на персонализиран софтуер. Сътрудничим според вашите предпочитания – Time & Material или Fixed Price.',
        'services.bodyShopping.title': 'eValue Body Shopping',
        'services.bodyShopping.description': 'Бързо разширяване на вашия екип с опитни специалисти за разработка на софтуер. Управители на проекти, архитекти и разработчици за краткосрочни и средносрочни проекти.',
        'services.development.title': 'Разработка на приложения',
        'services.development.description': 'Създаваме модерни приложения и системи с различни технологии (PHP, .NET, JAVA, React), които повишават ефективността на вашия бизнес.',
        'services.cta.text': 'Искате ли да обсъдим конкретен проект?',
        'services.cta.button': 'Нека поговорим',
        
        // Products
        'products.label': 'Продукти',
        'products.title': 'Продукти',
        'products.description': 'Разработката на софтуер е не само нашата работа, но и нашата страст, затова не се страхуваме да инвестираме в собствени решения.',
        'products.category.all': 'Всички',
        'products.category.fire': 'Пожарна',
        'products.category.sport': 'Спорт',
        'products.category.business': 'Бизнес',
        'products.fireAlarm.title': 'FireAlarm',
        'products.fireAlarm.description': 'Проследяване на изходи на пожарникари в шест области на Чехия. Детайлен разбив на изпратената техника.',
        'products.firePlan.title': 'FirePlan',
        'products.firePlan.description': 'Най-удобното планиране на смени за пожарна единица. Неограничен брой пожарникари, настройка на експертиза, имейл известия.',
        'products.statif.title': 'StatiF',
        'products.statif.description': 'Бързо записване на събития на флорболното игрище. Статистика на играчите в реално време.',
        'products.challengeMe.title': 'ChallengeMe',
        'products.challengeMe.description': 'Създавайте, управлявайте и участвайте в различни предизвикателства със своя екип от колеги или приятели.',
        'products.easyERP.title': 'EasyERP',
        'products.easyERP.description': 'Дръжте под контрол целия си производствен процес, от поръчване на материали до експедиране.',
        'products.timeWise.title': 'TimeWise',
        'products.timeWise.description': 'Организация на времето и задачите за отделни лица или цели групи. Преглед на завършените, текущите и бъдещите задачи.',
        'products.evHard.title': 'EvHard',
        'products.evHard.description': 'Цялостен преглед на вашето фирмено оборудване в прост пакет. Изпробвайте до 10 броя оборудване напълно безплатно.',
        'products.eCms.title': 'eCms',
        'products.eCms.description': 'Просто решение и управление на променливи данни за вас и вашите клиенти. Създаване и редактиране на променливи, генериране на API връзки.',
        'products.duverujProveruj.title': 'DůvěřujPrověřuj',
        'products.duverujProveruj.description': 'Внимателна проверка на състоянието на (не само) недвижими имоти, за купувачи и продавачи, бъдещи наематели или наемодатели.',
        'products.cta.text': 'Заинтересувахме ли ви?',
        'products.cta.button': 'Контакт',
        
        // References
        'references.label': 'Референции',
        'references.title': 'Референции',
        'references.description': 'Прочетете как нашите клиенти оценяват сътрудничеството с eValue.',
        'references.carvago': 'Срещнахме се с хората от eValue в началото на нашия нов амбициозен проект. Тъй като някои от нашите инвеститори са работили успешно с eValue в миналото, решихме да им доверим и този път. Оценяваме не само добрите технически знания и опит на участващите разработчици, но преди всичко това, че всичко, на което се съгласим, винаги важи напълно.',
        'references.finshape': 'Нашата компания има добър опит в работата с eValue, и затова винаги се радваме да се обърнем към тях, например по време на проекта за преработка на интернет банкирането за нашия значим клиент, когато се нуждаехме от увеличаване на нашите капацитети и eValue ни осигури подходящи програмисти чрез body shopping. Също така работим дългосрочно в областта на Java разработката. Благодарение на eValue също приехме в нашия вътрешен екип способен Solution архитект или Angular и Java разработчици.',
        'references.griffteam': 'Нашата компания се фокусира върху разработването на обширни решения за бази данни за вътрешно използване от нашите клиенти. В проекти, където е необходимо да се внедри и да се свържат уеб портали за крайни потребители към B/O частта, се обръщаме към eValue. Техният опитен екип винаги е доставял крайния продукт с необходимото качество и време, с очевиден акцент върху нуждите на клиента.',
        'references.inventi': 'eValue вече е стратегически партньор за нас, който никога не ни е подвел. Работили сме заедно по много големи проекти, използвайки различни технологии (PHP, .NET, JAVA, React), и всичко винаги е протичало според очакванията.',
        'references.kosik': 'Започнахме по класически стартъп стил - беше голям "пънк". :) В определен момент обаче осъзнахме, че е необходимо да се фокусираме върху качеството и устойчивостта на кода поради възможността за бъдещо развитие. На eValue беше възложено да пренапише цялото потребителско интерфейс на LESS и всичко се получи. Последваха много други проекти - имейл шаблони, достъпност, нови маркетингови микросайтове и др. Екипът на eValue винаги е предоставял и продължава да предоставя наистина професионални услуги.',
        'references.nanoEnergies': 'Изправени бяхме пред голямо предизвикателство. Нашата остаряла бек офис система вече не позволяваше гъвкава реакция на пазарните нужди, затова решихме да внедрим нова система на модерни технологии. В този момент се свързахме с eValue. Въпреки че в началото имахме само няколко wireframes за това, какво си представяхме, eValue успя да ни предложи не само способен екип разработчици, но и консултативни услуги въз основа на техния опит в енергетиката. Беше труден проект, но резултатът си струваше. Благодарение на опита с екипа на eValue от този голям проект, след това попитахме нашите партньори да създадат портал за споделяне на енергия между производители на енергия, които използват възобновяеми източници, и потребителите.',
        'references.protankDynamics': 'В рамките на подобряването на нашия продукт PROTANK DYNAMICS, който е фокусиран върху Fleet Resource Management, между другото подготвихме и проект за цялостна преработка на приложението. Имайки предвид значителния обхват на проекта, се нуждаехме от разширяване на нашите капацитети за няколко месеца. eValue ни достави подходящи разработчици в рамките на 14 дни и след приключването на първата вълна от зададени модификации, гъвкаво коригира броя на разработчиците, така че нашите капацитети да бъдат максимално използвани. Сътрудничеството с eValue е приятно както благодарение на техния професионален подход, така и на способните разработчици.',
        'references.refresh': 'По време на подготовката на интернет самообслужването за нашия значим клиент UPC, се нуждаехме от разработване на frontend частта на проекта според нашите дизайни в сравнително кратък срок, за което нямахме необходимите капацитети. eValue успя бързо да ни достави цял екип от програмисти, включително проект мениджър и тестер, и след завършването на проекта се споразумяхме за корекция на броя на разработчиците за обработка на допълнителни модификации. Комуникацията с хората от eValue е добра и очакваме финалната оценка на проекта в моравско винарно изба.',
        'references.summit': 'Вече работим с eValue от по-дълго време. Поради нашия постоянен растеж се нуждаем все повече от външно покриване на реализацията на нашите проекти. eValue е партньор за нас, който доставя услуги в необходимото качество и предварително определено време.',
        
        // About
        'about.label': 'За нас',
        'about.title': 'Екип от индивиди, които дърпат в една посока',
        'about.description1': 'Ние сме екип от опитни професионалисти, които разработват приложения, където всеки от нас е индивидуалист, всеки от нас има различен поглед към света и всеки от нас има различни пътища за постигане на целите, но винаги дърпаме в една посока. Всяка пречка е предизвикателство за нас, което можем да преодолеем заедно, което ни прави гъвкав двигател за растежа на нашите клиенти.',
        'about.description2': 'В нашия офис в Прага ще намерите предимно отлични backend разработчици, докато нашият frontend екип се намира в вилата Mareš, която е значим културен паметник в красивия южноморавски град Зноймо, където вдъхновяващата среда ни зарежда всеки ден с нова енергия за нашата творческа работа. Нашата компания включва също екип от разработчици от България.',
        'about.stats.years': 'Години опит',
        'about.stats.clients': 'Доволни клиенти',
        'about.stats.users': 'Потребители на нашите продукти',
        
        // Team
        'team.label': 'Екип',
        'team.title': 'Екип',
        'team.description': 'Запознайте се с екипа зад успеха на нашите проекти.',
        'team.roles.founder': 'Основател и лидер',
        'team.roles.productManager': 'Продуктов мениджър',
        'team.roles.bgBusinessDeveloper': 'BG бизнес разработчик',
        'team.roles.devopsLeader': 'DevOps специалист и Fullstack team leader',
        'team.roles.mobileDeveloper': 'Mobile App Developer',
        'team.roles.fullstackDeveloper': 'Fullstack разработчик',
        'team.roles.frontendDeveloper': 'Frontend разработчик',
        'team.roles.backendDeveloper': 'Backend разработчик',
        'team.footer': '...и още няколко външни сътрудници, които винаги са готови да ни помогнат в нашите проекти',
        
        // Careers
        'careers.label': 'Кого търсим',
        'careers.title': 'Присъединете се към нас',
        'careers.description': 'Търсим нови колеги, които искат да участват в интересни проекти и да растат с нас.',
        'careers.more': 'Повече информация →',
        'careers.modal.close': 'Затвори',
        'careers.sections.requirements': 'Какво трябва да знаете',
        'careers.sections.appreciate': 'Какво оценяваме при вас',
        'careers.sections.offer': 'Какво предлагаме',
        'careers.cta.role': 'Заинтересува ли ви тази роля?',
        'careers.cta.position': 'Заинтересува ли ви тази позиция?',
        'careers.cta.contact': 'Пишете ни',
        'careers.nodejs.title': 'Node.js разработчик',
        'careers.nodejs.requirements.1': 'много добри познания по Node.js и JavaScript',
        'careers.nodejs.requirements.2': 'солидна ориентация в PHP и работа с бази данни и библиотеки',
        'careers.nodejs.requirements.3': 'основен преглед в HTML, CSS, React и AWS',
        'careers.nodejs.requirements.4': 'да можете да питате за съвет, когато нещо не знаете, и да имате желание да го научите',
        'careers.nodejs.requirements.5': 'английски на ниво, което ви позволява да четете техническа документация',
        'careers.nodejs.appreciate.1': 'желание постоянно да се учите и да следвате нови технологии',
        'careers.nodejs.appreciate.2': 'екипен дух и здравословен смисъл за хумор',
        'careers.nodejs.appreciate.3': 'отговорен подход и способност да завършвате неща',
        'careers.nodejs.offer.1': 'работа по интересни проекти за значими чешки и чуждестранни клиенти',
        'careers.nodejs.offer.2': 'възможност за работа от нашите офиси в Зноймо, Прага (Flora), София или Пловдив, или отдалечено',
        'careers.nodejs.offer.3': 'сътрудничество по трудов договор или като свободен професионалист',
        'careers.nodejs.offer.4': 'тимбилдинг, спортни предизвикателства и съвместни събития през годината',
        'careers.nodejs.offer.5': 'справедливо финансово обезщетение, предимства, награди за успешни проекти и подкрепа за по-нататъшно образование',
        'careers.nodejs.offer.6': 'качествено кафе, приятна работна среда',
        'careers.nodejs.offer.7': 'и преди всичко, добър екип и шеф, с когото можете да говорите',
        'careers.htmlcss.title': 'HTML/CSS разработчик',
        'careers.htmlcss.intro': 'Търсим frontend разработчик, който се грижи за детайлите, чистия код и последователния изход. Ако имате усет за интерфейси и ви харесва да нагласяте неща до последния пиксел, може да се почувствате добре при нас.',
        'careers.htmlcss.requirements.1': 'много добри познания по HTML5 и CSS3',
        'careers.htmlcss.requirements.2': 'основна ориентация в JavaScript',
        'careers.htmlcss.requirements.3': 'преглед в PHP (не е необходимо да сте backend специалист)',
        'careers.htmlcss.requirements.4': 'да можете да питате за помощ, когато нещо не знаете, и да имате желание да го научите',
        'careers.htmlcss.requirements.5': 'английски на ниво, необходимо за работа с техническа документация',
        'careers.htmlcss.appreciate.1': 'желание да се развивате по-нататък и да следвате модерни frontend тенденции',
        'careers.htmlcss.appreciate.2': 'усет за детайл и качество на изхода',
        'careers.htmlcss.appreciate.3': 'екипен дух и смисъл за хумор',
        'careers.htmlcss.offer.1': 'работа по интересни проекти за значими чешки и чуждестранни клиенти',
        'careers.htmlcss.offer.2': 'възможност за работа от офиси в Зноймо, Прага (Flora), София или Пловдив, или отдалечено',
        'careers.htmlcss.offer.3': 'сътрудничество по трудов договор или като свободен професионалист',
        'careers.htmlcss.offer.4': 'тимбилдинг, спортни предизвикателства и съвместни събития през годината',
        'careers.htmlcss.offer.5': 'справедливо финансово обезщетение, предимства, награди за успешни проекти и подкрепа за по-нататъшно образование',
        'careers.htmlcss.offer.6': 'качествено кафе и приятна работна среда',
        'careers.htmlcss.offer.7': 'преди всичко, добър екип и шеф, с когото можете да говорите нормално',
        'careers.react.title': 'React разработчик',
        'careers.react.intro': 'Търсим React разработчик, който харесва модерен frontend, чист код и работа по проекти, които имат смисъл в реална експлоатация – от вътрешни системи до приложения с голям брой потребители.',
        'careers.react.requirements.1': 'много добри познания по JavaScript',
        'careers.react.requirements.2': 'практически опит с React',
        'careers.react.requirements.3': 'добра ориентация в HTML и CSS',
        'careers.react.requirements.4': 'да можете да питате за съвет, когато нещо не знаете, и да имате желание да продължите да се учите',
        'careers.react.requirements.5': 'английски на ниво за работа с техническа документация',
        'careers.react.appreciate.1': 'желание постоянно да се развивате и да следвате модерни frontend технологии',
        'careers.react.appreciate.2': 'отговорен подход и усет за качествен код',
        'careers.react.appreciate.3': 'екипен дух и смисъл за хумор',
        'careers.react.offer.1': 'работа по интересни проекти за значими чешки и чуждестранни клиенти',
        'careers.react.offer.2': 'възможност за работа от офиси в Зноймо, Прага (Flora), София или Пловдив, или отдалечено',
        'careers.react.offer.3': 'сътрудничество по трудов договор или като свободен професионалист',
        'careers.react.offer.4': 'тимбилдинг, спортни предизвикателства и съвместни събития през годината',
        'careers.react.offer.5': 'справедливо финансово обезщетение, предимства, награди за успешни проекти и подкрепа за по-нататъшно образование',
        'careers.react.offer.6': 'качествено кафе и приятна работна среда',
        'careers.react.offer.7': 'преди всичко, добър екип и шеф, с когото можете да говорите нормално',
        
        // Contact
        'contact.label': 'Контакт',
        'contact.title': 'Контакт',
        'contact.description': 'Търсите точно услугите, които предлагаме? Можете да ни напишете директно от тук.',
        'contact.name.placeholder': 'Вашето име / фирма',
        'contact.email.placeholder': 'Вашият имейл',
        'contact.phone.placeholder': 'Телефонен номер',
        'contact.subject.placeholder': 'Какво ви трябва',
        'contact.message.placeholder': 'Подробно описание на вашата заявка',
        'contact.submit': 'Изпрати',
        'contact.sending': 'Изпращане...',
        'contact.sent': 'Съобщението е изпратено! ✓',
        
        // We Support
        'weSupport.label': 'Подкрепяме',
        'weSupport.title': 'Подкрепяме',
        'weSupport.description': 'Гордеем се, че можем да подкрепяме тези организации и важната им работа.',
        
        // Partners
        'partners.label': 'Партньори',
        'partners.title': 'Партньори',
        
        // Footer
        'footer.navigation': 'Навигация',
        'footer.contact': 'Контакт',
        'footer.country.czech': 'Чехия',
        'footer.country.bulgaria': 'България',
        'footer.contact.phone': 'Телефон:',
        'footer.contact.email': 'Имейл:',
        'footer.contact.cz.headquarters': 'Сидло - Прага',
        'footer.contact.cz.techCenter': 'Технологичен център - Зноймо',
        'footer.contact.bg.headquarters': 'Сидло - София',
        'footer.copyright': '© {YEAR} eValue. Всички права запазени.'
    }
};

// Function to detect language from domain
function detectLanguageFromDomain() {
    const hostname = window.location.hostname;
    
    // Check if domain is evalue.bg
    if (hostname === 'evalue.bg' || hostname.endsWith('.evalue.bg')) {
        return 'bg';
    }
    
    // For other domains (evalue.cz, evalue.group), return null to use localStorage/default
    return null;
}

let currentLanguage = (() => {
    // First check domain-based language
    const domainLanguage = detectLanguageFromDomain();
    if (domainLanguage) {
        return domainLanguage;
    }
    // Fall back to localStorage or default
    return localStorage.getItem('language') || 'cs';
})();

const languageCodes = {
    cs: 'CZ',
    en: 'EN',
    de: 'DE',
    bg: 'BG'
};

function updateLanguageDisplay() {
    const currentLangSpan = document.getElementById('currentLanguage');
    const currentLangSpanMobile = document.getElementById('currentLanguageMobile');
    
    if (currentLangSpan) {
        currentLangSpan.textContent = languageCodes[currentLanguage] || 'CZ';
    }
    if (currentLangSpanMobile) {
        currentLangSpanMobile.textContent = languageCodes[currentLanguage] || 'CZ';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update active state in dropdown
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        if (option.getAttribute('data-lang') === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

function translateElement(element) {
    const key = element.getAttribute('data-i18n');
    if (key && translations[currentLanguage] && translations[currentLanguage][key]) {
        let translation = translations[currentLanguage][key];
        
        // Replace {YEAR} placeholder with current year for copyright
        if (key === 'footer.copyright') {
            const currentYear = new Date().getFullYear();
            translation = translation.replace('{YEAR}', currentYear);
        }
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            // Handle copyright element with year span separately
            if (key === 'footer.copyright' && element.querySelector('#copyrightYear')) {
                const currentYear = new Date().getFullYear();
                const yearSpan = element.querySelector('#copyrightYear');
                if (yearSpan) {
                    yearSpan.textContent = currentYear;
                    // Replace the copyright text while keeping the year span
                    const textParts = translation.split('{YEAR}');
                    if (textParts.length === 2) {
                        element.innerHTML = textParts[0] + '<span id="copyrightYear">' + currentYear + '</span>' + textParts[1];
                    } else {
                        element.textContent = translation;
                    }
                } else {
                    element.textContent = translation;
                }
            } else {
                element.textContent = translation;
            }
        }
    }
    
    // Handle aria-label translations
    const ariaLabelKey = element.getAttribute('data-i18n-aria-label');
    if (ariaLabelKey && translations[currentLanguage] && translations[currentLanguage][ariaLabelKey]) {
        element.setAttribute('aria-label', translations[currentLanguage][ariaLabelKey]);
    }
}

function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(translateElement);
    updateLanguageDisplay();
    
    // Update copyright year when language changes
    updateCopyrightYear();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && translations[currentLanguage] && translations[currentLanguage]['meta.description']) {
        metaDescription.content = translations[currentLanguage]['meta.description'];
    }
}

// Update copyright year automatically
function updateCopyrightYear() {
    const copyrightYearElement = document.getElementById('copyrightYear');
    if (copyrightYearElement) {
        const currentYear = new Date().getFullYear();
        copyrightYearElement.textContent = currentYear;
    }
}

// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year on page load
    updateCopyrightYear();
    
    const languageSwitcherBtn = document.getElementById('languageSwitcherBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageSwitcherBtnMobile = document.getElementById('languageSwitcherBtnMobile');
    const languageDropdownMobile = document.getElementById('languageDropdownMobile');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // Load language - prioritize domain-based detection
    const domainLanguage = detectLanguageFromDomain();
    if (domainLanguage) {
        currentLanguage = domainLanguage;
        // Save domain-based language to localStorage for consistency
        localStorage.setItem('language', currentLanguage);
    } else {
        // Use saved language from localStorage or default
        currentLanguage = localStorage.getItem('language') || 'cs';
    }
    translatePage();
    
    // Function to setup language switcher
    function setupLanguageSwitcher(btn, dropdown) {
        if (!btn || !dropdown) return;
        
        // Toggle dropdown
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Close other dropdowns
            document.querySelectorAll('.language-switcher-dropdown').forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });
            dropdown.classList.toggle('active');
        });
    }
    
    // Setup desktop switcher
    setupLanguageSwitcher(languageSwitcherBtn, languageDropdown);
    
    // Setup mobile switcher
    setupLanguageSwitcher(languageSwitcherBtnMobile, languageDropdownMobile);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const isInsideSwitcher = e.target.closest('.language-switcher');
        if (!isInsideSwitcher) {
            document.querySelectorAll('.language-switcher-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Change language
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const newLang = option.getAttribute('data-lang');
            if (newLang !== currentLanguage) {
                currentLanguage = newLang;
                localStorage.setItem('language', currentLanguage);
                translatePage();
                // Close all dropdowns
                document.querySelectorAll('.language-switcher-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    });
});
