const urlRequest = "api/header.php";
const urlRequest2 = "api/search.php";
const classUser = document.querySelector('#MyTable');
let html = '';
let count = {};
let search = {};

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };

    return fetch(url,{
       method: method,
       body: JSON.stringify(body),
       headers: headers 
    }).then(response =>{
        return response.json();
    });
}
function table(count,event = 0){
    let cnt = 2; //сколько отображаем сначала
    let k = 0;
    let cnt_page = Math.ceil(count.length / cnt); //кол-во страниц
    html ='';
    //выводим список страниц
    let paginator = document.querySelector(".pagination");
    let page = "";
    for (let i = 0; i < cnt_page; i++) {
    page += "<li class='page-item page-link' data-page=" + i * cnt + "  id=\"page" + (i * cnt) + "\">"+ (i + 1) + "</li>";
    }
    paginator.innerHTML = page; 

    let main_page = document.querySelector("#page"+event);
    main_page.style.backgroundColor = '#e4e4e4';
    
    //выводим первые записи {cnt}
    while(k < cnt) {
        if(event<=count.length-1){
            html += `<tr class='num'>`
            html += `<th>${count[event].id}</th>`
            html += `<th>${count[event].name}</th>`
            html += `<th>${count[event].quantity}</th>`
            html += `<th>${count[event].distance}</th>`
            html += `<th>${count[event].date}</th>`
            html += `</tr>`
    
            k++ ;
            event++;
        }else{
            return classUser.innerHTML = html; 
        }  
    }
    classUser.innerHTML = html;
    console.log(search);

}

sendRequest('POST', urlRequest)
    .then(data => {
        count = data;
        table(count);
    })
    .catch(err => console.log(err));

//листаем
function pagination(event) {
    let el = event.target.attributes.getNamedItem('data-page').value;
    if(Object.keys(search).length != 0){
        table(search, el);
    }else{  
        table(count, el);
    }
}

function myFunction() {
    let column = document.getElementById("myColumn").value;
    let condition = document.getElementById("myCondition").value;
    let text = document.getElementById('text').value;

    if(text == ''){
        table(count)
    }else if(column == 'name'){
        search = count.filter(count => {
            if(count.name == text){
                return true; 
            }
        })
        table(search);
    }else if(column == 'quantity'){
        search = count.filter(count => {
            if(count.quantity == text  && condition == 'equally'){
                return true; 
            }else if(count.quantity > parseInt(text)  && condition == 'more'){
                return true;
            }else if(count.quantity < parseInt(text)  && condition == 'smaller'){
                return true;
            }
        })
        table(search);
    }else if(column == 'distance'){
        search = count.filter(count => {
            if(count.distance == text  && condition == 'equally'){
                return true; 
            }else if(count.distance > parseInt(text)  && condition == 'more'){
                return true;
            }else if(count.distance < parseInt(text)  && condition == 'smaller'){
                return true;
            }
        })
        table(search);
    }
}