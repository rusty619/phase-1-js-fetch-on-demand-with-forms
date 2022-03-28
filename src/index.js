const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //console.log(event)
        const input = document.querySelector('input#searchByID').value
        fetch(`http://localhost:3000/movies/${input}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            title = document.querySelector('h4')
            summary = document.querySelector('p')

            title.innerText = data.title
            summary.innerText = data.summary
        })
    })
}

//input#searchByID

document.addEventListener('DOMContentLoaded', init);

// inputForm.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     //console.log(event.target.children[1].value)
    //     const input = document.querySelector('input#searchByID');
    //     //console.log(input.value)

    //     fetch(`http://localhost:3000/movies/${input.value}`)
    //     .then(res => res.json())
    //     .then( (data) => {
    //         const title = document.querySelector('section#movieDetails h4');
    //         const summary = document.querySelector('section#movieDetails p');

    //         title.innerText = data.title;
    //         summary.innerText = data.summary
    //     })
    // });