<template>
	<form @submit.prevent="sendData">
		<div class="form-group">
			<label for="crypto">
				Crypto:
			</label>
			<div class="form-group-inner">
				<input
					type="text"
					class="crypto"
					v-model="crypto.name"
					placeholder="BTC"
					required
				/>
				<button class="add">Add</button>
			</div>
			<p class="info">Use Abbreviation</p>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			crypto: {
				name: '',
			},
		};
	},
	methods: {
		sendData() {
			this.$emit('clicked', this.crypto.name);
			this.crypto.name = '';
		},
	},
};
</script>

<style lang="scss" scoped>
.form-group {
	text-align: left;
	width: 300px;
	margin: 7em auto;
}
label {
	font-weight: bold;
	display: inline-block;
	margin-bottom: 0.7em;
}
input {
	outline: none;
	padding: 1em;
	border: none;
	border-radius: 0.3em 0 0 0.3em;
	font-size: 1.3em;
}
.form-group-inner {
	display: grid;
	grid-template-columns: 100px auto;
	button {
		font-size: 1em;
		font-weight: bold;
		color: #fff;
		background: #9100ff;
		border: none;
		outline: none;
		padding: 1em 3em;
		border-radius: 0 0.3em 0.3em 0;
	}
}
p.info {
	color: #7794b0;
	margin-top: 0.2em;
}
</style>
