class contactProvider{

    createContact(name,phone,state){
        return new Promise((resolve,reject) => {
            axios.post(process.env.VUE_APP_APIHOST+'/api/contact')
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

axios.get(process.env.VUE_APP_APIHOST+'/api/users/avatar',
        {headers: {'authorization': 'Bearer ' + localStorage.getItem('token')}})
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                console.error(error);
                reject(error)
                //@TODO Implementar manejo de error
            })