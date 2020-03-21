class HD {
    static PENDING = 'pending';
    static FuFILLED = 'fufilled';
    static REJECTED = 'rejected';

    constructor(executor) {
        this.status = HD.PENDING;
        this.value = null;
        this.callbacks = [];
        try {
            executor(this.resolve.bind(this),this.reject.bind(this));
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(value) {
        if (this.status = HD.PENDING) {
            this.status = HD.PENDING;
            this.value = value;
            this.callbacks.map(callback => {
                callback.onFulfilled(value);
            })
        }
    }
    reject(reason) {
        if (this.status = HD.PENDING) {
            this.status = HD.REJECTED;
            this.value = reason;
            this.callbacks.map(callback => {
                callback.onRejected(reason);
            })
        }
    }
    then(onFulfilled, onRejected) {
        if (typeof onFulfilled != 'function') {
            onFulfilled = () => { };
        }
        if (typeof onRejected != 'function') {
            onRejected = () => { };
        }
        return new HD((resolve, reject) => {
            if (this.status = HD.PENDING) {
                //如果状态为pending时往数组加入状态
                this.callbacks.push({
                    onFulfilled: value => {
                       try {
                        onFulfilled(value);
                       } catch (error) {    
                           onRejected(error);
                       }
                    },
                    onRejected: value => {
                        try {
                            onRejected(value);
                        } catch (error) {
                            onRejected(error);
                        }
                    }
                });
            } 
            if (this.status = HD.FuFILLED) {
              setTimeout(() => {
                try {
                    let result = onFulfilled(this.value);
                    resolve(result)
                   } catch (error) {
                    onRejected(error);
                   }
              }, 0);
            }
            if (this.status = HD.REJECTED) {
              setTimeout(() => {
                try {
                  let result = onRejected(this.value);
                  resolve(result)
                } catch (error) {
                    onRejected(error);
                }
              }, 0);
            }
       })
    }
}

