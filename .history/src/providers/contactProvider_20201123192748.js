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
}
