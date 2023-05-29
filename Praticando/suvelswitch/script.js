var agora = new Date()
var hora = agora.getHours
var relogio = window.document.getElementById('hora')
relogio
function Procurar(){
    var carro = window.document.getElementById('carro')
    var res = window.document.getElementById('res')
    var car =  String(carro.value)
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    res.innerHTML = `Resultado da busca por <strong> ${car}</strong>.</br>`
    switch(car) {
        case 'hatch':
            res.innerHTML = `Resultado da busca por <strong> ${car}</strong>.</br>`
           img.setAttribute('src', 'foto-hatch.jpg')
           res.innerHTML = `Carros do modelo hatch se destacam pelo seu tamanho,que cabe em garagens pequenas e não ficam atrás com as potências de outros motores!</br>`
            break
        case 'sedan':
            res.innerHTML = `Resultado da busca por <strong> ${car}</strong>.</br>`
         img.setAttribute('src', 'foto-sedan.jpg')
         res.innerHTML = `Veículos sedan se caracterizam por serem mais compridos espaçosos e comfortaveís,potentes e ideais para viajens com a família!</br>`
            break
        case 'caminhonete':
            res.innerHTML = `Resultado da busca por <strong> ${car}</strong>.</br>`
            img.setAttribute('src','foto-caminhonete.jpg')
            res.innerHTML += `Um Veículo forte de tração 4x4 ideal para o solo irregular de estradas de terra!`
            break
            case '':
            res.innerHTML = `Campo de pesquisa vazio!`
            break
        default:
            res.innerHTML = `Não há resultados para sua pesquisa...`
    }
                res.appendChild(img)
                
               

    }
 