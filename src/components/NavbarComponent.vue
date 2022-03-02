<template>
	<v-toolbar color="amber">
		<v-toolbar-title>
			<div class="d-flex align-center" @click="$router.push('/')">
				<p class="font-weight-medium text-uppercase ma-0 pa-0" style="font-size: 2rem">{{ navTitle }}</p>
			</div>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-menu v-if="$vuetify.breakpoint.mobile" left bottom>
			<template v-slot:activator="{ on, attrs }">
				<v-btn icon v-bind="attrs" v-on="on">
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</template>

			<v-list>
				<v-list-item v-for="item in menuList" :key="item.id" @click="$router.push(item.path)">
					<v-list-item-title>{{ item.text }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>

		<div v-else class="d-flex flex-column align-center justify-center">
			<div class="d-flex flex-row" style="gap: 8px">
				<div v-for="item in menuList" :key="item.id">
					<v-btn text link :to="item.path"> {{ item.text }} </v-btn>
				</div>
			</div>
		</div>
	</v-toolbar>
</template>

<script>
	import { INFO } from "@/constants";

	export default {
		name: "NavbarComponent",
		data() {
			return {
				navTitle: INFO.HEADER.NAV_TITLE,
				menuList: [
					{
						id: 0,
						text: "Home",
						path: "/"
					},
					{
						id: 1,
						text: "Profile",
						path: "/profile"
					},
					{
						id: 2,
						text: "Gallery",
						path: "gallery"
					}
				]
			};
		}
	};
</script>

<style lang="scss" scoped></style>
