<template>
	<div class="crypts">
		<p class="price">${{ cryps.USD }}</p>
		<div class="lower">
			<p class="crypto-label">{{ name }}</p>
			<button class="delete-btn"><i class="far fa-trash-alt"></i></button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['cryps', 'name'],
};
</script>

<style lang="scss" scoped>
.crypts {
	background: #32373c;
	border-radius: 1em;
}
.price {
	font-size: 2.5em;
	font-weight: 200;
	padding: 1em 0;
}
.lower {
	background: #292d30;
	padding: 1em;
	position: relative;
	height: 100px;
	border-radius: 1em;
}
.crypto-label {
	text-transform: uppercase;
	font-size: 1.5em;
	font-weight: bold;
	margin-top: -1.5em;
	color: #788591;
}
.delete-btn {
	background: none;
	border: none;
	position: absolute;
	color: #fff;
	font-size: 1.5em;
	right: 1em;
	bottom: 1em;
	cursor: pointer;
	&:hover {
		color: rgb(218, 218, 218);
	}
}
</style>
