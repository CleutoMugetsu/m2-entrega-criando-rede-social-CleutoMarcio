import { posts } from "./database.js";

export function renderUser(array){
    
    const ul = document.querySelector('.sugest__list')
    ul.innerHTML = ''

    array.forEach(users => {
        const li = document.createElement('li')
        const userContainer = document.createElement('div')
        const userImg = document.createElement('img')
        const titleContainer = document.createElement('div')
        const userName = document.createElement('h2')
        const userStack = document.createElement('small')
        const followBtn = document.createElement('button')

        li.classList.add('sugest__item')
        userContainer.classList.add('user__container')
        userImg.classList.add('user__img')
        titleContainer.classList.add('title__container')
        followBtn.id = users.id
        followBtn.classList.add('follow__button--disabled')

        userImg.src = users.img
        userImg.alt = users.user

        userName.innerText = users.user
        userStack.innerText = users.stack
        followBtn.innerText = 'Seguir'

        userContainer.append(userImg, titleContainer)
        titleContainer.append(userName, userStack)
        li.append(userContainer, followBtn)

        ul.appendChild(li)

        followBtn.addEventListener('click', () => {
           
            if(followBtn.innerText === 'Seguir'){
                followBtn.classList.remove('follow__button--disabled')
                followBtn.classList.add('follow__button--enabled')
                followBtn.innerText = 'Seguindo'
                
            }else{
                followBtn.classList.remove('follow__button--enabled')
                followBtn.classList.add('follow__button--disabled')
                followBtn.innerText = 'Seguir'
                
            }
        })
        
    });

    
}

export function renderPosts(array){
    const ul = document.querySelector('.post__list')
    ul.innerHTML = ''

    array.forEach(post => {
        const li = document.createElement('li')
        const userContainer = document.createElement('div')
        const userImg = document.createElement('img')
        const titleContainer = document.createElement('div')
        const userName = document.createElement('h2')
        const userStack = document.createElement('small')
        const postTitle = document.createElement('h2')
        const postText = document.createElement('p')
        const buttonContainer = document.createElement('div')
        const openPostBtn = document.createElement('button')
        const likeBtn = document.createElement('button')
        let count = post.likes
        const likeImg = document.createElement('img')

        li.classList.add('post__item')
        userContainer.classList.add('user__container')
        userImg.classList.add('user__img')
        titleContainer.classList.add('title__container')
        buttonContainer.classList.add('button__container')
        likeBtn.classList.add('like__btn')        
        openPostBtn.dataset.postId = post.id
        openPostBtn.classList.add('open__post')
        openPostBtn.innerText = 'Abrir Post'
        
        likeImg.src = '../src/assets/img/like.svg'
        

        userImg.src = post.img
        userImg.alt = post.user
        userName.innerText = post.user
        userStack.innerText = post.stack
        postTitle.innerText = post.title
        postText.innerText = `${post.text.substring(0, 200)}...`


        userContainer.append(userImg, titleContainer)
        titleContainer.append(userName, userStack)
        likeBtn.append(likeImg, count)
        buttonContainer.append(openPostBtn, likeBtn)
        li.append(userContainer, postTitle, postText, buttonContainer)

        
        ul.appendChild(li)       
        

    })
       
}


export function register(array){
    const input = document.querySelector('input')
    const textArea = document.querySelector('textarea')
    const postBtn = document.querySelector('.post__button')

    
    

    postBtn.addEventListener('click', (event) => {
        event.preventDefault()
        const newPost = {
            id: array.length +1,
            title: input.value,
            text: textArea.value,
            user: "Samuel leão",
            stack: "Front end Engineer",
            img: "./src/assets/img/user1.svg",
            likes: 0
        }
        
        array.push(newPost)
        renderPosts(array)
    })

}






