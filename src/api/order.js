function pad2(n) {
    return n < 10 ? '0' + n : n
}

function generateTimeReqestNumber() {
    let date = new Date();
    return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes());
}

// let rand = Math.floor(Math.random() * 900) + 100;
// let order_id = generateTimeReqestNumber() + rand;

export default  function generateOrderId() {
    let rand = Math.floor(Math.random() * 900) + 100;
    let order_id = generateTimeReqestNumber() + rand;
    return order_id;
}

