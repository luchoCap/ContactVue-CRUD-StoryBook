import axios from 'axios'

class contactProvider{

    createContact(form){
        return new Promise((resolve,reject) => {
            axios.post(process.env.VUE_APP_APIHOST+'/api/contact',form)
            .then((response) => {
                console.log(response)
                resolve(response.data);
            })
            .catch((error) => {
                console.error(error);
                reject(error)
                //@TODO Implementar manejo de error
            })
        })
    }

    editContact(id,form){
        return new Promise((resolve,reject) => {
            axios.put(process.env.VUE_APP_APIHOST+'/api/contact/'+id,form)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.error(error);
                reject(error)
                //@TODO Implementar manejo de error
            })
        })
    }

    deleteContact(id){
        return new Promise((resolve,reject) => {
            axios.delete(process.env.VUE_APP_APIHOST+'/api/contact/'+id)
            .then((response) => {
                console.log(response)
                resolve(response.data);
            })
            .catch((error) => {
                console.error(error);
                reject(error)
                //@TODO Implementar manejo de error
            })
        })
    }

    showContacts(){
        return new Promise((resolve,reject) => {
            axios.get(process.env.VUE_APP_APIHOST+'/api/contact')
            .then((response) => {
                console.log(response)
                resolve(response.data);
            })
            .catch((error) => {
                console.error(error);
                reject(error)
                //@TODO Implementar manejo de error
            })
        })
    }
}


export default new contactProvider()
