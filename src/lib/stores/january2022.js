import { writable } from "svelte/store";

const days = {
    fourteenToSeventeen: {
        date: '1/14/22-1/17/22',
        stories: [
        {
            url: "https://www.bbc.com/news/uk-politics-59984380",
            title: "MI5 warning over 'Chinese agent' in Parliament",
            tags: ['china'],
            important: false
        },
        {
            url: "https://www.washingtonexaminer.com/policy/omicron-is-inherently-far-milder-massive-cdc-backed-study-finds",
            title: "Omicron is inherently far milder, massive CDC-backed study finds",
            tags: ['covid'],
            important: false
        },
        {
            url: "https://www.zerohedge.com/geopolitical/us-embassy-baghdad-under-attack-counter-weapons-used-intercept-suicide-drones-reports",
            title: "US Embassy In Baghdad Under Attack, Defense System Activated: Reports",
            tags: ['terrorism', 'aq','isis'],
            important: false
        },
        {
            url: "https://www.theepochtimes.com/jpmorgan-chase-ceo-warns-new-york-unvaccinated-employees-wont-get-paid-risk-losing-jobs_4205182.html?utm_source=partner&utm_campaign=BonginoReport",
            title: "JPMorgan Chase CEO Warns New York Unvaccinated Employees Won’t Get Paid, Risk Losing Jobs",
            tags: ["reset", "bank", "covid"],
            important: false
        },
        {
            url: "https://www.theepochtimes.com/paypal-plans-launch-of-its-us-dollar-backed-cryptocurrency_4204010.html?utm_source=partner&utm_campaign=BonginoReport",
            title: "PayPal Plans Launch of Its US Dollar Backed Cryptocurrency",
            tags: ['reset', 'crypto'],
            important: false
        },
        {
            url: "https://www.foodprocessing.com/industrynews/2022/china-accused-of-hoarding-grain/",
            title: "China Accused of ‘Hoarding’ Grain",
            tags: ['china', 'reset', 'food'],
            important: true
        },
        {
            url: "https://townhall.com/tipsheet/katiepavlich/2022/01/12/billions-in-pandemic-relief-for-americans-was-rerouted-to-bidens-border-crisis-n2601741",
            title: "Billions in Pandemic Relief for Americans Was Rerouted to Biden’s Border Crisis",
            tags: ['biden', 'border', 'reset'],
            important: false
        },
        {
            url: "https://www.msn.com/en-us/news/technology/surveillance-will-follow-us-into-e2-80-98the-metaverse-e2-80-99-and-our-bodies-could-be-its-new-data-source/ar-AASJWht",
            title: "Surveillance will follow us into ‘the metaverse,’ and our bodies could be its new data source",
            tags: ['big brother', 'reset'],
            important: false
        },
        {
            url: "https://jamanetwork.com/journals/jama/fullarticle/2649074",
            title: "The Nuremberg Code 70 Years Later",
            tags: ['reset', 'covid'],
            important: true
        },
        {
            url: "https://www.covid19treatmentguidelines.nih.gov/therapies/immunomodulators/fluvoxamine/",
            title: "Fluvoxamine",
            tags: ['covid', 'protocol', 'therapy',],
            important: false
        },
        {
            url: "https://www.onedaymd.com/2021/04/dr-richard-bartlett-inhaled-budesonide.html",
            title: "Dr Richard Bartlett Inhaled Budesonide Protocol for COVID-19 (2022)",
            tags: ['covid', 'protocol', 'therapy'],
            important: false
        },
        {
            url: "https://bigleaguepolitics.com/breaking-bank-cancels-mike-lindell-and-his-charities/",
            title: "Bank Cancels Mike Lindell and His Charities",
            tags: ['cancel culture', 'bank'],
            important: false
        },
        {
            url: "https://jamanetwork.com/journals/jama/fullarticle/2787944",
            title: "A National Strategy for the “New Normal” of Life With COVID",
            tags: ['covid', 'jama'],
            important: false
        },
        {
            url: "https://www.reuters.com/world/europe/exclusive-ukraine-suspects-group-linked-belarus-intelligence-over-cyberattack-2022-01-15/",
            title: "EXCLUSIVE Ukraine suspects group linked to Belarus intelligence over cyberattack",
            tags: ['ukraine', 'russia'],
            important: true
        },
        {
            url: "https://www.breitbart.com/politics/2021/03/29/report-democrats-used-filibuster-327-times-while-republicans-used-it-once-in-2020/",
            title: "Report: Democrats Used Filibuster 327 Times While Republicans Used It Once in 2020",
            tags: ['politics', 'filibuster'],
            important: false
        },
        {
            url: "https://news.yahoo.com/powell-says-climate-stress-tests-164933576.html",
            title: "Powell says climate stress tests will 'very likely' be a 'key tool going forward'",
            tags: ['reset', 'bank'],
            important: true
        },
        {
            url: "https://theworldnews.net/gb-news/covid-scotland-case-rates-lowest-in-unvaccinated-as-double-jabbed-elderly-drive-rise-in-hospital-admissions",
            title: "Covid Scotland: Case rates lowest in unvaccinated as double-jabbed elderly drive rise in hospital admissions",
            tags: ['covid', 'vaccine'],
            important: false
        },
        {
            url: "https://www.americanpartisan.org/2021/10/wyoming-survival-meshtastic-mesh-network/",
            title: "Meshtastic Mesh Network Part",
            tags: ['radio', 'mesh network'],
            important: false
        },
        {
            url: "https://www.americanpartisan.org/2021/12/wyoming-survival-meshtastic-mesh-network-part-2/",
            title: "Meshtastic Mesh Network Part 2",
            tags: ['radio', 'mesh network'],
            important: false
        },
        {
            url: "https://www.youtube.com/watch?v=mb2OBIw-1Oc",
            title: "How to Use ATAK with Meshtastic",
            tags: ['radio', 'mesh network', 'atak'],
            important: false
        },
        {
            url: "https://www.washingtontimes.com/news/2022/jan/12/marine-researcher-covid-19-virus-made-chinese-lab-/",
            title: "COVID virus made in Chinese lab as bat vaccine, Marine researcher says",
            tags: ['covid', 'leak'],
            important: false
        },
        {
            url: "https://www.cnbc.com/2022/01/16/walmart-is-quietly-preparing-to-enter-the-metaverse.html",
            title: "Walmart is quietly preparing to enter the metaverse",
            tags: ['reset', 'metaverse'],
            important: false
        },
        {
            url: "https://apnews.com/article/business-europe-denmark-sweden-baltic-sea-2605c0d837b2a4b5ba43e89763841afc",
            title: "Sweden’s spy agency probes drones over 3 nuclear plants",
            tags: [],
            important: true
        },
        {
            url: "https://orwell2024.substack.com/p/age-adjusted-all-cause-mortality",
            title: "Age adjusted all cause mortality trends 2000-2021 in Europe",
            tags: ['covid', 'jab'],
            important: false
        },
        {
            url: "https://ourworldindata.org/excess-mortality-covid",
            title: "Excess mortality during the Coronavirus pandemic (COVID-19)",
            tags: ['covid',],
            important: false
        },
        {
            url: "https://doctors4covidethics.org/landmark-study-all-cause-mortality-in-the-usa-what-does-it-tell-us-about-the-covid-pandemic/",
            title: "Landmark study: all-cause mortality in the USA – what does it tell us about the COVID “pandemic?”",
            tags: ['covid'],
            important: false
        },
        {
            url: "https://asia.nikkei.com/Spotlight/Supply-Chain/China-COVID-crackdown-closes-several-factories-in-industrial-hub",
            title: "China COVID crackdown closes several factories in industrial hub",
            tags: ['covid'],
            important: false
        },
        {
            url: "https://www.zerohedge.com/geopolitical/us-embassy-baghdad-under-attack-counter-weapons-used-intercept-suicide-drones-reports",
            title: "US Embassy In Baghdad Attacked By Terrorist In Rocket Barrage",
            tags: ['terrorism',],
            important: false
        },
        {
            url: "https://www.zerohedge.com/economics/how-central-planners-corrupted-world",
            title: "How Central Planners Corrupted The World",
            tags: ['reset'],
            important: false
        },
        {
            url: "https://www.nytimes.com/2022/01/14/health/cloth-masks-covid-cdc.html?smid=tw-nytimes&smtyp=cur",
            title: "The C.D.C. concedes that cloth masks do not protect against the virus as effectively as other masks.",
            tags: ['covid', 'cdc'],
            important: false
        },
        {
            url: "https://www.hhs.gov/sites/default/files/covid-19-faqs-hospitals-hospital-laboratory-acute-care-facility-data-reporting.pdf",
            title: "COVID-19 Guidance for Hospital Reporting and FAQs For Hospitals, Hospital Laboratory, and Acute Care Facility Data Reporting",
            tags: ['covid'],
            important: false
        },
        {
            url: "https://www.marshall.senate.gov/newsroom/press-releases/breaking-sen-marshall-proves-fauci-lied-by-obtaining-previously-unpublished-financial-records/",
            title: "SEN. MARSHALL PROVES FAUCI LIED BY OBTAINING PREVIOUSLY UNPUBLISHED FINANCIAL RECORDS",
            tags: ['fauci', 'leak'],
            important: false
        },
        {
            url: "https://www.marshall.senate.gov/wp-content/uploads/Anthony-Fauci-Financial-Disclosures-for-2020-and-2019.pdf",
            title: "Fauci Financial Disclosure Docs",
            tags: ['fauci'],
            important: false
        },
        {
            url: "https://www.govinfo.gov/content/pkg/FR-2021-12-13/pdf/2021-27114.pdf",
            title: "Catalyzing Clean Energy Industries and Jobs Through Federal Sustainability",
            tags: ['reset'],
            important: false
        },
        {
            url: "https://www.federalregister.gov/documents/2021/09/22/2021-20629/adding-measles-to-the-list-of-quarantinable-communicable-diseases",
            title: "Adding Measles to the List of Quarantinable Communicable Diseases",
            tags: ['reset', 'measles'],
            important: false
        },
        {
            url: "https://www.psa.gov/",
            title: "PRETRIAL SERVICES AGENCY for the DISTRICT of COLUMBIA, A Federal agency dedicated to promoting pretrial justice and, enhancing community safety in District of Columbia",
            tags: ['reset'],
            important: false
        },
        {
            url: "https://www.crainsdetroit.com/people/biden-taps-former-michigan-health-director-robert-gordon-federal-post",
            title: "Biden taps former Michigan health director Robert Gordon for federal post",
            tags: ['michigan'],
            important: false
        },
    ]},
    eighteenToNineteen: {
        date: '1/18/22-1/19/22',
        stories: [
        {
            url: "https://www.zerohedge.com/markets/blackrocks-fink-insists-stakeholder-capitalism-isnt-woke-its-just-good-business",
            title: `BlackRock's Fink Insists "Stakeholder Capitalism" Isn't "Woke" - It's Just Good Business`,
            tags: ['reset'],
            important: true
        },
        {
            url: "https://www.zerohedge.com/markets/chinas-property-sector-crashing-again-and-time-it-has-reached-countrys-biggest-developer",
            title: "China's Property Sector Is Crashing Again And This Time It Has Reached The Country's Biggest Developer",
            tags: ['finance', 'reset'],
            important: false
        },
        {
            url: "https://www.zerohedge.com/covid-19/dr-peter-mccullough-official-covid-narrative-has-crumbled",
            title: `Dr. Peter McCullough: Official COVID "Narrative Has Crumbled"`,
            tags: ['covid'],
            important: true
        },
        {
            url: `https://www.zerohedge.com/commodities/china-coal-production-hits-record-avoid-energy-crisis`,
            title: `China Coal Production Hits Record To Avoid Energy Crisis`,
            tags: ['reset', 'energy'],
            important: false
        },
        {
            url: `https://www.zerohedge.com/personal-finance/make-preparations-canadian-vaxx-mandate-cross-border-trucking-now-effect-domestic`,
            title: `Make Preparations! Canadian Cross Border Trucking Vaxx Mandate Now In Effect, Domestic Trucking Mandate Starts Next Week`,
            tags: ['covid', 'reset'],
            important: false
        },
        {
            url: `https://www.foxbusiness.com/politics/rand-paul-report-rising-inflation`,
            title: `Rand Paul releases report on rising inflation: 'It's only going to get worse'`,
            tags: ['inflation', 'reset'],
            important: false
        },
        {
            url: `https://justthenews.com/nation/states/defense-requests-immunity-fbi-agents-informants-whitmer-kidnapping-plot`,
            title: `Defense requests immunity for FBI agents, informants in Whitmer kidnapping plot`,
            tags: ['whitmer', 'fbi'],
            important: false
        },
        {
            url: `https://apnews.com/article/coronavirus-pandemic-health-kansas-public-health-c06b1a5a74e284cf6fd26527728818fd`,
            title: `Kansas will stop ‘futile’ COVID-19 contact tracing`,
            tags: ['kansas', 'covid'],
            important: false
        },
        {
            url: `https://dnyuz.com/2022/01/19/its-all-just-wild-tech-start-ups-reach-a-new-peak-of-froth/`,
            title: `‘It’s All Just Wild’: Tech Start-Ups Reach a New Peak of Froth`,
            tags: ['tech', 'start up'],
            important: false
        },
        {
            url: `https://www.studyfinds.org/mass-extinction-already-underway/`,
            title: `Another mass extinction on Earth is already underway, study warns`,
            tags: ['reset'],
            important: false
        },
        {
            url: `https://www.villagevoice.com/1999/10/26/the-scary-days-when-thousands-were-lobotomized-on-long-island/`,
            title: `The scary days when thousands were lobotomized on Long Island`,
            tags: ['medical'],
            important: false
        },
        {
            url: `https://www.stltoday.com/news/national/govt-and-politics/oil-flow-resumes-at-iraq-turkey-pipeline-following-blast/article_f72c55a0-05f6-5e28-8ae6-c09fa841254d.html`,
            title: `Oil flow resumes at Iraq-Turkey pipeline following blast`,
            tags: ['oil', 'global'],
            important: false
        },
        {
            url: `https://abc13.com/dr-joseph-varon-covid-treatments-houston-hospital-ivermectin/11485872/`,
            title: `COVID patients are crossing state and international lines to get treatment from this Houston doctor`,
            tags: ['covid'],
            important: true
        },
        {
            url: `https://www.politico.com/news/2022/01/19/kevin-mccarthy-tech-silicon-valley-527292`,
            title: `McCarthy’s love-hate relationship with Silicon Valley`,
            tags: ['politics', 'swamp'],
            important: false
        },
        {
            url: `https://borgenproject.org/water-pollution-in-china/`,
            title: `WATER POLLUTION IN CHINA IS THE COUNTRY’S WORST ENVIRONMENTAL ISSUE`,
            tags: ['china', ],
            important: true
        },
        {
            url: `https://www.tomshardware.com/news/intel-to-unveil-bitcoin-mining-bonanza-mine-asic-at-chip-conference`,
            title: `Intel To Unveil Bitcoin-mining 'Bonanza Mine' Chip at Upcoming Conference (Updated)`,
            tags: ['tech', 'crypto'],
            important: true
        },
        {
            url: `https://www.zerohedge.com/geopolitical/people-who-played-call-duty-real-life-are-getting-worried`,
            title: `The People Who Played "Call Of Duty" In Real Life Are Getting Worried`,
            tags: ['russia', 'ukraine'],
            important: false
        },
        {
            url: `https://www.nationalreview.com/the-morning-jolt/the-administration-knew-the-afghan-air-force-would-collapse-after-a-u-s-withdrawal/`,
            title: `The Administration Knew the Afghan Air Force Would Collapse after a U.S. Withdrawal`,
            tags: ['afganistan'],
            important: false
        },
        {
            url: `https://unherd.com/thepost/israeli-vaccine-chief-we-have-made-mistakes/`,
            title: `Israeli vaccine chief: “We have made mistakes”`,
            tags: ['israel', 'vaccine'],
            important: true
        },
        {
            url: `https://ca.news.yahoo.com/only-china-virus-outbreak-shale-084115815.html`,
            title: `Traders Bet That Oil at $100 Is a Question of When, Not If`,
            tags: ['oil',],
            important: false
        },
        {
            url: `https://finance.yahoo.com/news/facebook-working-mysterious-authentic-robot-165815802.html`,
            title: `Facebook working on mysterious ‘authentic’ robot eyeball that could track where humans are looking`,
            tags: ['facebook', 'reset'],
            important: false
        },
        {
            url: `https://www.dailywire.com/news/watchdog-fauci-has-handsomely-profited-during-pandemic`,
            title: `Watchdog: ‘Fauci Has Handsomely Profited’ During Pandemic`,
            tags: ['covid', 'fauci'],
            important: false
        },
        {
            url: `https://thenationalpulse.com/2022/01/18/new-video-analysis-ashli-babbitt-chatted-with-capitol-officers-and-attempt-to-calm-protesters-before-being-executed/`,
            title: `New Video Analysis: Ashli Babbitt Chatted With Capitol Officers and Attempt to Calm Protesters Before Being Executed.`,
            tags: ['jan 6th', 'fbi'],
            important: true
        },
        {
            url: `https://www.theblaze.com/news/hawaii-may-require-all-travelers-to-have-covid-booster-in-order-to-be-fully-vaccinated`,
            title: `Hawaii may require all travelers to have COVID booster in order to be 'fully vaccinated' and skip quarantine`,
            tags: ['covid'],
            important: false
        },
        {
            url: `https://www.breitbart.com/economy/2022/01/18/exclusive-un-funds-migrant-wave-to-the-u-s/`,
            title: `Exclusive: UN Funds Migrant Wave Flooding to the U.S.`,
            tags: ['reset', ],
            important: false
        },
        {
            url: `https://www.creators.com/read/oliver-north/01/22/how-the-left-uses-fear-to-control-your-life`,
            title: `How the Left Uses Fear to Control Your Life`,
            tags: ['reset'],
            important: false
        },
        {
            url: `https://www.creators.com/read/ben-shapiro/01/22/the-quest-to-destroy-work`,
            title: `The Quest to Destroy Work`,
            tags: ['reset'],
            important: false
        },
        {
            url: `https://www.theverge.com/2022/1/18/22889903/democrats-targeted-advertising-facebook-google-surveillance?scrolla=5eb6d68b7fedc32c19ef33b4`,
            title: `Democrats unveil bill to ban online ‘surveillance advertising’`,
            tags: ['surveillance'],
            important: false
        },
        {
            url: `https://techcrunch.com/2022/01/19/israeli-fintech-personetics-raises-85m-for-tools-to-help-incumbents-personalize-banking-services-to-compete-with-neobanks/`,
            title: `Israeli fintech Personetics raises $85M for tools to help incumbents personalize banking services to compete with neobanks`,
            tags: ['bank'],
            important: false
        },
        {
            url: `https://www.cnbc.com/2022/01/19/china-smartphone-shipments-jump-in-2021-but-below-pre-pandemic-level.html`,
            title: `Chip shortage and Covid weigh on China’s smartphone market even as it bounced back from pandemic lows`,
            tags: ['covid', 'china', ],
            important: false
        },
        {
            url: `https://techcrunch.com/2022/01/19/ambient-ai-security-without-facial-recognition/`,
            title: `Ambient.ai aims to provide AI-powered building security, minus bias and privacy pitfalls`,
            tags: ['ai', 'surveillance'],
            important: false
        },
        {
            url: `https://brownstone.org/articles/a-partial-list-of-the-myriad-abuses-that-facemasks-inflict-on-our-children/`,
            title: `A Partial List of the Myriad Abuses That Facemasks Inflict on Our Children`,
            tags: ['covid'],
            important: true
        },
        {
            url: `https://brownstone.org/articles/mandates-are-about-political-control-not-health/`,
            title: `Mandates Are About Political Control, Not Health`,
            tags: ['covid'],
            important: false
        },
        {
            url: `https://brownstone.org/articles/five-ways-that-people-refused-to-be-fooled-by-lockdown-madness/`,
            title: `Five Ways That People Refused to be Fooled by Lockdown Madness`,
            tags: ['covid'],
            important: false
        },
        {
            url: `https://brownstone.org/articles/the-shortage-of-health-care-workers-has-a-cause/`,
            title: `The Shortage of Health Care Workers Has a Cause`,
            tags: ['covid'],
            important: false
        },
        {
            url: `https://brownstone.org/articles/what-might-have-been-calm-protection-and-care/`,
            title: `What Might Have Been: Calm, Protection, and Care`,
            tags: ['covid'],
            important: false
        },
        {
            url: `https://safeguarddefenders.com/en/blog/involuntary-returns-report-exposes-long-arm-policing-overseas`,
            title: `Involuntary Returns – report exposes long-arm policing overseas (China's Sky Net)`,
            tags: ['china'],
            important: true
        },
        {
            url: `https://trialsitenews.com/medicare-private-insurance-pays-out-130m-for-ivermectin-covid-19-prescriptions-in-2021/`,
            title: `Medicare & Private Insurance Pay out $130m for Ivermectin COVID-19 Prescriptions in 2021`,
            tags: ['covid'],
            important: false
        },
        {
            url: `https://rumble.com/vsc1su-dr.-peter-mccullough-reveals-the-six-things-everyone-should-have-in-their-o.html`,
            title: `Dr. Peter McCullough Reveals the Six Things Everyone Should Have in Their 'Over-the-Counter Toolbox'`,
            tags: ['covid', ' protocol'],
            important: true
        },
        {
            url: `https://www.foxnews.com/opinion/5-kids-shot-chicago-pastor-brooks`,
            title: `5 kids shot in Chicago — Pastor Brooks asks where is BLM, NAACP?`,
            tags: ['race', 'blm',],
            important: false
        },
        {
            url: `https://finance.yahoo.com/news/google-hires-paypal-vet-reset-170000018.html`,
            title: `Google Hires PayPal Vet to Reset Strategy After Its Banking Retreat`,
            tags: ['google', 'reset'],
            important: false
        },
        {
            url: `https://cryptopotato.com/google-considers-allowing-users-to-store-crypto-in-digital-cards-report/`,
            title: `Google Considers Allowing Users to Store Crypto in Digital Cards (Report)`,
            tags: ['google', 'reset'],
            important: false
        },
        {
            url: `https://dailycaller.com/2022/01/19/malik-faisal-akram-jewish-synagogue-hostage-mosque/`,
            title: `Synagogue Hostage Taker Was Kicked Out Of Mosque Days Earlier For Erratic Behavior, Had Been On UK Watchlist`,
            tags: ['terrorism', 'fbi'],
            important: false
        },
        {
            url: `https://dailycaller.com/2022/01/18/exclusive-arrest-warrants-count-as-id-for-migrants-at-airport-security-tsa-says/`,
            title: `EXCLUSIVE: Arrest Warrants Count As ID For Illegal Migrants At Airport Security, TSA Says`,
            tags: ['illegals', 'tsa'],
            important: false
        },
        {
            url: `https://www.cnbc.com/2022/01/18/mortgage-rates-jump-again-causing-headaches-for-homebuyers.html`,
            title: `Mortgage rates jump again, causing headaches for homebuyers`,
            tags: ['morgate',],
            important: false
        },
        {
            url: `https://thenationalpulse.com/2022/01/18/debate-commission-co-chair-participated-in-ccp-meetings/`,
            title: `EXC: Presidential Debate Commission Chief Held ‘Off-The-Record’ Meetings With Chinese Communist Propagandists, And Xi Jinping.`,
            tags: ['china', 'elections'],
            important: false
        },
        {
            url: `https://nypost.com/2022/01/19/meta-wants-to-track-peoples-facial-expressions-in-metaverse/`,
            title: `Meta wants to track people’s facial expressions in metaverse`,
            tags: ['meta', 'surveillance'],
            important: false
        },
        {
            url: `https://www.newsweek.com/starbucks-which-employs-228k-us-reverses-covid-vaccine-mandate-after-scotus-ruling-1670855`,
            title: `Starbucks, Which Employs 228K in U.S., Reverses COVID Vaccine Mandate After SCOTUS Ruling`,
            tags: ['mandate', 'covid'],
            important: false
        },
        {
            url: `https://justthenews.com/government/white-house/white-house-says-it-will-make-400-million-n95-masks-available-americans-free`,
            title: `White House says it will make 400 million N95 masks available to Americans for free`,
            tags: ['covid'],
            important: false
        },
        {
            url: `https://www.wsj.com/articles/boom-times-for-washington-congressional-budget-office-tax-revenue-treasury-11642451598`,
            title: `Washington Cashes In on Inflation`,
            tags: ['inflation', 'reset'],
            important: false
        },
        {
            url: `https://www.wsj.com/articles/biden-to-expand-national-security-agency-role-in-government-cybersecurity-11642604412?mod=djemalertNEWS`,
            title: `Biden to Expand National Security Agency Role in Government Cybersecurity`,
            tags: ['reset', 'surveillance'],
            important: false
        },
        {
            url: `https://pierrekory.substack.com/p/how-i-lost-three-icu-jobs-during?r=iutjw&utm_campaign=post&utm_medium=web`,
            title: `How I Lost Three ICU Jobs During the COVID-19 Pandemic - Job 1`,
            tags: ['covid'],
            important: false
        },
        // {
        //     url: ``,
        //     title: ``,
        //     tags: [],
        //     important: false
        // },

    ]
    }
}

// dayNumber: [
//     {
//         url: "", string
//         title: "", string
//         tags: "", string
            // important: false, boolean
//     }
// ] 

export const janDays = writable(days)
