function nullToString(input){
    if(input == null){
        return "";
    }
    return input;
}

let table = document.querySelector("#table-data");
let tbody = document.querySelector("tbody");
console.log(tbody);
let members = data.results[0].members;


members.forEach(member => {
    let row = tbody.insertRow(-1);
    row.innerHTML = `<td><a href="${member.url} target="_blank">${member.last_name}, ${member.first_name} ${nullToString(member.middle_name)}</a></td>`
    +`<td>${member.party}</td><td>${member.state}</td><td>${member.seniority}`
    +`<td>${member.votes_with_party_pct}%</td>`;
});
let states = [];
let parties = [];



function createTbody(arrayInput){
    let tbody = "<tbody>"
    for(let i = 0; i < arrayInput.length; i++){
        tbody += "<tr><td>"+(i + 1)+"</td>";
        tbody += "<td><a href="+nullToString(arrayInput[i].url)+" target='_blank'>"+nullToString(arrayInput[i].last_name)+" "+nullToString(arrayInput[i].first_name)+" "+nullToString(arrayInput[i].middle_name)+"</a></td>";
        tbody += "<td>"+nullToString(arrayInput[i].party)+"</td>";
        if(parties.indexOf(arrayInput[i].party) == -1){
            parties.push(arrayInput[i].party);
        }
        tbody += "<td>"+nullToString(arrayInput[i].state)+"</td>";
        if(states.indexOf(arrayInput[i].state) == -1){
            states.push(arrayInput[i].state);
        }
        tbody += "<td>"+nullToString(arrayInput[i].seniority)+"</td>";
        tbody += "<td>"+nullToString(arrayInput[i].votes_with_party_pct)+"%</td></tr>";
    }
    tbody += "<tbody>"
    return tbody;
}



table.innerHTML += createTbody(arrayMembers);

let select = document.getElementById("states-select");
let option;
for(let i = 0; i < states.length; i++){
    option = document.createElement("option");
    option.setAttribute("value", states[i]);
    option.innerHTML = states[i];
    select.appendChild(option);
}

console.log(parties);
console.log(states);
// Holaaa dieguitooo <]:{V


/******************************/
