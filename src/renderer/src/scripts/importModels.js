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
// summer
import lixia1Obj from '../../../../resources/models/lixia1.obj?url'
import lixia1Mtl from '../../../../resources/models/lixia1.mtl?url'
// autumn
import hanlu1Obj from '../../../../resources/models/hanlu1.obj?url'
import hanlu1Mtl from '../../../../resources/models/hanlu1.mtl?url'
// winter

class model {
  constructor(obj, mtl) {
    this.obj = obj;
    this.mtl = mtl;
  }
}

export const lichun1 = new model(lichun1Obj, lichun1Mtl);
export const yushui1 = new model(yushui1Obj, yushui1Mtl);
export const jingzhe1 = new model(jingzhe1Obj, jingzhe1Mtl);
export const chunfen1 = new model(chunfen1Obj, chunfen1Mtl);
export const qingming1 = new model(qingming1Obj, qingming1Mtl);
export const lixia1 = new model(lixia1Obj, lixia1Mtl);
export const hanlu1 = new model(hanlu1Obj, hanlu1Mtl);
