const scale = 2.0;
const count = 8;

gr(function() {
  for (let x = -count; x <= count; x++) {
    for (let y = -count; y <= count; y++) {
      gr('#canvas')('scene').append('<mesh id="c' + (x + count) + (y + count) + '" position="' + x * scale + ', 0, ' + y * scale + '" scale="0.42" geometry="cube" material="#surface" targetBuffer="default" ><mesh.components><Wave /></mesh.components></mesh>');
      // gr('#canvas')('scene').append('<mesh id="w' + (x + count) + (y + count) + '" position="' + x * scale + ', 0, ' + y * scale + '" scale="0.43" geometry="cube" material="#wired" targetBuffer="wireframe" ><mesh.components><Wave /></mesh.components></mesh>');
    }
  }
});
