<template>
	<div class="container">
		<div class="logo">
			<a href="#"><img src="@/assets/Logo.svg" alt=""/></a>
		</div>
		<Form @clicked="handleSubmitForm" />
		<div class="crypto-container">
			<Crypts
				v-for="(cryps, name) in CryptoList"
				:key="cryps._id"
				:cryps="cryps"
				:name="name"
			/>
		</div>
	</div>
</template>

<script>
import Form from '@/components/form';
import Crypts from '@/components/Crypts';
import { mapActions, mapState } from 'vuex';
import axios from 'axios';
export default {
	name: 'App',
	data() {},
	components: { Form, Crypts },
	created() {
		this.getCryptos();
	},
	methods: {
		...mapActions(['getCryptos']),
		async handleSubmitForm(data) {
			await axios
				.post('http://localhost:9000/add-crypto', { name: data })
				.then((res) => {})
				.catch((e) => {
					console.log(e);
				});
			this.getCryptos();
		},
	},
	computed: {
		...mapState(['Cryptos', 'CryptoList']),
	},
	emits: ['clicked'],
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Poppins', sans-serif;
	background: #24262a;
	color: #fff;
}
.container {
	text-align: center;
}
.logo {
	img {
		width: 12em;
		user-select: none;
		margin: 3em 0 0;
	}
}
.crypto-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
	gap: 1em;
	padding: 1em;
}
</style>
