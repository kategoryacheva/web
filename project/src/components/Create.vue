<template>
	<div>
		<span id ="post">Ваше объявление</span>
		<div id = "announc">
			<div class="block">
				<div class="text"> Тема </div>
				<textarea v-model="theme" required></textarea>
			</div> 
			<div class="block">
				<div class="text"> Объявление </div>
				<textarea id="big" v-model="thepost" required></textarea>
			</div>
			<div class="block">
				<div class="text"> Телефон </div>
				<textarea v-model="phonenumber" required></textarea>
			</div>
			<div class="block">
				<div class="text"> E-Mail </div>
				<textarea v-model="email" required></textarea>
			</div>
		</div>
		<div style="margin-top: 20px">
			<button @click = "readyto"> Готово </button>
		</div>
	</div>
	
	
</template>

<script>
	export default {
		name: 'create',
		data: function() {
            		return {
                		theme: '',
                		thepost: '',
				phonenumber: '',
				email: ''
            		}
        	},

		methods: {
			readyto: function() {
				if (this.theme == '' || this.thepost == '' || this.phonenumber == '' || this.email == '')
					alert('Заполните все поля');
				else {
					
					var post = {
							"id": 0,
							"theme": this.theme,
							"post": this.thepost,
							"number": this.phonenumber,
							"email": this.email
						    };
					if (this.$store.state.posts.length != 0)
						post.id = this.$store.state.posts[this.$store.state.posts.length - 1].id + 1;
					this.$store.state.posts.push(post);
					this.$router.push('/');
				}
			}
		}
	}
</script>
<style scoped>
	#post {
		font-size: 30px;
	}
	#announc {
		margin-left: 20px;
	}
	.text {
		display: inline-block;
		font-size: 20px;
		width: 15%;
	}
	textarea {
		width: 50%;
		height: 25px;
		resize: none;
		font-size: 20px;
	}
	#big {
		height: 100px;
	}
	.block {
		margin-top: 10px;
	}
</style>
