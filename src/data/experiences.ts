export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  logo: string;
  color: 'yellow' | 'green' | 'blue' | 'red' | 'purple';
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 'rundoo',
    title: 'Software Engineer Intern',
    company: 'Rundoo',
    companyUrl: 'https://www.rundoo.com/',
    location: 'Redwood City, USA',
    startDate: 'January 2026',
    endDate: 'April 2026',
    logo: '/assets/company-logos/RundooLogo.svg',
    color: 'purple',
    achievements: [
      'Built Rundoo&apos;s **first gift card product** across web and mobile point-of-sale apps, including activation, redemption, balance tracking, and **2 default analytics reports**.',
      'Led a **35-PR refactor** of the payments protocol buffer schema across **Go**, **TypeScript**, and **React Native**, staged behind feature flags for zero-downtime rollout and deleting **1,000+ lines** of legacy code.',
      'Built country-aware address validation with Canadian autocomplete, timezone geocoding, and regional tax rates to enable Rundoo&apos;s **first international market**.'
    ]
  },
  {
    id: 'splunk',
    title: 'Software Engineer Intern',
    company: 'Splunk',
    companyUrl: 'https://www.splunk.com/',
    location: 'San Francisco, USA',
    startDate: 'May 2025',
    endDate: 'August 2025',
    logo: '/assets/company-logos/logo-splunk-acc-rgb-w.png',
    color: 'yellow',
    achievements: [
      'Developed scalable **Java Spring Boot** REST APIs and UI workflows for on-call incident response workflows, reducing investigation time by **30x** on average.',
      'Built **Java Spring** microservices for runtime configuration of **AWS** ML pipelines, reducing parameter change deployment time by **99%**.',
      'Built self-service API endpoints for **AWS Glue** job execution, cutting operational time by **93% (30 mins to 2 mins)** and eliminating manual console workflows.',
      'Resolved flaky integration tests by fixing race conditions and enhancing **Mockito**/**JUnit** mocks, reducing CI/CD pipeline runtime by **75% (7 hours to 1-2 hours)**.',
      'Awarded **Most Impactful Intern Project** in Security Org for achieving the term&apos;s top efficiency gains.'
    ]
  },
  {
    id: 'onsemi',
    title: 'Software Engineer Intern',
    company: 'Onsemi',
    companyUrl: 'https://www.onsemi.com/',
    location: 'Waterloo, Canada',
    startDate: 'September 2024',
    endDate: 'December 2024',
    logo: '/assets/company-logos/OnsemiLogo.png',
    color: 'green',
    achievements: [
      'Built a language compiler using **ANTLR4**, reducing compilation time by **30%** and enabling the generation of **50+ core microcode configuration files**.',
      'Developed configuration UIs for **5+ semiconductor products** using the **QT framework** and **C++**, enabling intuitive parameter tuning and real-time performance monitoring for manufacturing operators.',
      'Migrated key processing core software from **Python 2 to Python 3**, ensuring compatibility with modern frameworks and libraries and improving performance by **approximately 20%**.'
    ]
  },
  {
    id: 'siemens',
    title: 'Software Engineer Intern',
    company: 'Siemens',
    companyUrl: 'https://www.siemens.com/global/en/products/automation/industrial-communication/ruggedcom.html',
    location: 'Toronto, Canada',
    startDate: 'January 2024',
    endDate: 'April 2024',
    logo: '/assets/company-logos/SiemensLogo.png',
    color: 'blue',
    achievements: [
      'Developed a **C#** display application with **SQL Server** backend for real-time parts tracking, reducing inventory lookup time by **96%** on average.',
      'Built a **Windows Form application** to streamline PCBA assembly workflows across **11 product lines**, reducing overall assembly errors by **30%**.',
      'Improved existing certification software by adding more efficient search/filter functions, allowing floor managers to search for and grant certifications for over **180 operators**.'
    ]
  },
  {
    id: 'ibc',
    title: 'Software Engineer Intern',
    company: 'Insurance Bureau of Canada',
    companyUrl: 'https://www.ibc.ca/',
    location: 'Toronto, Canada',
    startDate: 'May 2023',
    endDate: 'August 2023',
    logo: '/assets/company-logos/IBCLogo.png',
    color: 'red',
    achievements: [
      'Created automated test scripts for manual test cases using **Selenium** and **Katalon Studio**, boosting efficiency and reducing overall testing times by **over 95% (20x)**.',
      'Planned and executed **software unit testing** for multiple projects, ensuring adherence to quality standards.'
    ]
  }
];
