<template>
	<v-container class="py-5 px-6 d-flex align-center justify-center">
		<div>{{ copyrightText }}</div>
	</v-container>
</template>

<script>
	import { INFO } from "@/constants";

	export default {
		name: "FooterContainer",
		data() {
			return {
				copyrightText: INFO.FOOTER.COPYRIGHT
			};
		}
	};
</script>

<style lang="scss" scoped></style>
