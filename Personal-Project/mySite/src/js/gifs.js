$(document).on('ready', function () {
  // console.log(gifStr(MyGifs.a.name, MyGifs.a.caption));
});

function gifStr (imageName, myCaption) {
  return '<div class="item" align="center"><img src="./gifs/' + imageName + '.gif" alt="' + imageName + '"><div class="carousel-caption" align="center">' + myCaption + '</div></div>';
}

var MyGifs = {
  a: {
    name: 'alligator',
    caption: 'A - The Alligator'},
  b: {name: 'butterfly-color',
      caption: 'B - The Butterfly'},
  c: {name:'crankthat',
      caption: 'C - Crank That (Soulja Boy)'},
  d: {name: 'dab',
      caption: 'D - The Dab'},
  e: {name: 'elbowsup',
      caption: 'E - Elbows Up'},
  f: {name: 'funkychicken',
      caption: 'F - The Funky Chicken'},
  g: {name: 'gangnamstyle',
      caption: 'G - Gangnam Style'},
  h: {name: 'harlemshake',
      caption: 'H - The Harlem Shake'},
  i: {name: 'error',
      caption: 'No Caption'},
  j: {name: 'jump-color',
      caption: 'J - Jump!'},
  k: {name: 'error',
      caption: 'No Caption'},
  l: {name: 'leanback-color',
      caption: 'L - Lean Back'},
  m: {name: 'moonwalk-color',
      caption: 'M - The Moonwalk'},
  n: {name: 'naenae-color',
      caption: 'N - The Nae-Nae'},
  o: {name: 'error',
      caption: 'No Caption'},
  p: {name: 'error',
      caption: 'No Caption'},
  q: {name: 'queenbee',
      caption: 'Q - Queen Bee (Beyonce)'},
  r: {name: 'error',
      caption: 'No Caption'},
  s: {name: 'stankyleg-color',
      caption: 'S - The Stanky Leg'},
  t: {name: 'tootboot-color',
      caption: 'T - Toot It and Boot It'},
  u: {name: 'urkel',
      caption: 'U - The Urkel'},
  v: {name: 'vonmiller-color',
      caption: 'V - Von Miller'},
  w: {name: 'walkitout',
      caption: 'W - Walk It Out'},
  x: {name: 'x-crisscross',
      caption: 'X - Criss-Cross'},
  y: {name: 'ymca',
      caption: 'Y - YMCA'},
  z: {name: 'zigzag',
      caption: 'Z - The Zig-Zag'},
  };

