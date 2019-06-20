<template>
    <div id="app">
	<div>
	<div id="logo-container">
		<div class="logo-part">
      			<img id="logo-img" src="/static/draw/logo.jpg">
        	</div>
        	<div id="text-container" class="logo-part">
        		<span id="logo-text">Доска объявлений</span>
        	</div>
	</div>
	<div id="input-field" class="logo-part">
            	<button style="width:100px; height: 50px" @click="create">Создать</button>
        </div>
	</div>
	<div class="flex-data">
		<div v-for="post in posts" class="flex-item" @click="topost(post.id)">
                        <div class="theme">{{ post.theme }} </div>
			<div class="post">{{ post.post }} </div>
              
                </div>
	</div>



    </div>
</template>

<script>

    export default {
        name: 'header',
	computed: {
	    posts() {
                return this.$store.state.posts;
            }
	},
	methods: {
            create () {
                this.$router.push('/create');
            },
	    topost (postId) {
		this.$router.push('/post/'+ postId)
	    }
	}

    }
</script>

<style scoped>
	.logo-part {
        	display: inline-block;
	}

	#logo-container {
        	margin-left: 30px;
        	padding: 5px;
        	width: content-box;
        	height: 100px;
    	}
    	#logo-img {
    	    height: 90px;
    	}
	#logo-text {
		position:relative;
        	font-size: 60px;
        	bottom: 20px;
        	color: black;
    	}
	#input-field {
        	right: 70px;
        	top: 40px;	
        	position: absolute;	
    	}
	.flex-data{
		flex-wrap: wrap;
    		display: flex;
		flex-direction: row;
	}

	.flex-item {
	    padding: 20px;
	    padding-left: 5%;
	    padding-right: 5%;
	    text-align: center;
	    font-size: 20px;
	    width: 40%;
	}

	.theme {
		border-style: solid;
		height: 50px;
		overflow: hidden
	}

	.post {
		padding: 3px;
		padding-top: 10px;
		font-size: 14px;
		border-style: none solid solid solid;
		height: 100px;
	    	overflow: auto
	}

</style>

