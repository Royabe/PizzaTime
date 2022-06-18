pizzas=[]
num=0
/*Displays the options for the 2nd pizza*/
function Fiftyfifty(){
    let second=document.getElementsByClassName("second")
    for (let i = 0; i < second.length; i++) {
        const elem = second[i];
        if(elem.style.visibility=="visible"){
            elem.style.visibility="hidden"
        }else{
            elem.style.visibility="visible"
        }
    }
}
/*Enables the button when the base and the size are set*/
function Enable(){
    let val1 = document.getElementById("Base").value
    let val2 = document.getElementById("Size").value
    if(val1!="" & val2 !=""){
        document.getElementById("Order").disabled=false
    } else{
        document.getElementById("Order").disabled=true
    }
}
/*Pizza classes for normal and 50/50*/
class pizza {
    constructor(base,size,toppings,sides,drink){
        this.base=base
        this.size=size
        this.toppings=toppings
        this.sides=sides
        this.drink=drink
    }
}
class halfpizza {
    constructor(base,size,toppings,toppings2,sides,drink){
        this.base=base
        this.size=size
        this.toppings=toppings
        this.toppings2=toppings2
        this.sides=sides
        this.drink=drink
    }
    /*Creates a new Pizza object with the selected items and adds it to the cart*/
}
function Order(){
    let base=document.getElementById("Base").value
    let size=document.getElementById("Size").value
    let toppings=document.getElementsByClassName("toppings")
    let second=document.querySelectorAll("input.second")
    let half=document.getElementById("50/50")
    let sides=document.getElementsByClassName("sides")
    let drinks=document.getElementsByClassName("drinks")
    if(half.checked==true){
        newPizza = new halfpizza(base,size,toarray(toppings),toarray(second),toarray(sides),toarray(drinks))
    }else{
        newPizza = new pizza(base,size,toarray(toppings),toarray(sides),toarray(drinks))
    }
    pizzas[num]=newPizza
    num+=1
    addtocart(newPizza)
    document.getElementById("Order").innerHTML="Added to Cart"
    setTimeout(function resetButton(){document.getElementById("Order").innerHTML="Add to order"},2000)
}
function addtocart(pizza){
    const link = document.createElement("a")
    document.getElementById("shopcart").appendChild(link)
    const listitem =  document.createElement("table")
    link.appendChild(listitem)
    addtoitem("base: ",pizza.base,listitem)
    addtoitem("size: ",pizza.size,listitem)
    addtoitem("toppings: ",pizza.toppings,listitem)
    if(pizza.toppings2!= null){
        addtoitem("other half: ",pizza.toppings2,listitem)
    }
    addtoitem("sides: ",pizza.sides,listitem)
    addtoitem("drinks: ",pizza.drink,listitem)
    styletable(listitem)
}
function addtoitem(desc,part,table){
    const itematt = document.createElement("tr")
    const item = document.createElement("td")
    appendtotable(item,itematt,table)
    append(desc,item)
    append(part,item)
}
function append(word, node){
    const text = document.createTextNode(word)
    node.appendChild(text)
}
function appendtotable(data,row,table){
     table.appendChild(row)
     row.appendChild(data)
}
function toarray(elements){
    let array=[]
    let count=0
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if(element.checked==true){
            array[count]=element.name
            count++
        }
    }
        return array
}
function Checkout(){
    console.log(pizzas);
}
function Showcart(button){
    if(document.getElementById("shopcart").style.display=="block"){
        document.getElementById("shopcart").style.cssText="display: none"
        button.innerHTML="Check<br>cart"
    }else{
        document.getElementById("shopcart").style.cssText="display: block"
        button.innerHTML="Hide<br>cart"
    }
}
function styletable(table){
    table.style.cssText="background-color: aqua; text-align: left; border-bottom: 2px solid black"
}