export default class StoreService{
    data=[
        {
            id: 1,
            name: "Zavod çörəyi",
            manufacturer: "Binə Çörək Zavodu",
            price:0.65,
            coverImage:"https://bazarstore.az/564-large_default/bine-zavod-coreyi-680-gr.jpg"
        },
        {
            id: 2,
            name: "3 inək pendiri",
            manufacturer: "Danimarkalılar",
            price:2.50,
            coverImage:"https://bazarstore.az/259-large_default/uc-inek-ag-pendir-200-gr.jpg"
        }
    ]

    getProducts(){
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve(this.data)},
                1000)
        })

    }
}