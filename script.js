//1. Create A XHR Object

var request=new XMLHttpRequest();

//2. Create a Connection
//Get Method- Ask the data in Server

request.open('GET',"https://restcountries.com/v2/all",true);

//3. send the Request 
request.send();

//4. data conversion 
//*Information status code -200 
//data successfully retrieved from server

request.onload=function()
{
    var data=JSON.parse(request.response);
    console.log(data);
    let mydata=data.filter((ele)=>
        ele.population<200000

    )
    // let getdata=data.filter((ele)=>ele.region)
    console.log("Population Countries less than 2 LAKH " ,mydata); 
    //Using For Each Function
    console.log("Printing the COuntry Name,Capital and flags")
    data.forEach(element => {
        console.log("Country Name :" +element.name+'\n'+"Capital :" +element.capital+"\n"+"Flags :"+element.flags.png)
    });
    
    //Total population using reduce function
    console.log("Printing Total Population of Countries")
    var getPopulation=data.reduce((acc,ele)=>acc+ele.population,0);
    console.log("Population :"+getPopulation);

    //Country uses US Dollars
    // var getCurrency=data.filter((ele)=>ele.name===ele.currencies.name)
    // console.log(getCurrency)
    console.log(" Countries using US Dollars ")
    data.forEach(element=>{
        console.log(element.currencies)
    })
    


    var getdata=data.filter((ele)=>ele.region===ele.region.Asia)
    console.log(getdata);
    
}