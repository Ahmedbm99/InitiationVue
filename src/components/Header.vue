<template>
    <header>
      <b-navbar
        class="py-3"
        toggleable="lg"
        type="dark"
        style="background-color: #f1f2f6"
      >
        <b-navbar-brand href="/">
          <b-img src="../../logo.png" alt="logo" width="250px" height="250px" />
        </b-navbar-brand>
        
        <b-navbar-toggle target="nav-top-header-collapse" />
        <b-collapse id="nav-top-header-collapse" is-nav>
          <b-navbar-nav class="mr-auto">
            <b-nav-form class="mr-auto" >

              <div class="navbarItems">
                <ul class="navbar-menu">
            <li 
              v-for="item in menuItems" 
              :key="item.value"
              @mouseenter="setMenu(item.value)" 
                  @mouseleave="resetMenu"
              :class="{ active: menu === item.value }"
             
            >
              {{ item.text }}
            </li>
            <button class="button-sec">Assistance Client</button>
            <button class="button-sec">Extranet Client</button>
          </ul> 
   
              </div>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <hr class="m-0" style="background-color: #000" />
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const menu = ref('introduction'); // Default menu item
  const menuItems = [
  { value: 'introduction', text: 'QUI SOMME NOUS' },
  { value: 'nosAgences', text: 'NOS AGENCES' },
  { value: 'nosJobs', text: 'NOS JOBS' },
  { value: 'nosActus', text: 'NOS ACTUS' },
  { value: 'nosDemo', text: 'NOS WEB DEMOS' },
  { value: 'blog', text: 'BLOG' },
  { value: 'contact_us', text: 'CONTACT' },
  
];
  const assets = {
    logo: '../public/logo.png',
    search_icon: '../public/search_icon.png',
    basket_icon: '../public/basket_icon.png'
  };
  
  const resetMenu = () => {
  menu.value = ''; 
};
  const setMenu = (item) => {
    menu.value = item;
    console.log('Menu item set to:', menu.value);
  };
  </script>
  
  <style scoped lang="scss">
  .navbar {
    padding: 0 ;
    display: flex;
    align-items: center;
    flex-wrap: wrap; /* Allow items to wrap to the next line */
  }
  
  .navbar-menu {
    display: flex;
    list-style: none;
    gap: 20px;
    color: #49557e;
    font-size: 16px;
    padding: 0;
  }
  
  .navbar-menu li {
    cursor: pointer;
    padding: 30px 40px ; /* Apply padding to menu items */
  }
  
  .navbar .active {
    padding-bottom: 2px;
    border-bottom: 2px solid #49557e;
  }
  .navbar .button-sec {
    background: transparent;
    font-size: 16px;
    color: #49557e;
   
    padding: 30px 30px;
    cursor: pointer;
    transition: 0.3s;
}

.navbar button:hover {
    background-color: #006d77;
    color: #fff
}

  .navbar-search-icon {
    position: relative;
  }
  
  .navbar-search-icon  {
    position: absolute;
    min-width: 10px;
    min-height: 10px;
    background-color: black;
    border-radius: 5px;
    top: -8px;
    right: -8px;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      align-items: center;
    }
  
    .navbar-menu {
      flex-direction: column;
      width: 100%;
      gap: 20px;
      align-items: center;
    }
  
    .navbar button {
      width: 100%;
      cursor: pointer;
      text-align: center;
    }
  }
  
  @media (max-width: 480px) {
    .navbar {
      padding: 10px 0;
    }
  
    .navbar-menu {
      font-size: 14px;
      gap: 10px;
    }
  
    .navbar button {
      font-size: 14px;
      padding: 8px 20px;
    }
  }
  </style>
  