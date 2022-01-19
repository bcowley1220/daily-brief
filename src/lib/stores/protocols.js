import { writable } from "svelte/store";

const protocols = [
    {
        url: `https://aapsonline.org/mccullough-protocol-3-page.pdf`,
        title: `McCullough Protocol`,
        tags: ['mccullough', 'protocol'],
        important: false
    },
    {
        url: `https://covid19.onedaymd.com/2021/11/dr-peter-mccullough-early-treatment.html`,
        title: `McCullough Early Treatment Protocol`,
        tags: ['protocol', ],
        important: false
    },
    {
        url: `https://covid19criticalcare.com/covid-19-protocols/i-mask-plus-protocol/`,
        title: `I-MASK+ Prevention & Early Outpatient Treatment Protocol for COVID-19`,
        tags: ['protocol', ],
        important: false
    },
    {
        url: `https://covid19criticalcare.com/covid-19-protocols/math-plus-protocol/`,
        title: `MATH+ Hospital Treatment Protocol for COVID-19`,
        tags: ['protocol', ],
        important: false
    },
    {
        url: `https://covid19criticalcare.com/covid-19-protocols/i-recover-protocol/`,
        title: `I-RECOVER Management Protocol for Long Haul COVID-19 Syndrome (LHCS)`,
        tags: ['protocol', ],
        important: false
    },
    {
        url: `https://covid19criticalcare.com/wp-content/uploads/2020/12/FLCCC-Protocols-%E2%80%93-A-Guide-to-the-Management-of-COVID-19.pdf`,
        title: `Overview of the MATH+, I-MASK+ and I-RECOVER Protocols `,
        tags: ['protocol', ],
        important: false
    },
    {
        url: `https://vladimirzelenkomd.com/treatment-protocol/`,
        title: `Zelenko Protocol`,
        tags: ['protocol', ],
        important: false
    },
    {
        url: `https://covid19.onedaymd.com/2021/12/dr-peter-mccullough-povidone-iodine.html`,
        title: `Dr Peter McCullough: Povidone Iodine, Oral and Nasal Hygiene (January 2022)`,
        tags: ['protocol', ],
        important: false
    },
    // {
    //     url: ``,
    //     title: ``,
    //     tags: ['protocol', ],
    //     important: false
    // },
    // {
    //     url: ``,
    //     title: ``,
    //     tags: ['protocol', ],
    //     important: false
    // },
]

export const protocolList = writable(protocols)
