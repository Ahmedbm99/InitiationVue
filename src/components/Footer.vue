<template>
    <footer id="main-footer" class=" text-light py-5">
      <div class="container">
        <div id="footer-widgets" class="row">
          <div class="col-md-3 footer-widget">
            <div id="nav_menu-4" class="fwidget et_pb_widget widget_nav_menu">
              <h4 class="title">Logiciels de gestion</h4>
              <ul id="menu-pied-5-metiers" class="list-unstyled">
                <li v-for="item in menuItemsGestion" :key="item.id" class="menu-item">
                  <a :href="item.href" class="text-light">{{ item.label }}</a>
                </li>
              </ul>
            </div> <!-- end .fwidget -->
          </div> <!-- end .footer-widget -->
  
          <div class="col-md-3 footer-widget">
            <div id="nav_menu-5" class="fwidget et_pb_widget widget_nav_menu">
              <h4 class="title">En savoir plus</h4>
              <ul id="menu-en-savoir-plus" class="list-unstyled">
                <li v-for="item in menuItemsSavoir" :key="item.id" class="menu-item">
                  <a :href="item.href" class="text-light">{{ item.label }}</a>
                </li>
              </ul>
            </div> <!-- end .fwidget -->
          </div> <!-- end .footer-widget -->
  
          <div class="col-md-3 footer-widget">
            <div id="nav_menu-6" class="fwidget et_pb_widget widget_nav_menu">
              <h4 class="title">Confidentialité</h4>
              <ul id="menu-confidentialite" class="list-unstyled">
                <li v-for="item in menuItemsConfidentialite" :key="item.id" class="menu-item">
                  <a :href="item.href" @click="handleCookieManagement(item.href)" class="text-light">{{ item.label }}</a>
                </li>
              </ul>
            </div> <!-- end .fwidget -->
          </div> <!-- end .footer-widget -->
  
          <div class="col-md-3 footer-widget">
            <div id="nav_menu-7" class="fwidget et_pb_widget widget_nav_menu">
              <h4 class="title">Formation</h4>
              <ul id="menu-formation" class="list-unstyled">
                <li v-for="item in menuItemsFormation" :key="item.id" class="menu-item">
                  <a :href="item.href" class="text-light">{{ item.label }}</a>
                </li>
              </ul>

              <br />

            </div> <!-- end .fwidget -->
          </div> <!-- end .footer-widget -->
        </div> <!-- #footer-widgets -->
      </div>
  
      <div id="footer-bottom" class="bg-secondary py-3">
        <div class="container">
          <ul class="et-social-icons list-unstyled d-flex justify-content-center mb-0">
            <li class="et-social-icon et-social-facebook mx-2">
              <a href="#" class="text-light">
                <span>Facebook</span>
              </a>
            </li>
            <li class="et-social-icon et-social-twitter mx-2">
              <a href="#" class="text-light">
                <span>Twitter</span>
              </a>
            </li>
            <li class="et-social-icon et-social-google-plus mx-2">
              <a href="#" class="text-light">
                <span>Google</span>
              </a>
            </li>
          </ul>
          <p id="footer-info" class="text-center mb-0">Copyright © SPARK IT 2024. Tous droits réservés.</p>
        </div> <!-- .container -->
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItemsGestion: [
          // Add your menu items here
        ],
        menuItemsSavoir: [
          // Add your menu items here
        ],
        menuItemsConfidentialite: [
          // Add your menu items here
        ],
        menuItemsFormation: [
          // Add your menu items here
        ]
      };
    },
    methods: {
      handleCookieManagement(href) {
        if (href === '#') {
          // Open the cookie management panel
          tarteaucitron.userInterface.openPanel();
        }
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  #main-footer {
    background-color: #879f9d; /* Bootstrap Dark Color */
    color: #ffffff;
  
    .footer-widget {
      margin-bottom: 1rem;
  
      h4.title {
        border-bottom: 2px solid #ffffff;
        padding-bottom: 0.5rem;
      }
  
      a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  
    #footer-bottom {
      background-color: #6c757d; /* Bootstrap Secondary Color */
      color: #ffffff;
      
      .et-social-icons {
        li {
          a {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  </style>
  