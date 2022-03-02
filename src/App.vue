<template>
	<v-app>
		<HeaderContainer />

		<v-container>
			<router-view />
		</v-container>

		<FooterContainer />
	</v-app>
</template>

<script>
	import HeaderContainer from "@/containers/HeaderContainer";
	import FooterContainer from "@/containers/FooterContainer";

	export default {
		name: "App",
		components: { HeaderContainer, FooterContainer }
	};
</script>

<style lang="scss" scoped>
	@import url("https://fonts.googleapis.com/css2?family=Athiti:wght@300;400;500;600;700&display=swap");

	* {
		font-family: "Athiti", sans-serif;
	}
</style>
