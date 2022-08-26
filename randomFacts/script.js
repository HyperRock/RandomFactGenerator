const key = {
	
	headers: {
        'X-RapidAPI-Key': '32e76a42e2msh67917009dd33967p161029jsn762522f949fc',
	}
};

let count = 0;

const fact = async() => {
    const response = await fetch('https://random-facts2.p.rapidapi.com/getfact', key);
    const data = await response.json();
    // console.log(data);

    const {Fact} = data;
    document.getElementById('fact').innerHTML = Fact;

    //increasing the click counter
    count++;
    document.getElementById('counter').innerHTML = count;

}

// <--- USING .then --->

// const fact2 = () => {
//     fetch('https://random-facts2.p.rapidapi.com/getfact', key).then(
//         function (response){
//             return response.json();
//         }
//     )
//     .then(
//         function (data){
//             const{Fact} = data;
//             document.getElementById('fact').innerHTML = Fact;
//             // console.log(data);

//         }   
//     )
// }

document.getElementById('factBtn').addEventListener('click', fact);

// with .then

// document.getElementById('factBtn').addEventListener('click', fact2);

