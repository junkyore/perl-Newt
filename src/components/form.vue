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

<style lang="scss"