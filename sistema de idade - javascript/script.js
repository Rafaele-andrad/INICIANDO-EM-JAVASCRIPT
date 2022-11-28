function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txt')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
window.alert('[ERRO] Verifique seus dados e tente novamente' )
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        genero = 'homem'
        if(idade >=0 && idade < 10) 
        {
            //criança
            img.setAttribute('src' , 'criançamenino.png')
        } else if (idade <21){
            //jovem
            img.setAttribute('src' , 'jovemhomem.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src' , 'homemadulto.png')
        } else{
            //idoso
            img.setAttribute('src' , 'homemidoso.png')
        
        }
    }else if (fsex[1].checked){
        genero = 'mulher'
        if(idade >-0 && idade < 10) 
        {
            //criança
            img.setAttribute('src', 'criançamenina.png')
        } else if (idade <21){
            //jovem
            img.setAttribute('src', 'jovemulher.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'mulher-adulta.png')
        } else{
            //idoso
            img.setAttribute('src', 'mulheridosa.png')
        }

      }
      
      
      res.style.textAlign = 'center'
      res.innerHTML = `detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
    }
}