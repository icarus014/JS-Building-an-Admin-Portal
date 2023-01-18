// Your Code Here
// get all books
// book title, input, button
// add event listener to save buttton to mkae request to updtae book 
// fecth request

async function main(){
    const response = await fetch ('http://localhost:3001/listBooks')
    const data = await response.json()
    
    data.forEach(renderBook)
}

function renderBook(book){
    console.log(book)
    const root = document.getElementById('root')

    const li = document.createElement('li')
    li.textContent = book.title

    const input = document.createElement('input')
    input.value = book.quantity

    const saveButton = document.createElement('button')
    saveButton.textContent = 'Save'
    
    
    saveButton.addEventListener('click', () => {
        const body = {
            id: book.id,
            quantity: input.value
        }
        
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    li.append(quantityInput, saveButton)

    root.appendChild(li)
}

main()