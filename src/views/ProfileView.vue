<template>
	<div>
		<div class="d-flex flex-row justify-center align-center pt-4 pb-3">
			<h1 class="font-weight-medium">Profile</h1>
		</div>

		<div class="d-flex align-center justify-center">
			<v-card class="pa-3 rounded-lg" elevation="12" width="700">
				<v-row>
					<v-col cols="12" sm="5">
						<v-img :src="myProfile.avatarUrl" class="rounded-lg" aspect-ratio="1">
							<template v-slot:placeholder>
								<v-row class="fill-height ma-0" align="center" justify="center">
									<v-progress-circular indeterminate color="amber"></v-progress-circular>
								</v-row>
							</template>
						</v-img>
					</v-col>

					<v-col cols="12" sm="7">
						<h3 class="pa-0 ma-0 font-weight-medium">{{ myProfile.fullName ?? "..." }}</h3>

						<v-sheet color="amber lighten-4" class="mt-2 py-2 px-3 rounded-lg">
							<v-row>
								<v-col cols="4">
									<div class="d-flex flex-column">
										<small>Nickname</small>
										<h4 class="pa-0 ma-0 font-weight-medium">{{ myProfile.nickName ?? "..." }}</h4>
									</div>
								</v-col>
								<v-col cols="2">
									<div class="d-flex flex-column">
										<small>Age</small>
										<p class="pa-0 ma-0 font-weight-medium">{{ getAge ?? "..." }}</p>
									</div>
								</v-col>
								<v-col cols="6">
									<div class="d-flex flex-column">
										<small>Email</small>
										<p class="pa-0 ma-0 font-weight-medium text-truncate">{{ myProfile.email ?? "..." }}</p>
									</div>
								</v-col>
							</v-row>
						</v-sheet>

						<p class="pa-0 ma-0 mb-1 mt-2 font-weight-medium">Hobby</p>
						<div>
							<v-chip v-if="!myProfile?.hobbys.length" class="mr-1 mb-1" small label color="amber lighten-4">
								<v-progress-circular indeterminate size="16" color="amber"></v-progress-circular>
							</v-chip>
							<v-chip v-for="(hobby, i) in myProfile.hobbys" :key="i" class="mr-1 mb-1" small label color="amber lighten-4">#{{ hobby }}</v-chip>
						</div>
					</v-col>
				</v-row>
			</v-card>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				myProfile: {
					fullName: "Jirayu Suebwongphanudet",
					nickName: "Artid",
					avatarUrl: "avatar-profile.jpg",
					birthOfDate: "1998-11-22",
					email: "Jirayu.sueb@gmail.com",
					hobbys: ["Workout", "Learn", "Trade Crypto", "Craft Beer"]
				}
			};
		},

		computed: {
			getAge() {
				var diff = new Date().getTime() - new Date(this.myProfile.birthOfDate).getTime();
				return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)) ?? 0;
			}
		}
	};
</script>

<style lang="scss" scoped></style>
