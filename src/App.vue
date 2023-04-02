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
				.th