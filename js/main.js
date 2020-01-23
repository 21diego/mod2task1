let table = document.getElementById("senate-data");
let arrayMembers = datos.results[0].members;

function nullToString(input){
    if(input == null){
        return "...";
    }
    return input;
}

let tbody = "<tbody>"
for(let i = 0; i < arrayMembers.length; i++){

    tbody += "<tr><td><a href="+nullToString(arrayMembers[i].url)+" target='_blank'>"+nullToString(arrayMembers[i].last_name)+"</td>";
    tbody += "<td>"+nullToString(arrayMembers[i].first_name)+"</td>";
    tbody += "<td>"+nullToString(arrayMembers[i].middle_name)+"</td>";
    tbody += "<td>"+nullToString(arrayMembers[i].party)+"</td>";
    tbody += "<td>"+nullToString(arrayMembers[i].state)+"</td>";
    tbody += "<td>"+nullToString(arrayMembers[i].seniority)+"</td>";
    tbody += "<td>"+nullToString(arrayMembers[i].votes_with_party_pct)+"%</td></tr>";
}
tbody += "<tbody>"
table.innerHTML += tbody;