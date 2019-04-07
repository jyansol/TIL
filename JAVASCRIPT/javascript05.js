class Tv {
  constructor({ channel, volume, brightness, inputSource }) {
    this.power = false;
    this.channel = channel;
    this.volume = volume;
    this.brightness = brightness;
    // this.color = color;
    // this.width = width;
    // this.height = height;
  }
  power() {
    return !this.power;
  }
  channel(num) {
    return this.channel + num;
  }
  volume(volume) {
    return this.volume + volume;
  }
  brightness(brightness) {
    return this.brightness + brightness;
  }
  inputSource() {
    this.inputSource = '외부입력';
    return this.inputSource;
  }
}
const tv1 = new Tv({ channel: 3, volume: 20, brightness: 10, inputSource: 'TV' });

class Samsung extends Tv {
  constructor({ channel, volume, brightness, inputSource }) {
    super({ channel, volume, brightness, inputSource });
  }
}
const samsung = new Samsung({ channel: 5 });
