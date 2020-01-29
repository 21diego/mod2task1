function changeString(stringIn, compare, replace){
    if(stringIn == compare){
        return replace;
    }
    return stringIn;
}


let table = document.querySelector("#table-data");
let tbody = document.querySelector("tbody");

let members = data.results[0].members;
let states = [];

function filtrar(){
    tbody.innerHTML = "";
    let partiesCheck=document.querySelectorAll(".parties:checked");
    let select=document.querySelector("#states-select");
    
    partiesCheck.forEach(check => 
        members.filter(member => 
            member.party === check.value && (member.state === select.value || select.value === "all")).map(member => {
                let row = tbody.insertRow(-1);
                row.innerHTML = `<td><a href="${changeString(member.url,"","#")}" target="_blank">${member.last_name}, ${member.first_name} ${changeString(member.middle_name,null,"")}</a></td>`
                +`<td>${member.party}</td><td>${member.state}</td><td>${member.seniority}`
                +`<td>${member.votes_with_party_pct}%</td>`;
                if(states.indexOf(member.state) == -1){
                    states.push(member.state);
                }
            })
            )   
            let option;
            select.innerHTML = "<option value='all'>all</option>";
            for(let i = 0; i < states.length; i++){
                option = document.createElement("option");
                option.setAttribute("value", states[i]);
                option.innerHTML = states[i];
                select.appendChild(option);
            }
            
        }
        
        
        document.querySelector("#rep").addEventListener("click",filtrar);
        document.querySelector("#dem").addEventListener("click",filtrar);
        document.querySelector("#ind").addEventListener("click",filtrar);
        document.querySelector("#states-select").addEventListener("change",filtrar);
        filtrar();
        
        // Holaaa dieguitooo <]:{V
        
        
        /******************************/
        
        