export const showMessage = (req, res) => {
    const data = req.params.message;
    //console.log(req.params.message)
    res.send(`We are doing fine. Here is your message: ${req.params.message}`)
    
}