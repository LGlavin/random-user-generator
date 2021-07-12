const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Smith',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api/')
            const {results} = await res.json()
            this.firstName =  results[0].name.firstName
            this.lastName = results[0].name.last          
            this.gender = results[0].gender
            this.picture = results[0].picture.large        
        },
    },
})

app.mount('#app')