$(':checkbox').focus(function () {
  $(this).next().addClass('focus-on-box');
})

.blur(function () {
  $(this).next().removeClass('focus-on-box');
});
