// Using local data due to still learning AJAX and HTTP request.
// Created the local with objects inside and array.
const reviews = [
    {
        id: 1,
        name: 'Luffy',
        job: 'Captain',
        img: 'https://i.pinimg.com/564x/1a/14/30/1a1430f709dd3bafb9a215c6e82da24e.jpg',
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sed ullam repellat veritatis nihil magnam earum, recusandae, obcaecati minima aspernatur commodi accusantium beatae consectetur at! Repudiandae explicabo quo ex. Similique."
    },
    {
        id: 2,
        name: 'Zoro',
        job: 'Sharp Web Developer',
        img: 'https://i.pinimg.com/564x/9d/fb/ed/9dfbedd8038f0aa55a367dd45b8cf9cf.jpg',
        info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi ipsum enim in placeat voluptate quisquam quaerat nulla odit nostrum alias, et unde assumenda minus accusamus deleniti, aut itaque ut. Eligendi?"

    },
    {
        id: 3,
        name: 'Sanji',
        job: 'Chef UX ',
        img: 'https://i.pinimg.com/564x/68/fb/31/68fb312adf3ff74aaa9e028f5f9a57c1.jpg',
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita tempora possimus veniam architecto consequatur, officiis accusantium perspiciatis doloremque harum atque ipsa enim! Molestiae neque delectus omnis, magni quod laudantium!"
    },
    {
        id: 4,
        name: 'Usopp',
        job: 'Bug Sniper',
        img: 'https://i.pinimg.com/564x/ae/50/ff/ae50ff0ac8629b9259e8b174e5874ac1.jpg',
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    },
];

// select items 
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const randomBtn = document.querySelector('#rand');

// set starting item
let currentItem = 0;


// load intial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
})

// show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}

// show next person 

nextBtn.addEventListener('click', function () {
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})

// show prev person 

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson(currentItem);
})


// random person

randomBtn.addEventListener('click', function () {
    let roll = Math.floor(Math.random() * 4) + 1;
    currentItem = roll - 1;
    showPerson(currentItem);
})


function myFunction(obj) {
    let objab = (obj.a.b)
    if obj === obj.a.b{
        return objab
    }

    else return undefined;
}