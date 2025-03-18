export default function contact() {

  // <div id="content">
  const mainContentDiv = document.getElementById("content");

  // <div class="site-container">
  const siteContainerDiv = document.createElement("div");
  siteContainerDiv.classList.add("site-container");
  mainContentDiv.appendChild(siteContainerDiv);

  // <div class="site-content"></div> 
  const siteContentDiv = document.createElement("div");
  siteContentDiv.classList.add("site-content");
  siteContainerDiv.appendChild(siteContentDiv);

  // <main>
  const mainDiv = document.createElement("main");
  siteContentDiv.appendChild(mainDiv);
  
  // <span id="main-content" class="sr-only">
  const mainSpan = document.createElement("span");
  mainSpan.setAttribute("id", "main-content");
  const mainSpanText = "Main content starts here, tab to start navigating";
  mainSpan.classList.add("sr-only");
  mainSpan.appendChild(document.createTextNode(mainSpanText));
  mainDiv.appendChild(mainSpan);

  // First section - <section id="main-title" aria-label="main-title-section" class="content">
  const mainTitleSection = document.createElement("section");
  mainTitleSection.setAttribute("id", "main-title");
  mainTitleSection.setAttribute("aria-label", "main-title-section");
  mainTitleSection.classList.add("content");
  mainDiv.appendChild(mainTitleSection);

  // <div class="section-content"></div>
  const mainTitleSectionDiv = document.createElement("div");
  mainTitleSectionDiv.classList.add("section-content");
  mainTitleSection.appendChild(mainTitleSectionDiv);

  // <div class="main-title container-sm">
  const mainTitleSectionContainer = document.createElement("div");
  mainTitleSectionContainer.classList.add("main-title", "container-sm");
  mainTitleSectionDiv.appendChild(mainTitleSectionContainer);

  // <h1> (Menu)
  const mainTitleH1 = document.createElement("h1");
  const mainTitleText = "Contact Us";
  mainTitleH1.appendChild(document.createTextNode(mainTitleText));
  mainTitleSectionContainer.appendChild(mainTitleH1);

  // <p> - Last element of section
  const mainTitleP = document.createElement("p");
  const mainTitlePText = "919 - 555 - 5555";
  mainTitleP.appendChild(document.createTextNode(mainTitlePText));
  mainTitleSectionContainer.appendChild(mainTitleP);

  // New Section - <section id="hours" aria-label="info-section" class="content">
  const hoursSection = document.createElement("section");
  hoursSection.setAttribute("id", "hours");
  hoursSection.setAttribute("aria-label", "hours-section");
  hoursSection.classList.add("content");
  mainDiv.appendChild(hoursSection);
  
  // <div class="section-content"></div>
  const hoursSectionDiv = document.createElement("div");
  hoursSectionDiv.classList.add("section-content");
  hoursSection.appendChild(hoursSectionDiv);

  // <div class="hours-info container-sm">
  const hoursSectionContainer = document.createElement("div");
  hoursSectionContainer.classList.add("hours-info", "container-sm");
  hoursSectionDiv.appendChild(hoursSectionContainer);

  // <h2> 
  const hoursTitleH2 = document.createElement("h2");
  hoursTitleH2.appendChild(document.createTextNode("Hours"));
  hoursSectionContainer.appendChild(hoursTitleH2);

  // <ul class="hours">
  const hoursList = document.createElement("ul");
  hoursList.classList.add("hours");
  const hours = [
    "Sunday: 10am - 5pm",
    "Monday: 7am - 7pm",
    "Tuesday: 7am - 7pm",
    "Wednesday: 7am - 7pm",
    "Thursday: 7am - 9pm",
    "Friday: 7am - 10pm",
    "Saturday: 8am - 10pm"
  ];
  for (let hour of hours) {
    // each <li>
    const eachDaysHours = document.createElement('li');
    eachDaysHours.appendChild(document.createTextNode(hour));
    hoursList.appendChild(eachDaysHours);
  }
  hoursSectionContainer.appendChild(hoursList);

  // <h2> - line 
  const mainLine2 = document.createElement("hr");
  mainDiv.appendChild(mainLine2);


  // New Section - <section id="location" aria-label="info-section" class="content">
  const locationSection = document.createElement("section");
  locationSection.setAttribute("id", "location");
  locationSection.setAttribute("aria-label", "location-section");
  locationSection.classList.add("content");
  mainDiv.appendChild(locationSection);
  
  // <div class="section-content"></div>
  const locationSectionDiv = document.createElement("div");
  locationSectionDiv.classList.add("section-content");
  locationSection.appendChild(locationSectionDiv);

  // <div class="location-info container-sm">
  const locationSectionContainer = document.createElement("div");
  locationSectionContainer.classList.add("location-info", "container-sm");
  locationSectionDiv.appendChild(locationSectionContainer);

  // <h2> 
  const locationTitleH2 = document.createElement("h2");
  locationTitleH2.appendChild(document.createTextNode("Location"));
  locationSectionContainer.appendChild(locationTitleH2);

  // <p>
  const location = document.createElement("p");
  const locationText = "5 Timed Place, Cary, North Carolina";
  location.appendChild(document.createTextNode(locationText));
  locationSectionContainer.appendChild(location);

  // <p> Last line of section
  const emailP = document.createElement("p");
  const emailStrong = document.createElement("strong");
  emailStrong.appendChild(document.createTextNode("email: "));

  emailP.appendChild(emailStrong);
  
  const emailAddy = "SidneysJollofBar@FakeEmail.com";
  emailP.appendChild(document.createTextNode(emailAddy));

  locationSectionContainer.appendChild(emailP);
}