export default function menu() {
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
  const mainTitleText = "Menu";
  mainTitleH1.appendChild(document.createTextNode(mainTitleText));
  mainTitleSectionContainer.appendChild(mainTitleH1);

  // <p> - Last element of section
  const mainTitleP = document.createElement("p");
  const mainTitlePText = "919 - 555 - 5555";
  mainTitleP.appendChild(document.createTextNode(mainTitlePText));
  mainTitleSectionContainer.appendChild(mainTitleP);

  // New Section - <section id="menus" aria-label="menu-section" class="content">
  const menuSection = document.createElement("section");
  menuSection.setAttribute("id", "menus");
  menuSection.setAttribute("aria-label", "menu-section");
  menuSection.classList.add("content");
  mainDiv.appendChild(menuSection);

  // <div class="container-sm">
  const menuContainerDiv = document.createElement("div");
  menuContainerDiv.classList.add("container-sm");
  menuSection.appendChild(menuContainerDiv);

  const first = () => {

    // New menu Section - <section class="menu-section">
    const menuSectionDiv = document.createElement("section");
    menuSectionDiv.classList.add("menu-section");
    menuContainerDiv.appendChild(menuSectionDiv);

    // <div class="menu-section__header"></div>
    const menuSectionHeader = document.createElement("div");
    menuSectionHeader.classList.add("menu-section__header");
    menuSectionDiv.appendChild(menuSectionHeader);

    // <h2> - FIRST
    const menuTitleH2 = document.createElement("h2");
    menuTitleH2.appendChild(document.createTextNode("FIRST"));
    menuSectionHeader.appendChild(menuTitleH2);

    // <ul class="hours">
    const menuList = document.createElement("ul");
    const menuItems = [
      {
      name: "Puff Puff",
      description: "flour based snack fried in cholesterol-free heat healthy oil"
      },
      {
        name: "Fluffy Meat Pies",
        description: "flour based buttery baked dough filled with beef, potato, carrot and seasonings to taste"
      },
      {
        name: "Scotch Egg",
        description: "boiled egg wrapped in seasoned deep-fried turkey crust"
      }
    ];
    for (let i = 0; i < menuItems.length; i++) {
      // each <li class="menu-item">
      const menuItemLi = document.createElement('li');
      menuItemLi.classList.add("menu-item");

      // each <div class="menu-item__heading">
      const menuItemHeading = document.createElement("div");
      menuItemHeading.classList.add("menu-item__heading");

      // each <p class="menu-item__heading menu-item__heading--name">
      const eachMenuItemHeading = document.createElement("p");
      eachMenuItemHeading.classList.add("menu-item__heading", "menu-item__heading--name");

      eachMenuItemHeading.appendChild(document.createTextNode(menuItems[i].name));
      // append to <div>
      menuItemHeading.appendChild(eachMenuItemHeading);
      // append to <li>
      menuItemLi.appendChild(menuItemHeading);

      // each <p class="menu-item__details--description">
      const eachMenuItemDescription = document.createElement("p");
      eachMenuItemDescription.classList.add("menu-item__details--description");
      eachMenuItemDescription.appendChild(document.createTextNode(menuItems[i].description));
      // append to <li>
      menuItemLi.appendChild(eachMenuItemDescription);
      // append each li to <ul>
      menuList.appendChild(menuItemLi);
    }
  
    // append <ul> to <section> - End section
    menuSectionDiv.appendChild(menuList);
  };

  const main = () => {
    // New menu Section - <section class="menu-section">
  const menuSectionDiv = document.createElement("section");
  menuSectionDiv.classList.add("menu-section");
  menuContainerDiv.appendChild(menuSectionDiv);

  // <div class="menu-section__header"></div>
  const menuSectionHeader = document.createElement("div");
  menuSectionHeader.classList.add("menu-section__header");
  menuSectionDiv.appendChild(menuSectionHeader);

  // <h2> - FIRST
  const menuTitleH2 = document.createElement("h2");
  menuTitleH2.appendChild(document.createTextNode("MAIN"));
  menuSectionHeader.appendChild(menuTitleH2);

  // <ul class="hours">
  const menuList = document.createElement("ul");
  const menuItems = [
    {
     name: "Jollof Rice with Plantain",
     description: "jollof rice served with plantain and meat"
    },
    {
      name: "Fufu",
      description: "fufu made from fufu flour (yam, cassava, unripe plantain flour) can be served with your favorite soup or stew"
    },
    {
      name: "Egusi Soup",
      description: "seafood. ground melon seeds cooked in a delicious sauce"
    },
    {
      name: "Lemonade",
      description: "vegetarian, organic juices. enjoy this freshly squeezed lemon-based drink with sugar and water"
    }
  ];
  for (let i = 0; i < menuItems.length; i++) {
    // each <li class="menu-item">
    const menuItemLi = document.createElement('li');
    menuItemLi.classList.add("menu-item");

    // each <div class="menu-item__heading">
    const menuItemHeading = document.createElement("div");
    menuItemHeading.classList.add("menu-item__heading");

    // each <p class="menu-item__heading menu-item__heading--name">
    const eachMenuItemHeading = document.createElement("p");
    eachMenuItemHeading.classList.add("menu-item__heading", "menu-item__heading--name");

    eachMenuItemHeading.appendChild(document.createTextNode(menuItems[i].name));
    // append to <div>
    menuItemHeading.appendChild(eachMenuItemHeading);
    // append to <li>
    menuItemLi.appendChild(menuItemHeading);

    // each <p class="menu-item__details--description">
    const eachMenuItemDescription = document.createElement("p");
    eachMenuItemDescription.classList.add("menu-item__details--description");
    eachMenuItemDescription.appendChild(document.createTextNode(menuItems[i].description));
    // append to <li>
    menuItemLi.appendChild(eachMenuItemDescription);
     // append each li to <ul>
    menuList.appendChild(menuItemLi);
  }
 
  // append <ul> to <section> - End section
  menuSectionDiv.appendChild(menuList);
  }

  const sides = () => {
    // New menu Section - <section class="menu-section">
  const menuSectionDiv = document.createElement("section");
  menuSectionDiv.classList.add("menu-section");
  menuContainerDiv.appendChild(menuSectionDiv);

  // <div class="menu-section__header"></div>
  const menuSectionHeader = document.createElement("div");
  menuSectionHeader.classList.add("menu-section__header");
  menuSectionDiv.appendChild(menuSectionHeader);

  // <h2> - FIRST
  const menuTitleH2 = document.createElement("h2");
  menuTitleH2.appendChild(document.createTextNode("SIDES"));
  menuSectionHeader.appendChild(menuTitleH2);

  // <ul class="hours">
  const menuList = document.createElement("ul");
  const menuItems = [
    {
     name: "Small Side of Jollof Rice",
     description: "parboiled rice cooked in a tomato-based sauce"
    },
    {
      name: "White Rice",
      description: "parboiled rice"
    },
    {
      name: "Plantain",
      description: "sliced fried ripe plantain. small - 6 pieces or large - 10 pieces"
    },
    {
      name: "Ijebu Garri",
      description: "ijebu garri (white) is made out of cassava"
    },
    {
      name: "Moi-moi",
      description: "seafood. you can never go wrong with our delicious moi-moi. wrapped grounded beans with vegetable oil and egg"
    }
  ];
  for (let i = 0; i < menuItems.length; i++) {
    // each <li class="menu-item">
    const menuItemLi = document.createElement('li');
    menuItemLi.classList.add("menu-item");

    // each <div class="menu-item__heading">
    const menuItemHeading = document.createElement("div");
    menuItemHeading.classList.add("menu-item__heading");

    // each <p class="menu-item__heading menu-item__heading--name">
    const eachMenuItemHeading = document.createElement("p");
    eachMenuItemHeading.classList.add("menu-item__heading", "menu-item__heading--name");

    eachMenuItemHeading.appendChild(document.createTextNode(menuItems[i].name));
    // append to <div>
    menuItemHeading.appendChild(eachMenuItemHeading);
    // append to <li>
    menuItemLi.appendChild(menuItemHeading);

    // each <p class="menu-item__details--description">
    const eachMenuItemDescription = document.createElement("p");
    eachMenuItemDescription.classList.add("menu-item__details--description");
    eachMenuItemDescription.appendChild(document.createTextNode(menuItems[i].description));
    // append to <li>
    menuItemLi.appendChild(eachMenuItemDescription);
     // append each li to <ul>
    menuList.appendChild(menuItemLi);
  }
 
  // append <ul> to <section> - End section
  menuSectionDiv.appendChild(menuList);
  }

  const endNote = () => {
    // New Section - <section class="menu-section menu-section--text">
    const menuSectionDiv = document.createElement("section");
    menuSectionDiv.classList.add("menu-section", "menu-section--text");
    menuContainerDiv.appendChild(menuSectionDiv);

    // <p>
    const endNoteP = document.createElement("p");
    const endNoteText = "a 5% surcharge will be added to your check to help cover the cost of Raleigh/Durham business mandates";
    endNoteP.appendChild(document.createTextNode(endNoteText));

    menuSectionDiv.appendChild(endNoteP);
  }
  
  first();
  main();
  sides();
  endNote();
}