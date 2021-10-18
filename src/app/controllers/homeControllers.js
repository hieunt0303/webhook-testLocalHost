let arr =[]
class homeControllers {
    // POST /api/webhook-event-handler
    webhook(req, res){
        let error = req.body.error;
        if (error != 0) {
            //Không làm gì cả.
            return;
        }
        
        //mảng chứa danh sách các giao dịch
        let transactions = req.body.data;
        arr.push(transactions)
        console.log(req.body.data)
        console.log(`Received ${transactions.length} transactions`);
        
        //thêm code xử lý giao dịch ở đây.
        
        res.end("OK");
        
    }
    home(req, res){
        // res.render('home')
        res.send(arr)
    }
}
module.exports = new homeControllers()
