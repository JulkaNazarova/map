console.log('it work')
const input=document.querySelector("#input")
const itemsList=document.querySelector("#itemsList")
let template = document.querySelector('#row')

let part='';
const items=[
    {
        city: "Москва",
        adress:"ростовская улица",
        phones: [
            1234566,
            45678909,
            23424243
        ],

    },
    {
        city: "Ростов",
        adress:"другая улица",
        phones: [
            1234566,
            45678909
        ],

    },
    {
        city: "Сочи",
        adress:"адрес в сочи",
        phones: [
            1234566,
            45678909
        ],

    },
    {
        city: "Ростов-на-Дону",
        adress:"ул Ленина 23",
        phones: [
            1234566,
            45678909
        ],

    },
    {
        city: "Петрозаводск",
        adress:"Солнечная",
        phones: [
            1234566,
            45678909
        ],

    },
]



input.addEventListener('input',(event)=>{
   if(event.target.value.length>=2){
    part=event.target.value;
    makeNewItems(part)
   } else {
    updateList(items)
   }
})


//отрисовывает
const updateList=(items)=>{
    itemsList.innerHTML=''
    items.forEach( item=>{
     /* let clone = template.content.cloneNode(true)
      let li = clone.querySelectorAll('li span.city')
      let span = clone.querySelectorAll('li span.adress')
      li[0].textContent = item.city
      span[0].textContent = item.adress
      itemsList.appendChild(clone)
      console.log(span)*/
      
      let phonesHtml=''
        item.phones.forEach(phone=>{
            phonesHtml+=`${phone}<br>`
        })

        itemsList.innerHTML+=`
        <li>${item.city}
            <br>${item.adress}
            <br>${phonesHtml}
        </li>
        <hr>
        `
    });
}

//делаем новый массив
const makeNewItems=(string)=>{
    let newItems=[];
    items.forEach(item=>{
        if(
            item.city.toLowerCase().includes(string.toLowerCase()) ||
            item.adress.toLowerCase().includes(string.toLowerCase())                
        ) {
            newItems.push(item)
        } 
    })
  updateList(newItems)
}

//первыая отрисовка
updateList(items)

