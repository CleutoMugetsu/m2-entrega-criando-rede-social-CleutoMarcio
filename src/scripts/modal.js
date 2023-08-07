

export function showPost(array){
    const modalController = document.querySelector('dialog')
    const buttons = document.querySelectorAll('.post__container > .post__list > .post__item > .button__container > .open__post')
    const modalContainer = document.querySelector('.modal__container')

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            
            modalContainer.innerHTML = ''
            const posts = findPost(array, event.target.dataset.postId)

            const closeModal = document.createElement('button')
            const userContainer = document.createElement('div')
            const userImg = document.createElement('img')
            const titleContainer = document.createElement('div')
            const userName = document.createElement('h2')
            const userStack = document.createElement('small')
            const postTitle = document.createElement('h2')
            const postText = document.createElement('p')
            const buttonContainer = document.createElement('div')
            
            
            closeModal.classList.add('close__modal')
            userContainer.classList.add('user__container')
            userImg.classList.add('user__img')
            titleContainer.classList.add('title__container')
            buttonContainer.classList.add('button__container')
                   
            
            
            
            
            

            userImg.src = posts.img
            userImg.alt = posts.user
            userName.innerText = posts.user
            userStack.innerText = posts.stack
            postTitle.innerText = posts.title
            postText.innerText = posts.text
            closeModal.innerText = 'X'


            userContainer.append(userImg, titleContainer)
            titleContainer.append(userName, userStack)
            
            
            modalContainer.append(closeModal, userContainer, postTitle, postText, buttonContainer)

            
            modalController.appendChild(modalContainer)
            
            modalController.showModal()
            fecharModal()
            
            
        })
        
    })
    
}

function findPost(array, id){
    let post = {}

    for(let i = 0; i < array.length; i++){
        if(array[i].id === Number(id)){
            post = array[i]
            
            return post
        }
    }
}

function fecharModal(){
    const closeModal = document.querySelector('.close__modal')
    const modalController = document.querySelector('dialog')

    closeModal.addEventListener('click', () => {
        modalController.close()
    })
}