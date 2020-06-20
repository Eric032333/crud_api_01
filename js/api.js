$(function() {

  $.ajax({
    url:'http://localhost:3000/users',
    method:'get',
    dataType:'json',
    data: {}
  }).done(function(res){
    console.log(res)
    $('#users').empty()
    res.forEach(function(user){
      $('#users').append('<li>'+ user.id +'.'+ user.name + '</li>')
    })
  }).fail(function(err){
    console.log(err)
  })

  $('.create > a').on('click',function(){
    let name = $('.create > input').val().trim()
    if(!name) return false;
    $.ajax({
      url:'http://localhost:3000/users/',
      method:'post',
      dataType:'json',
      data:{
        name:name
      }
    })
  })
})