export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  logo: string;
  color: 'yellow' | 'green' | 'blue' | 'red';
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 'splunk',
    title: 'Software Engineer',
    company: 'Splunk',
    companyUrl: 'https://www.splunk.com/',
    location: 'San Francisco, CA',
    startDate: 'May 2025',
    endDate: 'August 2025',
    logo: '/assets/company-logos/SplunkLogo.png',
    color: 'yellow',
    achievements: [
      'Designed and integrated internal **REST APIs** and UI workflows in the Splunk Security Platform, streamlining operational tasks and reducing incident investigation time by **up to 30x**.',
      'Enhanced ML model execution service to support parameter overrides, cutting configuration deployment from **4–5 hours to minutes** and unlocking new reprocessing capabilities.',
      'Awarded **Most Impactful Intern Project** in Security Org for the term\'s top operational efficiency gains.'
    ]
  },
  {
    id: 'onsemi',
    title: 'Software Engineer',
    company: 'Onsemi',
    companyUrl: 'https://www.onsemi.com/',
    location: 'Waterloo, ON',
    startDate: 'September 2024',
    endDate: 'December 2024',
    logo: '/assets/company-logos/OnsemiLogo.png',
    color: 'green',
    achievements: [
      'Designed and implemented new features for the user interfaces of **5+** Onsemi semiconductor chips using the **QT framework** and **C++**, enhancing user experience and functionality.',
      'Migrated key processing core software from **Python 2 to Python 3**, ensuring compatibility with modern frameworks and libraries and improving performance by **approximately 20%**.',
      'Developed a language compiler using **ANTLR4**, enabling the generation of core microcode configuration files.'
    ]
  },
  {
    id: 'siemens',
    title: 'Software Engineer Co-op',
    company: 'Siemens',
    companyUrl: 'https://www.siemens.com/global/en/products/automation/industrial-communication/ruggedcom.html',
    location: 'Concord, ON',
    startDate: 'January 2024',
    endDate: 'April 2024',
    logo: '/assets/company-logos/SiemensLogo.png',
    color: 'blue',
    achievements: [
      'Developed and maintained a **C# Windows Presentation Foundation** receiving floor display application, facilitating real-time tracking and movement of parts and enhancing operational efficiency. Integrated seamlessly with **SQL** database for data management and retrieval.',
      'Improved existing certification software by adding more efficient search/filter functions, allowing floor managers to search for and grant certifications for over **180 operators**.',
      'Built a **Windows Form application** to streamline the assembly process of PCBAs, enhancing operator efficiency and accuracy across **11 product lines**.'
    ]
  },
  {
    id: 'ibc',
    title: 'Technology Intern',
    company: 'Insurance Bureau of Canada',
    companyUrl: 'https://www.ibc.ca/',
    location: 'Toronto, ON',
    startDate: 'May 2023',
    endDate: 'August 2023',
    logo: '/assets/company-logos/IBCLogo.png',
    color: 'red',
    achievements: [
      'Planned and executed **software unit testing** for multiple projects, ensuring adherence to quality standards.',
      'Created automated test scripts for manual test cases using **Selenium** and **Katalon Studio**, successfully boosting efficiency and reducing overall testing times by **over 95% (20x faster than manual testing)**.'
    ]
  }
];
