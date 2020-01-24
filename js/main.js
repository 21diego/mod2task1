function nullToString(input){
    if(input == null){
        return "...";
    }
    return input;
}

function createTbody(arrayInput){
    let tbody = "<tbody>"
    for(let i = 0; i < arrayInput.length; i++){
        tbody += "<tr><td>"+(i + 1)+"</td>";
        tbody += "<td><a href="+nullToString(arrayInput[i].url)+" target='_blank'>"+nullToString(arrayInput[i].last_name)+"</td>";
        tbody += "<td>"+nullToString(arrayInput[i].first_name)+"</td>";
        tbody += "<td>"+nullToString(arrayInput[i].middle_name)+"</td>";
        tbody += "<td>"+nullToString(arrayInput[i].party)+"</td>";
        tbody += "<td>"+nullToString(arrayInput[i].state)+"</td>";
        tbody += "<td>"+nullToString(arrayInput[i].seniority)+"</td>";
        tbody += "<td>"+nullToString(arrayInput[i].votes_with_party_pct)+"%</td></tr>";
    }
    tbody += "<tbody>"
    return tbody;
}
let tableSenate = document.getElementById("senate-data");
let tableHouse = document.getElementById("house-data");

if(typeof senateData !== "undefined"){
    let arrayMembers = senateData.results[0].members;
    tableSenate.innerHTML += createTbody(arrayMembers);
}
else if(typeof houseData !== "undefined"){
    let arrayMembers = houseData.results[0].members;
    tableHouse.innerHTML += createTbody(arrayMembers);
}

