// Definir as credenciais da API do YouTube
var apiKey = 'AIzaSyDLVQ2hCfraat4XFEwjwxCOyq4k92N1394';
var clientId = '656856839049-l330865r605b7jhedjtm7at3ne7jd8vb.apps.googleusercontent.com';

// Autenticar o usuário
gapi.load('client:auth2', function() {
  gapi.auth2.init({
    client_id: clientId
  }).then(function(authInstance) {
    // Fazer login do usuário
    return authInstance.signIn();
  }).then(function() {
    // Definir a API do YouTube e carregar as bibliotecas necessárias
    gapi.client.setApiKey(apiKey);
    return gapi.client.load('youtube', 'v3');
  }).then(function() {
    // Fazer a solicitação de legendas para um vídeo específico
    var videoId = 'IhS47qTQTr4A';
    var request = gapi.client.youtube.captions.list({
      videoId: videoId,
      part: 'snippet'
    });

    request.execute(function(response) {
      if (response.items) {
        // Iterar sobre as legendas disponíveis e exibi-las no console
        for (var i = 0; i < response.items.length; i++) {
          console.log(response.items[i].snippet);
        }
      }
    });
  });
});
