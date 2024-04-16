// spring
import lichun1Obj from '../../../../resources/models/lichun1.obj?url'
import lichun1Mtl from '../../../../resources/models/lichun1.mtl?url'
import yushui1Obj from '../../../../resources/models/yushui1.obj?url'
import yushui1Mtl from '../../../../resources/models/yushui1.mtl?url'
import jingzhe1Obj from '../../../../resources/models/jingzhe1.obj?url'
import jingzhe1Mtl from '../../../../resources/models/jingzhe1.mtl?url'
import chunfen1Obj from '../../../../resources/models/chunfen1.obj?url'
import chunfen1Mtl from '../../../../resources/models/chunfen1.mtl?url'
import qingming1Obj from '../../../../resources/models/qingming1.obj?url'
import qingming1Mtl from '../../../../resources/models/qingming1.mtl?url'
import guyu1Obj from '../../../../resources/models/guyu1.obj?url'
import guyu1Mtl from '../../../../resources/models/guyu1.mtl?url'

// summer
import lixia1Obj from '../../../../resources/models/lixia1.obj?url'
import lixia1Mtl from '../../../../resources/models/lixia1.mtl?url'
import xiaoman1Obj from '../../../../resources/models/xiaoman1.obj?url'
import xiaoman1Mtl from '../../../../resources/models/xiaoman1.mtl?url'
import mangzhong1Obj from '../../../../resources/models/mangzhong1.obj?url'
import mangzhong1Mtl from '../../../../resources/models/mangzhong1.mtl?url'

// autumn
import hanlu1Obj from '../../../../resources/models/hanlu1.obj?url'
import hanlu1Mtl from '../../../../resources/models/hanlu1.mtl?url'

// winter

// model class
class model {
  constructor(obj, mtl) {
    this.obj = obj;
    this.mtl = mtl;
  }
}

// spring
export const lichun1 = new model(lichun1Obj, lichun1Mtl);
export const yushui1 = new model(yushui1Obj, yushui1Mtl);
export const jingzhe1 = new model(jingzhe1Obj, jingzhe1Mtl);
export const chunfen1 = new model(chunfen1Obj, chunfen1Mtl);
export const qingming1 = new model(qingming1Obj, qingming1Mtl);
export const guyu1 = new model(guyu1Obj, guyu1Mtl);

// summer
export const lixia1 = new model(lixia1Obj, lixia1Mtl);
export const xiaoman1 = new model(xiaoman1Obj, xiaoman1Mtl);
export const mangzhong1 = new model(mangzhong1Obj, mangzhong1Mtl);

// autumn
export const hanlu1 = new model(hanlu1Obj, hanlu1Mtl);

// winter
