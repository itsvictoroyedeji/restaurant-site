export default function main() {

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

  // <section id="main-title" aria-label="main-title-section" class="content">
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

  // <h1> - Last element of section
  const mainTitleH1 = document.createElement("h1");
  const mainTitleText = "Sidney's Jollof Rice Bar";
  mainTitleH1.appendChild(document.createTextNode(mainTitleText));
  mainTitleSectionDiv.appendChild(mainTitleH1);

  const mainTitleP = document.createElement("p");
  const mainTitlePText = "919 - 555 - 5555";
  mainTitleP.appendChild(document.createTextNode(mainTitlePText));
  mainTitleSectionDiv.appendChild(mainTitleP);

  // New Section - <section id="info" aria-label="info-section" class="content">
  const infoSection = document.createElement("section");
  infoSection.setAttribute("id", "info");
  infoSection.setAttribute("aria-label", "info-section");
  infoSection.classList.add("content");
  mainDiv.appendChild(infoSection);

  // <div class="section-content"></div>
  const infoSectionDiv = document.createElement("div");
  infoSectionDiv.classList.add("section-content");
  infoSection.appendChild(infoSectionDiv);

  // <div class="home-info container-sm"></div>
  const infoSectionContainer = document.createElement("div");
  infoSectionContainer.classList.add("home-info", "container-sm");
  infoSectionDiv.appendChild(infoSectionContainer);

  // <p>
  const infoSectionP1 = document.createElement("p");
  const infoSectionText1 = `Sidney's has the best Jollof Rice. The customer service makes you feel like you're sitting in a private Nigerian club, listen to your favorite tunes, relaxing with your friends, and enjoying the best meal you've eaten in a while.`
  infoSectionP1.appendChild(document.createTextNode(infoSectionText1));
  infoSectionContainer.appendChild(infoSectionP1);

  // <p> - last of section
  const infoSectionP2 = document.createElement("p");
  const infoSectionText2 = `This is exactly the kind of place that I like to return to again and again and again.`
  infoSectionP2.appendChild(document.createTextNode(infoSectionText2));
  infoSectionContainer.appendChild(infoSectionP2);

  // <h2> - line 
  const mainLine1 = document.createElement("hr");
  mainDiv.appendChild(mainLine1);

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

  // <div class="hours-info container-sm">
  const locationSectionContainer = document.createElement("div");
  locationSectionContainer.classList.add("location-info", "container-sm");
  locationSectionDiv.appendChild(locationSectionContainer);

  // <h2> 
  const locationTitleH2 = document.createElement("h2");
  locationTitleH2.appendChild(document.createTextNode("Location"));
  locationSectionContainer.appendChild(locationTitleH2);

  // <p> - Last line of section
  const location = document.createElement("p");
  const locationText = "5 Timed Place, Cary, North Carolina";
  location.appendChild(document.createTextNode(locationText));
  locationSectionContainer.appendChild(location);
  
}