<template>
  <div class="bodyTitle">
    <h1>Eventos del Día</h1>
  </div>
  <section class="sectionContainer grid_12">
    <div class="sectionHead">
      <h2>Lista</h2>
      <div class="sectionHeadOptions">
        <button type="button" class="btn btnPrimary btnSmall">
          <font-awesome-icon :icon="['fas', 'plus']" /> Agregar
          
        </button>
      </div>
    </div>
    <div class="tableScreenSmall tableShow">
      <table class="table">
        <thead>
          <tr>
            <th>Evento</th>
            <th>Nombre del Cliente</th>
            <th>Nombre de la Mascota</th>
            <th colspan="2">Descripció</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lola</td>
            <td>Eunice Abigail</td>
            <td>Cleo</td>
            <td class="tdDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              delectus, adipisci voluptatem enim dolores expedita sint quisquam
              accusantium aut! Hic animi delectus ipsum excepturi minus
              blanditiis, esse quo eaque nisi?
            </td>
            <td class="btnsOptions">
              <button class="btn btnDangerGhost btnIcon">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
              <button class="btnIconText btn btnPrimaryGhost">
                <font-awesome-icon :icon="['fas', 'check']" />Confirmar
              </button>
            </td>
          </tr>
          <tr>
            <td>Lola</td>
            <td>Eunice Abigail</td>
            <td>Cleo</td>
            <td class="tdDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </td>
            <td class="btnsOptions">
              <button class="btn btnDangerGhost btnIcon">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
              <button class="btnIconText btn btnPrimaryGhost">
                <font-awesome-icon :icon="['fas', 'check']" />Confirmar
              </button>
            </td>
          </tr>
          <tr>
            <td>Lola</td>
            <td>Eunice Abigail</td>
            <td>Cleo</td>
            <td class="tdDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </td>
            <td class="btnsOptions">
              <button class="btn btnDangerGhost btnIcon">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
              <button class="btnIconText btn btnPrimaryGhost">
                <font-awesome-icon :icon="['fas', 'check']" />Confirmar
              </button>
            </td>
          </tr>
          <tr>
            <td>Lola</td>
            <td>Eunice Abigail</td>
            <td>Cleo</td>
            <td class="tdDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </td>
            <td class="btnsOptions">
              <button class="btn btnDangerGhost btnIcon">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
              <button class="btnIconText btn btnPrimaryGhost">
                <font-awesome-icon :icon="['fas', 'check']" />Confirmar
              </button>
            </td>
          </tr>
          <tr>
            <td>Lola</td>
            <td>Eunice Abigail</td>
            <td>Cleo</td>
            <td class="tdDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </td>
            <td class="btnsOptions">
              <button class="btn btnDangerGhost btnIcon">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
              <button class="btnIconText btn btnPrimaryGhost">
                <font-awesome-icon :icon="['fas', 'check']" />Confirmar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="sectionFooter textRigth">
      <p>Total: 15</p>
    </div>
  </section>
</template>
<script>
export default {
  name: "Eventos",
  setup() {},
};
</script>