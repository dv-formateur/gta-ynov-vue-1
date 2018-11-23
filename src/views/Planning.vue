<template>
    <div id="planning">
		<!-- Ligne de la barre de pagination -->
		<b-row class="justify-content-center" style="margin: 5px;">
        	<b-pagination-nav size="lg" variant="info" :link-gen="linkGen" :number-of-pages="52" v-model="currentPage" />
		</b-row>

		<!-- Ligne d'affichage du planning -->
		<b-row>
      
		</b-row>

    </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {
    linkGen(pageNum) {
      return "#page/" + pageNum + "/foobar";
    }
  }
};
</script>