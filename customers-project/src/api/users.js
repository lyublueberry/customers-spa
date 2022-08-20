export default function(instance) {
    return {
        get(id){
            return instance.post(`users/${id}`, payload)
        },
        getAll(payload){
            return instance.post('users', payload)
        }
    }
}