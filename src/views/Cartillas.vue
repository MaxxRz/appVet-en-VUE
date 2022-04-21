<template>
  <div class="bodyTitle">
    <h1>{{ titleView }}</h1>
  </div>
  <section class="sectionContainer grid_12">
    <div class="sectionHead">
      <h2>Datos del Propietario</h2>
      <div class="sectionHeadOptions">
        <button type="button" class="btn btnPrimary btnSmall">
          <font-awesome-icon :icon="['fas', 'plus']" />
          Agregar
        </button>
      </div>
    </div>
    <div class="tableScreenSmall tableShow">
      <table class="table">
        <thead>
          <tr>
            <th>Nombre Mascota</th>
            <th>Nombre Cliente</th>
            <th>Telefono</th>
            <th colspan="2">Dirección</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lola</td>
            <td>Eunice Abigail</td>
            <td>818 062 3233</td>
            <td>
              Clavel 647, <br />
              Residencial Santo Domingo
            </td>
            <td class="btnsOptions">
              <button class="btn btnDangerGhost btnTableDelete">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
              <button class="btn btnPrimaryGhost btnTableSee">
                <font-awesome-icon :icon="['fas', 'eye']" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Lola</td>
            <td>Eunice Abigail</td>
            <td>818 062 3233</td>
            <td>
              Clavel 647, <br />
              Residencial Santo Domingo
            </td>
            <td class="btnsOptions">
              <button class="btn btnDangerGhost btnTableDelete">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
              <button class="btn btnPrimaryGhost btnTableSee">
                <font-awesome-icon :icon="['fas', 'eye']" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Lola</td>
            <td>Eunice Abigail</td>
            <td>818 062 3233</td>
            <td>
              Clavel 647, <br />
              Residencial Santo Domingo
            </td>
            <td class="btnsOptions">
              <button class="btn btnDangerGhost btnTableDelete">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
              <button class="btn btnPrimaryGhost btnTableSee">
                <font-awesome-icon :icon="['fas', 'eye']" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Lola</td>
            <td>Eunice Abigail</td>
            <td>818 062 3233</td>
            <td>
              Clavel 647, <br />
              Residencial Santo Domingo
            </td>
            <td class="btnsOptions">
              <button class="btn btnDangerGhost btnTableDelete">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
              <button class="btn btnPrimaryGhost btnTableSee">
                <i class="fa-fw fas fa-eye"></i>
                <font-awesome-icon :icon="['fas', 'eye']" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <div class="grid_12 pgination">
    <ul>
      <li>
        <button class="paginationArrow">
          <font-awesome-icon :icon="['fas', 'angle-left']" />
        </button>
      </li>
      <li><button class="paginationNumber">1</button></li>
      <li><button class="paginationNumber">2</button></li>
      <li><button class="paginationNumber">3</button></li>
      <li><button class="paginationNumber">4</button></li>
      <li><button class="paginationNumber">5</button></li>
      <li>
        <button class="paginationArrow">
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Cartillas",
  setup() {
    const titleView = useRouter().currentRoute._value.name;

    return {
      titleView,
    };
  },
};
</script>