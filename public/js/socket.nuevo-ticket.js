const socket= io()
const label = $('#lblNuevoTicket')

socket.on("connect",()=>{
     console.log("Conectado")
     
    
})

socket.on("disconnect",()=>{
     console.log("desconectado")
})


socket.on('estadoActual',(data)=>{

    label.text(data.ticket)
      
      })
      

$('button').on('click',()=>{
    socket.emit('siguienteTicket',null,(siguienteTicket)=>{
label.text(siguienteTicket)
    })
})





