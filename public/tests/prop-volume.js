({
  name: 'prop-volume',
  description: 'Property "volume"',
  spec: 'http://dev.w3.org/html5/spec/Overview.html#dom-mediacontroller-volume',
  longdesc: '',
  assert: function(finish) {
    var audio = this.audio = new Audio();

    audio.setAttribute('preload', 'metadata');
    audio.setAttribute('src', AWPY.sound.short.stream_url());

    audio.volume = 0.5;
    finish( audio.volume === 0.5 );
  }
})