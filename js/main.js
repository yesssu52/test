$(function(){
    $("h1").on("click", function(){
        $(this).css({'color':'red'})
    })
})

const title = document.getElementById('title')
title.addEventListener("click", function(){
    this.style.color='blue'
})