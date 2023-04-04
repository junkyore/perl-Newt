
import { createStore } from 'vuex';
import axios from 'axios';

const BASE_API_URL = 'http://localhost:9000/api';

export default createStore({
	state: {
		Cryptos: [],
		CryptoList: {},
	},
	mutations: {
		updateCryptos(state, payload) {
			state.Cryptos = payload;
		},
		updateCryptoList(state, payload) {
			state.CryptoList = payload;
			console.log(state.CryptoList);
		},
	},
	actions: {
		getCryptos(context) {
			axios.get(BASE_API_URL).then((res) => {
				context.commit('updateCryptos', res.data);
				let names = context.state.Cryptos;
				names = names.map((s) => s.name).toString();
				axios
					.get(
						`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${names}&tsyms=USD&api_key=${API_KEY}`
					)
					.then((res) => {
						context.commit('updateCryptoList', res.data);
					});
			});
		},
	},
	modules: {},
});