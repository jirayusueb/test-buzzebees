import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import GalleryView from "@/views/GalleryView.vue";
import ProfileView from "@/views/ProfileView.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView
	},
	{
		path: "/about",
		name: "about",
		component: AboutView
	},
	{
		path: "/profile",
		name: "Profile",
		component: ProfileView
	},
	{
		path: "/gallery",
		name: "Gallery",
		component: GalleryView
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
