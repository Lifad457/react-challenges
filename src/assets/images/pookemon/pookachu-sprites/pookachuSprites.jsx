
import down1 from './moving/down/move1.png';
import down2 from './moving/down/move2.png';
import down3 from './moving/down/move3.png';
import left1 from './moving/left/move1.png';
import left2 from './moving/left/move2.png';
import left3 from './moving/left/move3.png';
import right1 from './moving/right/move1.png';
import right2 from './moving/right/move2.png';
import right3 from './moving/right/move3.png';
import up1 from './moving/up/move1.png';
import up2 from './moving/up/move2.png';
import up3 from './moving/up/move3.png';
import image1 from './still/down.png';
import image2 from './still/left.png';
import image3 from './still/right.png';
import image4 from './still/up.png';

export default {
    moving: {
      down: {
          move1: down1,
          move2: down2,
          move3: down3,
      },
      left: {
          move1: left1,
          move2: left2,
          move3: left3,
      },
      right: {
          move1: right1,
          move2: right2,
          move3: right3,
      },
      up: {
          move1: up1,
          move2: up2,
          move3: up3,
      },
    },
    still: {
      down: image1,
      left: image2,
      right: image3,
      up: image4,
    },
}