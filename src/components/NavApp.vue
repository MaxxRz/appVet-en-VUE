<template>
  <nav
    class="menuContainer"
    id="menuContainer"
    ref="menuContainer"
    @:click="responsiveMenu()"
  >
    <div class="menu_header">
      <div class="menu_img">
        <img
          class=""
          id="menuImg"
          src="@/assets/img/vetLogo.png"
          alt="Vet Sada"
        />
      </div>
      <div class="menu_toogle" @click.prevent="showMenuSmall()">
        <div class="icon_bar"></div>
        <div class="icon_bar"></div>
        <div class="icon_bar"></div>
      </div>
    </div>
    <ul class="menu_list" id="listNav">
      <li v-for="link in navLinks" :key="link">
        <router-link :to="'/' + link.link">
          <div :class="'menu_list_block' + link.class ">
            <div class="menu_iconText">
              <font-awesome-icon :icon="['fas', link.icon]" fixed-width />
              <span class="menu_text">{{ link.text }}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="menu_bottom" id="menu_bottom" data-pop="Right">
      <a href="#" class="" id="navLogout" data-text="Cerrar Sesión">
        <span class="fa-layers fa-fw">
          <font-awesome-icon
            :icon="['fas', 'sign-out-alt']"
            flip="horizontal"
          />
        </span>
      </a>
      <a href="#" id="naviconCart" data-text="Nueva Cartilla">
        <span class="fa-layers fa-fw">
          <font-awesome-icon :icon="['fas', 'folder-plus']" />
        </span>
      </a>

      <a href="#" id="naviconEvent" data-text="Nuevo Evento">
        <span class="fa-layers fa-fw">
          <font-awesome-icon :icon="['fas', 'file-medical']" />
        </span>
      </a>
    </div>
  </nav>
</template>
<script>
import { ref, onMounted } from "@vue/runtime-core";

export default {
  name: "NavApp",
  setup() {
    // variables
    const navLinks = [
      {
        link: "EventosDelDia",
        text: "Eventos del Dia",
        icon: "calendar-day",
        class: ""
      },
      {
        link: "",
        text: "Calendario",
        icon: "calendar-alt",
        class: ""
      },
      {
        link: "Cartillas",
        text: "Cartillas",
        icon: "book-medical",
        class: ""
      },
      {
        link: "",
        text: "En Medicacion",
        icon: "stethoscope",
        class: ""
      },
      {
        link: "",
        text: "Medicamentos",
        icon: "syringe",
        class: ""
      },
      {
        link: "",
        text: "Proveedores",
        icon: "dolly",
        class: ""
      },
    ];
    const menuContainer = ref();

    // Methods
    const responsiveMenu = () => {
      let menu = menuContainer.value.classList

      if (window.innerWidth >= 666) {
        if (!menu.contains("menuContainer")) {
          menu.remove("menuContainerSmall");
          menu.add("menuContainer");
        }
      } else {
        if (!menu.contains("menuContainerSmall")) {
          menu.remove("menuContainer");
          menu.add("menuContainerSmall");
        }
      }
    };

    const showMenuSmall = () => {
      let menu = menuContainer.value;
      if (menu.classList.contains("nav_on")) {
        menu.classList.remove("nav_on");
      } else {
        menu.classList.add("nav_on");
      }
    };

    // Hooks
    onMounted(() => {
      let listNav = document.getElementById("listNav");
      const elementHr = document.createElement("hr");
      elementHr.classList.add("navHr");
      listNav.children[3].insertAdjacentElement("afterend", elementHr);

      addEventListener("resize", responsiveMenu);
      responsiveMenu();
    });

    return {
      // variables
      navLinks,

      // methos
      menuContainer,
      showMenuSmall,
    };
  },
};
</script>