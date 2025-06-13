// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications-preprints",
          title: "publications/preprints",
          description: "All publications sorted by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "An extended collection of my past projects outside research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/flowcv.com/resume/ha647kpnqf";
          },
        },{id: "nav-academics",
          title: "academics",
          description: "teaching experience &amp; graduate coursework",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academics/";
          },
        },{id: "post-the-story-behind-farmplus",
        
          title: "The story behind FarmPlus",
        
        description: "and how an evening chai session with the boys can turn ideas into startups",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2025/06/01/farmplusstory.html";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-our-team-farmplus-won-1st-place-at-the-johns-hopkins-new-venture-challenge-hopstart-2022-in-the-general-ventures-category-champagne",
          title: 'Our team, FarmPlus won 1st place at the Johns Hopkins New Venture Challenge...',
          description: "",
          section: "News",},{id: "news-started-my-internship-at-regeneron-pharmaceuticals-ny-as-a-data-science-intern-in-the-early-clinical-development-and-experimental-sciences-division-x-ray",
          title: 'Started my internship at Regeneron Pharmaceuticals, NY as a Data Science Intern in...',
          description: "",
          section: "News",},{id: "news-graduated-with-my-master-s-in-biomedical-engineering-from-jhu-blue-heart-tada-champagne",
          title: 'Graduated with my master’s in Biomedical Engineering from JHU :blue_heart: :tada: :champagne:',
          description: "",
          section: "News",},{id: "news-our-fl-paper-won-the-best-poster-award-at-the-data-curation-and-augmentation-in-medical-imaging-workshop-at-cvpr-2024-a-very-special-thanks-to-flower-labs-for-letting-me-use-their-servers-to-host-our-live-demo-bowing-man",
          title: 'Our FL paper won the Best Poster Award at the Data Curation and...',
          description: "",
          section: "News",},{id: "news-our-clinical-paper-on-predicting-brain-structure-and-cognition-using-upper-airway-volume-in-children-got-accepted-to-the-american-journal-of-respiratory-and-critical-care-medicine-champagne",
          title: 'Our clinical paper on predicting brain structure and cognition using upper airway volume...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6B%61%6E%68%65%72%31@%6A%68%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/adwaykanhere", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/adwaykanhere", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=PdzDPVgAAAAJ&hl=en", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/AdwayKanhere", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
