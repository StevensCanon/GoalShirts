$(function() {
    $("[data-bs-toggle='tooltip']").tooltip();
    $("[data-bs-toggle='popover']").popover();
    $('.carousel').carousel({
      interval:1500
    });
    $('#contacto').on('show.bs.modal', function(e){
      console.log('el modal de contacto se esta mostrando)');
   
    $('#contactoBtn').removeClass('btn-outline-success');
    $('#contactoBtn').addClass('btn-primary');
    $('#contactoBtn').prop('disabled', true);

 });
    $('#contacto').on('shown.bs.modal', function(e){
      console.log('el modal de contaco se mostró)');
    });

    $('#contacto').on('hide.bs.modal', function(e){
      console.log('el modal de contacto se oculta)');
    });

    $('#contacto').on('hidden.bs.modal', function(e){
      console.log('el modal de contacto se oculto)');
      $('#contactoBtn').prop('disabled', false);
    });

  });