function finalizarCompra(){
var catalogoEmail = 'tiago.amaral@dlojavirtual.com'
document.getElementById("CatalogoEmail").value = catalogoEmail
document.getElementById("cart-email-btn").click()
}

function preencherDados(){
setTimeout(function tempodeintervalo() {
var nome = 'Joana'
var sobrenome = 'Santos'
var cpf =   '01234567890'
var telefone =  '(11)4118-9290'
var cobrancacep = '04041-050'
var infos = 'teste js'
var cobrancaNumero = '55'
var cobrancaEndereco = 'Avenida Onze de Junho'
var cobrancaBairro = 'Vila Clementino'
var cobrancaCidade = 'São Paulo'
var cobrancaEstado = 'SP'

document.getElementById("final-nome").value = nome
document.getElementById("final-sobrenome").value = sobrenome
document.getElementById("final-cpf").value = cpf
document.getElementById("final-telefone").value = telefone
document.getElementById("final-nascimento_dia").value = "01"
document.getElementById("final-nascimento_mes").value = "01"
document.getElementById("final-nascimento_ano").value = "1990"
document.getElementById("PedidoCobrancaCep").value = cobrancacep
document.getElementById("PedidoCobrancaNumero").value = cobrancaNumero
document.getElementById("PedidoCobrancaEndereco").value = cobrancaEndereco
document.getElementById("PedidoCobrancaBairro").value = cobrancaBairro
document.getElementById("PedidoCobrancaCidade").value = cobrancaCidade
document.getElementById("PedidoCobrancaEstado").value = cobrancaEstado
document.getElementById("final-add-info").value = infos
document.getElementById("cart-ship-btn").click()}, 3000)

}

function preencherEntrega(){
document.getElementById("shipping-radio-1").click()
document.getElementById("cart-pay-btn").click()
}

function preencherPagamento(){
document.getElementById("payment-Pix").click()
document.getElementById("payment-submit").click()}

finalizarCompra()
preencherDados()

$('.list-shipping-radio').length
> 0
var checaFrete = setInterval(() => {
      if($('.list-shipping-radio').length>0){
      preencherEntrega();
      clearInterval(checaFrete);
}
},500);

$('.list-payment').length
> 0
var checaPagamento = setInterval(() => {
      if($('.list-payment').length>0){
      preencherPagamento();
      clearInterval(checaPagamento);
}
},500);