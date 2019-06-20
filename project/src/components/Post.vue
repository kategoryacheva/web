<template>
	<div>
		<div id = "theme">
			{{postData.theme}}
		</div>
		<div id = "post">
			{{postData.post}}
		</div>
		<div id="contact"> Контакты
			<div class = "number">
				Телефон: {{postData.number}}
			</div>
			<div class = "number">
				E-Mail: {{postData.email}}
			</div>
		</div>
		<div id="print"> <button onClick="window.print()">Распечатать эту страницу</button> </div>
	</div>
</template>

<script>
	export default {
		name: "post",
		props: ['postId'],
		computed: {
            		postData() {
				for (var i = 0; i < this.$store.state.posts.length; ++i)
					if (this.$store.state.posts[i].id == this.postId)
                				return this.$store.state.posts[i]
            		}
		}

	}
</script>

<style scoped>
	#theme {
		margin-top: 20px;
		text-align:center;
		font-size: 50px;
	}

	#post {
		margin-top: 20px;
		font-size: 30px;
	}
	#contact {
		margin-top: 20px;
		font-style: italic;
		font-size: 25px;
	}
	.number {
		font-size: 20px;
		margin-top: 10px;
		margin-left: 40px;
	}
	#print {
		margin-top: 20px;
	}
</style>
