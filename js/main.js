function nullToString(input){
    if(input == null){
        return "";
    }
    return input;
}

let table = document.querySelector("#table-data");
let tbody = document.querySelector("tbody");

let members = data.results[0].members;
let states = [];



members.forEach(member => {
    let row = tbody.insertRow(-1);
    row.innerHTML = `<td><a href="${member.url} target="_blank">${member.last_name}, ${member.first_name} ${nullToString(member.middle_name)}</a></td>`
    +`<td>${member.party}</td><td>${member.state}</td><td>${member.seniority}`
    +`<td>${member.votes_with_party_pct}%</td>`;
    if(states.indexOf(member.state) == -1){
        states.push(member.state);
    }
});

let select = document.getElementById("states-select");
let option;
for(let i = 0; i < states.length; i++){
    option = document.createElement("option");
    option.setAttribute("value", states[i]);
    option.innerHTML = states[i];
    select.appendChild(option);
}

console.log(document.querySelectorAll(".filtro"));


// Holaaa dieguitooo <]:{V


/******************************/
