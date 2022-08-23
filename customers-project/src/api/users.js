export default function(instance) {
    return {
        getIdUser(id){
            return instance.get(`users/${id}`)
        },
        getAllUsers(){
            return instance.get('users')
        }
    }
}