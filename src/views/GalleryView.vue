<template>
	<div>
		<div class="d-flex flex-row justify-center align-center pt-4 pb-3">
			<h1 class="font-weight-medium">Gallery Page</h1>
		</div>

		<v-row>
			<v-col v-for="item in imageList" :key="item.id" cols="12" sm="6" md="3">
				<v-img :src="item.url" :aspect-ratio="4 / 3" position="center center" @click="openDialog(item.id)">
					<template v-slot:placeholder>
						<v-row class="fill-height ma-0" align="center" justify="center">
							<v-progress-circular indeterminate color="amber"></v-progress-circular>
						</v-row>
					</template>
				</v-img>
			</v-col>
		</v-row>

		<v-dialog v-model="dialog" max-width="500px" @click:outside="closeDialog">
			<v-card class="pa-2" :loading="!selectedImage">
				<v-carousel height="auto" hide-delimiters>
					<v-carousel-item v-for="media in selectedImage?.medias" :src="media?.url" :key="`media-${selectedImage?.id}-${media?.id}`"></v-carousel-item>
				</v-carousel>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialog: false,
				imageList: [
					{
						id: 0,
						url: "/gallery/fruit-01.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-01.jpg" },
							{ id: 1, url: "/gallery/fruit-02.jpg" }
						]
					},
					{
						id: 1,
						url: "/gallery/fruit-02.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-02.jpg" },
							{ id: 1, url: "/gallery/fruit-03.jpg" }
						]
					},
					{
						id: 2,
						url: "/gallery/fruit-03.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-03.jpg" },
							{ id: 1, url: "/gallery/fruit-02.jpg" }
						]
					},
					{
						id: 3,
						url: "/gallery/fruit-04.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-04.jpg" },
							{ id: 1, url: "/gallery/fruit-05.jpg" }
						]
					},
					{
						id: 4,
						url: "/gallery/fruit-05.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-05.jpg" },
							{ id: 1, url: "/gallery/fruit-06.jpg" }
						]
					},
					{
						id: 5,
						url: "/gallery/fruit-06.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-06.jpg" },
							{ id: 1, url: "/gallery/fruit-07.jpg" }
						]
					},
					{
						id: 6,
						url: "/gallery/fruit-07.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-07.jpg" },
							{ id: 1, url: "/gallery/fruit-08.jpg" }
						]
					},
					{
						id: 7,
						url: "/gallery/fruit-08.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-08.jpg" },
							{ id: 1, url: "/gallery/fruit-09.jpg" }
						]
					},
					{
						id: 8,
						url: "/gallery/fruit-09.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-09.jpg" },
							{ id: 1, url: "/gallery/fruit-10.jpg" }
						]
					},
					{
						id: 9,
						url: "/gallery/fruit-10.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-10.jpg" },
							{ id: 1, url: "/gallery/fruit-11.jpg" }
						]
					},
					{
						id: 10,
						url: "/gallery/fruit-11.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-11.jpg" },
							{ id: 1, url: "/gallery/fruit-12.jpg" }
						]
					},
					{
						id: 11,
						url: "/gallery/fruit-12.jpg",
						medias: [
							{ id: 0, url: "/gallery/fruit-12.jpg" },
							{ id: 1, url: "/gallery/fruit-01.jpg" }
						]
					}
				],
				selectedImage: null
			};
		},

		methods: {
			openDialog(id) {
				this.selectedImage = this.imageList.find((el) => el.id === id);
				this.dialog = !!this.selectedImage;
			},
			closeDialog() {
				this.selectedImage = null;
				this.dialog = !!this.selectedImage;
			}
		}
	};
</script>

<style lang="scss" scoped></style>
