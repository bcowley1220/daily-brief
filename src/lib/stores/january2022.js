import { writable } from "svelte/store";

const days = {
    fourteenToSeventeen: 
    [
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
        // {
        //     url: "",
        //     title: "",
        //     tags: [],
        //     important: false
        // },
        // {
        //     url: "",
        //     title: "",
        //     tags: [],
        //     important: false
        // },
        // {
        //     url: "",
        //     title: "",
        //     tags: [],
        //     important: false
        // },
        // {
        //     url: "",
        //     title: "",
        //     tags: [],
        //     important: false
        // },


    ] 
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
