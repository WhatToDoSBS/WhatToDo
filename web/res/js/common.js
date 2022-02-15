const idRegex = /^([a-zA-Z0-9]{4,15})$/;
const pwRegex = /^([a-zA-Z0-9!@_]{4,20})$/;
const nmRegex = /^([가-힣a-zA-Z]{2,15})$/;
const ctntRegex = /^[^><]*$/;
function isWrongWith(target, val) {
    return (target && val) ? !ctntRegex.test(val) : true;
}
const msg = {
    ctnt: '<, >는 사용할 수 없습니다.'
};

const myFetch = {
    send: function(fetchObj, cb) {
        return fetchObj
            .then(res => res.json())
            .then(cb)
            .catch(e => { console.log(e) });
    },
    get: function(url, cb, param) {
        if(param) {
            const queryString = '?' + Object.keys(param).map(key => `${key}=${param[key]}`).join('&');
            url += queryString;
        }
        return this.send(fetch(url), cb);
    },
    post: function(url, cb, param) {
        return this.send(fetch(url, {
            'method': 'post',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify(param)
        }), cb);
    },
    put: function(url, cb, param) {
        return this.send(fetch(url, {
            'method': 'put',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify(param)
        }), cb)
    },
    delete: function(url, cb) {
        return this.send(fetch(url, {
            'method': 'delete',
            'headers': { 'Content-Type': 'application/json' },
        }), cb);
    }
}