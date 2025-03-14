var Vector3 = gr.lib.math.Vector3;

gr.registerComponent('Wave', {
  attributes: {
    center: {
      default: '0, 0, 0',
      converter: 'Vector3',
    },
    axis: {
      default: '0, 1, 0',
      converter: 'Vector3',
    },
    speed: {
      default: 0.03,
      converter: 'Number',
    },
    coefficient: {
      default: 1,
      converter: 'Number',
    },
    amplitude: {
      default: 1,
      converter: 'Number',
    },
  },
  $awake: function() {
    this._transform = this.node.getComponent('Transform');
  },
  $mount: function() {
    this.t = 0;
    var d = this.node.getAttribute('position').subtractWith(this.getAttribute('center'));
    this.distance = d.magnitude;
    this.basePosition = this._transform.localPosition;
		this.getAttributeRaw("speed").boundTo("_speed");
		this.getAttributeRaw("amplitude").boundTo("_amplitude");
		this.getAttributeRaw("coefficient").boundTo("_coefficient");
  },
  $update: function() {
    this.t += this._speed;
    this._transform.localPosition = this.basePosition
      .addWith(new Vector3(0, this._amplitude * Math.sin(this.t + this.distance * this._coefficient), 0));
  },
});
