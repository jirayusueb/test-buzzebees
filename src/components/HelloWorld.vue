<template>
	<v-container>
		<v-row class="text-center">
			<v-col class="mb-4">
				<h1 class="font-weight-bold mb-3">{{ msg }}</h1>

				<div class="d-flex flex-row align-center justify-center" style="gap: 1rem">
					<div>
						<v-btn class="font-weight-medium" link to="/profile" color="amber">Profile</v-btn>
					</div>
					<div>
						<v-btn class="font-weight-medium" link to="/gallery" color="amber">Gallery</v-btn>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: "HelloWorld",

		props: {
			msg: {
				type: String,
				default: ""
			}
		},

		data: () => ({
			ecosystem: [
				{
					text: "vuetify-loader",
					href: "https://github.com/vuetifyjs/vuetify-loader"
				},
				{
					text: "github",
					href: "https://github.com/vuetifyjs/vuetify"
				},
				{
					text: "awesome-vuetify",
					href: "https://github.com/vuetifyjs/awesome-vuetify"
				}
			],
			importantLinks: [
				{
					text: "Documentation",
					href: "https://vuetifyjs.com"
				},
				{
					text: "Chat",
					href: "https://community.vuetifyjs.com"
				},
				{
					text: "Made with Vuetify",
					href: "https://madewithvuejs.com/vuetify"
				},
				{
					text: "Twitter",
					href: "https://twitter.com/vuetifyjs"
				},
				{
					text: "Articles",
					href: "https://medium.com/vuetify"
				}
			],
			whatsNext: [
				{
					text: "Explore components",
					href: "https://vuetifyjs.com/components/api-explorer"
				},
				{
					text: "Select a layout",
					href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
				},
				{
					text: "Frequently Asked Questions",
					href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
				}
			]
		})
	};
</script>
