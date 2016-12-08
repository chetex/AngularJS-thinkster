var MyApp = angular.module('app', []);

// Creamos un servicio de mensajes.
MyApp.factory('messages', function(){

    var messages = {};

    messages.list = [];

    messages.add = function(message){
        messages.list.push({id: messages.list.length, text: message});
    };

    return messages;

});

// Creamos un controlador que usa el servicio de mensajes.
MyApp.controller('PostCtrl', function (messages){
  var self = this;

  self.addMessage = function(newMessage){
    messages.add(newMessage);
    self.newMessage = '';
  };
});