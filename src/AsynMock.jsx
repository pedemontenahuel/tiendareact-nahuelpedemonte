const products = [
   {
      id: '1',
   nombre: ' IDRAET BLACK MASK PORE REFINER 150GR',
   price: '2217',
   img: 'img/productouno.jpg',
   stock: '25',
   category: 'mascara faciales',
   description: 'Máscara Peel-Off Anti Imperfecciones',
     
      
  },
{
   id: '2',
   nombre: ' LACA GEL REFRESCANTE PARA PIERNAS',
   price : '1667',
   img: 'img/productodos.jpg',
   category:'formulas corporales',
   description: 'Máscara Peel-Off Anti Imperfecciones',
  },
  
  {
   id: '3',
   nombre: ' MAYBELLINE MÁSCARA LASH SENSATIONAL SKY HIGH',
   price : '2900',
   img: 'img/productotres.jpg',
   category:'mascaras',
   description: 'Pestañas hasta el cielo con Sky High dando una mirada sensacional desde cualquier ángulo.',
  }

]

export const getProducts = () => {
    
    return new Promise( (resolve) => {
        setTimeout(()=> {
         resolve(products)

        },2000)
    })

}
